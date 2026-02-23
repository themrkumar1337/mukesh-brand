"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Youtube, Twitter, Shield, ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const ventures = [
    { name: "Bharat Security", href: "https://bharatsec.com" },
    { name: "Static Nerd", href: "https://staticnerd.com" },
    { name: "Lotus Drop", href: "https://lotusdrop.store" },
    { name: "Smart Platter", href: "https://smartplatter.com" }
  ];

  const navigation = [
    { name: "Strategic Philosophy", href: "#hero" },
    { name: "Personnel Briefing", href: "#about" },
    { name: "Intelligence Hub", href: "#insights" },
    { name: "Initialize Access", href: "#book" }
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Layer 1: Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Shield size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm uppercase tracking-tighter italic">Mukesh K. Rana</span>
                <span className="text-[8px] text-[#3b82f6] font-bold uppercase tracking-[0.4em]">Strategic Operations</span>
              </div>
            </div>
            <p className="text-[#a1a1aa] text-xs leading-relaxed font-light mb-8">
              Defining the frontier of digital defense for 8+ years. Architecting secure ecosystems and high-stakes ventures across multiple industries.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/mukeshkrana" className="p-3 rounded-lg bg-[#111111] border border-white/5 text-[#52525b] hover:text-[#3b82f6] hover:border-[#3b82f6]/30 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com/@mrkumarunfiltered" className="p-3 rounded-lg bg-[#111111] border border-white/5 text-[#52525b] hover:text-[#3b82f6] hover:border-[#3b82f6]/30 transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">Core Navigation</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-[#52525b] hover:text-white text-xs transition-colors flex items-center gap-2 group italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Venture Ecosystem */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">Global Ventures</h4>
            <ul className="space-y-4">
              {ventures.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-[#52525b] hover:text-[#3b82f6] text-xs transition-colors flex items-center justify-between group">
                    {item.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Access */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">Direct Access</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-[#3b82f6] mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest">Inquiries</p>
                  <p className="text-white text-xs">ceo@bharatsec.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#3b82f6] mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest">Base</p>
                  <p className="text-white text-xs">India</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Layer 2: Technical Utility Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-10">
            <span className="text-[9px] font-bold text-[#52525b] uppercase tracking-[0.3em]">
              © {currentYear} Mukesh K. Rana.
            </span>
            <span className="text-[9px] font-bold text-[#52525b] uppercase tracking-[0.3em]">
              ISO 27001 ALIGNED
            </span>
            <span className="text-[9px] font-bold text-[#3b82f6]/40 uppercase tracking-[0.3em]">
              ID: MKR-HQ-2026
            </span>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 text-[9px] font-black text-white uppercase tracking-[0.5em] hover:text-[#3b82f6] transition-all"
          >
            Terminal Return
            <div className="w-10 h-10 rounded-xl bg-[#111111] border border-white/5 flex items-center justify-center group-hover:bg-[#3b82f6]/10 group-hover:border-[#3b82f6]/30 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}