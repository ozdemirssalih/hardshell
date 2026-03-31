'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Server, CreditCard, BarChart3, Key, Zap, Settings, Plus, Power, ArrowUpRight } from 'lucide-react'

const mockServers = [
  { id: 1, name: 'production-api', type: 'KVM VPS 4GB', ip: '45.33.128.72', status: 'running', ram: '4GB', cpu: '2 vCPU', storage: '50GB' },
  { id: 2, name: 'staging-db', type: 'Supabase Managed', ip: '45.33.128.73', status: 'running', ram: 'Auto', cpu: 'Managed', storage: 'Unlimited' },
  { id: 3, name: 'automation-1', type: 'n8n Automation', ip: '45.33.128.74', status: 'stopped', ram: '2GB', cpu: 'Dedicated', storage: '20GB' },
]

export default function DashboardPage() {
  const [tab, setTab] = useState<'servers' | 'billing' | 'usage' | 'api' | 'settings'>('servers')

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">john@company.com</span>
            <Link href="/" className="text-sm text-zinc-500 hover:text-white">Log out</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm glow-btn flex items-center gap-2">
            <Plus className="w-4 h-4" /> Deploy New Server
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'servers' as const, label: 'My Servers', icon: Server },
            { id: 'billing' as const, label: 'Billing', icon: CreditCard },
            { id: 'usage' as const, label: 'Usage', icon: BarChart3 },
            { id: 'api' as const, label: 'API Keys', icon: Key },
            { id: 'settings' as const, label: 'Settings', icon: Settings },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${tab === t.id ? 'bg-indigo-600 text-white' : 'glass text-zinc-400 hover:text-white'}`}>
              <t.icon className="w-4 h-4" /> {t.label}
            </button>
          ))}
        </div>

        {/* Servers Tab */}
        {tab === 'servers' && (
          <div className="space-y-4">
            {mockServers.map(s => (
              <div key={s.id} className="glass rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${s.status === 'running' ? 'bg-green-500' : 'bg-zinc-600'}`}></div>
                  <div>
                    <h3 className="font-bold">{s.name}</h3>
                    <p className="text-sm text-zinc-500">{s.type} • {s.ip}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
                  <span>{s.cpu}</span>
                  <span>{s.ram}</span>
                  <span>{s.storage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${s.status === 'running' ? 'bg-green-500/10 text-green-400' : 'bg-zinc-700 text-zinc-400'}`}>
                    {s.status}
                  </span>
                  <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"><Power className="w-4 h-4 text-zinc-400" /></button>
                  <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"><ArrowUpRight className="w-4 h-4 text-zinc-400" /></button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Billing Tab */}
        {tab === 'billing' && (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Billing Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-1">Current Plan</p><p className="text-2xl font-bold">$26/mo</p></div>
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-1">Active Servers</p><p className="text-2xl font-bold">3</p></div>
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-1">Next Payment</p><p className="text-2xl font-bold">Apr 1</p></div>
            </div>
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-semibold text-sm">Manage Subscription</button>
          </div>
        )}

        {/* Usage Tab */}
        {tab === 'usage' && (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Usage Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-2">CPU Usage</p><div className="w-full bg-zinc-800 rounded-full h-3"><div className="bg-indigo-500 h-3 rounded-full" style={{ width: '42%' }}></div></div><p className="text-sm text-zinc-400 mt-2">42% average</p></div>
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-2">Memory Usage</p><div className="w-full bg-zinc-800 rounded-full h-3"><div className="bg-green-500 h-3 rounded-full" style={{ width: '67%' }}></div></div><p className="text-sm text-zinc-400 mt-2">67% average</p></div>
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-2">Storage</p><div className="w-full bg-zinc-800 rounded-full h-3"><div className="bg-yellow-500 h-3 rounded-full" style={{ width: '28%' }}></div></div><p className="text-sm text-zinc-400 mt-2">28% used</p></div>
              <div className="bg-zinc-900 rounded-xl p-5"><p className="text-sm text-zinc-500 mb-2">Bandwidth</p><div className="w-full bg-zinc-800 rounded-full h-3"><div className="bg-purple-500 h-3 rounded-full" style={{ width: '15%' }}></div></div><p className="text-sm text-zinc-400 mt-2">15% of 4TB</p></div>
            </div>
          </div>
        )}

        {/* API Keys Tab */}
        {tab === 'api' && (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">API Keys</h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 rounded-xl p-5 flex items-center justify-between">
                <div><p className="font-semibold">Production Key</p><p className="text-sm text-zinc-500 font-mono mt-1">hs_prod_****************************7f2a</p></div>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">Reveal</button>
              </div>
              <div className="bg-zinc-900 rounded-xl p-5 flex items-center justify-between">
                <div><p className="font-semibold">Development Key</p><p className="text-sm text-zinc-500 font-mono mt-1">hs_dev_*****************************3b1c</p></div>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">Reveal</button>
              </div>
            </div>
            <button className="mt-6 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"><Plus className="w-4 h-4" /> Generate New Key</button>
          </div>
        )}

        {/* Settings Tab */}
        {tab === 'settings' && (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-6 max-w-lg">
              <div><label className="block text-sm font-semibold text-zinc-300 mb-2">Email</label><input type="email" value="john@company.com" readOnly className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white" /></div>
              <div><label className="block text-sm font-semibold text-zinc-300 mb-2">Display Name</label><input type="text" value="John Doe" className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none" /></div>
              <div className="flex gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm">Save Changes</button>
                <button className="bg-red-600/10 hover:bg-red-600/20 text-red-400 px-6 py-3 rounded-xl font-semibold text-sm">Cancel Subscription</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
