export function Card({ children, className = "", ...props }) {
    return (
      <div
        className={`rounded-lg border bg-green-300 text-card-foreground shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
  
  export function CardContent({ children, className = "", ...props }) {
    return (
      <div className={`p-6 ${className}`} {...props}>
        {children}
      </div>
    )
  }