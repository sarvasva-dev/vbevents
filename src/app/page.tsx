import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import AnimatedBackground from '@/components/AnimatedBackground';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: "Best Luxury Event Organizer India ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Destination Weddings & Corporate Events | Vision Beyond Events",
  description: "Vision Beyond Events is the premier luxury event planner in India. We specialize in destination weddings in Udaipur, corporate events, and memorable private celebrations.",
  keywords: ["best event organizer India", "destination wedding planner Udaipur", "luxury wedding planner Mumbai", "corporate event organizer Delhi", "top wedding planner India", "premium event management"],
  alternates: {
    canonical: "https://www.vbevents.co.in",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Hero Section */}
      <main className="relative h-[100dvh] w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-[#ffffff]">
        {/* Background Image of a grand luxury event stage */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/ai_marriages.png" 
            alt="Grand Luxury Event Decor" 
            fill 
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          {/* Dense premium light overlay for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white"></div>
        </div>

        <FadeIn className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto pt-20">
          <div className="w-12 h-[1px] bg-[#d4af37]/60 mb-8"></div>
          <TextReveal 
            text="Making Your Dream Weddings & Luxury Events a Reality." 
            className="font-headline-lg text-4xl md:text-6xl lg:text-7xl text-[#0f172a] mb-12 max-w-4xl leading-tight font-semibold"
            el="h1"
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link className="inline-block gold-gradient-bg text-[#0d1526] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]" href="/contact">
              Plan Your Event
            </Link>
            <Link className="inline-block border border-[#d4af37] text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:bg-[#d4af37] hover:text-[#0d1526] transition-colors duration-300 backdrop-blur-sm" href="/gallery?v=1">
              See Our Work
            </Link>
          </div>
        </FadeIn>
      </main>

      {/* Press / Editorial Mentions Strip */}
      <div className="w-full border-y border-[#d4af37]/30 bg-transparent py-8 overflow-hidden">
        <div className="flex justify-center items-center gap-12 md:gap-24 opacity-40 grayscale flex-wrap px-6">
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>VOGUE</span>
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>HARPER&apos;S BAZAAR</span>
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>GQ</span>
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>FORBES</span>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 px-6 md:px-20 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#d4af37] mb-6">Who We Are</p>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-[#0f172a] mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            We turn your special moments into unforgettable memories.
          </h2>
          <p className="font-body-md text-[#475569] text-lg leading-relaxed">
            Based in India, Vision Beyond Events is a premium event management company dedicated to crafting flawless destination weddings, grand corporate events, and intimate private celebrations. Our passion is to take away all your stress so you can truly enjoy your big day. From finding the perfect venue to designing breathtaking decor, our team handles everything with a warm, personal touch.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20 glass-card border-x-0 border-y border-[#d4af37]/30 backdrop-blur-md rounded-none shadow-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/30">
          <div className="py-4 md:py-0">
            <h3 className="font-headline-lg text-5xl md:text-6xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>500+</h3>
            <p className="font-body-md text-[#475569] text-sm uppercase tracking-widest">Happy Guests Hosted Globally</p>
          </div>
          <div className="py-4 md:py-0">
            <h3 className="font-headline-lg text-5xl md:text-6xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>22+</h3>
            <p className="font-body-md text-[#475569] text-sm uppercase tracking-widest">Successful Events Completed</p>
          </div>
          <div className="py-4 md:py-0">
            <h3 className="font-headline-lg text-5xl md:text-6xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>100%</h3>
            <p className="font-body-md text-[#475569] text-sm uppercase tracking-widest">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-20 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose Us?</h2>
            <p className="font-body-md text-[#475569] text-lg">We bring expertise, elegance, and peace of mind to your celebrations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 text-center rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-4">diamond</span>
              <h3 className="font-headline-sm text-xl text-[#0f172a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Premium Venues</h3>
              <p className="font-body-md text-[#475569] text-sm">Exclusive access to the best palaces, resorts, and banquet halls across India.</p>
            </div>
            <div className="glass-card p-8 text-center rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-4">support_agent</span>
              <h3 className="font-headline-sm text-xl text-[#0f172a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Expert Planning</h3>
              <p className="font-body-md text-[#475569] text-sm">Our dedicated team manages everything from catering to guest hospitality smoothly.</p>
            </div>
            <div className="glass-card p-8 text-center rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-4">security</span>
              <h3 className="font-headline-sm text-xl text-[#0f172a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Complete Privacy</h3>
              <p className="font-body-md text-[#475569] text-sm">We ensure 100% security and confidentiality for our VIP guests and high-profile clients.</p>
            </div>
            <div className="glass-card p-8 text-center rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-4">check_circle</span>
              <h3 className="font-headline-sm text-xl text-[#0f172a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Stress-Free Experience</h3>
              <p className="font-body-md text-[#475569] text-sm">You enjoy the celebration while we handle all the behind-the-scenes hard work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discretion Teaser */}
      <section className="py-24 px-6 md:px-20 glass-card border-x-0 border-y border-[#d4af37]/30 backdrop-blur-md rounded-none shadow-none">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Your Privacy, Our Priority.</h2>
            <p className="font-body-md text-[#475569] text-lg leading-relaxed mb-8">
              We understand that some celebrations require absolute discretion. For our special guests, VIPs, and corporate leaders, we provide strict privacy protocols. Your event details, guest lists, and memories are kept completely secure and confidential.
            </p>
            <Link className="inline-flex items-center gap-2 font-body-md text-label-lg uppercase tracking-widest text-[#d4af37] hover:text-[#0f172a] transition-colors" href="/discretion">
              View Our Privacy Policy <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
          <div className="md:w-1/2 relative aspect-square w-full max-w-md mx-auto border border-[#d4af37]/30 p-4 rounded-full">
            <div className="w-full h-full bg-transparent flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-[80px] text-[#d4af37]/50" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto bg-transparent" id="services">
        <FadeIn className="text-center mb-20">
          <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">What We Do</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-4 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h2>
          <div className="w-24 h-px bg-[#d4af37]/30 mx-auto"></div>
        </FadeIn>
        
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/gallery?v=1#birthdays" className="block group relative bg-transparent border border-[#d4af37]/30 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2 hover:border-[#d4af37]/40">
            <div className="aspect-[16/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="Luxury Birthday Party Planning by Vision Beyond Events" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/birthday_IMG_20250710_182149.jpg.jpeg"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Birthdays</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#marriages" className="block group relative bg-transparent border border-[#d4af37]/30 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:row-span-2 hover:border-[#d4af37]/40">
            <div className="aspect-[3/4] h-full w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Luxury Indian Wedding and Marriage Planning" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_marriages.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Marriages</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#haldi-ceremonies" className="block group relative bg-transparent border border-[#d4af37]/30 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/40 lg:col-span-2">
            <div className="aspect-[16/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="Vibrant Haldi Ceremony Setup" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Haldi</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#house-warming-griha-pravesh" className="block group relative bg-transparent border border-[#d4af37]/30 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2 hover:border-[#d4af37]/40">
            <div className="aspect-[21/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="House Warming and Griha Pravesh Event Decor" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%] object-center" src="/images/housewarming.jpeg"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>House Warming</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#corporate-school-events" className="block group relative bg-transparent border border-[#d4af37]/30 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/40">
            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] h-full w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Corporate and School Event Organizer" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/corporate_event.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Corporate & School Events</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#festival-devotional-events" className="block group relative bg-transparent border border-[#d4af37]/30 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-3 hover:border-[#d4af37]/40">
            <div className="aspect-[16/9] lg:aspect-[21/9] h-full w-full overflow-hidden relative">
              <Image fill sizes="100vw" alt="Festival and Devotional Event Planning" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/festival_devotional.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Festival & Devotional Events</h3>
            </div>
          </Link>
        </FadeIn>
      </section>

      {/* Featured Case Studies / Logistical Masterpieces */}
      <section className="py-24 px-6 md:px-20 bg-transparent border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#d4af37] mb-4">Featured Work</p>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-[#0f172a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Logistical Masterpieces</h2>
            <p className="font-body-md text-[#475569] text-lg max-w-2xl mx-auto">Behind every breathtaking luxury celebration lies a masterclass in precision, security, and execution.</p>
            <div className="w-24 h-px bg-[#d4af37]/30 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-2xl flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300">
              <div>
                <span className="font-label-sm text-[#d4af37] uppercase tracking-[0.2em] mb-4 block">Case Study 01</span>
                <h3 className="font-headline-sm text-2xl text-[#0f172a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>The Udaipur Palace Buyout</h3>
                <p className="font-body-md text-[#475569] text-sm leading-relaxed mb-6">
                  Coordination of a 3-day royal buyout for 350 international guests across Taj Lake Palace & Jagmandir Island. Managed private air charter ground logistics, 24/7 guest concierges, and custom floral fabrications shipped from Bangalore, all under strict NDA guidelines.
                </p>
              </div>
              <div className="border-t border-[#d4af37]/20 pt-6 mt-4">
                <span className="font-label-sm text-[#d4af37] uppercase tracking-widest text-xs">Udaipur, Rajasthan</span>
              </div>
            </div>

            <div className="glass-card p-10 rounded-2xl flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300">
              <div>
                <span className="font-label-sm text-[#d4af37] uppercase tracking-[0.2em] mb-4 block">Case Study 02</span>
                <h3 className="font-headline-sm text-2xl text-[#0f172a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>The Monsoon Offsite</h3>
                <p className="font-body-md text-[#475569] text-sm leading-relaxed mb-6">
                  Strategic contingency execution for a Fortune 500 leadership retreat during peak monsoon in Western Ghats. Implemented complete power redundancy, weatherproofed outdoor installations, and coordinated secure transport for 120 C-suite executives with zero delays.
                </p>
              </div>
              <div className="border-t border-[#d4af37]/20 pt-6 mt-4">
                <span className="font-label-sm text-[#d4af37] uppercase tracking-widest text-xs">Western Ghats, India</span>
              </div>
            </div>

            <div className="glass-card p-10 rounded-2xl flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300">
              <div>
                <span className="font-label-sm text-[#d4af37] uppercase tracking-[0.2em] mb-4 block">Case Study 03</span>
                <h3 className="font-headline-sm text-2xl text-[#0f172a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Private Heritage Fort</h3>
                <p className="font-body-md text-[#475569] text-sm leading-relaxed mb-6">
                  A deeply private, culturally-rooted wedding celebration in a remote 15th-century fort. Crafted an intimate, non-ostentatious setup utilizing local clay artisans and block-printers, with full security shielding and absolute social media embargo.
                </p>
              </div>
              <div className="border-t border-[#d4af37]/20 pt-6 mt-4">
                <span className="font-label-sm text-[#d4af37] uppercase tracking-widest text-xs">Jodhpur Outskirts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-20 bg-transparent border-t border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#d4af37] mb-4">Happy Clients</p>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-[#0f172a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What People Say</h2>
            <div className="w-24 h-px bg-[#d4af37]/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex gap-1 text-[#d4af37] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-[#475569] italic mb-6">
                &quot;Vision Beyond Events made our Udaipur destination wedding absolutely magical. From the decor to guest hospitality, everything was perfect. We didn&apos;t have to worry about a single thing!&quot;
              </p>
              <div className="font-headline-sm text-[#0f172a]">Rahul & Sneha</div>
              <div className="font-body-md text-sm text-[#d4af37]">Destination Wedding</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex gap-1 text-[#d4af37] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-[#475569] italic mb-6">
                &quot;We hired them for our company&apos;s annual leadership summit. Their professionalism and attention to detail, especially regarding security and privacy, was highly impressive.&quot;
              </p>
              <div className="font-headline-sm text-[#0f172a]">Amit Sharma</div>
              <div className="font-body-md text-sm text-[#d4af37]">Corporate Event</div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex gap-1 text-[#d4af37] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-[#475569] italic mb-6">
                &quot;Best event planners in town! They organized my son&apos;s first birthday party. The decor was breathtaking and the management was flawless. Highly recommended.&quot;
              </p>
              <div className="font-headline-sm text-[#0f172a]">Priya Patel</div>
              <div className="font-body-md text-sm text-[#d4af37]">Birthday Celebration</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-20 bg-transparent border-t border-[#d4af37]/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Frequently Asked Questions</h2>
            <p className="font-body-md text-[#475569] text-lg">Got questions? We have answers to help you get started.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <details className="group glass-card rounded-2xl open:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex justify-between items-center font-headline-sm text-xl text-[#0f172a] cursor-pointer p-6 list-none">
                Do you plan events outside of your city?
                <span className="material-symbols-outlined text-[#d4af37] group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body-md text-[#475569] leading-relaxed">
                Yes! We are destination wedding specialists. Whether you want to get married in Udaipur, Jaipur, Goa, Mumbai, or internationally, our team will travel to manage the entire event smoothly.
              </div>
            </details>
            
            <details className="group glass-card rounded-2xl open:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex justify-between items-center font-headline-sm text-xl text-[#0f172a] cursor-pointer p-6 list-none">
                Do you handle everything from decor to catering?
                <span className="material-symbols-outlined text-[#d4af37] group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body-md text-[#475569] leading-relaxed">
                Absolutely. We provide end-to-end event management. This includes venue booking, luxury decor, catering, photography, guest hospitality, transport, and artist management.
              </div>
            </details>

            <details className="group glass-card rounded-2xl open:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex justify-between items-center font-headline-sm text-xl text-[#0f172a] cursor-pointer p-6 list-none">
                How do I book a consultation with your team?
                <span className="material-symbols-outlined text-[#d4af37] group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body-md text-[#475569] leading-relaxed">
                You can easily book a private consultation by clicking the &quot;Inquire&quot; button at the top of the page. Fill out the contact form, and our team will get back to you within 24 hours.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* The Team Teaser */}
      <section className="py-24 px-6 md:px-20 bg-transparent border-t border-[#d4af37]/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#d4af37] mb-6">Our Team</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-[#0f172a] mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            A passionate team backed by professional experience.
          </h2>
          <p className="font-body-md text-[#475569] text-lg leading-relaxed mb-10">
            We operate with a perfect balance of beautiful design and strong management. Discover why we are India&apos;s most trusted event organizers for weddings and celebrations.
          </p>
          <Link className="inline-block border border-on-surface/20 text-[#0f172a] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-300" href="/about">
            Meet The Team
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}




