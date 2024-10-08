import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useCryptoStore } from '@/store'

function CurrencySelect() {

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
      <Select value={currency} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Divisas ${currency}`} />
        </SelectTrigger>
        <SelectContent>
          {
            options.map(option => (
              <SelectItem className='cursor-pointer hover:text-brightGreen transition duration-500' key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </>
  )
}

export default CurrencySelect