import {
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useUser } from '@clerk/clerk-react'


export function HeaderRow() {
  
  const { user } = useUser()

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
          <TableHead >
            Nombre
          </TableHead>
          <TableHead className='text-right'>Precio</TableHead>
          <TableHead className='mini:hidden text-right'>24H</TableHead>
          <TableHead className='mini:hidden text-center'>Capitalización de Mercado</TableHead>
        </TableRow>
      </TableHeader>
    </>
  )
}
