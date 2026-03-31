'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Server, Cloud, Zap, Terminal, CreditCard } from 'lucide-react'

const plans = [
  { name: 'KVM VPS 2GB', cpu: '1 vCPU', ram: '2GB RAM', storage: '25GB NVMe SSD', bandwidth: '1TB Transfer', monthly: 5, yearly: 50, icon: Server, popular: false },
  { name: 'KVM VPS 4GB', cpu: '2 vCPU', ram: '4GB RAM', storage: '50GB NVMe SSD', bandwidth: '2TB Transfer', monthly: 9, yearly: 90, icon: Server, popular: true },
  { name: 'KVM VPS 8GB', cpu: '4 vCPU', ram: '8GB RAM', storage: '100GB NVMe SSD', bandwidth: '4TB Transfer', monthly: 17, yearly: 170, icon: Server, popular: false },
  { name: 'KVM VPS 10GB', cpu: '6 vCPU', ram: '10GB RAM', storage: '150GB NVMe SSD', bandwidth: '6TB Transfer', monthly: 24, yearly: 240, icon: Server, popular: false },
  { name: 'Supabase Managed', cpu: 'Managed Cluster', ram: 'Auto-scaling', storage: 'Unlimited DB', bandwidth: 'Unlimited API', monthly: 15, yearly: 150, icon: Cloud, popular: false },
  { name: 'n8n Automation', cpu: 'Dedicated Instance', ram: '2GB RAM', storage: '20GB SSD', bandwidth: 'Unlimited Workflows', monthly: 12, yearly: 120, icon: Zap, popular: false },
  { name: 'Linux Dev Server', cpu: '2 vCPU', ram: '4GB RAM', storage: '40GB SSD', bandwidth: '2TB Transfer', monthly: 10, yearly: 100, icon: Terminal, popular: false },
  { name: 'PowerShell Remote', cpu: '2 vCPU', ram: '4GB RAM', storage: '40GB SSD', bandwidth: '2TB Transfer', monthly: 11, yearly: 110, icon: Terminal, popular: false },
]

const allFeatures = [
  'Instant Provisioning', 'Full Root Access', 'DDoS Protection', '99.99% Uptime SLA',
  'NVMe Storage', '24/7 Monitoring', 'Automated Backups', 'API Access',
  'One-Click Deploys', 'Custom DNS', 'IPv4 + IPv6', 'Dashboard Management'
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm text-white">Pricing</Link>
            <Link href="/technology" className="text-sm text-zinc-400 hover:text-white transition-colors">Technology</Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white">Log in</Link>
            <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">No hidden fees. No surprises. Pay only for what you use.</p>

          <div className="inline-flex items-center glass rounded-xl p-1 mb-12">
            <button onClick={() => setBilling('monthly')} className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-indigo-600 text-white' : 'text-zinc-400'}`}>Monthly</button>
            <button onClick={() => setBilling('yearly')} className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === 'yearly' ? 'bg-indigo-600 text-white' : 'text-zinc-400'}`}>
              Yearly <span className="text-xs text-green-400 ml-1">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 -mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl p-6 relative ${plan.popular ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : ''}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>}
              <plan.icon className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black">${billing === 'monthly' ? plan.monthly : plan.yearly}</span>
                <span className="text-sm text-zinc-500">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <div className="space-y-2 text-sm text-zinc-400 mb-6">
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {plan.cpu}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {plan.ram}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {plan.storage}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {plan.bandwidth}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> DDoS Protection</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 99.99% Uptime</p>
              </div>
              <Link href="/signup" className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white glow-btn' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}>
                <CreditCard className="w-4 h-4 inline mr-2" />Deploy Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Everything Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-3 glass rounded-xl p-4">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-zinc-300">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">Hardshell</span>
          <p className="text-xs text-zinc-600">© 2026 Hardshell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
