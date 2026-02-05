

export function formatMarketCap(num: number ): string {
  if (num === null || num === undefined) {
    return '$0'
  }
  
  const units = [
    { value: 1_000_000_000_000, symbol: 'T' },
    { value: 1_000_000_000, symbol: 'B' },
    { value: 1_000_000, symbol: 'M' },
    { value: 1_000, symbol: 'K' },
  ]

  for (const {value, symbol} of units) {
    if (num >= value) {
      return `$${(num / value).toFixed(2)}${symbol}`
    }
  }
  const strNum = num.toString()
  return `$${strNum}`
}


