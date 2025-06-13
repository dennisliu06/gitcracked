"use client"

import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";



type AuthContextType = {
  user: { email: string } | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
};


const AuthContext = createContext<AuthContextType | null>(null);
const TestContext = createContext("hello")

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null)
  const router = useRouter()

  const login = (email: string, password: string) => {
    document.cookie = 'auth=1; path=/'
    setUser({email})
    router.push('/dashboard')
  }

  const signup = (email: string, password: string) => {
    document.cookie = 'auth=1; path=/';
    setUser({email})
    router.push('/dashboard')
  }

  const logout = () => {
    document.cookie = 'auth=; Max-Age=0; path=/';
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context
}

