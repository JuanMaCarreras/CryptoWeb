import MarketCoins from "../types/Coins"

interface PriceProp {
  coin: MarketCoins
}

function PriceRow({coin}: PriceProp) {
  return (
    <>
      <tr className=' border-b-2 border-gray-300 '>
        <td  className='w-20 p-3 text-sm text-center '>
          <p className='mx-2 font-medium'>{coin.market_cap_rank}</p>
        </td>

        <td  className='flex w-72 p-3 text-sm text-left items-center '>
          <img 
            src={coin.image} 
            alt={coin.name} 
            className='mr-4 w-7 h-7'
          />
          <div className='[&>span]:block'>
            <span className='text-[1rem] font-semibold'>{coin.name}</span>
            <span className='text-xs uppercase text-gray-500 font-medium'>{coin.symbol}</span>
          </div>
        </td>

        <td  className='w-32 p-3 text-sm text-right font-medium'>${coin.current_price.toLocaleString()}</td>
        <td  className='w-32 p-3 text-sm text-right font-medium'>{coin.price_change_percentage_24h.toFixed(2)}%</td>
        <td  className='w-52 p-3 text-sm text-right font-medium'>${coin.market_cap.toLocaleString()}</td>
      </tr>  
    </>
  )
}

export default PriceRow