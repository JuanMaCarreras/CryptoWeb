import { create } from 'zustand'


type Currency =  {
    currency: string
    setCurrency: (newCurrency: string) => void
}

type Search = {
    search: string
    setSearch: (value: string) => void
}

export const useCryptoStore = create<Currency>((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set({ currency: newCurrency }),
}))

export const useSearch = create<Search>((set) => ({
    search: '',
    setSearch: (value) => set({ search: value }),
}))








