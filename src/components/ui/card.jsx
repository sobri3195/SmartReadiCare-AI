export function Card({ className = '', children }) {
  return (
    <article className={`rounded-2xl border border-slate-700/70 bg-surface/90 p-4 shadow-card ${className}`}>
      {children}
    </article>
  )
}
