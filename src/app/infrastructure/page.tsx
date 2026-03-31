'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, HardDrive, Shield, Clock, Wifi, Lock, Server, Cpu, Database, Globe, Gauge, Eye, ArrowRight, Check, Zap } from 'lucide-react'

const coreSpecs = [
  { icon: MapPin, title: 'US Datacenter', desc: 'Primary infrastructure in Silicon Valley and East Coast facilities. Tier-4 certified datacenters with redundant power, cooling, and connectivity. N+1 redundancy across all critical systems.' },
  { icon: HardDrive, title: 'NVMe Storage', desc: 'All servers use enterprise-grade NVMe SSDs for maximum I/O performance. Up to 3,500 MB/s read and 3,000 MB/s write speeds. RAID-10 configuration for data protection.' },
  { icon: Clock, title: '99.99% Uptime', desc: 'SLA-backed uptime guarantee with automated failover, health monitoring, and instant incident response. Downtime credits included. Proactive monitoring catches issues before they impact you.' },
  { icon: Shield, title: 'DDoS Protection', desc: 'Multi-layer DDoS mitigation at network and application level. Up to 10Tbps protection capacity with real-time traffic scrubbing. Always-on protection at no extra cost.' },
  { icon: Wifi, title: '10Gbps Network', desc: 'Premium network connectivity with BGP peering to major carriers. Low-latency routing to AWS, GCP, Azure, and Cloudflare. Multiple upstream providers for redundancy.' },
  { icon: Lock, title: 'Security First', desc: 'Hardware-level encryption, isolated network segments, automated security patching, and SOC 2 Type II compliance. Two-factor authentication on all management interfaces.' },
]

const networkStats = [
  { value: '10 Gbps', label: 'Network Speed', sub: 'Per server' },
  { value: '<1ms', label: 'Internal Latency', sub: 'Between servers' },
  { value: '10 Tbps', label: 'DDoS Mitigation', sub: 'Total capacity' },
  { value: '5+', label: 'Transit Providers', sub: 'BGP peering' },
]

const hardwareSpecs = [
  { label: 'Processors', value: 'AMD EPYC 9004 Series', desc: 'Latest generation server processors with up to 96 cores per socket' },
  { label: 'Memory', value: 'DDR5 ECC RAM', desc: 'Error-correcting memory for data integrity, up to 1.5TB per node' },
  { label: 'Storage', value: 'Samsung PM9A3 NVMe', desc: 'Enterprise NVMe with 1 DWPD endurance, 3.5GB/s sequential read' },
  { label: 'Network', value: 'Mellanox ConnectX-6', desc: '25GbE NICs with hardware offloading and SR-IOV support' },
  { label: 'Hypervisor', value: 'KVM / QEMU', desc: 'Hardware-assisted virtualization with VT-x and AMD-V support' },
  { label: 'OS', value: 'Custom Linux Kernel', desc: 'Optimized kernel with latest security patches and performance tuning' },
]

const complianceList = [
  'SOC 2 Type II Certified',
  'GDPR Compliant',
  'PCI DSS Level 1',
  'ISO 27001',
  'HIPAA Eligible',
  'CSA STAR Level 2',
]

