"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ChevronRight, Cpu, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60a5fa]/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      {/* Scanning Line */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          
          {/* Executive Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 px-4 py-2 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 mb-12"
          >
            <Cpu size={14} className="text-[#3b82f6] animate-spin-slow" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#3b82f6]">
              Cybersecurity Architect • 8 Years Exp
            </span>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-[8rem] font-bold text-white leading-[0.85] tracking-tighter italic">
              Mukesh <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">K. Rana.</span>
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-[#a1a1aa] font-light tracking-widest uppercase">
              Founder & CEO <span className="text-[#52525b]">/</span> Bharat Security
            </p>
          </motion.div>

          {/* SEO Body */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-[#a1a1aa] text-sm md:text-base max-w-xl leading-relaxed font-light border-l-2 border-[#3b82f6]/30 pl-6"
          >
            Defining the standard for high-stakes digital defense. With nearly a decade of expertise, I lead <b>BharatSec</b> in fortifying global infrastructures and scaling visionary ventures.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            <a 
              href="#book" 
              className="group relative overflow-hidden bg-[#3b82f6] text-white px-12 py-6 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:bg-[#60a5fa]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Initialize Protocol
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex items-center gap-6">
               <Lock size={14} className="text-[#3b82f6]/50" />
               <span className="text-[9px] font-bold text-[#52525b] uppercase tracking-[0.3em]">
                 eJPT & ISC2 SECURED
               </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FIXED: RESPONSIVE HUD LABELS 
          - Horizontal on Mobile (Left Bottom)
          - Vertical on Desktop (Side HUD)
      */}
      <div className="absolute left-6 md:left-10 bottom-8 md:bottom-20 z-20">
        <div className="flex flex-row md:flex-col items-center gap-4 md:gap-6">
          {/* Status Indicator Line */}
          <div className="w-8 md:w-1 h-[1px] md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-[#3b82f6] to-transparent" />
          
          <div className="flex flex-row md:flex-col gap-4 md:gap-8">
            <span className="text-[7px] md:text-[8px] font-black text-[#3b82f6]/40 uppercase tracking-[0.2em] md:tracking-[1em] md:[writing-mode:vertical-lr] whitespace-nowrap">
              Confidential
            </span>
            <span className="text-[7px] md:text-[8px] font-black text-[#3b82f6]/40 uppercase tracking-[0.2em] md:tracking-[1em] md:[writing-mode:vertical-lr] whitespace-nowrap">
              End-to-End
            </span>
            <span className="text-[7px] md:text-[8px] font-black text-[#3b82f6]/40 uppercase tracking-[0.2em] md:tracking-[1em] md:[writing-mode:vertical-lr] whitespace-nowrap">
              Global Access
            </span>
          </div>
        </div>
      </div>

      {/* Desktop-only Ops Label */}
      <div className="absolute right-10 bottom-20 hidden xl:block">
        <span className="text-[8px] font-black text-[#3b82f6]/20 uppercase tracking-[1em] [writing-mode:vertical-lr]">
          BHARATSEC OPS
        </span>
      </div>
    </section>
  )
}