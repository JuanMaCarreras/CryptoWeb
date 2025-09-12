import { create } from 'zustand'
import { User } from 'firebase/auth'

type Currency =  {
    currency: string
    setCurrency: (newCurrency: string) => void
}

type Search = {
    search: string
    setSearch: (value: string) => void
}

interface AuthState {
    user: User | null
    loading: boolean
    setUser: (user: User | null) => void
}

export const useCryptoStore = create<Currency>((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set({ currency: newCurrency }),
}))

export const useSearch = create<Search>((set) => ({
    search: '',
    setSearch: (value) => set({ search: value }),
}))

export const useAuthStore = create<AuthState>((set)  => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user, loading: false }),
}))