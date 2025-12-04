'use client'

import { useContext, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AuthContext } from '@/lib/auth/auth-context'
import { UserRole, PUBLIC_ROUTES, LOGIN_REDIRECT_PATH, AUTH_REDIRECT_PATH } from '@/lib/auth/auth-types'

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}

export function useRequireAuth(requiredRole?: UserRole, redirectTo?: string) {
  const { isAuthenticated, isInitialized, user, hasRole } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isInitialized) return

    if (!isAuthenticated) {
      router.push(redirectTo || LOGIN_REDIRECT_PATH)
      return
    }

    if (requiredRole && !hasRole(requiredRole)) {
      router.push('/unauthorized')
    }
  }, [isAuthenticated, isInitialized, user, hasRole, requiredRole, router, redirectTo])

  return { isAuthenticated, user, hasRole }
}

export function useRedirectIfAuthenticated(redirectTo?: string) {
  const { isAuthenticated, isInitialized } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isInitialized) return

    if (isAuthenticated && PUBLIC_ROUTES.includes(pathname)) {
      router.push(redirectTo || AUTH_REDIRECT_PATH)
    }
  }, [isAuthenticated, isInitialized, router, pathname, redirectTo])
}

export function useRole() {
  const { user, hasRole, isAdmin } = useAuth()

  return {
    role: user?.role,
    hasRole,
    isAdmin,
    isUser: user?.role === UserRole.USER
  }
}