"use client"
import React from 'react'
import { motion } from 'framer-motion'
import BookingForm from './BookingForm'

export default function BookingSection() {
  return (
    <section id="book" className="py-40 bg-[#050505] relative overflow-hidden text-center">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Executive Subheader */}
          <div className="mb-10 flex flex-col items-center">
             <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#3b82f6] italic mb-4">
                Strategic Access
             </h4>
             <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white italic mb-8 leading-tight tracking-tighter">
            Initialize <span className="text-[#3b82f6]">Protocol.</span>
          </h2>
          
          <p className="text-[#a1a1aa] text-sm md:text-lg mb-16 max-w-xl mx-auto leading-relaxed font-light">
            Professional inquiries are strictly curated. Transmit a secure briefing to discuss <b>Cybersecurity Strategy</b> or <b>Strategic Ventures</b> directly.
          </p>
          
          {/* Main Form Component */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#3b82f6]/20 to-transparent rounded-[2.5rem] blur-xl opacity-20" />
            <div className="relative">
              <BookingForm />
            </div>
          </div>
          
          {/* Security Status Bar */}
          <div className="mt-24 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-30">
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] text-white">Confidential</span>
            <div className="hidden md:block w-1 h-1 bg-[#3b82f6] rounded-full" />
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] text-white">End-to-End Encryption</span>
            <div className="hidden md:block w-1 h-1 bg-[#3b82f6] rounded-full" />
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] text-white">Global Priority</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}