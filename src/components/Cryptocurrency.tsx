import { HeaderRow } from '@/components/table/HeaderRow'
import { CoinsRow } from '@/components/table/CoinsRow'
import { Spinner } from './ui/spinner'
import { EmptyState } from '@/components/table/EmptyState'
import { Table, TableBody } from '@/components/ui/table'
import { ScrollToTop } from '@/components/ScrollToTop'
import { useCryptoStore } from '@/store'
import { usePaginatedCoins } from '@/hook/usePaginatedCoins'
import { useSearch } from '@/store'
import { TablePagination } from '@/components/table/TablePagination'


const ITEMS_PER_PAGE = 50
const TOTAL_PAGES = 20

export function Cryptocurrency() {

  const currency = useCryptoStore(state => state.currency)
  const search = useSearch(state => state.search)

  const { coins, loading, currentPage, goToPage, hasSearch } = usePaginatedCoins({ 
    currency, 
    searchQuery: search,
    itemsPerPage: ITEMS_PER_PAGE 
  })


  if (loading) {
    return (
      <section className='h-full pb-20 mt-5'>
        <h1 className='text-xl mini:text-base'>
          Precios actuales de las criptomonedas
        </h1>
        <div className='flex justify-center mt-11'>
          <Spinner className='size-20' />
        </div>
      </section>
    )
  }

  if (coins.length === 0) {
    return (
      <section className='h-full pb-20 mt-5'>
        <h1 className='text-xl mini:text-base'>
          Precios actuales de las criptomonedas
        </h1>
        <EmptyState 
          title='No se encontraron resultados'
          description={hasSearch ? `No hay coincidencias para "${search}"` : undefined}
        />
      </section>
    )
  }


  return (
    <>
      <section className='h-full pb-20 mt-5'>
        <h1 className=' text-xl mini:text-base'>Precios actuales de las criptomonedas</h1>

        <div className='flex justify-center mt-11 mb-11 border-t-[1px] border-lightGray'>
          <Table> 
            <HeaderRow />
            <TableBody>
              {
                coins.map((coin, index) => (
                  <CoinsRow 
                    key={coin.id}
                    coin={coin}
                    index={index}
                  />
                ))
              }
            </TableBody>
          </Table>
        </div>

        {
          !hasSearch && (
            <TablePagination 
              currentPage={currentPage}
              totalPages={TOTAL_PAGES}
              onPageChange={goToPage}
              className='mt-8'
            />
          )
        }
        <ScrollToTop />

      </section>
    </>
  )
}