import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

// World-Class SEO Metadata
export const metadata: Metadata = {
  title: "Mukesh K. Rana | CEO & Founder of Bharat Security",
  description: "8+ years of cybersecurity leadership and venture building. Founder of BharatSec, Static Nerd, and Smart Platter.",
  keywords: ["Mukesh K. Rana", "CEO Bharat Security", "BharatSec Founder", "Cybersecurity Leader India", "Smart Platter Founder"],
  metadataBase: new URL("https://mukeshkrana.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Mukesh K. Rana | Strategic Portfolio",
    description: "Official HQ of Mukesh K. Rana. CEO of Bharat Security.",
    images: [{ url: "/mukesh-rana.jpg" }], // Uses your new public image for social sharing
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global Entity Schema for Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mukesh K. Rana",
    "url": "https://mukeshkrana.com",
    "image": "https://mukeshkrana.com/mukesh-rana.jpg",
    "jobTitle": ["CEO", "Founder", "Cybersecurity Leader"],
    "worksFor": { "@type": "Organization", "name": "Bharat Security" },
    "owns": [
      { "@type": "Organization", "name": "Bharat Security" },
      { "@type": "Organization", "name": "Static Nerd" },
      { "@type": "Organization", "name": "Lotus Drop" },
      { "@type": "Organization", "name": "Smart Platter" }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD for Google Search Dominance */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Cal.com Strategic Integration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let s = C.Cal;
                  if (s.q) { s.q.push(arguments); } else { s.q = [arguments]; }
                };
                if (!d.getElementById(L)) {
                  let s = d.createElement("script");
                  s.id = L;
                  s.src = "https://app.cal.com/embed/embed.js";
                  d.head.appendChild(s);
                }
                C.Cal("init", "mukesh-hq", {origin: "https://cal.com"});
              })(window, "Cal", "cal-embed");
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-white selection:bg-brand/30 selection:text-brand">
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#fff',
              border: '1px solid rgba(212, 175, 55, 0.1)', // Subtle Gold border
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}