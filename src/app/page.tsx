import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Ventures from '@/components/Ventures'
import Insights from '@/components/Insights'
import BookingSection from '@/components/BookingSection'
import SaumyaaChat from '@/components/SaumyaaChat'
import Footer from '@/components/Footer' // Import your new Footer component

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#3b82f6] selection:text-white antialiased overflow-x-hidden">
      {/* 1. Global Navigation & AI Layer */}
      <Navbar />
      <SaumyaaChat />

      {/* 2. Professional Content Layering */}
      <div className="relative z-10 space-y-0">
        <Hero />
        
        {/* Transitional Section - Electric Blue Gradient Line */}
        <div className="flex justify-center py-10 bg-[#050505]">
          <div className="h-32 w-px bg-gradient-to-b from-[#3b82f6] to-transparent" />
        </div>

        <About />
        
        {/* Business Ecosystem Sections */}
        <Ventures />
        <Insights />
        
        {/* High-Impact Strategic Inquiry Section */}
        <div className="bg-gradient-to-b from-[#050505] to-[#0b0b0b]">
          <BookingSection />
        </div>
      </div>

      {/* 3. Dedicated Professional Footer Section */}
      <Footer />
    </main>
  )
}