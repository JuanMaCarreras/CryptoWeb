import { useEffect, useState } from 'react'
import { getCoinChartMarket } from '@/service/api'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { chartData } from './chartData'




interface Props {
  coinId: string
  currency: string
}

interface ChartItem {
  date: number
  price: number
  marketCap: number
  volume: number
}

const chartConfig = {
  price: {
    label: 'Price',
    color: '#07F2B0',
  },
  marketCap: {
    label: 'Market Cap',
    color: '#07F2B0',
  },
  volume: {
    label: 'Volume',
    color: '#07F2B0',
  },
} satisfies ChartConfig



export function ChartPro({ coinId, currency }: Props) {

  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>('price')

  const [dataChart, setDataChart] = useState<ChartItem[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchDataChart = async () => {
      const data = await getCoinChartMarket({ coinId, currency })
      const formatted = chartData(data)
      setDataChart(formatted)
      setLoading(false)
    }
    fetchDataChart()
  }, [coinId, currency])


  const minPrice = Math.min(...dataChart.map(d => d.price))
  const maxPrice = Math.max(...dataChart.map(d => d.price))

  return (
    <>
      <ChartContainer
        config={chartConfig}
        className='aspect-auto h-[250px] w-full'
        >
        <LineChart
          accessibilityLayer
          data={dataChart}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <YAxis domain={[minPrice * 0.95, maxPrice * 1.05]} tick={false}/>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              const date = new Date(value)
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className='w-[150px]'
                nameKey='views'
                labelFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                }
              />
            }
          />
          <Line
            dataKey={activeChart}
            type='monotone'
            stroke={`var(--color-${activeChart})`}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </>
  )
}
