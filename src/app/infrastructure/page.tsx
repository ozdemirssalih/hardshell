'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, HardDrive, Shield, Clock, Wifi, Lock } from 'lucide-react'

const specs = [
  { icon: MapPin, title: 'US Datacenter', desc: 'Primary infrastructure in Silicon Valley and East Coast facilities. Tier-4 certified datacenters with redundant power, cooling, and connectivity.' },
  { icon: HardDrive, title: 'NVMe Storage', desc: 'All servers use enterprise-grade NVMe SSDs for maximum I/O performance. Up to 3,500 MB/s read and 3,000 MB/s write speeds.' },
  { icon: Clock, title: '99.99% Uptime', desc: 'SLA-backed uptime guarantee with automated failover, health monitoring, and instant incident response. Downtime credits included.' },
  { icon: Shield, title: 'DDoS Protection', desc: 'Multi-layer DDoS mitigation at network and application level. Up to 10Tbps protection capacity with real-time traffic scrubbing.' },
  { icon: Wifi, title: '10Gbps Network', desc: 'Premium network connectivity with BGP peering to major carriers. Low-latency routing to AWS, GCP, Azure, and Cloudflare.' },
  { icon: Lock, title: 'Security First', desc: 'Hardware-level encryption, isolated network segments, automated security patching, and SOC 2 Type II compliance.' },
]

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
        </div>
      </nav>

      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6"><span className="gradient-text">Infrastructure</span></h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-16">Enterprise-grade hardware. Developer-friendly platform.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8">
              <s.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
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
