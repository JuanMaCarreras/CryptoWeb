import { useState, useEffect } from 'react'
import { HeaderRow } from '@/components/HeaderRow'
import { MarketCoins }from '@/types/Coins'
import { getCoinMarket } from '@/service/api'
import { CoinsRow } from '@/components/CoinsRow'
import { Spinner } from './ui/spinner'
import {
  Table,
  TableBody,
} from '@/components/ui/table'
import { ScrollToTop } from '@/components/ScrollToTop'
import { useCryptoStore } from '@/store'
import { useSearch } from '@/store'


import { Button } from '@/components/ui/button'


export function Cryptocurrency() {

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


  return (
    <>
      <section className='h-full pb-20 mt-5'>
        <h1 className=' text-xl mini:text-base'>Precios actuales de las criptomonedas</h1>

        <div className='flex justify-center mt-11 mb-11 border-t-[1px] border-lightGray'>
          {
            loading ? <Spinner className='size-20' /> : (
              <Table> 
                <HeaderRow />
                <TableBody>
                  {
                    visibleData.map((coin, index) => (
                      <CoinsRow key={coin.id} coin={coin} index={index}/>
                    ))
                  }
                </TableBody>
              </Table>)
          }
        </div>
        <div className='flex justify-center w-full mt-4'>  
          {
            contentPerPage <= filteredCoins.length && 
              <Button 
                onClick={handleLoadContent}
                className='text-[1rem] px-8 py-2 rounded-lg font-medium bg-deepGreen border-[.1rem] border-lightGray hover:bg-brightGreen hover:text-black hover:border-[.1rem] hover:border-logoText  transition duration-700'
              >
              Cargar Más
              </Button>
          }
        </div>
        <ScrollToTop />

      </section>
    </>
  )
}