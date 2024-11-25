import { useState, useEffect } from 'react'
import HeaderRow from '@/components/HeaderRow'
import { MarketCoins }from '@/types/Coins'
import { getCoinMarket } from '@/service/api'
import CoinsRow from '@/components/CoinsRow'
import { TableSkeleton } from '@/components/LoadingSkeleton'
import {
  Table,
  TableBody,
} from '@/components/ui/table'
import ScrollToTop from '@/components/ScrollToTop'
import { useCryptoStore } from '@/store'
import { useSearch } from '@/store'


function Cryptocurrency() {

  const currency = useCryptoStore(state => state.currency)
  const [coins, setCoins] = useState<MarketCoins[]>([])
  const [contentPerPage, setContentPerPage] = useState<number>(50)
  const [loading, setLoading] = useState(true)  
  const search = useSearch((state) => state.search)

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
  }


  const visibleData = filteredCoins.slice(0, contentPerPage) 
  
  console.log(visibleData)
  console.log(visibleData)


  return (
    <>
      <article className='w-full h-full pb-20 mt-44'>
        <h1 className=' ml-11 text-xl'>Precios actuales de las criptomonedas</h1>

        <div className='flex justify-center mt-11 mb-11 border-t-[1px] border-lightGray'>
          <Table> 
            <HeaderRow />
            {
              loading ? <TableSkeleton /> : (
                <TableBody>
                  {
                    visibleData.length === 0 ? visibleData.map((coin, index) => (
                      <CoinsRow key={coin.id} coin={coin} index={index}/>
                    ))  
                    :<p>Moneda no encontrada</p>
                  }
                </TableBody>
                )
            }
          </Table>
        </div>
        <div className='flex justify-center w-full mt-4'>
          {
            visibleData.length === 0 && (
              {
                contentPerPage <= filteredCoins.length && 
                <button 
                onClick={handleLoadContent}
                className='text-[1rem] px-8 py-2 rounded-2xl font-medium bg-deepGreen border-[.1rem] border-logoText hover:bg-brightGreen hover:text-black hover:border-[.1rem] hover:border-logoText  transition duration-700'
                >
                Cargar Más
                </button>
              }
            )
          }
        </div>
        
        <ScrollToTop />

      </article>
    </>
  )
}

export default Cryptocurrency