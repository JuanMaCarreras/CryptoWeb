import {
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useAuthStore } from '@/store'

type Column = {
  key: string
  label: string
  className?: string
}

export function HeaderRow() {
  
  const { user } = useAuthStore()

  const COLUMNS: Column[] = [
    { key: 'rank', label: '#', className: 'text-center text-[.95rem]' },
    { key: 'name', label: 'Nombre', className: 'text-[.95rem]' },
    { key: 'price', label: 'Precio', className: 'text-right text-[.95rem]' },
    { key: '24h', label: '24H', className: 'mini:hidden text-right text-[.95rem]' },
    { key: 'marketcap', label: 'Capitalización de Mercado',  className: 'mini:hidden text-center text-[.95rem]' },
  ]

  return (
    <>
      <TableHeader className='text-brightGreen py-6'>
        <TableRow>
          { user && <TableHead aria-hidden /> }

          {
            COLUMNS.map(({ key, label, className }) => (
              <TableHead key={key} className={className}>
                {label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
    </>
  )
}
