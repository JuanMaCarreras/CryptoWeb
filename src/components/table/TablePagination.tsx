import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { getPageNumbers } from '@/utils/pagination'

interface TablePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function TablePagination({ currentPage, totalPages, onPageChange, className = ''}: TablePaginationProps) {
  
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={handlePrevious}
            className={
              currentPage === 1 
                ? 'pointer-events-none opacity-50' 
                : 'cursor-pointer'
            }
          />
        </PaginationItem>

        {
          getPageNumbers(currentPage, totalPages).map((pageNum, idx) => (
            pageNum === '...' ? (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => onPageChange(Number(pageNum))}
                  isActive={currentPage === pageNum}
                  className='cursor-pointer'
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))
          )
        }

        <PaginationItem>
          <PaginationNext 
            onClick={handleNext}
            className={
              currentPage === totalPages 
                ? 'pointer-events-none opacity-50' 
                : 'cursor-pointer'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}