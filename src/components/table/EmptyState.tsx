
interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
}

export function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center h-48 gap-3'>
      { icon && <div className='text-gray-400 text-4xl'>{icon}</div> }
      <h2 className='text-xl font-semibold text-gray-700'>{title}</h2>
      {description && (
        <p className='text-sm text-gray-500'>{description}</p>
      )}
    </div>
  )
}