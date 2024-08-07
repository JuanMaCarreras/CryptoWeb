import { useState } from 'react'
import CoinDetails from '@/components/CoinDetails'
import CurrencySelect from '@/components/CurrencySelect';

function Details() {

  const [currency, setCurrency] = useState<string>('usd')    

  // useEffect(() => {
  //   setCurrency('usd')
  // },[])

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  console.log(currency)

  return (
    <>
      <header className='text-white'>
        <CurrencySelect value={currency} onChange={handleCurrencyChange}/>
      </header>
      <CoinDetails currency={currency}/>
    
    </>
  )
}

export default Details