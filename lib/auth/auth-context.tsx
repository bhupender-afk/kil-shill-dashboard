'use client'

import React, { createContext, useEffect, useState } from 'react'
import { useAuthStore } from '../store/auth-store'
import { User, LoginCredentials, UserRole } from './auth-types'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => Promise<void>
  hasRole: (role: UserRole) => boolean
  isAdmin: () => boolean
  isInitialized: boolean
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: async () => {},
  logout: async () => {},
  hasRole: () => false,
  isAdmin: () => false,
  isInitialized: false
})

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
    hasRole,
    isAdmin
  } = useAuthStore()

  useEffect(() => {
    const initAuth = async () => {
      try {
        await checkAuth()
      } catch (error) {
        console.error('Failed to initialize auth:', error)
      } finally {
        setIsInitialized(true)
      }
    }

    initAuth()
  }, [checkAuth])

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    hasRole,
    isAdmin,
    isInitialized
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}