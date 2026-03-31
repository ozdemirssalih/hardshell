'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Users, Shield, Cpu } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white">Log in</Link>
            <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">About <span className="gradient-text">Hardshell</span></h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              Hardshell is a Silicon Valley infrastructure company focused on developer-first cloud solutions. We believe that deploying and managing servers should be as simple as writing code. Our platform combines enterprise-grade hardware with an intuitive developer experience, making cloud infrastructure accessible to teams of all sizes.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Founded by engineers who were frustrated with the complexity of traditional hosting, Hardshell was built from the ground up to prioritize speed, simplicity, and reliability. Every server we provision runs on NVMe storage, protected by multi-layer DDoS mitigation, and backed by our 99.99% uptime guarantee.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Today, Hardshell powers thousands of applications, automations, and development environments for startups, agencies, and enterprise teams around the world. From KVM virtual servers to managed Supabase and n8n instances, we handle the infrastructure so you can focus on building.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Globe, label: 'Global Reach', value: '5+ Regions' },
              { icon: Users, label: 'Customers', value: '2,000+' },
              { icon: Shield, label: 'Uptime', value: '99.99%' },
              { icon: Cpu, label: 'Servers', value: '10,000+' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 text-center">
                <s.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-zinc-500">{s.label}</p>
              </motion.div>
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
