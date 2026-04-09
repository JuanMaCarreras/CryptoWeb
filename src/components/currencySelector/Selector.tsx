import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SelectorProps = {
  options: { value: string, label: string }[]
  currency: string
  handleChange: (value: string) => void
}

export function Selector({options, currency, handleChange}: SelectorProps) {
  return (
    <>
      <Select 
        value={currency} 
        onValueChange={handleChange}
      >
        <SelectTrigger className='w-[6rem] h-[2.1rem] border-lightGray'>
          <SelectValue placeholder={`Divisas ${currency}`} />
        </SelectTrigger>
        <SelectContent  className='w-[6rem] rounded-xl border-lightGray' align='end'>
          {
            options.map(option => (
              <SelectItem className='cursor-pointer rounded-md hover:bg-SemiGreen transition duration-700' 
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
