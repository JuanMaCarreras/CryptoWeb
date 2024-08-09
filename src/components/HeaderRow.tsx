import {
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function HeaderRow() {
  return (
    <>
      <TableHeader className='text-brightGreen py-6'>
        <TableRow>
          <TableHead className='text-center'>
            #
          </TableHead>
          <TableHead >
            Nombre
          </TableHead>
          <TableHead className='text-right'>Precio</TableHead>
          <TableHead className='text-right'>24H</TableHead>
          <TableHead className='text-center'>Capitalización de Mercado</TableHead>
        </TableRow>
      </TableHeader>
    </>
  )
}

export default HeaderRow