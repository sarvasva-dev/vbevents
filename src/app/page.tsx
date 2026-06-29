"use client";
import { useState, useEffect } from "react";

import Image from 'next/image';

export default function Home() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

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
      
{/*  */}
<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
<a className="flex items-center gap-4 group" href="#">
<img loading="lazy" decoding="async" alt="Vision Beyond Events Logo" className="w-12 h-12 object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl" src="/images/vb_logo.png" />
<span className="hidden md:block font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</span>
</a>
<div className="hidden md:flex items-center gap-gutter">
<a className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="#services">Services</a>
<a className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="/gallery">Gallery</a>
<a className="font-body-md text-label-lg uppercase tracking-widest text-on-background/70 hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
</div>
<a className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-8 py-4 rounded-none hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(0,0,0,0.5)]" href="#contact">
                Book Now
            </a>
</div>
</nav>
{/*  */}
<section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
<div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden flex items-center justify-center">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
  <div className="font-playfair text-[50vw] md:text-[30vw] text-primary opacity-10 select-none font-bold leading-none tracking-tighter mix-blend-overlay">VB</div>
</div>
<div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col items-center gap-8 fade-in-section">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-4xl tracking-tighter">
                Vision Beyond Events
            </h1>
<p className="font-body-lg text-body-lg text-on-background/90 max-w-2xl tracking-widest uppercase">
                Crafting Experiences. Creating Memories.
            </p>
<a className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-10 py-5 mt-8 rounded-none hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(0,0,0,0.5)] inline-block" href="#contact">
                Inquire Now
            </a>
</div>
</section>
{/*  */}
<section className="py-[120px] md:py-[160px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="services">
<div className="text-center mb-20 fade-in-section">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tighter">Exquisite Services</h2>
<div className="w-24 h-px bg-primary/30 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter fade-in-section">
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
<div className="aspect-[16/9] w-full overflow-hidden">
<img loading="lazy" decoding="async" alt="Birthdays" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/birthday_IMG_20250710_182149.jpg.jpeg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Birthdays</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:row-span-2">
<div className="aspect-[3/4] h-full w-full overflow-hidden">
<img loading="lazy" decoding="async" alt="Marriages" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_marriages.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Marriages</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square w-full overflow-hidden">
<img loading="lazy" decoding="async" alt="Haldi" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Haldi</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square w-full overflow-hidden">
<img loading="lazy" decoding="async" alt="Dandiya" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_dandiya.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Dandiya</h3>
</div>
</div>
{/*  */}
<div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
<div className="aspect-[21/9] w-full overflow-hidden">
<img loading="lazy" decoding="async" alt="House Warming" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%] object-center" src="/images/housewarming.jpeg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">House Warming</h3>
</div>
</div>
</div>
</section>
{/*  */}
<section className="py-[120px] md:py-[160px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-in-section" id="contact">
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
<div className="flex flex-col lg:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto">
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
