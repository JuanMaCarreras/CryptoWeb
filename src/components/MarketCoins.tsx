import { useState, useEffect } from 'react'
import HeaderRow from './HeaderRow'
import MarketCoins from '../types/Coins'
import { getCoinMarket } from '../service/api'
import PriceRow from './PriceRow'

function PriceMarket() {

  const [coins, setCoins] = useState<MarketCoins[]>([])
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
      <input 
        type='text'
        placeholder='Buscar..'
        onChange={(e) => { setSearch(e.target.value)}}  
      />

      <table className=''> 

        <HeaderRow />
        
        {
          filteredCoins.slice(0, contentPerPage).map((coin) => (
            <PriceRow key={coin.id} coin={coin} />
          ))
        }

        {
          contentPerPage && (
            <button onClick={handleLoadContent}>Cargar Más</button>
          )
        }

      </table>
    </>
  )
}

export default PriceMarket