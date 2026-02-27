"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { Send, CheckCircle2, Loader2, X, ChevronRight } from 'lucide-react'

export default function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    // Payload synchronized with your Resend API route
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      type: formData.get('type'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        toast.success("COMMUNICATION ENCRYPTED & TRANSMITTED.");
        setTimeout(() => {
          setIsOpen(false);
          setStatus('idle');
        }, 3500);
      } else {
        throw new Error("Transmission failed");
      }
    } catch (error) {
      setStatus('idle');
      toast.error("TRANSMISSION INTERRUPTED. RETRY PROTOCOL.");
    }
  };

  return (
    <>
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
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#0b0b0b] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-12 md:p-20 text-center flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={40} className="text-[#3b82f6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white italic mb-4 tracking-tighter">Transmission Complete.</h3>
                    <p className="text-[#a1a1aa] text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                      Delivered to the CEO's office. Expect a response within 48-72 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 md:p-12"
                  >
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-[#52525b] hover:text-[#3b82f6] transition-colors">
                      <X size={24} />
                    </button>

                    <div className="mb-10 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white italic tracking-tighter">
                        Inquire with the <span className="text-[#3b82f6]">Founder.</span>
                      </h3>
                      <p className="text-[#52525b] text-[9px] font-black uppercase tracking-[0.3em] mt-2">
                        Secure Channel • ID: MKR-HQ-2026
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="name" required className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-[10px] uppercase font-bold tracking-widest outline-none focus:border-[#3b82f6]/40 placeholder:text-[#52525b]" placeholder="Full Name (Required)" />
                        <input name="email" required type="email" className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-[10px] uppercase font-bold tracking-widest outline-none focus:border-[#3b82f6]/40 placeholder:text-[#52525b]" placeholder="Official Email (Required)" />
                      </div>
                      
                      <div className="relative">
                        <select 
                          name="type" 
                          required 
                          defaultValue="" 
                          className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-[#52525b] text-[10px] font-bold uppercase tracking-widest outline-none focus:border-[#3b82f6]/40 appearance-none"
                        >
                          {/* UPDATED ORDER */}
                          <option value="" disabled>Select Inquiry Dimension (Required)</option>
                          <option value="General Query">General Query</option>
                          <option value="Cybersecurity Consulting">Cybersecurity Consulting</option>
                          <option value="Venture Partnership">Venture Partnership</option>
                          <option value="Investment Strategy">Investment Strategy</option>
                        </select>
                      </div>

                      <textarea name="message" required rows={4} className="w-full bg-[#111111] border border-white/5 p-4 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest outline-none focus:border-[#3b82f6]/40 resize-none placeholder:text-[#52525b]" placeholder="Briefing Context..." />
                      
                      <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full py-5 bg-[#3b82f6] text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-xl flex items-center justify-center gap-3 hover:bg-[#60a5fa] transition-all disabled:opacity-50"
                      >
                        {status === 'loading' ? <Loader2 className="animate-spin" size={16} /> : <Send size={14} />}
                        {status === 'loading' ? "Encrypting..." : "Send Briefing"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}