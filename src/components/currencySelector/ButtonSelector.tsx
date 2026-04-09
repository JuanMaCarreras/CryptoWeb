import { Button } from '../ui/button'
import { SheetClose } from '../ui/sheet'

type SelectorProps = {
  options: { value: string, label: string }[]
  currency: string
  handleChange: (value: string) => void
}

export function ButtonSelector({options, currency, handleChange}: SelectorProps) {

  return (
    <>
      <div className='flex gap-2 flex-col [@media(min-width:420px)]:flex-row'>
        {
          options.map(option => (
            <SheetClose asChild>
              <Button
                key={option.value}
                className={`px-4 py-2 rounded-md transition duration-700  ${
                  currency === option.value
                    ? 'bg-SemiGreen text-white text-[.9rem] font-medium py-2 px-4'
                    : 'bg-darkGray hover:bg-SemiGreen hover:border-textGray text-white text-[.9rem] font-medium py-2 px-4 transition-colors duration-700'
                }`}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
              </Button>
            </SheetClose>
          ))
        }
      </div>
    </>
  )
}
