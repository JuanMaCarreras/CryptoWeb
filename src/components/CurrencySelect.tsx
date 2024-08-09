import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Props {
  value: string
  onChange: (value: string) => void
}

function CurrencySelect({value, onChange}:Props) {

  const options = [
    { value: 'usd', label: 'USD' },
    { value: 'ars', label: 'ARS' },
    { value: 'eur', label: 'EUR' },
  ]


  return (
    <>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Divisas ${value}`} />
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