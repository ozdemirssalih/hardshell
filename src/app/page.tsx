'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Server, Cpu, Shield, Zap, Cloud, Terminal, ArrowRight, Check, Globe, HardDrive, Lock, Clock, Users, Code, Gauge, Database, Workflow, Monitor, Star, ChevronRight, Play } from 'lucide-react'

const products = [
  { name: 'KVM VPS 2GB', cpu: '1 vCPU', ram: '2GB RAM', storage: '25GB NVMe', price: 500, icon: Server, color: 'from-blue-600 to-cyan-600' },
  { name: 'KVM VPS 4GB', cpu: '2 vCPU', ram: '4GB RAM', storage: '50GB NVMe', price: 900, icon: Server, popular: true, color: 'from-indigo-600 to-purple-600' },
  { name: 'KVM VPS 8GB', cpu: '4 vCPU', ram: '8GB RAM', storage: '100GB NVMe', price: 1700, icon: Cpu, color: 'from-purple-600 to-pink-600' },
  { name: 'KVM VPS 10GB', cpu: '6 vCPU', ram: '10GB RAM', storage: '150GB NVMe', price: 2400, icon: Cpu, color: 'from-pink-600 to-red-600' },
  { name: 'Supabase Managed', cpu: 'Auto-scaling', ram: 'Managed', storage: 'Unlimited DB', price: 1500, icon: Database, color: 'from-green-600 to-emerald-600' },
  { name: 'n8n Automation', cpu: 'Dedicated', ram: '2GB RAM', storage: '20GB SSD', price: 1200, icon: Workflow, color: 'from-orange-600 to-amber-600' },
  { name: 'Linux Dev Server', cpu: '2 vCPU', ram: '4GB RAM', storage: '40GB SSD', price: 1000, icon: Terminal, color: 'from-teal-600 to-cyan-600' },
  { name: 'PowerShell Remote', cpu: '2 vCPU', ram: '4GB RAM', storage: '40GB SSD', price: 1100, icon: Monitor, color: 'from-violet-600 to-indigo-600' },
]

const features = [
  { title: 'Instant Deploy', desc: 'Servers provisioned in under 60 seconds. Zero configuration needed.', icon: Zap, color: 'text-yellow-400' },
  { title: 'NVMe Storage', desc: 'Enterprise NVMe SSDs with 3,500 MB/s read speeds on every server.', icon: HardDrive, color: 'text-blue-400' },
  { title: 'DDoS Protection', desc: 'Multi-layer 10Tbps DDoS mitigation included at no extra cost.', icon: Shield, color: 'text-green-400' },
  { title: '99.99% Uptime', desc: 'SLA-backed with automated failover and real-time monitoring.', icon: Clock, color: 'text-indigo-400' },
  { title: 'US Datacenter', desc: 'Tier-4 Silicon Valley & East Coast facilities with N+1 redundancy.', icon: Globe, color: 'text-cyan-400' },
  { title: 'Full Root Access', desc: 'Complete control with SSH, API, and CLI access to your servers.', icon: Terminal, color: 'text-orange-400' },
  { title: 'Developer API', desc: 'RESTful API with SDKs for Node.js, Python, Go, and Ruby.', icon: Code, color: 'text-pink-400' },
  { title: 'Auto Backups', desc: 'Daily automated backups with one-click restore and 30-day retention.', icon: Database, color: 'text-purple-400' },
  { title: 'Real-time Monitoring', desc: 'CPU, RAM, disk, and network metrics with alerting and webhooks.', icon: Gauge, color: 'text-emerald-400' },
]

const useCases = [
  { title: 'SaaS Applications', desc: 'Deploy your Next.js, React, or Node.js applications with Supabase backend. Automatic SSL, custom domains, and zero-downtime deploys.', icon: Cloud },
  { title: 'Workflow Automation', desc: 'Run n8n on dedicated servers with unlimited workflows. Connect 200+ apps, schedule tasks, and trigger webhooks without limits.', icon: Workflow },
  { title: 'Development Environments', desc: 'Spin up isolated Linux or PowerShell environments for your team. Pre-configured with Docker, Git, and your favorite tools.', icon: Terminal },
  { title: 'Database Hosting', desc: 'Managed Supabase instances with automatic scaling, point-in-time recovery, and read replicas. PostgreSQL with superpowers.', icon: Database },
]

