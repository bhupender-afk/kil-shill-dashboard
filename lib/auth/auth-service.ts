import Cookies from 'js-cookie'
import {
  User,
  LoginCredentials,
  AuthResponse,
  AuthError,
  UserRole
} from './auth-types'
import {
  MOCK_USERS,
  generateMockToken,
  generateMockRefreshToken,
  validateMockToken,
  decodeMockToken
} from './mock-data'

const TOKEN_KEY = 'auth_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const USER_KEY = 'user_data'

const simulateDelay = (ms: number = 800) =>
  new Promise(resolve => setTimeout(resolve, ms))

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await simulateDelay()

    const user = MOCK_USERS.find(
      u => u.email === credentials.email && u.password === credentials.password
    )

    if (!user) {
      throw {
        message: 'Invalid email or password',
        code: 'AUTH_FAILED',
        status: 401
      } as AuthError
    }

    const { password, ...userWithoutPassword } = user
    const token = generateMockToken(userWithoutPassword)
    const refreshToken = generateMockRefreshToken(user.id)

    if (credentials.rememberMe) {
      Cookies.set(TOKEN_KEY, token, { expires: 7, sameSite: 'lax' })
      Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { expires: 30, sameSite: 'lax' })
    } else {
      sessionStorage.setItem(TOKEN_KEY, token)
      sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    }

    localStorage.setItem(USER_KEY, JSON.stringify(userWithoutPassword))

    return {
      user: userWithoutPassword,
      token,
      refreshToken,
      expiresIn: 86400
    }
  }

  async logout(): Promise<void> {
    await simulateDelay(300)

    Cookies.remove(TOKEN_KEY)
    Cookies.remove(REFRESH_TOKEN_KEY)
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  async getCurrentUser(): Promise<User | null> {
    await simulateDelay(200)

    const token = this.getToken()
    if (!token || !validateMockToken(token)) {
      return null
    }

    const userData = localStorage.getItem(USER_KEY)
    if (userData) {
      return JSON.parse(userData)
    }

    const decoded = decodeMockToken(token)
    if (decoded) {
      const user = MOCK_USERS.find(u => u.id === decoded.userId)
      if (user) {
        const { password, ...userWithoutPassword } = user
        return userWithoutPassword
      }
    }

    return null
  }

  async refreshToken(): Promise<AuthResponse> {
    await simulateDelay(500)

    const refreshToken = this.getRefreshToken()
    if (!refreshToken || !validateMockToken(refreshToken)) {
      throw {
        message: 'Refresh token invalid or expired',
        code: 'REFRESH_FAILED',
        status: 401
      } as AuthError
    }

    const decoded = decodeMockToken(refreshToken)
    const user = MOCK_USERS.find(u => u.id === decoded.userId)

    if (!user) {
      throw {
        message: 'User not found',
        code: 'USER_NOT_FOUND',
        status: 404
      } as AuthError
    }

    const { password, ...userWithoutPassword } = user
    const newToken = generateMockToken(userWithoutPassword)
    const newRefreshToken = generateMockRefreshToken(user.id)

    const hasRememberMe = !!Cookies.get(TOKEN_KEY)

    if (hasRememberMe) {
      Cookies.set(TOKEN_KEY, newToken, { expires: 7, sameSite: 'lax' })
      Cookies.set(REFRESH_TOKEN_KEY, newRefreshToken, { expires: 30, sameSite: 'lax' })
    } else {
      sessionStorage.setItem(TOKEN_KEY, newToken)
      sessionStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken)
    }

    return {
      user: userWithoutPassword,
      token: newToken,
      refreshToken: newRefreshToken,
      expiresIn: 86400
    }
  }

  getToken(): string | null {
    return (
      Cookies.get(TOKEN_KEY) ||
      sessionStorage.getItem(TOKEN_KEY) ||
      null
    )
  }

  getRefreshToken(): string | null {
    return (
      Cookies.get(REFRESH_TOKEN_KEY) ||
      sessionStorage.getItem(REFRESH_TOKEN_KEY) ||
      null
    )
  }

  isAuthenticated(): boolean {
    const token = this.getToken()
    return !!token && validateMockToken(token)
  }

  hasRole(role: UserRole): boolean {
    const token = this.getToken()
    if (!token) return false

    const decoded = decodeMockToken(token)
    return decoded?.role === role
  }

  isAdmin(): boolean {
    return this.hasRole(UserRole.ADMIN)
  }

  clearTokens(): void {
    Cookies.remove(TOKEN_KEY)
    Cookies.remove(REFRESH_TOKEN_KEY)
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }
}

export const authService = new AuthService()