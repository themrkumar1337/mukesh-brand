"use client"
import React from 'react'
import { 
  Linkedin, 
  Youtube, 
  Instagram, 
  Twitter, 
  ArrowUp, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Globe, 
  Cpu 
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const ventures = [
    { name: "Bharat Security", href: "https://bharatsec.com" },
    { name: "Static Nerd", href: "https://staticnerd.com" },
    { name: "Lotus Drop", href: "https://beauty.lotusdrop.store" },
    { name: "Smart Platter", href: "https://smartplatter.com" }
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mukeshkrana", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "https://youtube.com/@bharatsec", label: "YouTube" },
    { icon: <Twitter size={18} />, href: "https://x.com/MukeshK_Rana", label: "X (Twitter)" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/mukeshkrana_official", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 md:pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Layer 1: Strategic Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
          
          {/* Brand Identity & Expanded Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-white font-black text-base uppercase tracking-tighter italic leading-none">
                Mukesh K. Rana
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span className="h-[1px] w-4 bg-[#3b82f6]" />
                <span className="text-[7px] text-[#3b82f6] font-bold uppercase tracking-[0.5em]">
                  Executive Operations
                </span>
              </div>
            </div>
            <p className="text-[#a1a1aa] text-xs leading-relaxed font-light mb-8 max-w-sm">
              Defining the frontier of digital defense for 8+ years. Architecting secure ecosystems and high-stakes ventures across multiple industries.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#111111] border border-white/5 text-[#52525b] hover:text-[#3b82f6] hover:border-[#3b82f6]/30 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Side-by-Side on Tablet */}
          <div className="space-y-8">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
              <Globe size={12} className="text-[#3b82f6]" /> Navigation
            </h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-[#52525b] hover:text-white text-xs transition-colors italic">Philosophy</a></li>
              <li><a href="#about" className="text-[#52525b] hover:text-white text-xs transition-colors italic">Personnel</a></li>
              <li><a href="#insights" className="text-[#52525b] hover:text-white text-xs transition-colors italic">Intelligence</a></li>
              <li><a href="#book" className="text-[#52525b] hover:text-white text-xs transition-colors italic">Initialize</a></li>
            </ul>
          </div>

          {/* Venture Ecosystem */}
          <div className="space-y-8">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
              <Cpu size={12} className="text-[#3b82f6]" /> Ventures
            </h4>
            <ul className="space-y-4">
              {ventures.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#52525b] hover:text-[#3b82f6] text-xs transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Access */}
          <div className="space-y-8">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-[#3b82f6] mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest">Inquiries</p>
                  <p className="text-white text-xs font-medium italic">ceo@bharatsec.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#3b82f6] mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest">Base</p>
                  <p className="text-white text-xs font-medium">Ranchi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: Technical Utility Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            <span className="text-[9px] font-bold text-[#52525b] uppercase tracking-[0.3em]">
              © {currentYear} Mukesh K. Rana
            </span>
            <span className="text-[9px] font-bold text-[#3b82f6]/60 uppercase tracking-[0.3em]">
              ISO 27001 ALIGNED
            </span>
            <span className="text-[9px] font-bold text-[#52525b] uppercase tracking-[0.3em]">
              MKR-HQ-2026
            </span>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 text-[9px] font-black text-white uppercase tracking-[0.5em] hover:text-[#3b82f6] transition-all"
          >
            Terminal Return
            <div className="w-10 h-10 rounded-xl bg-[#111111] border border-white/5 flex items-center justify-center group-hover:bg-[#3b82f6]/10 group-hover:border-[#3b82f6]/30 transition-all duration-500">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}