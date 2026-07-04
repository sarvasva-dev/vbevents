
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Website2() {
  return (
    <>
      
{/**/}
<nav className="bg-surface/80 dark:bg-on-background/80 backdrop-blur-md fixed top-0 w-full z-50 bg-transparent flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex items-center gap-2"><Image src="/images/vb_logo.png" alt="Vision Beyond Events Logo" width={48} height={48} className="h-12 w-auto object-contain rounded-full" /></div>
<div className="hidden md:flex gap-gutter">
<Link className="font-label-md text-label-md uppercase tracking-widest text-primary dark:text-primary-fixed border-b border-secondary cursor-pointer transition-all hover:text-secondary transition-colors duration-300" href="/">Home</Link>
<Link className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant dark:text-on-primary-fixed-variant cursor-pointer transition-all hover:text-secondary transition-colors duration-300" href="/">Services</Link>
<Link className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant dark:text-on-primary-fixed-variant cursor-pointer transition-all hover:text-secondary transition-colors duration-300" href="/">Gallery</Link>
<Link className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant dark:text-on-primary-fixed-variant cursor-pointer transition-all hover:text-secondary transition-colors duration-300" href="/">Contact</Link>
</div>
<div>
<button className="bg-primary text-on-primary font-button text-button uppercase px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity">
                Inquire
            </button>
</div>
</nav>
<main className="pt-24 md:pt-32">
{/**/}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row items-center gap-gutter min-h-[819px]">
<div className="flex-1 max-w-2xl">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                    Crafting Experiences.<br/>
<span className="text-on-surface-variant">Creating Memories.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                    Elevated event design tailored for sophisticated celebrations. We transform visions into reality with precision, elegance, and unforgettable flair.
                </p>
<div className="flex gap-4">
<button className="bg-primary text-on-primary font-button text-button uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity">
                        View Portfolio
                    </button>
<button className="bg-transparent border border-[#D4AF37] text-[#D4AF37] font-button text-button uppercase px-8 py-4 rounded-DEFAULT hover:bg-[#D4AF37]/10 transition-colors">
                        Book Consultation
                    </button>
</div>
</div>
<div className="flex-1 w-full h-[600px]">
<div className="w-full h-full object-cover rounded-DEFAULT bg-cover bg-center" data-alt="A sophisticated, high-end event table setting. Minimalist white plates, polished gold cutlery, and subtle, elegant floral centerpieces featuring white orchids. Soft, natural lighting streams through large windows, highlighting the crisp white linen and creating a luxurious, serene atmosphere. The overall aesthetic is clean, bright, and deeply elegant." style={{"backgroundImage":"url('https"}}></div>
</div>
</section>
{/**/}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
<div className="mb-16">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Curated Services</h2>
<div className="w-12 h-[1px] bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/**/}
<div className="bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant transition-transform hover:-translate-y-1 duration-300">
<div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md"><Image src="/gallery/birthday_IMG_20250710_182149.jpg.jpeg" alt="Birthdays" fill className="object-cover" /></div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Birthdays</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Milestone celebrations designed with meticulous attention to detail and personalized themes.</p>
</div>
{/**/}
<div className="bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant transition-transform hover:-translate-y-1 duration-300">
<div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md"><Image src="/images/ai_marriages.png" alt="Marriages" fill className="object-cover" /></div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Marriages</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Elegant weddings that reflect your unique love story, planned seamlessly from start to finish.</p>
</div>
{/**/}
<div className="bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant transition-transform hover:-translate-y-1 duration-300">
<div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md"><Image src="/images/corporate_event.png" alt="Corporate Events" fill className="object-cover" /></div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Haldi &amp; Mehndi</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Vibrant pre-wedding ceremonies filled with color, joy, and traditional elegance.</p>
</div>
{/**/}
<div className="bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant transition-transform hover:-translate-y-1 duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{"fontVariationSettings":"'FILL' 0"}}>music_note</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Dandiya Nights</h3>
<p className="font-body-md text-body-md text-on-surface-variant">High-energy festive gatherings with spectacular decor and immersive cultural experiences.</p>
</div>
{/**/}
<div className="bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant transition-transform hover:-translate-y-1 duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{"fontVariationSettings":"'FILL' 0"}}>business_center</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Corporate Events</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Professional gatherings, galas, and school events executed with precision and brand alignment.</p>
</div>
{/**/}
<div className="bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant transition-transform hover:-translate-y-1 duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{"fontVariationSettings":"'FILL' 0"}}>temple_hindu</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Festival &amp; Devotional</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Sacred and festive events curated with respect, authenticity, and serene atmospheres.</p>
</div>
</div>
</section>
{/**/}
<section className="bg-surface-container-low py-section-gap">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-section-gap">
{/**/}
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-2">Begin the Journey</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Tell us about your upcoming event.</p>
<form className="space-y-6">
<div>
<label className="block font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-none focus:ring-0 focus:border-[#D4AF37] transition-colors" placeholder="Your full name" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Email</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-none focus:ring-0 focus:border-[#D4AF37] transition-colors" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Event Date</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-none focus:ring-0 focus:border-[#D4AF37] transition-colors" type="date"/>
</div>
</div>
<div>
<label className="block font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Details</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-none focus:ring-0 focus:border-[#D4AF37] transition-colors" placeholder="Briefly describe your vision..." rows={4}></textarea>
</div>
<button className="bg-primary text-on-primary font-button text-button uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity w-full md:w-auto" type="submit">
                            Submit Inquiry
                        </button>
</form>
</div>
{/**/}
<div className="flex flex-col justify-center">
<div className="bg-surface-container-lowest p-10 shadow-ambient border border-surface-variant">
<span className="material-symbols-outlined text-4xl text-secondary mb-4 block" style={{"fontVariationSettings":"'FILL' 0"}}>mail</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Join the Guestlist</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Subscribe to receive exclusive event inspiration and seasonal lookbooks.</p>
<div className="flex flex-col md:flex-row gap-4">
<input className="flex-1 bg-background border border-outline-variant p-4 rounded-none focus:ring-0 focus:border-[#D4AF37] transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-transparent border border-primary text-primary font-button text-button uppercase px-6 py-4 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
{/**/}
<footer className="bg-surface dark:bg-on-background w-full border-t border-outline-variant flex flex-col gap-unit py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="font-headline-md text-headline-md text-primary dark:text-primary-fixed">
                Vision Beyond Events
            </div>
<div className="flex gap-6">
<Link className="font-body-md text-body-md text-on-surface-variant transition-opacity hover:opacity-80 hover:text-secondary" href="/">Privacy Policy</Link>
<Link className="font-body-md text-body-md text-on-surface-variant transition-opacity hover:opacity-80 hover:text-secondary" href="/">Terms of Service</Link>
<Link className="font-body-md text-body-md text-on-surface-variant transition-opacity hover:opacity-80 hover:text-secondary" href="/">Press Kit</Link>
</div>
</div>
<div className="text-center mt-8 pt-8 border-t border-outline-variant/30">
<span className="font-body-md text-body-md text-on-surface-variant">© 2024 Vision Beyond Events. All rights reserved.</span>
</div>
</footer>

    </>
  );
}
