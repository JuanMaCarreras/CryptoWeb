import { Input } from '@/components/ui/input'


interface SerchBarProps {
  search: string
  setSearch: (value: string) => void
}


function SearchBar({search, setSearch}: SerchBarProps) {

  return (
    <>
      <div className=''>
        <Input 
          type='text' 
          placeholder='Buscar...'
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          className='outline-none w-80 h-7 pl-4 py-4 bg-deepGreen'
        />
      </div>
    </>
  )
}

export default SearchBar