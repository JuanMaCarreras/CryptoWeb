import MarketCoins from "../types/Coins"
import { TableBodyRow, CoinInfo } from "../styles/PriceTable"

interface PriceProp {
  coin: MarketCoins
}

function PriceCard({coin}: PriceProp) {
  return (
    <>
      <tbody>
        <TableBodyRow>
          <td>
            <CoinInfo>
              <p>{coin.market_cap_rank}</p>
              <img 
                src={coin.image} 
                alt={coin.name} 
              />

              <span>{coin.name}</span>
              <span>{coin.symbol}</span>
            </CoinInfo>
          </td>

          <td>${coin.current_price.toLocaleString()}</td>
          <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
          <td>${coin.market_cap.toLocaleString()}</td>

        </TableBodyRow>
      </tbody>
      
    
    </>
  )
}

export default PriceCard