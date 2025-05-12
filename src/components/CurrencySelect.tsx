import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useCryptoStore } from '@/store'

export function CurrencySelect() {

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


  return (
    <>
      <Select 
        value={currency} 
        onValueChange={handleChange} 
      >
        <SelectTrigger className='w-[6rem] h-[2.1rem]'>
          <SelectValue placeholder={`Divisas ${currency}`} />
        </SelectTrigger>
        <SelectContent  className='w-[6rem] rounded-xl'>
          {
            options.map(option => (
              <SelectItem className='cursor-pointer rounded-xl hover:text-brightGreen transition duration-700' 
                key={option.value} 
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </>
  )
}
