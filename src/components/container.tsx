import { cn } from '@/lib/utils'

// The single reading column every page, the header, and the footer share.
export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[44rem] px-6', className)} {...props} />
}
