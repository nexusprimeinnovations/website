import clsx from 'clsx'

const cardVariants = {
  default: 'bg-white border border-gray-200 shadow-sm',
  elevated: 'bg-white shadow-lg border border-gray-100',
  outlined: 'bg-white border-2 border-gray-200',
  ghost: 'bg-transparent',
}

const cardSizes = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({ 
  variant = 'default', 
  size = 'md', 
  hover = false,
  className, 
  children, 
  ...props 
}) {
  return (
    <div
      className={clsx(
        'rounded-xl transition-all duration-200',
        cardVariants[variant],
        cardSizes[size],
        hover && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={clsx('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={clsx('text-xl font-semibold text-gray-900', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={clsx('text-gray-600 mt-2', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={clsx('mt-6 flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  )
}
