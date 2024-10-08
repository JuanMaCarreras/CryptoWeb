import { create } from 'zustand'


type Currency =  {
    currency: string
    setCurrency: (newCurrency: string) => void
}


export const useCryptoStore = create<Currency>((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set({ currency: newCurrency }),
}))








