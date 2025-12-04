import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User, LoginCredentials, AuthError, UserRole } from '../auth/auth-types'
import { authService } from '../auth/auth-service'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: AuthError | null

  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  refreshToken: () => Promise<void>
  clearError: () => void
  hasRole: (role: UserRole) => boolean
  isAdmin: () => boolean
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true, error: null })
        try {
          const response = await authService.login(credentials)
          set({
            user: response.user,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: error as AuthError
          })
          throw error
        }
      },

      logout: async () => {
        set({ isLoading: true })
        try {
          await authService.logout()
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({ isLoading: false })
          console.error('Logout error:', error)
        }
      },

      checkAuth: async () => {
        set({ isLoading: true })
        try {
          const user = await authService.getCurrentUser()
          if (user) {
            set({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null
            })
          } else {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false
            })
          }
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: error as AuthError
          })
        }
      },

      refreshToken: async () => {
        try {
          const response = await authService.refreshToken()
          set({
            user: response.user,
            isAuthenticated: true,
            error: null
          })
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            error: error as AuthError
          })
          throw error
        }
      },

      clearError: () => set({ error: null }),

      hasRole: (role: UserRole) => {
        const { user } = get()
        return user?.role === role
      },

      isAdmin: () => {
        const { user } = get()
        return user?.role === UserRole.ADMIN
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)