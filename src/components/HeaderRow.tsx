import {
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useAuthStore } from '@/store'


export function HeaderRow() {
  
  const { user } = useAuthStore()

  return (
    <>
      <TableHeader className='text-brightGreen py-6'>
        <TableRow>
          {
            user && (<TableHead></TableHead>)
          }
          <TableHead className='text-center'>
            #
          </TableHead>
          <TableHead className='text-[.95rem]'>
            Nombre
          </TableHead>
          <TableHead className='text-right text-[.95rem]'>Precio</TableHead>
          <TableHead className='mini:hidden text-right text-[.95rem]'>24H</TableHead>
          <TableHead className='mini:hidden text-center text-[.95rem]'>Capitalización de Mercado</TableHead>
        </TableRow>
      </TableHeader>
    </>
  )
}
