export function RiskBadge({ level = 'low', children }) {
  const map = {
    high: 'bg-danger/90 text-white',
    medium: 'bg-warning text-slate-900',
    low: 'bg-success text-slate-900',
  }

  return <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${map[level]}`}>{children}</span>
}
