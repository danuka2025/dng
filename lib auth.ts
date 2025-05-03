"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type User = {
  id: string
  name: string
  email: string
  role: "admin"
}

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

// In a real app, this would be stored securely in a database
const ADMIN_EMAIL = "admin@example.com"
const ADMIN_PASSWORD = "admin123" // This is just for demo purposes

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simple authentication for demo purposes
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          set({
            user: {
              id: "1",
              name: "Danuka Nimsara",
              email: ADMIN_EMAIL,
              role: "admin",
            },
            isAuthenticated: true,
          })
          return true
        }
        return false
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
