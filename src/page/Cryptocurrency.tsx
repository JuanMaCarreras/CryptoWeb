import { useState, useEffect } from 'react'
import HeaderRow from '@/components/HeaderRow'
import { MarketCoins }from '@/types/Coins'
import { getCoinMarket } from '@/service/api'
import CoinsRow from '@/components/CoinsRow'
import SearchBar from '@/components/SearchBar'
import CurrencySelect from '@/components/CurrencySelect'
// import { Link } from 'wouter' 
import { TableSkeleton } from '@/components/LoadingSkeleton'
import {
  Table,
  TableBody,
} from '@/components/ui/table'

function Cryptocurrency() {

  const [coins, setCoins] = useState<MarketCoins[]>([])
  const [search, setSearch] = useState<string>('')
  const [contentPerPage, setContentPerPage] = useState(50)
  const [currency, setCurrency] = useState<string>('usd')
  const [loading, setLoading] = useState(true)  


  const handleCurrencyChange = (value: string) => {
    setCurrency(value)
  }


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
    setContentPerPage(prevCont => prevCont + 20)
  }

  return (
    <>
      <article className='w-full h-full pb-20 mt-16'>
        <h1 className=' ml-16 text-2xl'>Precios actuales</h1>

        <div className='flex justify-between mx-20 mt-14'>
          <CurrencySelect value={currency} onChange={handleCurrencyChange}/>
          <SearchBar search={search} setSearch={setSearch}/>
        </div>

        <div className='flex justify-center mt-11 mb-11 border-t-[1px] border-lightGray'>
          <Table> 
            <HeaderRow />
            {
              loading ? <TableSkeleton /> : (
                <TableBody>
                  {
                    filteredCoins.slice(0, contentPerPage).map((coin, index) => (
                      <CoinsRow key={coin.id}  coin={coin} index={index}/>
                    ))
                  }
                </TableBody>
                )
            }
          </Table>
        </div>

        <div className='flex justify-center w-full mt-4'>
          {
            contentPerPage && (
              <button 
                onClick={handleLoadContent}
                className='w-44 p-1 rounded-xl font-semibold border-2 border-lightGreen text-brightGreen bg-semiDarkGreen hover:bg-brightGreen hover:border-brightGreen hover:text-black  transition duration-500'
              >Cargar Más</button>
            )
          }
        </div>
      </article>
    </>
  )
}

export default Cryptocurrency