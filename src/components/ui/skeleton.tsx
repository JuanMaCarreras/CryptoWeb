import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-skeletonGray2 dark:bg-skeletonGray", className)}
      {...props}
    />
  )
}

export { Skeleton }
