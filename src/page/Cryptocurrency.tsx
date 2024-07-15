import { useState, useEffect } from 'react'
import HeaderRow from '../components/HeaderRow'
import DataCoins from '../types/Coins'
import { getCoinMarket } from '../service/api'
import CoinsRow from '../components/CoinsRow'
import SearchBar from '../components/SearchBar'

function Cryptocurrency() {

  const [coins, setCoins] = useState<DataCoins[]>([])
  const [search, setSearch] = useState('')
  const [contentPerPage, setContentPerPage] = useState(50)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCoinMarket(contentPerPage)
        
        setCoins(res)

      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  },[contentPerPage])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const handleLoadContent = () => {
    setContentPerPage(prevCont => prevCont + 20)
  }

  return (
    <>
      <article className='w-full bg-verdeOscuro2 py-20 text-white'>
        <SearchBar search={search} setSearch={setSearch}/>

        <div className='flex justify-center mx-11 my-11 border-t-[1px] border-gris1'>
          <table className='mx-6 w-full border-collapse mt-6'> 
            <HeaderRow />
            <tbody className=''>
              {
                filteredCoins.slice(0, contentPerPage).map((coin, index) => (
                    <CoinsRow key={coin.id} coin={coin} index={index}/>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className='flex justify-center w-full mt-4'>
          {
            contentPerPage && (
              <button 
                onClick={handleLoadContent}
                className='w-44 py-1 rounded-2xl border-2 border-gris1 text-grisLetras hover:border-verdeClaro hover:text-verdeClaro1 hover:bg-verdeHover  transition duration-700'
              >Cargar Más</button>
            )
          }
        </div>
      </article>
    </>
  )
}

export default Cryptocurrency