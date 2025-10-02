import { Input } from '@/components/ui/input'
import { useSearch } from '@/store'
import { LuX } from 'react-icons/lu'

export function SearchBar() {
  
  const search = useSearch((state) => state.search)
  const setSearch = useSearch((state) => state.setSearch)
  
  const handleChange = (value: string) => {
    setSearch(value)
  }

  const handleClear = () => {
    setSearch('')
  }

  return (
    <>
      <div className='relative'>
        <Input 
          type='text' 
          placeholder='Buscar...'
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          className='outline-none w-[20rem] h-[2rem] pl-4 py-4 pr-10 bg-deepGreen border-lightGray'
        />
        
        {
          search && (
            <button
              onClick={handleClear}
              className='absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 hover:bg-opacity-50 rounded-full transition-colors'
              aria-label='Borrar búsqueda'
            >
              <LuX className='w-4 h-4 text-textGray'/>
            </button>
        )}
      </div>
    </>
  )
}
