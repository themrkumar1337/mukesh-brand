import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Ventures from '@/components/Ventures'
import Insights from '@/components/Insights'
import BookingSection from '@/components/BookingSection'
import SaumyaaChat from '@/components/SaumyaaChat'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-brand selection:text-black antialiased overflow-x-hidden">
      {/* 1. Global HUD (Heads-Up Display) Layer */}
      <Navbar />
      <SaumyaaChat />

      {/* 2. Content Layering */}
      <div className="relative z-10 space-y-0">
        <Hero />
        
        {/* Transitional Section with Decorative Line */}
        <div className="flex justify-center py-10">
          <div className="h-32 w-px bg-gradient-to-b from-brand to-transparent" />
        </div>

        <About />
        <Ventures />
        <Insights />
        
        {/* High-Impact CTA Section */}
        <div className="bg-gradient-to-b from-transparent to-slate-950">
          <BookingSection />
        </div>
      </div>

      {/* 3. Futuristic Minimalist Footer */}
      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-brand font-black text-[10px] uppercase tracking-[1em] mb-4">
            Mukesh K. Rana
          </div>
          <p className="text-gray-600 text-[9px] uppercase tracking-widest font-bold">
            Founder & CEO, Bharat Security • Established 2018
          </p>
          <div className="mt-8 h-px w-24 bg-white/10" />
        </div>
      </footer>
    </main>
  )
}