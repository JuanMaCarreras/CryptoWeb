import { useEffect, useState } from 'react'
import { getCoinChartMarket } from '../service/api'
import { CoinMarketChart } from '../types/Coins'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

interface DataParams {
  coinId: string
}

interface DataChart {
  date: string
  price: number
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

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
      <ChartContainer config={chartConfig} className='h-[30rem] w-[75rem] '>
       <ResponsiveContainer width="75%" height='50%'>
        <LineChart accessibilityLayer data={dataChart} margin={{ right: 12 }}>
          <CartesianGrid vertical={false} />
          <YAxis  domain={[minPrice * 0.95, maxPrice * 1.05]} tick={false}/>
          <XAxis dataKey='date'/>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
          <Line type="linear" dataKey="price" stroke="#07F2B0" dot={false} strokeWidth={2}/>
        </LineChart>
       </ResponsiveContainer>
      </ChartContainer>
    </>
  )
}

export default Chart