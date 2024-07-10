
function HeaderRow() {

  const titles: string[] = ['#', 'Nombre', 'Precio', '24H', 'Capitalización de Mercado']


  return (
    <>
      <thead className=''>
        <tr>
          {
            titles.map((title, i) => (
            <th key={i}>{title}</th>
            ))
          }
        </tr>
      </thead>
    </>
  )
}

export default HeaderRow