'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Server, Cloud, Zap, Terminal, CreditCard, Database, Workflow, Monitor, ArrowRight, Shield, HardDrive, Globe, Clock, ChevronRight, Star } from 'lucide-react'

const plans = [
  { name: 'KVM VPS 2GB', cpu: '1 vCPU', ram: '2GB RAM', storage: '25GB NVMe SSD', bandwidth: '1TB Transfer', monthly: 1500, yearly: 15000, icon: Server, color: 'from-blue-600 to-cyan-600', popular: false },
  { name: 'KVM VPS 4GB', cpu: '2 vCPU', ram: '4GB RAM', storage: '50GB NVMe SSD', bandwidth: '2TB Transfer', monthly: 2700, yearly: 27000, icon: Server, color: 'from-indigo-600 to-purple-600', popular: true },
  { name: 'KVM VPS 8GB', cpu: '4 vCPU', ram: '8GB RAM', storage: '100GB NVMe SSD', bandwidth: '4TB Transfer', monthly: 5100, yearly: 51000, icon: Server, color: 'from-purple-600 to-pink-600', popular: false },
  { name: 'KVM VPS 10GB', cpu: '6 vCPU', ram: '10GB RAM', storage: '150GB NVMe SSD', bandwidth: '6TB Transfer', monthly: 7200, yearly: 72000, icon: Server, color: 'from-pink-600 to-red-600', popular: false },
  { name: 'Supabase Managed', cpu: 'Auto-scaling Cluster', ram: 'Managed Memory', storage: 'Unlimited Database', bandwidth: 'Unlimited API Calls', monthly: 4500, yearly: 45000, icon: Database, color: 'from-green-600 to-emerald-600', popular: false },
  { name: 'n8n Automation', cpu: 'Dedicated Instance', ram: '2GB RAM', storage: '20GB SSD', bandwidth: 'Unlimited Workflows', monthly: 3600, yearly: 36000, icon: Workflow, color: 'from-orange-600 to-amber-600', popular: false },
  { name: 'Linux Dev Server', cpu: '2 vCPU', ram: '4GB RAM', storage: '40GB NVMe SSD', bandwidth: '2TB Transfer', monthly: 3000, yearly: 30000, icon: Terminal, color: 'from-teal-600 to-cyan-600', popular: false },
  { name: 'PowerShell Remote', cpu: '2 vCPU', ram: '4GB RAM', storage: '40GB NVMe SSD', bandwidth: '2TB Transfer', monthly: 3300, yearly: 33000, icon: Monitor, color: 'from-violet-600 to-indigo-600', popular: false },
]

const allFeatures = [
  { text: 'Instant Provisioning', desc: 'Servers ready in < 60 seconds' },
  { text: 'Full Root Access', desc: 'SSH, API, and CLI' },
  { text: 'DDoS Protection', desc: '10Tbps mitigation capacity' },
  { text: '99.99% Uptime SLA', desc: 'With downtime credits' },
  { text: 'NVMe Storage', desc: '3,500 MB/s read speeds' },
  { text: '24/7 Monitoring', desc: 'Real-time metrics & alerting' },
  { text: 'Automated Backups', desc: 'Daily with 30-day retention' },
  { text: 'RESTful API', desc: 'Full management API access' },
  { text: 'One-Click Deploys', desc: 'GitHub integration' },
  { text: 'Custom DNS', desc: 'Point your domain' },
  { text: 'IPv4 + IPv6', desc: 'Dual-stack networking' },
  { text: 'Dashboard', desc: 'Visual server management' },
]

const faqs = [
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect immediately with prorated billing.' },
  { q: 'Is there a free trial?', a: 'Yes, all plans come with a 14-day free trial. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for annual plans.' },
  { q: 'Do you offer refunds?', a: 'Yes, we offer a 30-day money-back guarantee on all plans. No questions asked.' },
  { q: 'What OS options are available?', a: 'Ubuntu 22.04/24.04, Debian 12, CentOS Stream, AlmaLinux, Rocky Linux, and Alpine Linux.' },
  { q: 'Can I get a custom plan?', a: 'Absolutely. Contact our sales team for custom configurations, dedicated hardware, and enterprise agreements.' },
]

