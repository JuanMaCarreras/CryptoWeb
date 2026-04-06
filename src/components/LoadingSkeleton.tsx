import { Skeleton } from '@/components/ui/skeleton'

export function TitleDetailsSkeleton() {
  return (
    <>
      <div className='flex mb-5 items-center'>
      <Skeleton className='mr-3 w-12 h-12 rounded-full'/>
        <div className='flex space-x-3'>
          <Skeleton className='w-56 h-6 rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export function FavoriteCardSkeleton() {
  return (
    <>
      <Skeleton className='w-64 h-28 rounded-lg'/>
    </>
  )
}
