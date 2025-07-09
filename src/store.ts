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

export const getID = create<{ id: string | null; setId: (id: string | null) => void }>((set) => ({
    id: null,
    setId: (id) => set({ id }),
}))
