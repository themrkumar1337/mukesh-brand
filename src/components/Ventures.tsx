"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Code, Sparkles, Utensils, ArrowUpRight, ExternalLink } from 'lucide-react'

export default function Ventures() {
  const portfolio = [
    {
      name: "Bharat Security",
      role: "Founder & CEO",
      desc: "India's leading cybersecurity firm specializing in elite penetration testing, red teaming, and digital forensics.",
      icon: <Shield className="text-[#3b82f6]" size={24} />,
      tags: ["Cybersecurity","Trainings & Certification", "Core"],
      link: "https://bharatsec.com"
    },
    {
      name: "Static Nerd",
      role: "CO - Founder",
      desc: "A high-performance web development agency focused on modern stacks like Next.js and secure cloud infrastructure.",
      icon: <Code className="text-[#3b82f6]" size={24} />,
      tags: ["Web Development","App Development", "Web Arch"],
      link: "https://staticnerd.com"
    },
    {
      name: "Lotus Drop",
      role: "Strategic Partner",
      desc: "A premium skincare and beauty brand defined by luxury branding and modern e-commerce experiences.",
      icon: <Sparkles className="text-[#3b82f6]" size={24} />,
      tags: ["E-commerce","Beauty", "Luxury"],
      link: "https://beauty.lotusdrop.store"
    },
    {
      name: "Smart Platter",
      role: "Innovation Lead",
      desc: "A next-generation culinary venture integrating tech-driven hospitality and premium catering services.",
      icon: <Utensils className="text-[#3b82f6]" size={24} />,
      tags: ["Hospitality","Smart menu", "Tech"],
      link: "https://smartplatter.com"
    }
  ];

  return (
    <section id="ventures" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#3b82f6]/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] font-black text-[#3b82f6] mb-6 italic"
          >
            Strategic Ecosystem
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white italic leading-tight"
          >
            Building the <span className="text-[#3b82f6]">Future</span> across<br />
            multiple <span className="text-[#a1a1aa]">dimensions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[#a1a1aa] text-sm md:text-base max-w-2xl leading-relaxed"
          >
            From the deep-tech infrastructure of <b>BharatSec</b> to the consumer luxury of <b>Lotus Drop</b>, my ventures are unified by uncompromising quality and secure innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-[#111111] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-700 relative overflow-hidden block"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-5 bg-[#3b82f6]/5 rounded-2xl border border-[#3b82f6]/10 group-hover:bg-[#3b82f6]/10 transition-colors duration-500">
                  {item.icon}
                </div>
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold text-[#52525b] uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#3b82f6] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[10px] text-[#3b82f6] font-black uppercase tracking-[0.3em] italic">
                  {item.role}
                </p>
                <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-[#3b82f6] transition-all">
                  Explore Venture <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div className="p-3 rounded-full bg-white/5 text-[#52525b] group-hover:text-white group-hover:bg-[#3b82f6]/20 transition-all">
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}