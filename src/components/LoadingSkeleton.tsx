import { Skeleton } from '@/components/ui/skeleton'

export function ChartSkeleton() {
  return (
    <>
      <Skeleton className='ml-[70px] mb-[45px] h-[33rem] w-[87%] rounded-xl'/>
    </>
  )
}

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

export function DescDetailsSkeleton() {
  return (
    <>
      <div className='flex justify-around'>
           <div className='space-y-2'> 
            <Skeleton className='h-4 w-14 rounded-xl'/>
            <Skeleton className='h-5 w-24 rounded-xl'/>
           </div>

           <div className='space-y-2'> 
            <Skeleton className='h-4 w-14 rounded-xl'/>
            <Skeleton className='h-5 w-24 rounded-xl'/>
           </div>

           <div className='space-y-2'> 
            <Skeleton className='h-4 w-14 rounded-xl'/>
            <Skeleton className='h-5 w-24 rounded-xl'/>
           </div>
          
           <div className='space-y-2'> 
            <Skeleton className='h-4 w-14 rounded-xl'/>
            <Skeleton className='h-5 w-24 rounded-xl'/>
           </div>
      </div>
    </>
  )
}


export function TableSkeleton() {
  return (
    <>
      <Skeleton className='w-[1255px] h-[3000px] rounded-lg'/>
    </>
  )
}
