function HeaderRow() {
  return (
    <>
      <thead className='text-verdeClaro1 '>
        <tr className='h-16 [&_th]:p-3 [&_th]:font-semibold'>
          <th className='w-20 text-center '>
            <span>#</span>
          </th>
          <th className='w-72 text-left '>
            <span>Nombre</span>
          </th>
          <th className='w-32 text-right '>Precio</th>
          <th className='w-32 text-right '>24H</th>
          <th className='w-52 text-right '>Capitalización de Mercado</th>
        </tr>
      </thead>
    </>
  )
}

export default HeaderRow