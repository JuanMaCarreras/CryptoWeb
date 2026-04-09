import { ButtonSelector } from './ButtonSelector'
import { Selector } from './Selector'
import { useCryptoStore } from '@/store'
import { useMediaQuery } from '@/hook/useMediaQuery'

type CurrencySelectProps = {
  variant: 'nav' | 'sheet'
}

export function CurrencySelect({ variant }: CurrencySelectProps) {

  const isDesktop = useMediaQuery('(min-width: 720px)')
  const currency = useCryptoStore((state) => state.currency)
  const setCurrency = useCryptoStore((state) => state.setCurrency)

  const handleChange = (value: string) => {
    setCurrency(value)
  }

  const options = [
    { value: 'usd', label: 'USD' },
    { value: 'ars', label: 'ARS' },
    { value: 'eur', label: 'EUR' },
  ]

  if (variant === 'nav' && !isDesktop) return null

  return (
    <>
      { 
      isDesktop ? (
        <Selector options={options} currency={currency} handleChange={handleChange} />
      ) : ( 
        <ButtonSelector options={options} currency={currency} handleChange={handleChange} />)
      }
      
    </>
  )
}
