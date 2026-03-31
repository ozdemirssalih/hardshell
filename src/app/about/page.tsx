'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Users, Shield, Cpu, Heart, Target, Rocket, Code, ArrowRight, Check, Star, Zap, Clock, Award, Building, MapPin } from 'lucide-react'

const stats = [
  { icon: Globe, label: 'Regions', value: '5+', sub: 'US datacenters' },
  { icon: Users, label: 'Developers', value: '2,000+', sub: 'Active customers' },
  { icon: Shield, label: 'Uptime', value: '99.99%', sub: 'SLA guaranteed' },
  { icon: Cpu, label: 'Servers', value: '10,000+', sub: 'Active instances' },
  { icon: Clock, label: 'Deploy Time', value: '< 60s', sub: 'Average provisioning' },
  { icon: Award, label: 'Founded', value: '2024', sub: 'Silicon Valley, CA' },
]

const values = [
  { icon: Zap, title: 'Speed First', desc: 'We obsess over performance. Every millisecond matters. From provisioning to runtime, speed is our core principle. Our servers boot faster, our storage reads faster, and our network routes faster than the competition.' },
  { icon: Heart, title: 'Developer Love', desc: 'We build for developers because we are developers. Every feature, every API endpoint, every CLI command is designed by engineers who use these tools daily. No corporate bloat, no unnecessary complexity.' },
  { icon: Shield, title: 'Security by Default', desc: 'Security isn\'t an add-on — it\'s built into every layer. From hardware encryption to network isolation, automated patching to DDoS protection, your infrastructure is protected from day one.' },
  { icon: Target, title: 'Radical Simplicity', desc: 'Complex infrastructure, simple interface. We hide the complexity so you can focus on building. One command to deploy. One dashboard to manage. One bill to pay.' },
]

const timeline = [
  { year: '2024 Q1', title: 'Founded', desc: 'Hardshell founded in Silicon Valley by a team of ex-AWS and ex-Google infrastructure engineers frustrated with the complexity of cloud hosting.' },
  { year: '2024 Q3', title: 'First Datacenter', desc: 'Launched our primary datacenter in San Jose, CA with AMD EPYC processors and NVMe storage. First 100 customers onboarded.' },
  { year: '2025 Q1', title: 'Product Expansion', desc: 'Added managed Supabase hosting, n8n automation servers, and PowerShell remote environments. Crossed 1,000 active servers.' },
  { year: '2025 Q3', title: 'East Coast Launch', desc: 'Opened Ashburn, VA datacenter for east coast coverage. Introduced edge locations in Dallas and Chicago. 5,000+ servers.' },
  { year: '2026 Q1', title: 'Enterprise Launch', desc: 'Launched enterprise tier with custom SLAs, dedicated hardware, and SOC 2 Type II certification. 10,000+ servers across 5 regions.' },
  { year: '2026+', title: 'What\'s Next', desc: 'European expansion, GPU compute, managed Kubernetes, and AI inference hosting. Building the next generation of developer infrastructure.' },
]

const team = [
  { name: 'Marcus Chen', role: 'CEO & Co-Founder', bg: 'Ex-AWS Principal Engineer. 15 years in cloud infrastructure. Stanford CS.' },
  { name: 'Priya Sharma', role: 'CTO & Co-Founder', bg: 'Ex-Google SRE Lead. Built systems serving 1B+ requests/day. MIT PhD.' },
  { name: 'David Kim', role: 'VP Engineering', bg: 'Ex-Cloudflare. Architected edge computing platform. Berkeley CS.' },
  { name: 'Sarah Johnson', role: 'VP Product', bg: 'Ex-Vercel Product Lead. Shipped Next.js deployment features. Carnegie Mellon HCI.' },
  { name: 'Alex Rivera', role: 'Head of Infrastructure', bg: 'Ex-DigitalOcean. Managed 100K+ hypervisors. Georgia Tech MS.' },
  { name: 'Emma Zhang', role: 'Head of Security', bg: 'Ex-CrowdStrike. CISSP, CISM certified. Led enterprise security audits.' },
]

const investors = ['Y Combinator', 'a16z', 'Sequoia Scout', 'SV Angel', 'Founders Fund']

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/technology" className="text-sm text-zinc-400 hover:text-white transition-colors">Technology</Link>
            <Link href="/infrastructure" className="text-sm text-zinc-400 hover:text-white transition-colors">Infrastructure</Link>
            <Link href="/about" className="text-sm text-white">About</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white">Log in</Link>
            <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-zinc-400">Silicon Valley, California</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8">We're Building the <span className="gradient-text">Future of Cloud</span></h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-6 max-w-3xl">
              Hardshell is a Silicon Valley infrastructure company focused on developer-first cloud solutions. We believe that deploying and managing servers should be as simple as writing code.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-3xl">
              Founded by engineers who spent decades at AWS, Google, and Cloudflare, we were frustrated with the complexity of traditional hosting. Too many dashboards, too many configs, too many bills. So we built something better.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-3xl">
              Our platform combines bare-metal performance with cloud simplicity. Every server runs on the latest AMD EPYC processors with NVMe storage, protected by enterprise DDoS mitigation, and backed by our 99.99% uptime guarantee. One command to deploy. One dashboard to manage. Zero complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-t border-b border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <s.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-black gradient-text">{s.value}</p>
              <p className="text-xs text-zinc-400 font-semibold mt-1">{s.label}</p>
              <p className="text-xs text-zinc-600">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">What <span className="gradient-text">Drives Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8">
                <v.icon className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">From Idea to <span className="gradient-text">10,000 Servers</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800"></div>
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8 items-start">
                  <div className="w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-600/20 relative z-10"></div>
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1">
                    <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">{t.year}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2">{t.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Team</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Built by <span className="gradient-text">World-Class Engineers</span></h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Our team brings decades of experience from the world's leading infrastructure companies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-indigo-400 text-sm font-semibold mb-2">{t.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{t.bg}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Investors</span>
          <h2 className="text-2xl font-bold mt-3 mb-8">Backed by Industry Leaders</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {investors.map((inv, i) => (
              <motion.span key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-lg font-bold text-zinc-600 glass px-6 py-3 rounded-xl hover:text-zinc-300 transition-colors">{inv}</motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5"></div>
            <div className="relative">
              <Rocket className="w-12 h-12 text-indigo-400 mb-6" />
              <h2 className="text-3xl font-black mb-6">Our Mission</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-4">
                "Make cloud infrastructure invisible. Developers should focus on building products, not managing servers."
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8">
                We envision a world where deploying to the cloud is as natural as saving a file. Where infrastructure scales automatically, security is built-in, and the only thing developers think about is their code. That's what we're building at Hardshell.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Open Source First', desc: 'We build on and contribute to open source projects' },
                  { title: 'Carbon Neutral', desc: '100% renewable energy across all datacenters by 2027' },
                  { title: 'Privacy Focused', desc: 'Your data is yours. We never sell or share customer data' },
                ].map((m, i) => (
                  <div key={i} className="bg-zinc-900/50 rounded-xl p-4">
                    <h4 className="font-bold text-sm mb-1">{m.title}</h4>
                    <p className="text-xs text-zinc-500">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Join the <span className="gradient-text">Revolution</span></h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Whether you're a solo developer or an enterprise team, Hardshell has the infrastructure to power your next project.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-btn">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors font-semibold">Contact Us →</Link>
          </div>
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
            <Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-zinc-600">© 2026 Hardshell Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
