import MarketCoins from "../types/Coins"

interface PriceProp {
  coin: MarketCoins
}

function PriceCard({coin}: PriceProp) {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <img 
              src={coin.image} 
              alt="" 
              style={{ width: '13%' }}
            />

            <span>{coin.name}</span>
            <span>{coin.symbol}</span>
          </td>
          <td>${coin.current_price.toLocaleString()}</td>
            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${coin.total_volume.toLocaleString()}</td>
        </tr>
      </tbody>
    </>
  )
}

export default PriceCard