const comparisons = [
  { feature: 'Starting Price', hardshell: '$15,000/yr', aws: '$18,600/yr', digitalocean: '$14,400/yr', linode: '$18,000/yr' },
  { feature: 'Deploy Time', hardshell: '< 60s', aws: '2-5 min', digitalocean: '55s', linode: '1-2 min' },
  { feature: 'DDoS Protection', hardshell: 'Included', aws: '$900,000/mo', digitalocean: 'Basic', linode: 'Basic' },
  { feature: 'NVMe Storage', hardshell: 'All Plans', aws: 'Extra Cost', digitalocean: 'Premium', linode: 'Some Plans' },
  { feature: 'Backups', hardshell: 'Free Daily', aws: 'Extra Cost', digitalocean: '20% Extra', linode: '$750/mo' },
  { feature: 'Support', hardshell: '24/7 Free', aws: '$8,700+/mo', digitalocean: 'Paid Plans', linode: '24/7 Free' },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm text-white">Pricing</Link>
            <Link href="/technology" className="text-sm text-zinc-400 hover:text-white transition-colors">Technology</Link>
            <Link href="/infrastructure" className="text-sm text-zinc-400 hover:text-white transition-colors">Infrastructure</Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white">Log in</Link>
            <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Pricing</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mt-3 mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h1>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">No hidden fees. No surprises. No bandwidth overage charges. Pay only for what you need.</p>

            <div className="inline-flex items-center glass rounded-xl p-1 mb-4">
              <button onClick={() => setBilling('monthly')} className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-indigo-600 text-white' : 'text-zinc-400'}`}>Monthly</button>
              <button onClick={() => setBilling('yearly')} className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${billing === 'yearly' ? 'bg-indigo-600 text-white' : 'text-zinc-400'}`}>
                Yearly <span className="text-xs text-green-400 ml-1">Save 17%</span>
              </button>
            </div>
            <p className="text-xs text-zinc-600">14-day free trial on all plans • No credit card required</p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 pb-20 -mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl p-6 relative hover:border-indigo-500/30 transition-all ${plan.popular ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : ''}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" /> Most Popular</div>}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                <plan.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black">${billing === 'monthly' ? plan.monthly : plan.yearly}</span>
                <span className="text-sm text-zinc-500">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              {billing === 'yearly' && <p className="text-xs text-green-400 mb-4">${plan.monthly}/mo equivalent • Save ${plan.monthly * 12 - plan.yearly}/yr</p>}
              {billing === 'monthly' && <p className="text-xs text-zinc-600 mb-4">${plan.yearly}/yr with annual billing</p>}
              <div className="space-y-2 text-sm text-zinc-400 mb-6">
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {plan.cpu}</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {plan.ram}</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {plan.storage}</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> {plan.bandwidth}</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> DDoS Protection</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> Daily Backups</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> 99.99% Uptime</p>
                <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-500" /> 24/7 Monitoring</p>
              </div>
              <Link href="/signup" className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white glow-btn' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}>
                Deploy Now <ChevronRight className="w-4 h-4 inline" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Features */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Included</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-12">Everything You Need, <span className="gradient-text">Included</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFeatures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 glass rounded-xl p-4 text-left">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-zinc-200">{f.text}</span>
                  <p className="text-xs text-zinc-500">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Compare</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">How We <span className="gradient-text">Compare</span></h2>
            <p className="text-zinc-500">See how Hardshell stacks up against the competition</p>
          </div>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800/50 text-xs font-bold uppercase tracking-wider">
              <span className="text-zinc-500">Feature</span>
              <span className="text-indigo-400">Hardshell</span>
              <span className="text-zinc-500">AWS</span>
              <span className="text-zinc-500">DigitalOcean</span>
              <span className="text-zinc-500">Linode</span>
            </div>
            {comparisons.map((c, i) => (
              <div key={i} className={`grid grid-cols-5 gap-4 p-4 text-sm ${i < comparisons.length - 1 ? 'border-b border-zinc-800/30' : ''}`}>
                <span className="text-zinc-400 font-medium">{c.feature}</span>
                <span className="text-white font-semibold">{c.hardshell}</span>
                <span className="text-zinc-500">{c.aws}</span>
                <span className="text-zinc-500">{c.digitalocean}</span>
                <span className="text-zinc-500">{c.linode}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-5 flex items-center justify-between">
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-zinc-500 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-zinc-400 -mt-2">{faq.a}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
          <div className="relative">
            <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">Need a Custom Plan?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">For dedicated hardware, custom configurations, SLA agreements, and volume discounts — talk to our infrastructure team.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-btn">
                Contact Sales <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/signup" className="text-zinc-400 hover:text-white transition-colors font-semibold">Or start with a free trial →</Link>
            </div>
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
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
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
