'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Database, Cloud, Workflow, Server, Terminal, Shield } from 'lucide-react'

const techs = [
  { name: 'Supabase', desc: 'Open-source Firebase alternative. Postgres database, authentication, instant APIs, edge functions, real-time subscriptions, and storage. We manage and optimize your Supabase instance for production workloads.', icon: Database, color: 'text-green-400' },
  { name: 'Vercel', desc: 'The platform for frontend developers. Automatic deployments, edge network, serverless functions, and zero-config builds. Hardshell integrates Vercel for seamless application deployment.', icon: Cloud, color: 'text-white' },
  { name: 'n8n', desc: 'Powerful workflow automation tool. Connect any app or API with visual workflows. Self-hosted on dedicated servers with guaranteed uptime and unlimited executions. No vendor lock-in.', icon: Workflow, color: 'text-orange-400' },
  { name: 'KVM Virtualization', desc: 'Kernel-based Virtual Machine technology provides full hardware virtualization. Dedicated CPU cores, guaranteed RAM, and NVMe storage. Each VPS runs its own kernel for maximum isolation and security.', icon: Server, color: 'text-blue-400' },
  { name: 'Linux', desc: 'All servers run on Linux with full root access. Choose Ubuntu, Debian, CentOS, or Alpine. Pre-configured development environments with Docker, Node.js, Python, and more.', icon: Terminal, color: 'text-yellow-400' },
  { name: 'PowerShell', desc: 'Remote PowerShell environments for Windows-centric workflows. Manage Azure, Active Directory, and Windows infrastructure from a dedicated cloud instance.', icon: Shield, color: 'text-indigo-400' },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
        </div>
      </nav>

      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-center">Our <span className="gradient-text">Technology</span></h1>
          <p className="text-lg text-zinc-400 text-center max-w-2xl mx-auto mb-16">Built on battle-tested open-source technologies, optimized for developer productivity</p>
          <div className="space-y-8">
            {techs.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 flex gap-6 items-start">
                <t.icon className={`w-10 h-10 ${t.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.name}</h3>
                  <p className="text-zinc-400 leading-relaxed">{t.desc}</p>
                </div>
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
