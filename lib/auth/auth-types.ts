export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt?: string
  lastLogin?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface AuthResponse {
  user: User
  token: string
  refreshToken?: string
  expiresIn?: number
}

export interface AuthError {
  message: string
  code?: string
  status?: number
}

export interface DecodedToken {
  userId: string
  email: string
  role: UserRole
  exp: number
  iat: number
}

export interface ProtectedRouteConfig {
  pathname: string
  roles?: UserRole[]
  redirectTo?: string
}

export const PUBLIC_ROUTES = ['/login', '/register', '/forgot-password', '/dashboard', '/']
export const AUTH_REDIRECT_PATH = '/dashboard'
export const LOGIN_REDIRECT_PATH = '/login'