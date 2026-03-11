import { memo } from 'react'
import { AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Area } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Spinner } from '../ui/spinner'
import { useCoinChart } from '@/hook/useCoinChart'

interface DataParams {
  coinId: string
  currency: string
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#07F2B0",
  },
} satisfies ChartConfig

export const Chart = memo(function Chart ({coinId, currency}: DataParams) {

  const { dataChart, loading, minPrice, maxPrice } = useCoinChart(coinId, currency)
  
  return (
    <>
      {
        loading ? <Spinner className='size-20 ' /> : (
          <ChartContainer config={chartConfig} className='h-[26rem] w-full'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart accessibilityLayer data={dataChart} margin={{ right: 12 }}>
                <CartesianGrid vertical={false} />
                <YAxis domain={[minPrice * 0.95, maxPrice * 1.05]} tick={false} width={0} />
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
})
