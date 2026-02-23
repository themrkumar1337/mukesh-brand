"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll for professional UX
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Philosophy', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Insights', href: '#insights' },
  ]

  return (
    <>
      {/* 1. PRIMARY NAVBAR CONTAINER */}
      <nav className="fixed top-0 w-full z-[100] p-4 md:p-8 flex justify-center pointer-events-none">
        <div className={`w-full max-w-7xl mx-auto rounded-2xl border transition-all duration-500 pointer-events-auto ${
          isScrolled || isMobileMenuOpen ? 'bg-[#0b0b0b] border-white/5 shadow-2xl' : 'bg-transparent border-transparent'
        }`}>
          <div className="flex justify-between items-center h-16 md:h-20 px-6">
            
            {/* Logo/Identity */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#3b82f6] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Shield size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-[10px] uppercase tracking-tighter italic">Mukesh K. Rana</span>
                <span className="text-[7px] text-[#3b82f6] font-bold uppercase tracking-[0.3em]">Secure Channel</span>
              </div>
            </div>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[9px] font-bold text-[#a1a1aa] uppercase tracking-[0.3em] hover:text-[#3b82f6] transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* SPACER for Mobile to keep button area clear */}
            <div className="md:hidden w-12" />
          </div>
        </div>
      </nav>

      {/* 2. INDEPENDENT MOBILE TOGGLE (Floating outside the nav hierarchy) */}
      <div className="md:hidden fixed top-7 right-8 z-[200] pointer-events-auto">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 flex items-center justify-center bg-[#111111] border border-[#3b82f6]/30 rounded-xl shadow-lg shadow-black"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-[#3b82f6]" strokeWidth={3} />
          ) : (
            <Menu size={24} className="text-[#3b82f6]" strokeWidth={3} />
          )}
        </button>
      </div>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] z-[150] flex flex-col justify-center items-center p-8 md:hidden"
          >
             <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-white uppercase tracking-[0.2em] italic hover:text-[#3b82f6] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 bg-[#3b82f6] text-white text-[10px] font-black uppercase tracking-[0.4em] px-12 py-5 rounded-xl"
              >
                Initialize Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}