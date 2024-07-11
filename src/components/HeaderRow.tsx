function HeaderRow() {
  return (
    <>
      <thead className=''>
        <tr className='border-b-2 border-red-300'>
          <th className='w-20 p-3 text-sm text-center '>
            <span>#</span>
          </th>
          <th className='w-72 p-3 text-sm text-left '>
            <span>Nombre</span>
          </th>
          <th className='w-32 p-3 text-sm text-right '>Precio</th>
          <th className='w-32 p-3 text-sm text-right '>24H</th>
          <th className='w-52 p-3 text-sm text-right '>Capitalización de Mercado</th>
        </tr>
      </thead>
    </>
  )
}

export default HeaderRow