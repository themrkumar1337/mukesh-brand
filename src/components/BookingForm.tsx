"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Send, CheckCircle2, Loader2, X, ShieldCheck, ChevronRight } from 'lucide-react'

export default function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  return (
    <>
      {/* 1. High-Visibility Strategic Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-[#3b82f6] text-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] rounded-xl hover:bg-[#60a5fa] transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
      >
        <span className="flex items-center justify-center gap-3">
          Initialize Strategic Access
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop: Deep Onyx (#050505) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md" 
            />

            {/* Modal Container: Section Contrast (#0b0b0b) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0b0b0b] border border-white/5 rounded-[2.5rem] shadow-2xl scrollbar-hide"
            >
              <div className="p-6 md:p-12">
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#52525b] hover:text-[#3b82f6] transition-colors">
                  <X size={24} />
                </button>

                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[#3b82f6]/20 bg-[#3b82f6]/5">
                    <ShieldCheck size={12} className="text-[#3b82f6]" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#3b82f6]">Vetted Channel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white italic">Inquire with the <span className="text-[#3b82f6]">Founder.</span></h3>
                </div>

                <form className="space-y-4 md:space-y-6">
                  {/* Inputs: Card Background (#111111) */}
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    <input required className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-[#3b82f6]/40 placeholder:text-[#52525b]" placeholder="Full Name" />
                    <input required type="email" className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-[#3b82f6]/40 placeholder:text-[#52525b]" placeholder="Email Address" />
                  </div>
                  <select className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-[#3b82f6]/40 appearance-none">
                    <option>Strategic Consultation</option>
                    <option>General Correspondence</option>
                  </select>
                  <textarea required rows={4} className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-[#3b82f6]/40 resize-none placeholder:text-[#52525b]" placeholder="Provide context..." />
                  
                  <button type="submit" className="w-full py-5 bg-[#3b82f6] text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-xl flex items-center justify-center gap-3 hover:bg-[#60a5fa] transition-all">
                    <Send size={14} /> Send Briefing
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}