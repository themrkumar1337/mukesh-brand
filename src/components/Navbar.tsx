"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Philosophy', href: '#hero' },
    { name: 'Personnel', href: '#about' }, // Updated for professional tone
    { name: 'Ventures', href: '#ventures' },
    { name: 'Intelligence', href: '#insights' }, // Updated to reflect cybersecurity leadership
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] p-4 md:p-6 flex justify-center pointer-events-none">
        <div className={`w-full max-w-7xl mx-auto rounded-full border transition-all duration-700 pointer-events-auto ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-[#0b0b0b]/80 backdrop-blur-2xl border-white/10 px-8 py-3' 
            : 'bg-transparent border-transparent px-10 py-6'
        }`}>
          <div className="flex justify-between items-center h-12">
            
            {/* Minimalist Typographic Wordmark */}
            <div className="flex flex-col">
              <span className="text-white font-black text-sm md:text-base uppercase tracking-tighter italic leading-none">
                Mukesh K. Rana
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-[1px] w-4 bg-[#3b82f6]" />
                <span className="text-[7px] text-[#3b82f6] font-bold uppercase tracking-[0.5em]">
                  Executive Operations
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Elite Underline Transition */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[9px] font-black text-[#a1a1aa] uppercase tracking-[0.4em] hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <div className="h-4 w-[1px] bg-white/10" />
              <a 
                href="#book" 
                className="text-[9px] font-black text-[#3b82f6] uppercase tracking-[0.5em] hover:text-white transition-colors"
              >
                Access
              </a>
            </div>

            {/* Spacer for Mobile Layout Consistency */}
            <div className="md:hidden w-8" />
          </div>
        </div>
      </nav>

      {/* Floating Mobile Toggle - High Contrast Circle */}
      <div className="md:hidden fixed top-7 right-8 z-[200]">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 flex items-center justify-center bg-[#0b0b0b] border border-white/10 rounded-full shadow-2xl transition-all active:scale-95"
        >
          {isMobileMenuOpen ? (
            <X size={20} className="text-[#3b82f6]" strokeWidth={3} />
          ) : (
            <Menu size={20} className="text-white" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Deep Onyx Theme */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] z-[150] flex flex-col justify-center items-center p-8 md:hidden"
          >
             <div className="flex flex-col items-center gap-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-white uppercase tracking-[0.2em] italic hover:text-[#3b82f6] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-[#3b82f6] text-white text-[10px] font-black uppercase tracking-[0.5em] px-16 py-6 rounded-full"
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