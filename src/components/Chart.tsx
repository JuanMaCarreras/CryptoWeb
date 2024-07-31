import { useEffect, useState } from 'react'
import { getCoinChartMarket } from '../service/api'
import { CoinMarketChart } from '../types/Coins'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface DataParams {
  coinId: string
}

interface DataChart {
  date: string
  price: number
}

function Chart ({coinId}: DataParams) {

  const [dataChart, setDataChart] = useState<DataChart[]>([])


  useEffect(() => {
    const fetchDataChart = async () => {
      try {
        const data:CoinMarketChart  = await getCoinChartMarket(coinId)
    
        const dataFormat = data.prices.map(price => ({
          date: new Date(price[0]).toLocaleDateString(),
          price: price[1]
        }))
        
        setDataChart(dataFormat)

      } catch (error) {
        console.log('Error feching data chart', error)
      }
    }
    fetchDataChart()
  },[coinId])

  const minPrice = Math.min(...dataChart.map(d => d.price))
  const maxPrice = Math.max(...dataChart.map(d => d.price))


  return (
    <>
     <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dataChart}>
        <CartesianGrid strokeDasharray="2 2" />
        <YAxis domain={[minPrice * 0.95, maxPrice * 1.05]} />
        <XAxis dataKey='date' />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#23c4e0" dot={false} />
      </LineChart>
     </ResponsiveContainer>
    </>
  )
}

export default Chart