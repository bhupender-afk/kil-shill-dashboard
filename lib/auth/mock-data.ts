import { User, UserRole } from './auth-types'

export const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: UserRole.ADMIN,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: new Date().toISOString()
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    name: 'John Doe',
    role: UserRole.USER,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    createdAt: '2024-01-15T00:00:00Z',
    lastLogin: new Date().toISOString()
  },
  {
    id: '3',
    email: 'john@example.com',
    password: 'john123',
    name: 'John Smith',
    role: UserRole.USER,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=smith',
    createdAt: '2024-02-01T00:00:00Z',
    lastLogin: new Date().toISOString()
  }
]

export const generateMockToken = (user: User): string => {
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 // 24 hours
  }

  return btoa(JSON.stringify(payload))
}

export const generateMockRefreshToken = (userId: string): string => {
  const payload = {
    userId,
    type: 'refresh',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 // 7 days
  }

  return btoa(JSON.stringify(payload))
}

export const validateMockToken = (token: string): boolean => {
  try {
    const decoded = JSON.parse(atob(token))
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp > now
  } catch {
    return false
  }
}

export const decodeMockToken = (token: string) => {
  try {
    return JSON.parse(atob(token))
  } catch {
    return null
  }
}