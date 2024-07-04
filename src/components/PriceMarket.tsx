import { useState, useEffect } from 'react'
import MarketCoins from '../types/Coins'
import { getCoinMarket } from '../service/api'
import PriceCard from './PriceCard'
import { Table, TableHeadRow, Article, TableHead } from '../styles/PriceTable'

function PriceMarket() {

  const [coins, setCoins] = useState<MarketCoins[]>([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCoinMarket()
        
        setCoins(res)

      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  },[])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      <h1>Hola soy el componente que muestra los precios!!!</h1>

      <input 
        type='text'
        placeholder='Buscar..'
        onChange={(e) => { setSearch(e.target.value)}}  
      />
      <Article>
        <Table>
          <TableHead>
            <TableHeadRow>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cambio 24H</th>
              <th>Volumen 24H</th>
            </TableHeadRow>
          </TableHead>

          {
            filteredCoins.map((coin) => (
            <PriceCard key={coin.id} coin={coin} />
            ))
          }

        </Table>
      </Article>
    </>
  )
}

export default PriceMarket