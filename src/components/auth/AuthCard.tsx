import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

interface AuthCardProps {
  title: string
  description?: string
  children: ReactNode
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <section className='flex justify-center items-center h-full'>
      <Card className='w-full max-w-[26rem] grid gap-6 bg-deepGreen border-[1px] border-lightGray'>
        <CardHeader>
          <CardTitle className='text-lg'>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  )
}