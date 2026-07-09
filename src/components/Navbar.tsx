"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Mobile Drawer Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51] transition-all duration-300 lg:hidden" 
        style={{ opacity: isDrawerOpen ? 1 : 0, pointerEvents: isDrawerOpen ? 'auto' : 'none' }} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      
      {/* Mobile Drawer */}
      <aside 
        className="fixed top-0 left-0 h-full w-80 bg-[#162040] shadow-2xl z-[52] flex flex-col gap-2 p-6 rounded-r-xl border-r border-[#4d4635]/20 overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden" 
        style={{ transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#4d4635]/20 pt-4">
          <Image
            src="/images/vb_logo.png"
            alt="Vision Beyond Events Logo"
            width={130}
            height={50}
            className="h-10 w-auto object-contain rounded-full"
          />
          <button onClick={() => setIsDrawerOpen(false)} className="text-[#d0c5af] hover:text-primary p-2 rounded-full hover:bg-[#1a2d50] transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/services/weddings" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af] pl-4 hover:bg-[#d4af37]/10 hover:text-primary transition-all duration-200 ease-in-out rounded-lg group">
            <span className="material-symbols-outlined text-[#99907c] group-hover:text-primary transition-colors">auto_awesome</span> Services
          </Link>
          <Link href="/gallery?v=1" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af] pl-4 hover:bg-[#d4af37]/10 hover:text-primary transition-all duration-200 ease-in-out rounded-lg group">
            <span className="material-symbols-outlined text-[#99907c] group-hover:text-primary transition-colors">collections</span> Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af] pl-4 hover:bg-[#d4af37]/10 hover:text-primary transition-all duration-200 ease-in-out rounded-lg group">
            <span className="material-symbols-outlined text-[#99907c] group-hover:text-primary transition-colors">contact_support</span> Inquire
          </Link>
          <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-primary border-l-2 border-primary pl-4 bg-[#d4af37]/5 rounded-r-lg group mt-4">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span> Consultation
          </Link>
        </nav>
      </aside>

      {/* TopAppBar */}
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 glass-nav border-b border-primary/10 flex justify-between items-center px-6 md:px-20 py-4 h-20"
      >
        <Link className="flex items-center gap-4 group" href="/">
          <Image
            width={140}
            height={48}
            priority
            alt="Vision Beyond Events Logo"
            className="h-12 w-auto object-contain drop-shadow-md rounded-full border border-primary/20 transition-opacity opacity-90 group-hover:opacity-100"
            src="/images/vb_logo.png"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-gutter">
          <Link className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="/services/weddings">Services</Link>
          <Link className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="/gallery?v=1">Gallery</Link>
          <Link className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="/contact">Inquire</Link>
          <Link className="gold-gradient-bg text-[#111c38] font-body-md text-label-lg uppercase tracking-widest px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg" href="/contact">Private Consultation</Link>
        </div>
        <button onClick={() => setIsDrawerOpen(true)} aria-label="Menu" className="lg:hidden text-primary hover:text-primary-container transition-colors duration-300 active:scale-95 flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high w-10 h-10">
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

