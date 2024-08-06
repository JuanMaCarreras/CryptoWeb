import { useState, useEffect } from 'react'
import CoinDetails from '@/components/CoinDetails'

function Details() {

  const [currency, setCurrency] = useState<string>('usd')    

  useEffect(() => {
    setCurrency('usd')
  },[])
  return (
    <>
      <CoinDetails currency={currency}/>
    
    </>
  )
}

export default Details