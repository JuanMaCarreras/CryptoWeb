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
      <ChartContainer config={chartConfig}>
       <ResponsiveContainer width="100%" height={400}>
        <LineChart accessibilityLayer data={dataChart} margin={{left: 12, right: 12,}}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <YAxis domain={[minPrice * 0.95, maxPrice * 1.05]} />
          <XAxis dataKey='date '  
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
          <Line type="linear" dataKey="price" stroke="#07F2B0" dot={false} strokeWidth={2}/>
        </LineChart>
       </ResponsiveContainer>
      </ChartContainer>
    </>
  )
}

export default Chart