import { useEffect, useState } from 'react'
import { getCoinChartMarket } from '../service/api'
import { CoinMarketChart } from '../types/Coins'
import { AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Area } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { ChartSkeleton } from './LoadingSkeleton'

interface DataParams {
  coinId: string
  currency: string
}

interface DataChart {
  date: string
  price: number
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#07F2B0",
  },
} satisfies ChartConfig

export function Chart ({coinId, currency}: DataParams) {

  const [dataChart, setDataChart] = useState<DataChart[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchDataChart = async () => {
      try {
        const data:CoinMarketChart  = await getCoinChartMarket({coinId,currency})
    
        const dataFormat = data.prices.map(price => ({
          date: new Date(price[0]).toLocaleDateString(),
          price: price[1]
        }))
        
        setDataChart(dataFormat)
        setLoading(false)
      } catch (error) {
        console.log('Error feching data chart', error)
      }
    }
    fetchDataChart()
  },[coinId,currency])

  const minPrice = Math.min(...dataChart.map(d => d.price))
  const maxPrice = Math.max(...dataChart.map(d => d.price))


  return (
    <>
      {
        loading ? <ChartSkeleton /> : (
          <ChartContainer config={chartConfig} className='h-[33rem] w-[95%] '>
            <ResponsiveContainer width="20" height='50%'>
              <AreaChart accessibilityLayer data={dataChart} margin={{ right: 12 }}>
                <CartesianGrid vertical={false}  />
                <YAxis domain={[minPrice * 0.95, maxPrice * 1.05]} tick={false}/>
                <XAxis 
                  dataKey='date'
                  tickLine={true}
                  tickMargin={8}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
                <Area
                    dataKey="price"
                    type="linear"
                    fill="var(--color-desktop)"
                    fillOpacity={0.1}
                    stroke="#07F2B0"
                    strokeWidth={2}
                  />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        )
      }
    </>
  )
}
