function HeaderRow() {
  return (
    <>
      <thead className=''>
        <tr className='border-b-2 border-gray-300 h-11'>
          <th className='w-20 p-3 text-center '>
            <span>#</span>
          </th>
          <th className='w-72 p-3 text-left '>
            <span>Nombre</span>
          </th>
          <th className='w-32 p-3  text-right '>Precio</th>
          <th className='w-32 p-3  text-right '>24H</th>
          <th className='w-52 p-3  text-right '>Capitalización de Mercado</th>
        </tr>
      </thead>
    </>
  )
}

export default HeaderRow