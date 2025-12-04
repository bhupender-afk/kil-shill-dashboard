'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'
import { UserRole, PUBLIC_ROUTES, LOGIN_REDIRECT_PATH } from '@/lib/auth/auth-types'
import { Loader2 } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: UserRole
  fallback?: React.ReactNode
  redirectTo?: string
}

export function AuthGuard({
  children,
  requiredRole,
  fallback,
  redirectTo = LOGIN_REDIRECT_PATH
}: AuthGuardProps) {
  const { isAuthenticated, isInitialized, user, hasRole } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    if (!isInitialized) return

    if (PUBLIC_ROUTES.includes(pathname)) {
      setIsAuthorized(true)
      return
    }

    if (!isAuthenticated) {
      router.push(redirectTo)
      return
    }

    if (requiredRole && !hasRole(requiredRole)) {
      router.push('/unauthorized')
      return
    }

    setIsAuthorized(true)
  }, [isAuthenticated, isInitialized, user, hasRole, requiredRole, router, pathname, redirectTo])

  if (!isInitialized) {
    return (
      fallback || (
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Loading...</p>
          </div>
        </div>
      )
    )
  }

  if (!isAuthorized && !PUBLIC_ROUTES.includes(pathname)) {
    return (
      fallback || (
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Checking authorization...</p>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}

interface RoleGuardProps {
  children: React.ReactNode
  roles: UserRole[]
  fallback?: React.ReactNode
}

export function RoleGuard({ children, roles, fallback }: RoleGuardProps) {
  const { user } = useAuth()

  const hasRequiredRole = user && roles.includes(user.role)

  if (!hasRequiredRole) {
    return (
      fallback || (
        <div className="flex h-full items-center justify-center p-8">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Access Denied</h3>
            <p className="text-sm text-muted-foreground">
              You don't have permission to view this content
            </p>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}