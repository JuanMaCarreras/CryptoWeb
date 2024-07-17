
interface SerchBarProps {
  search: string
  setSearch: (value: string) => void
}


function SearchBar({search, setSearch}: SerchBarProps) {

  return (
    <>
      <div className=''>
        <input 
          type='text' 
          placeholder='Buscar...'
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          className='outline-none w-80 h-7 pl-4 py-4 rounded-2xl border-2 border-gris1 bg-transparent placeholder:text-grisLetras focus:border-verdeClaro focus:bg-verdeHover transition duration-500'
        />
      </div>
    </>
  )
}

export default SearchBar