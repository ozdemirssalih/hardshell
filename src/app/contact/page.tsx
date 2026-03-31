'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">Hardshell</Link>
          <Link href="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg glow-btn">Get Started</Link>
        </div>
      </nav>

      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-center">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-lg text-zinc-400 text-center mb-12">Questions, feedback, or partnership inquiries — we'd love to hear from you.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 text-center">
              <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-zinc-400 text-sm">hello@hardshell.dev</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <MessageSquare className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <h3 className="font-bold mb-1">Slack Community</h3>
              <p className="text-zinc-400 text-sm">Join 500+ developers</p>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">Name</label>
              <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">Email</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">Message</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={5} className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none" placeholder="Tell us how we can help..." />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-semibold transition-all glow-btn flex items-center justify-center gap-2">
              {sent ? 'Message Sent!' : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </motion.form>
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
