import MarketCoins from "../types/Coins"

interface CoinProp {
  coin: MarketCoins
  index: number
}

function CoinsRow({coin, index}: CoinProp) {
  return (
    <>
      <tr className={`text-sm [&_td]:p-4 ${index % 2 === 0 ? 'bg-grisOscuro' : 'bg-grisClaro'}`}>
        <td  className='w-20 text-center '>
          <p className='mx-2 font-medium'>{coin.market_cap_rank}</p>
        </td>

        <td  className='flex w-72 text-left items-center '>
          <img 
            src={coin.image} 
            alt={coin.name} 
            className='mr-4 w-7 h-7'
          />
          <div className='[&>span]:block'>
            <span className='text-[1rem] font-medium'>{coin.name}</span>
            <span className='text-xs uppercase text-grisLetras font-medium'>{coin.symbol}</span>
          </div>
        </td>

        <td  className='w-32 text-right'>${coin.current_price.toLocaleString()}</td>
        <td  className='w-32 text-right'>{coin.price_change_percentage_24h.toFixed(2)}%</td>
        <td  className='w-52 text-right'>${coin.market_cap.toLocaleString()}</td>
      </tr>  
    </>
  )
}

export default CoinsRow