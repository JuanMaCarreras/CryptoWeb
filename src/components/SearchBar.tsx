import { Input } from '@/components/ui/input'
import { useSearch } from '@/store'


export function SearchBar() {
  
  const search = useSearch((state) => state.search)
  const setSearch = useSearch((state) => state.setSearch)
  
  const handleChange = (value: string) => {
    setSearch(value)
  }

  return (
    <>
      <div className=''>
        <Input 
          type='text' 
          placeholder='Buscar...'
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          className='outline-none w-[20rem] h-[2rem] pl-4 py-4 bg-deepGreen border-lightGray'
        />
      </div>
    </>
  )
}

