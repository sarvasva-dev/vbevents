"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Listen to scroll to update dynamic styling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    // Hide/show on scroll down/up
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Track initial scroll state on mount (e.g. page refresh)
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Determine if header should have the glass background and dark text styling
  // On home page, it is transparent at the top. On all other pages, it is always glass.
  const activeStyle = !isHome || isScrolled;

  return (
    <>
      {/* Mobile Drawer Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[51] transition-all duration-300 lg:hidden" 
        style={{ opacity: isDrawerOpen ? 1 : 0, pointerEvents: isDrawerOpen ? 'auto' : 'none' }} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      
      {/* Mobile Drawer Menu */}
      <aside 
        className="fixed top-0 left-0 h-full w-80 bg-[#ffffff] shadow-2xl z-[52] flex flex-col gap-2 p-6 rounded-r-xl border-r border-slate-200 overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden" 
        style={{ transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100 pt-4">
          {/* Logo in drawer (always dark/slate styling since drawer bg is solid white) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 50" className="h-10 w-auto">
            <defs>
              <linearGradient id="goldGradDrawer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b5892b" />
                <stop offset="50%" stopColor="#e2c582" />
                <stop offset="100%" stopColor="#9a711d" />
              </linearGradient>
            </defs>
            <g transform="translate(5, 5)">
              <circle cx="20" cy="20" r="19" fill="none" stroke="url(#goldGradDrawer)" strokeWidth="1.2" strokeOpacity="0.8" />
              <text x="8" y="26" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="url(#goldGradDrawer)">V</text>
              <text x="21" y="26" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="url(#goldGradDrawer)">B</text>
            </g>
            <g transform="translate(58, 0)">
              <text x="0" y="23" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="700" fill="#0f172a" letterSpacing="1.5">VISION BEYOND</text>
              <text x="1" y="38" fontFamily="'Montserrat', sans-serif" fontSize="9" fontWeight="600" fill="url(#goldGradDrawer)" letterSpacing="8">E V E N T S</text>
            </g>
          </svg>
          <button onClick={() => setIsDrawerOpen(false)} className="text-slate-500 hover:text-[#a07820] p-2 rounded-full hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/services/weddings" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-slate-700 pl-4 hover:bg-[#d4af37]/10 hover:text-[#a07820] transition-all duration-200 ease-in-out rounded-lg group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#a07820] transition-colors">auto_awesome</span> Services
          </Link>
          <Link href="/gallery?v=1" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-slate-700 pl-4 hover:bg-[#d4af37]/10 hover:text-[#a07820] transition-all duration-200 ease-in-out rounded-lg group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#a07820] transition-colors">collections</span> Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-slate-700 pl-4 hover:bg-[#d4af37]/10 hover:text-[#a07820] transition-all duration-200 ease-in-out rounded-lg group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#a07820] transition-colors">contact_support</span> Inquire
          </Link>
          <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#a07820] border-l-2 border-[#a07820] pl-4 bg-[#d4af37]/5 rounded-r-lg group mt-4">
            <span className="material-symbols-outlined text-[#a07820]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span> Consultation
          </Link>
        </nav>
      </aside>

      {/* Main Top Header Navbar */}
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 h-20 transition-all duration-300 ${
          activeStyle ? "glass-nav" : "bg-transparent border-none"
        }`}
      >
        {/* Dynamic Inline SVG Logo for smooth text color transition */}
        <Link className="flex items-center gap-4 group" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 50" className="h-11 w-auto">
            <defs>
              <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b5892b" />
                <stop offset="50%" stopColor="#e2c582" />
                <stop offset="100%" stopColor="#9a711d" />
              </linearGradient>
            </defs>

            {/* Emblem circle + V/B text */}
            <g transform="translate(5, 5)">
              <circle cx="20" cy="20" r="19" fill="none" stroke="url(#goldGradNav)" strokeWidth="1.2" strokeOpacity="0.8" />
              <text x="8" y="26" fontFamily="'Playfair Display', 'Didot', 'Georgia', serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="url(#goldGradNav)">V</text>
              <text x="21" y="26" fontFamily="'Playfair Display', 'Didot', 'Georgia', serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="url(#goldGradNav)">B</text>
            </g>

            {/* Typography brand name */}
            <g transform="translate(58, 0)">
              <text 
                x="0" 
                y="23" 
                fontFamily="'Playfair Display', 'Didot', 'Georgia', serif" 
                fontSize="18" 
                fontWeight="700" 
                fill={activeStyle ? "#0f172a" : "#ffffff"} 
                className="transition-colors duration-300"
                letterSpacing="1.5"
              >
                VISION BEYOND
              </text>
              <text 
                x="1" 
                y="38" 
                fontFamily="'Montserrat', 'Inter', 'Helvetica', sans-serif" 
                fontSize="9" 
                fontWeight="600" 
                fill="url(#goldGradNav)" 
                letterSpacing="8"
              >
                E V E N T S
              </text>
            </g>
          </svg>
        </Link>

        {/* Navigation links & Portal access */}
        <div className="hidden lg:flex items-center gap-gutter">
          <Link className={`font-body-md text-label-lg uppercase tracking-widest transition-colors duration-300 ${
            activeStyle ? "text-slate-700 hover:text-[#a07820]" : "text-white hover:text-[#d4af37]"
          }`} href="/services/weddings">
            Services
          </Link>
          
          <Link className={`font-body-md text-label-lg uppercase tracking-widest transition-colors duration-300 ${
            activeStyle ? "text-slate-700 hover:text-[#a07820]" : "text-white hover:text-[#d4af37]"
          }`} href="/gallery?v=1">
            Gallery
          </Link>
          
          <Link className={`font-body-md text-label-lg uppercase tracking-widest transition-colors duration-300 ${
            activeStyle ? "text-slate-700 hover:text-[#a07820]" : "text-white hover:text-[#d4af37]"
          }`} href="/contact">
            Inquire
          </Link>
          
          <span className={`font-body-md text-label-lg uppercase tracking-widest select-none flex items-center gap-1 mr-2 transition-colors duration-300 ${
            activeStyle ? "text-slate-400 opacity-70 cursor-not-allowed" : "text-white/60 cursor-not-allowed"
          }`} title="Private Client Portal (Secure NDA Access)">
            <span className="material-symbols-outlined text-sm">lock</span> Portal
          </span>
          
          <Link className="gold-gradient-bg text-white font-body-md text-label-lg uppercase tracking-widest px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg" href="/contact">
            Private Consultation
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsDrawerOpen(true)} 
          aria-label="Menu" 
          className={`lg:hidden transition-colors duration-300 active:scale-95 flex items-center justify-center p-2 rounded-full w-10 h-10 ${
            activeStyle ? "text-[#a07820] hover:bg-slate-50" : "text-white hover:bg-white/10"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </motion.header>
    </>
  );
}
