import MarketCoins from "../types/Coins"

interface PriceProp {
  coin: MarketCoins
}

function PriceRow({coin}: PriceProp) {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <p className='mx-5'>{coin.market_cap_rank}</p>

            <img 
              src={coin.image} 
              alt={coin.name} 
              className='mx-3 w-10 h-10'
            />

            <span className='block text-xl'>{coin.name}</span>
            <span className='block'>{coin.symbol}</span>
          </td>

          <td>${coin.current_price.toLocaleString()}</td>

          <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
          <td>${coin.market_cap.toLocaleString()}</td>
        </tr>  
      </tbody>
    </>
  )
}

export default PriceRow