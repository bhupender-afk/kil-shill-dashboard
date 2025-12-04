import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_ROUTES = ['/login', '/register', '/forgot-password']
const AUTH_ROUTES = ['/login', '/register']
const PROTECTED_ADMIN_ROUTES = ['/admin', '/users', '/analytics']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth_token')?.value

  const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.startsWith(route))
  const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route))
  const isAdminRoute = PROTECTED_ADMIN_ROUTES.some(route => pathname.startsWith(route))
  const isRootPath = pathname === '/'

  if (isRootPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isRootPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!isPublicRoute && !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (isAdminRoute && token) {
    try {
      const decoded = JSON.parse(atob(token))
      if (decoded.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', request.url))
      }
    } catch {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$|.*\\.ico$).*)',
  ],
}