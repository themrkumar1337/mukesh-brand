"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Youtube, Newspaper, ArrowUpRight, Clock, Eye } from 'lucide-react'

export default function Insights() {
  const content = [
    {
      type: "Vlog",
      title: "Life of a Cyber CEO: Rebranding & Vision",
      desc: "An unfiltered look into the journey of scaling BharatSec and the launch of my personal brand.",
      channel: "Mr Kumar Unfiltered",
      stat: "Latest Episode",
      icon: <Youtube className="text-[#3b82f6]" size={18} />,
      link: "https://youtube.com/@mrkumarunfiltered"
    },
    {
      type: "Briefing",
      title: "Defensive Architectures for 2026",
      desc: "Strategic insights into fortifying enterprise infrastructure against next-gen threat vectors.",
      channel: "BharatSec Intel",
      stat: "5 min read",
      icon: <Newspaper className="text-[#3b82f6]" size={18} />,
      link: "#"
    }
  ];

  return (
    <section id="insights" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-[#3b82f6] mb-6 italic"
            >
              Intelligence Hub
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white italic leading-tight"
            >
              Perspectives on <span className="text-[#3b82f6]">Security</span> <br />
              & <span className="text-white/40">Entrepreneurship.</span>
            </motion.h1>
          </div>
          
          <motion.a 
            href="https://youtube.com/@mrkumarunfiltered"
            className="group flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-[0.3em] pb-2 border-b border-[#3b82f6]/30 hover:border-[#3b82f6] transition-all"
          >
            Access All Briefings <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[#111111] border border-white/5 hover:border-[#3b82f6]/20 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#050505] border border-white/5">
                  {item.icon}
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">{item.type}</span>
                </div>
                <span className="flex items-center gap-2 text-[8px] font-bold text-[#52525b] uppercase tracking-widest">
                  <Clock size={12} /> {item.stat}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#3b82f6] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-black text-[#52525b] uppercase tracking-widest italic">
                  <span>Source:</span>
                  <span className="text-white/60">{item.channel}</span>
                </div>
              </div>

              <a 
                href={item.link}
                className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-14 h-14 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center text-white group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] transition-all duration-500"
              >
                <ArrowUpRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}