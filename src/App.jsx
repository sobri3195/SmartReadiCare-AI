import { motion } from 'framer-motion'
import { Bell, Brain, HeartPulse, ShieldAlert, Sparkles } from 'lucide-react'
import { Card } from './components/ui/card'
import { RiskBadge } from './components/ui/badge'
import { Button } from './components/ui/button'

const menu = ['Overview', 'Health Checker', 'Recovery', 'Wellness', 'Mental Load', 'Innovation']

const bars = [55, 61, 58, 66, 68, 72, 78]

export default function App() {
  return (
    <div className="min-h-screen bg-hero text-text">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[250px_1fr]">
        <aside className="hidden border-r border-slate-800/80 bg-background/70 p-6 backdrop-blur lg:block">
          <h1 className="mb-6 text-lg font-semibold text-primary">SmartReadiCare AI</h1>
          <nav className="grid gap-2">
            {menu.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`rounded-xl px-3 py-2 text-sm transition ${
                  i === 0 ? 'bg-soft text-white' : 'text-slate-300 hover:bg-soft hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <main className="p-4 sm:p-6">
          <header className="mb-4 flex items-center justify-between rounded-2xl border border-slate-700/60 bg-surface/80 p-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-300">Readiness Dashboard</p>
              <h2 className="text-lg font-semibold">Clean · Modern · Futuristic</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-slate-600 p-2">
                <Bell className="h-4 w-4" />
              </button>
              <Button>Lihat Laporan Mingguan</Button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <Card className="bg-gradient-to-br from-[#1e2f58] to-[#2a2364]">
                <p className="mb-2 flex items-center gap-2 text-sm font-medium"><Sparkles className="h-4 w-4 text-primary" /> Unified Readiness Score</p>
                <p className="text-6xl font-extrabold leading-none">78</p>
                <p className="mt-2 text-sm text-slate-200">Stable · +6 dibanding minggu lalu</p>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <Card>
                <p className="mb-3 flex items-center gap-2 text-sm font-medium"><ShieldAlert className="h-4 w-4 text-warning" /> Critical Alerts</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2"><RiskBadge level="high">High</RiskBadge> Potensi interaksi obat A + suplemen B</li>
                  <li className="flex items-start gap-2"><RiskBadge level="medium">Moderate</RiskBadge> Peningkatan mental load 3 hari beruntun</li>
                  <li className="flex items-start gap-2"><RiskBadge level="low">Low</RiskBadge> Rekomendasi hidrasi dan micro-break</li>
                </ul>
              </Card>
            </motion.div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="mb-3 flex items-center gap-2 text-sm font-medium"><HeartPulse className="h-4 w-4 text-success" /> Recovery Trend (7 Hari)</p>
              <div className="flex h-32 items-end gap-2">
                {bars.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="flex-1 rounded-t-xl bg-gradient-to-b from-primary to-secondary"
                  />
                ))}
              </div>
            </Card>

            <Card>
              <p className="mb-3 flex items-center gap-2 text-sm font-medium"><Brain className="h-4 w-4 text-primary" /> Mental Load Heatmap</p>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1].map((n, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg ${
                      n === 4 ? 'bg-primary' : n === 3 ? 'bg-cyan-500/80' : n === 2 ? 'bg-blue-600/60' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card className="animate-in slide-in-from-bottom-4 duration-500">
              <p className="mb-3 text-sm font-medium">Wellness Recommendation</p>
              <ol className="list-inside list-decimal space-y-1 text-sm text-slate-200">
                <li>Breathing 2 menit sebelum meeting penting.</li>
                <li>Hydration reminder tiap 90 menit.</li>
                <li>Wind-down rutin 30 menit sebelum tidur.</li>
              </ol>
            </Card>

            <Card className="animate-float">
              <p className="mb-3 text-sm font-medium">Innovation Readiness Quadrant</p>
              <p className="text-sm text-slate-200">People: 80 · Energy: 74 · Focus: 69 · Collaboration: 82</p>
              <p className="mt-2 text-sm text-slate-300">Fokus perbaikan: manajemen context-switching tim.</p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
