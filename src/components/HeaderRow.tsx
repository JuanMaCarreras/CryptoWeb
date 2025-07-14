import {
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function HeaderRow() {
  return (
    <>
      <TableHeader className='text-brightGreen py-6'>
        <TableRow>
          <TableHead>
            
          </TableHead>
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
