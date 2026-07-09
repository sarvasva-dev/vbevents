"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[#d4af37] rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <img src="/images/logo_clean.png" alt="Vision Beyond Events" className="h-12 w-auto mb-12 object-contain" />
        
        <h1 className="font-headline-lg text-[120px] leading-none text-primary mb-4 font-bold tracking-tighter">
          404
        </h1>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
          The Experience You Are Looking For Is <span className="italic text-on-surface-variant font-serif">Not Found</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-12">
          It seems you&apos;ve wandered off the guestlist. Let&apos;s get you back to the main event.
        </p>
        
        <Link 
          href="/" 
          className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-10 py-5 rounded-full hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

