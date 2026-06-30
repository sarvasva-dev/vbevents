"use client";
import { useState, useEffect } from "react";

import Image from 'next/image';

export default function Home() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);


  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, type: 'contact' })
    });
    alert('Thank you for your inquiry. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail, type: 'newsletter' })
    });
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };


  return (
    <>
      

{/* Mobile Drawer Overlay */}
<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51] transition-all duration-300 md:hidden" style={{ opacity: isDrawerOpen ? 1 : 0, pointerEvents: isDrawerOpen ? 'auto' : 'none' }} onClick={() => setIsDrawerOpen(false)}></div>
<aside className="fixed top-0 left-0 h-full w-80 bg-[#201f1f] shadow-2xl z-[52] flex flex-col gap-2 p-6 rounded-r-xl border-r border-[#4d4635]/20 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden" style={{ transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
  <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#4d4635]/20 pt-4">
    <h2 className="font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond</h2>
    <button onClick={() => setIsDrawerOpen(false)} className="text-[#d0c5af] hover:text-primary p-2 rounded-full hover:bg-[#2a2a2a] transition-colors">
      <span className="material-symbols-outlined">close</span>
    </button>
  </div>
  <nav className="flex flex-col gap-2">
    <a href="#services" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af] pl-4 hover:bg-[#d4af37]/10 hover:text-primary transition-all duration-200 ease-in-out rounded-lg group">
      <span className="material-symbols-outlined text-[#99907c] group-hover:text-primary transition-colors">auto_awesome</span> Services
    </a>
    <a href="/gallery" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af] pl-4 hover:bg-[#d4af37]/10 hover:text-primary transition-all duration-200 ease-in-out rounded-lg group">
      <span className="material-symbols-outlined text-[#99907c] group-hover:text-primary transition-colors">collections</span> Gallery
    </a>
    <a href="#contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af] pl-4 hover:bg-[#d4af37]/10 hover:text-primary transition-all duration-200 ease-in-out rounded-lg group">
      <span className="material-symbols-outlined text-[#99907c] group-hover:text-primary transition-colors">contact_support</span> Contact
    </a>
    <a href="#contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-4 py-4 font-body-md text-label-lg uppercase tracking-widest text-primary border-l-2 border-primary pl-4 bg-[#d4af37]/5 rounded-r-lg group mt-4">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span> Book Now
    </a>
  </nav>
</aside>

{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 glass-nav border-b border-primary/10 flex justify-between items-center px-6 md:px-20 py-4 transition-all duration-300 h-20">
  <a className="flex items-center gap-4 group" href="#">
    <Image width={48} height={48} priority alt="Vision Beyond Events Logo" className="h-12 w-auto object-contain drop-shadow-md rounded-full border border-primary/20 opacity-90 group-hover:opacity-100 transition-opacity" src="/images/vb_logo.png" />
    <span className="hidden md:block font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</span>
  </a>
  <div className="hidden md:flex items-center gap-gutter">
    <a className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="#services">Services</a>
    <a className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="/gallery">Gallery</a>
    <a className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
    <a className="gold-gradient-bg text-[#121212] font-body-md text-label-lg uppercase tracking-widest px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg" href="#contact">Book Now</a>
  </div>
  <button onClick={() => setIsDrawerOpen(true)} aria-label="Menu" className="md:hidden text-primary hover:text-primary-container transition-colors duration-300 active:scale-95 flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high">
    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
  </button>
</header>

{/* Main Hero Section */}
<main className="relative h-[100dvh] w-full min-h-[600px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 w-full h-full z-0 bg-black">
    <div className="absolute inset-0 scale-105 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]">
      <Image src="/images/sparkle_bg_ai.png" alt="Luxury Event" fill priority sizes="100vw" quality={90} className="object-cover object-center" />
    </div>
    <div className="absolute inset-0 hero-overlay"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none"></div>
  </div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-container-max mx-auto pt-20 fade-in-section">
    <div className="w-12 h-[1px] bg-[#f2ca50]/60 mb-8"></div>
    <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6 drop-shadow-2xl max-w-4xl leading-tight">
      Vision Beyond <br/>
      <span className="gold-gradient-text italic font-serif">Events</span>
    </h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant/90 mb-12 max-w-lg mx-auto tracking-widest opacity-80 uppercase">
      Crafting Experiences. Creating Memories.
    </p>
    <a className="gold-gradient-bg text-[#121212] font-body-md text-label-lg uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 transition-all duration-300 border border-primary/50 relative overflow-hidden group" href="#contact">
      <span className="relative z-10 flex items-center gap-2">
        Inquire Now
        <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
      </span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></div>
    </a>
  </div>
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity hidden md:flex">
    <span className="text-[10px] font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af]">Scroll</span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-[#f2ca50] to-transparent"></div>
  </div>
</main>

{/*  */}
<section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto" id="services">
<div className="text-center mb-20 fade-in-section">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tighter">Exquisite Services</h2>
<div className="w-24 h-px bg-primary/30 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
<div className="aspect-[16/9] w-full overflow-hidden relative">
<Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="Birthdays" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/birthday_IMG_20250710_182149.jpg.jpeg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Birthdays</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:row-span-2">
<div className="aspect-[3/4] h-full w-full overflow-hidden relative">
<Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Marriages" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_marriages.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Marriages</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square w-full overflow-hidden relative">
<Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Haldi" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Haldi</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square w-full overflow-hidden relative">
<Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Dandiya" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_dandiya.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Dandiya</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
<div className="aspect-[21/9] w-full overflow-hidden relative">
<Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="House Warming" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%] object-center" src="/images/housewarming.jpeg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">House Warming</h3>
</div>
</div>
{/* Corporate Events */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] h-full w-full overflow-hidden relative">
<Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Corporate Events" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/corporate_event.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Corporate & School Events</h3>
</div>
</div>
{/* Festival & Devotional Events */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-3">
<div className="aspect-[16/9] lg:aspect-[21/9] h-full w-full overflow-hidden relative">
<Image fill sizes="100vw" alt="Festival & Devotional Events" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/festival_devotional.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Festival & Devotional Events</h3>
</div>
</div>
</div>
</section>
{/*  */}
<section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto fade-in-section" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 bg-[#121212] ghost-border">
{/*  */}
<div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-primary/10">
<h2 className="font-headline-lg text-headline-lg text-primary mb-12 tracking-tighter">Get in Touch</h2>
<form className="space-y-8" onSubmit={handleContactSubmit}>
<div className="relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Name</label>
<input className="w-full input-minimal text-on-background focus:ring-0" placeholder="John Doe" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
</div>
<div className="relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Email</label>
<input className="w-full input-minimal text-on-background focus:ring-0" placeholder="john@example.com" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
</div>
<div className="relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Event Details</label>
<textarea className="w-full input-minimal text-on-background focus:ring-0 resize-none" placeholder="Tell us about your vision..." rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required></textarea>
</div>
<button className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-8 py-4 rounded-none hover:opacity-90 transition-opacity w-full sm:w-auto shadow-[0_4px_20px_rgba(0,0,0,0.5)] mt-8" type="submit">
                        Submit Inquiry
                    </button>
</form>
</div>
{/*  */}
<div className="p-10 md:p-16 flex flex-col justify-center bg-surface-dim/30">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6 tracking-tighter">The Newsletter</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-12">Subscribe for exclusive insights, trend reports, and a glimpse into our most spectacular events.</p>
<form className="flex flex-col sm:flex-row gap-4" onSubmit={handleNewsletterSubmit}>
<div className="flex-1">
<label className="sr-only">Email address</label>
<input className="w-full input-minimal text-on-background focus:ring-0 py-3" placeholder="Enter your email" type="email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required />
</div>
<button className="ghost-border text-on-background font-body-md text-label-lg uppercase tracking-widest px-6 py-3 rounded-none hover:border-primary hover:text-primary transition-colors whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>
{/*  */}
<footer className="w-full py-20 bg-surface-dim border-t border-primary/10">
<div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 gap-8 w-full max-w-[1440px] mx-auto">
<div className="flex flex-col gap-2 text-center lg:text-left">
  <div className="font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</div>
  <div className="font-body-md text-on-surface-variant flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
    <span>📞 +91 80818 08902</span>
    <span className="hidden sm:inline">|</span>
    <a href="#" className="hover:text-primary transition-colors">Instagram (Coming Soon)</a>
  </div>
</div>
<div className="flex gap-8">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
</div>
<div className="font-body-md text-body-md text-on-surface-variant text-center lg:text-right">
    © 2026 Vision Beyond Events.<br/>Crafting Memories Since 2024.
</div>
</div>
</footer>


    </>
  );
}
