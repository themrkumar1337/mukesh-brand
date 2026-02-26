"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, Award, Target, Landmark, Scan } from 'lucide-react'

export default function About() {
  const accolades = [
    { icon: <ShieldCheck size={20} />, title: "CEO & Founder", detail: "Bharat Security (BharatSec)" },
    { icon: <Award size={20} />, title: "Certified Expert", detail: "eJPT • NSE • SANS DFIR • CSFPC Credentials" },
    { icon: <Target size={20} />, title: "8+ Years", detail: "Cybersecurity Leadership" },
    { icon: <Landmark size={20} />, title: "Entrepreneur", detail: "Multidisciplinary Ventures" }
  ];

  return (
    <section id="about" className="py-32 bg-[#0b0b0b] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* CEO Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#60a5fa]/5 rounded-[3rem] blur-3xl group-hover:bg-[#60a5fa]/10 transition-all duration-700" />
            
            <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] border border-white/5 bg-[#111111] overflow-hidden shadow-2xl">
               {/* FIX: Removed 'grayscale' and 'hover:grayscale-0' 
                  to show your original photo in full color.
               */}
               <Image 
                  src="/mukesh-rana.jpg" 
                  alt="Mukesh K. Rana - Founder & CEO of Bharat Security" 
                  fill
                  className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  priority
               />

               {/* Futuristic Overlay UI */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
               
               <div className="absolute top-8 left-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-[#3b82f6] uppercase tracking-[0.5em] italic">Identity Verified</span>
               </div>

               {/* Identity Scan Animation */}
               <motion.div 
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-[#3b82f6]/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
               />

               <div className="absolute bottom-8 right-8 rotate-90 origin-right">
                  <span className="text-[8px] font-medium text-[#52525b] uppercase tracking-[1em]">Mukesh K. Rana</span>
               </div>

               <div className="absolute bottom-8 left-8">
                  <Scan size={24} className="text-[#3b82f6]/50" />
               </div>
            </div>
          </motion.div>

          {/* Professional Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#3b82f6] mb-6 italic">Personnel Briefing</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white italic mb-10 leading-tight">
              A Legacy of <span className="text-[#3b82f6]">Defense</span> and Innovation.
            </h1>
            
            <div className="space-y-6 text-[#a1a1aa] text-sm leading-relaxed font-light">
              <p>
                As the <b>Founder and CEO of Bharat Security (BharatSec)</b>, I have spent nearly a decade architecting the security frameworks that protect modern enterprises. My career is defined by <b>8 years of leadership</b> in offensive security and red-teaming operations.
              </p>
              <p>
                Beyond cybersecurity, my entrepreneurial vision has expanded into multiple industries—from the premium branding of <b>Lotus Drop</b> to the scalable digital dining platform <b>Smartplatter</b>.
              </p>
              <p>
                Whether consulting for a global firm or scaling <b>Static Nerd</b>, the objective remains the same: <b>excellence without compromise.</b>
              </p>
            </div>

            {/* Accolade Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {accolades.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#111111] border border-white/5 flex items-start gap-4 hover:border-[#3b82f6]/20 transition-all group">
                  <div className="text-[#3b82f6] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[#52525b] text-[10px] uppercase tracking-wider mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}