const testimonials = [
  { name: 'Alex Chen', role: 'CTO, FinStack', quote: 'Migrated from AWS to Hardshell and cut our infrastructure costs by 60%. The performance is incredible.' },
  { name: 'Sarah Miller', role: 'Lead Developer, DevFlow', quote: 'The instant provisioning is a game changer. We deploy new environments in seconds, not hours.' },
  { name: 'James Rodriguez', role: 'Founder, AutomateHQ', quote: 'Running n8n on Hardshell has been flawless. Zero downtime in 8 months. Highly recommend.' },
]

const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '< 60s', label: 'Deploy Time' },
  { value: '10,000+', label: 'Active Servers' },
  { value: '2,000+', label: 'Developers' },
  { value: '5+', label: 'Regions' },
  { value: '24/7', label: 'Support' },
]

const techStack = [
  { name: 'Next.js', desc: 'React Framework' },
  { name: 'Supabase', desc: 'Backend as a Service' },
  { name: 'Vercel', desc: 'Edge Deployment' },
  { name: 'n8n', desc: 'Workflow Automation' },
  { name: 'Stripe', desc: 'Payments' },
  { name: 'Linux', desc: 'Operating System' },
  { name: 'KVM', desc: 'Virtualization' },
  { name: 'PostgreSQL', desc: 'Database' },
  { name: 'Docker', desc: 'Containerization' },
  { name: 'Cloudflare', desc: 'CDN & Security' },
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
      <section className="hero-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.06),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-indigo-300">Silicon Valley Infrastructure — All Systems Operational</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[0.9]">
              Deploy <span className="gradient-text">Anything</span><br />
              <span className="text-zinc-500">In Seconds</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              KVM VPS, Supabase, n8n, Linux servers — all provisioned instantly on enterprise hardware.
              Developer-first cloud infrastructure from Silicon Valley. Starting at <span className="text-white font-semibold">$500/year</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-btn flex items-center gap-2">
                Start Deploying Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-2">
                <Play className="w-4 h-4" /> View Plans
              </Link>
            </div>
            <p className="text-xs text-zinc-600">No credit card required • Free tier available • Cancel anytime</p>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 max-w-4xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-zinc-500 ml-2 font-mono">hardshell-cli v2.1.0</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                <div><span className="text-zinc-500">$</span> <span className="text-indigo-400">hardshell</span> deploy --type kvm --ram 4gb --region us-west</div>
                <div className="text-zinc-600">→ Authenticating... ✓</div>
                <div className="text-zinc-600">→ Selecting datacenter... San Jose, CA ✓</div>
                <div className="text-zinc-600">→ Provisioning KVM VPS 4GB... ✓</div>
                <div className="text-zinc-600">→ Configuring network... ✓</div>
                <div className="text-zinc-600">→ Installing OS (Ubuntu 24.04)... ✓</div>
                <div className="mt-2 text-green-400 font-semibold">✓ Server provisioned in 12 seconds</div>
                <div className="text-zinc-400 mt-2">  IP Address:  <span className="text-white">45.33.128.72</span></div>
                <div className="text-zinc-400">  SSH Access:  <span className="text-white">ssh root@45.33.128.72</span></div>
                <div className="text-zinc-400">  Dashboard:   <span className="text-indigo-400">https://app.hardshell.dev/servers/kvm-4g-01</span></div>
                <div className="text-zinc-400">  API Key:     <span className="text-zinc-600">hs_prod_****************************7f2a</span></div>
                <div className="text-zinc-600 mt-3 animate-pulse">█</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-t border-b border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <p className="text-2xl md:text-3xl font-black gradient-text">{s.value}</p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Why Hardshell</span>
              <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Built for <span className="gradient-text">Developers</span></h2>
              <p className="text-zinc-500 max-w-xl mx-auto">Enterprise infrastructure with startup simplicity. Everything you need to ship faster.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all group">
                <f.icon className={`w-8 h-8 ${f.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Plans</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Hosting Plans — <span className="gradient-text">Annual Pricing</span></h2>
            <p className="text-zinc-500">Save up to 17% with annual billing. All plans include DDoS protection, backups, and 24/7 monitoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all group relative ${p.popular ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : ''}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black">${p.price}</span>
                  <span className="text-sm text-zinc-500">/year</span>
                </div>
                <div className="space-y-2 text-sm text-zinc-400 mb-6">
                  <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {p.cpu}</p>
                  <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {p.ram}</p>
                  <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {p.storage}</p>
                  <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> DDoS Protection</p>
                  <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> Auto Backups</p>
                </div>
                <Link href="/signup" className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${p.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white glow-btn' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}>
                  Deploy Now <ChevronRight className="w-4 h-4 inline" />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-600 mt-6">All prices in USD. Annual billing. Monthly plans available on the <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300">pricing page</Link>.</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Use Cases</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Built for Every <span className="gradient-text">Workload</span></h2>
            <p className="text-zinc-500 max-w-xl mx-auto">From simple apps to complex automation pipelines, Hardshell handles it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((u, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 hover:border-indigo-500/30 transition-all">
                <u.icon className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{u.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Loved by <span className="gradient-text">Developers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}</div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Technology</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">Powered by <span className="gradient-text">Modern Stack</span></h2>
          <p className="text-zinc-500 mb-12">We use the best open-source tools in the industry</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-xl p-4 hover:border-indigo-500/30 transition-all text-center">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-zinc-600 mt-0.5">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Three Steps to <span className="gradient-text">Production</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Your Plan', desc: 'Select from KVM VPS, Supabase, n8n, Linux, or PowerShell servers. Customize CPU, RAM, and storage.' },
              { step: '02', title: 'Deploy Instantly', desc: 'Your server is provisioned in under 60 seconds. Get SSH access, IP address, and dashboard link immediately.' },
              { step: '03', title: 'Scale & Monitor', desc: 'Monitor usage in real-time, upgrade plans with zero downtime, and manage everything from your dashboard or API.' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-black gradient-text">{s.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to <span className="gradient-text">Deploy</span>?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-lg">Join thousands of developers who trust Hardshell for their cloud infrastructure. Start free, scale as you grow.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-btn">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors font-semibold">Talk to Sales →</Link>
            </div>
            <p className="text-xs text-zinc-600 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <span className="text-xl font-bold gradient-text">Hardshell</span>
              <p className="text-xs text-zinc-600 mt-2">Developer Cloud Infrastructure</p>
              <p className="text-xs text-zinc-700 mt-1">Silicon Valley, CA, USA</p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Product</h4>
              <div className="space-y-2 text-sm text-zinc-500">
                <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <Link href="/dashboard" className="block hover:text-white transition-colors">Dashboard</Link>
                <span className="block">API Docs</span>
                <span className="block">CLI</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-zinc-500">
                <Link href="/about" className="block hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
                <span className="block">Careers</span>
                <span className="block">Blog</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Resources</h4>
              <div className="space-y-2 text-sm text-zinc-500">
                <Link href="/technology" className="block hover:text-white transition-colors">Technology</Link>
                <Link href="/infrastructure" className="block hover:text-white transition-colors">Infrastructure</Link>
                <span className="block">Status Page</span>
                <span className="block">Security</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Legal</h4>
              <div className="space-y-2 text-sm text-zinc-500">
                <span className="block">Terms of Service</span>
                <span className="block">Privacy Policy</span>
                <span className="block">SLA</span>
                <span className="block">DPA</span>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">© 2026 Hardshell Inc. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-zinc-600">
              <span>Twitter</span>
              <span>GitHub</span>
              <span>Discord</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
