import { useEffect, useState } from 'react'
import { getCoinChartMarket } from '../service/api'
import { CoinMarketChart } from '../types/Coins'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface DataParams {
  coinId: string
}

interface ChartData {
  date: string
  price: number
}

function Chart ({coinId}: DataParams) {

  const [dataChart, setDataChart] = useState<ChartData[]>([])


  useEffect(() => {
    const fetchDataChart = async () => {
      try {
        const data:CoinMarketChart  = await getCoinChartMarket(coinId, 7)
        console.log('Raw data:', data);
        const dataFormat = data.prices.map(price => ({
          date: new Date(price[0]).toLocaleDateString(),
          price: price[1]
        }))
        
        console.log('Formatted data:', dataFormat);
        setDataChart(dataFormat)

      } catch (error) {
        console.log('Error feching data chart', error)
      }
    }
    fetchDataChart()
  },[coinId])

  return (
    <>
     <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dataChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
      </LineChart>
     </ResponsiveContainer>
    </>
  )
}

export default Chart