const locations = [
  { city: 'San Jose, CA', type: 'Primary', status: 'Active', latency: '< 1ms' },
  { city: 'Ashburn, VA', type: 'Secondary', status: 'Active', latency: '60ms' },
  { city: 'Dallas, TX', type: 'Edge', status: 'Active', latency: '35ms' },
  { city: 'Chicago, IL', type: 'Edge', status: 'Active', latency: '45ms' },
  { city: 'Los Angeles, CA', type: 'Edge', status: 'Coming Soon', latency: '10ms' },
]

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/technology" className="text-sm text-zinc-400 hover:text-white transition-colors">Technology</Link>
            <Link href="/infrastructure" className="text-sm text-white">Infrastructure</Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
          </div>
          <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-green-300">All Systems Operational</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6">Enterprise <span className="gradient-text">Infrastructure</span></h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              Bare-metal performance. Cloud flexibility. Every server runs on cutting-edge hardware in Tier-4 datacenters with redundant power, cooling, and network connectivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="px-6 pb-16 -mt-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {networkStats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 text-center">
              <p className="text-3xl font-black gradient-text">{s.value}</p>
              <p className="text-sm font-semibold text-zinc-300 mt-1">{s.label}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Infrastructure */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Core Infrastructure</h2>
          <p className="text-zinc-500 text-center mb-16 max-w-xl mx-auto">Built for performance, reliability, and security from the ground up</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreSpecs.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 hover:border-indigo-500/30 transition-all">
                <s.icon className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Specifications */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Cpu className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hardware Specifications</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">We don't compromise on hardware. Every component is selected for maximum performance and reliability.</p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            {hardwareSpecs.map((spec, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${i < hardwareSpecs.length - 1 ? 'border-b border-zinc-800/50' : ''}`}>
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-indigo-400 w-24">{spec.label}</span>
                  <span className="text-sm font-semibold text-white">{spec.value}</span>
                </div>
                <p className="text-xs text-zinc-500 md:max-w-md md:text-right">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Datacenter Locations */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Globe className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Datacenter Locations</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Strategically placed across the United States for optimal latency and redundancy</p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800/50 text-xs font-semibold text-zinc-500 uppercase">
              <span>Location</span><span>Type</span><span>Status</span><span>Latency</span><span></span>
            </div>
            {locations.map((loc, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`grid grid-cols-5 gap-4 p-4 items-center ${i < locations.length - 1 ? 'border-b border-zinc-800/50' : ''}`}>
                <span className="font-semibold text-sm">{loc.city}</span>
                <span className="text-sm text-zinc-400">{loc.type}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${loc.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{loc.status}</span>
                <span className="text-sm text-zinc-400 font-mono">{loc.latency}</span>
                <span className="text-right"><MapPin className="w-4 h-4 text-zinc-600 inline" /></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Server className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Architecture</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Multi-layer architecture designed for scale, security, and performance</p>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="space-y-6">
              {[
                { layer: 'Edge Layer', items: ['Cloudflare CDN', 'DDoS Mitigation', 'WAF', 'SSL Termination'], color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                { layer: 'Load Balancer', items: ['HAProxy', 'Health Checks', 'Auto-failover', 'Session Persistence'], color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { layer: 'Application Layer', items: ['KVM Hypervisor', 'Container Runtime', 'n8n Workers', 'API Gateway'], color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
                { layer: 'Data Layer', items: ['PostgreSQL', 'Redis Cache', 'NVMe Storage', 'S3 Compatible'], color: 'text-purple-400', bg: 'bg-purple-500/10' },
                { layer: 'Network Layer', items: ['BGP Routing', '10Gbps Links', 'VLAN Isolation', 'IPv4 + IPv6'], color: 'text-pink-400', bg: 'bg-pink-500/10' },
              ].map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${l.bg} rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4`}>
                  <span className={`text-sm font-bold ${l.color} w-40 flex-shrink-0`}>{l.layer}</span>
                  <div className="flex flex-wrap gap-2">
                    {l.items.map((item, j) => (
                      <span key={j} className="text-xs bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded-lg text-zinc-300">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Eye className="w-10 h-10 text-indigo-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">24/7 Monitoring</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">Every server is monitored around the clock with automated alerting and self-healing capabilities. Our infrastructure team responds to incidents in under 5 minutes.</p>
              <div className="space-y-3">
                {['Real-time CPU, RAM, Disk metrics', 'Network traffic analysis', 'Application health checks every 30s', 'Automated incident escalation', 'Public status page', 'Slack & webhook notifications'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /><span className="text-sm text-zinc-300">{item}</span></div>
                ))}
              </div>
            </div>
            <div>
              <Gauge className="w-10 h-10 text-indigo-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Compliance & Security</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">We take security seriously. Our infrastructure meets the highest industry standards for data protection and compliance.</p>
              <div className="grid grid-cols-2 gap-3">
                {complianceList.map((item, i) => (
                  <div key={i} className="glass rounded-xl p-4 flex items-center gap-3">
                    <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs font-semibold text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Deploy your first server in under 60 seconds. No credit card required to start.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-btn">
            Start Deploying <ArrowRight className="w-5 h-5" />
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
