export function Button({ children }) {
  return (
    <button className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-bold text-slate-950 transition hover:opacity-90">
      {children}
    </button>
  )
}
