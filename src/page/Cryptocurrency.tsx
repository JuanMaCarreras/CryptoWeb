import { useState, useEffect } from 'react'
import HeaderRow from '@/components/HeaderRow'
import { MarketCoins }from '@/types/Coins'
import { getCoinMarket } from '@/service/api'
import CoinsRow from '@/components/CoinsRow'
import SearchBar from '@/components/SearchBar'
import CurrencySelect from '@/components/CurrencySelect'
import { TableSkeleton } from '@/components/LoadingSkeleton'
import {
  Table,
  TableBody,
} from '@/components/ui/table'
import ScrollToTop from '@/components/ScrollToTop'
import { useCryptoStore } from '@/store'


function Cryptocurrency() {

  const currency = useCryptoStore(state => state.currency)
  const [coins, setCoins] = useState<MarketCoins[]>([])
  const [search, setSearch] = useState<string>('')
  const [contentPerPage, setContentPerPage] = useState<number>(50)
  const [loading, setLoading] = useState(true)  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCoinMarket({currency, contentPerPage})
        
        setCoins(res)
        setLoading(false)

      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  },[currency,contentPerPage])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const handleLoadContent = () => {
    setContentPerPage((prevCount) => prevCount + 50)
  };

  const visibleData = filteredCoins.slice(0, contentPerPage)


  return (
    <>
      <article className='w-full h-full pb-20 mt-16'>
        <h1 className=' ml-16 text-2xl'>Precios actuales</h1>

        <div className='flex justify-between mx-20 mt-14 mini:mx-5 mini:mt-10 mini:flex-col mini:space-y-10'>
          <CurrencySelect />
          <SearchBar search={search} setSearch={setSearch}/>
        </div>

        <div className='flex justify-center mt-11 mb-11 border-t-[1px] border-lightGray'>
          <Table> 
            <HeaderRow />
            {
              loading ? <TableSkeleton /> : (
                <TableBody>
                  {
                    visibleData.map((coin, index) => (
                      <CoinsRow key={coin.id} coin={coin} index={index}/>
                    ))
                  }
                </TableBody>
                )
            }
          </Table>
        </div>

        <div className='flex justify-center w-full mt-4'>
          {
            contentPerPage <= filteredCoins.length && 
              <button 
                onClick={handleLoadContent}
                className='px-8 py-2 rounded-2xl font-semibold bg-deepGreen border-2 border-logoText hover:bg-brightGreen hover:text-black hover:border-2 hover:border-logoText  transition duration-500'
              >
                Cargar Más
              </button>
          }
        </div>
        
        <ScrollToTop />

      </article>
    </>
  )
}

export default Cryptocurrency