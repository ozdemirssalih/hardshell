'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Server, Cpu, Shield, Zap, Cloud, Terminal, ArrowRight, Check } from 'lucide-react'

const products = [
  { name: 'KVM VPS 2GB', cpu: '1 vCPU', ram: '2GB', storage: '25GB SSD', price: 5, icon: Server },
  { name: 'KVM VPS 4GB', cpu: '2 vCPU', ram: '4GB', storage: '50GB SSD', price: 9, icon: Server },
  { name: 'KVM VPS 8GB', cpu: '4 vCPU', ram: '8GB', storage: '100GB SSD', price: 17, icon: Cpu },
  { name: 'KVM VPS 10GB', cpu: '6 vCPU', ram: '10GB', storage: '150GB SSD', price: 24, icon: Cpu },
  { name: 'Supabase Managed', cpu: 'Managed', ram: 'Managed', storage: 'Managed', price: 15, icon: Cloud },
  { name: 'n8n Automation', cpu: 'Dedicated', ram: '2GB', storage: '20GB', price: 12, icon: Zap },
]

const features = [
  { title: 'Instant Deploy', desc: 'Servers provisioned in under 60 seconds', icon: Zap },
  { title: 'NVMe Storage', desc: 'Ultra-fast NVMe SSDs on all servers', icon: Server },
  { title: 'DDoS Protection', desc: 'Enterprise-grade protection included', icon: Shield },
  { title: '99.99% Uptime', desc: 'Guaranteed with SLA-backed reliability', icon: Check },
  { title: 'US Datacenter', desc: 'Silicon Valley infrastructure', icon: Cloud },
  { title: 'Developer CLI', desc: 'Full API and CLI access', icon: Terminal },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/technology" className="text-sm text-zinc-400 hover:text-white transition-colors">Technology</Link>
            <Link href="/infrastructure" className="text-sm text-zinc-400 hover:text-white transition-colors">Infrastructure</Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">Log in</Link>
            <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors glow-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-indigo-300">Silicon Valley Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Deploy <span className="gradient-text">Anything</span><br />In Seconds
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              KVM VPS, Supabase, n8n, Linux servers — all provisioned instantly. Developer-first cloud infrastructure from Silicon Valley.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all glow-btn flex items-center gap-2">
                Start Deploying <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all">
                View Pricing
              </Link>
            </div>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 max-w-3xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-zinc-500 ml-2">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-zinc-500">$ hardshell deploy --type kvm --ram 4gb</p>
                <p className="text-green-400 mt-2">✓ Server provisioned in 12s</p>
                <p className="text-zinc-400 mt-1">→ IP: 45.33.128.72</p>
                <p className="text-zinc-400">→ SSH: root@45.33.128.72</p>
                <p className="text-indigo-400 mt-2">→ Dashboard: https://app.hardshell.dev/servers/kvm-4g-01</p>
                <p className="text-zinc-600 mt-3 animate-pulse">█</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for Developers</h2>
          <p className="text-zinc-500 text-center mb-16 max-w-xl mx-auto">Enterprise infrastructure with startup simplicity</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all">
                <f.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Hosting Plans</h2>
          <p className="text-zinc-500 text-center mb-16">From $5/month. Scale as you grow.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <p.icon className="w-8 h-8 text-indigo-400" />
                  <span className="text-2xl font-bold">${p.price}<span className="text-sm text-zinc-500 font-normal">/mo</span></span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{p.name}</h3>
                <div className="space-y-2 text-sm text-zinc-400 mb-6">
                  <p>{p.cpu}</p>
                  <p>{p.ram} RAM</p>
                  <p>{p.storage}</p>
                </div>
                <Link href="/pricing" className="block w-full text-center bg-zinc-800 hover:bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-all group-hover:glow-btn">
                  Deploy Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Powered by Modern Stack</h2>
          <p className="text-zinc-500 mb-12">We use the best tools in the industry</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500">
            {['Next.js', 'Supabase', 'Vercel', 'n8n', 'Stripe', 'Linux', 'KVM'].map((t, i) => (
              <span key={i} className="text-lg font-semibold border border-zinc-800 px-6 py-3 rounded-xl hover:text-white hover:border-indigo-500/30 transition-all">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Deploy?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Join thousands of developers who trust Hardshell for their cloud infrastructure.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-btn">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold gradient-text">Hardshell</span>
            <p className="text-xs text-zinc-600 mt-1">Silicon Valley, California, USA</p>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-zinc-600">© 2026 Hardshell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
