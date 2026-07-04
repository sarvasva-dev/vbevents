import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ContactSection } from '@/components/ContactSection';
import { FadeIn } from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Hero Section */}
      <main className="relative h-[100dvh] w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <div className="absolute inset-0 scale-105 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]">
            <Image src="/images/sparkle_bg_ai.png" alt="Luxury Event" fill priority sizes="100vw" quality={90} className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
        <FadeIn className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-container-max mx-auto pt-20">
          <div className="w-12 h-[1px] bg-[#f2ca50]/60 mb-8"></div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6 drop-shadow-2xl max-w-4xl leading-tight">
            Vision Beyond <br/>
            <span className="gold-gradient-text italic font-serif">Events</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant/90 mb-12 max-w-lg mx-auto tracking-widest opacity-80 uppercase">
            Crafting Experiences. Creating Memories.
          </p>
          <Link className="gold-gradient-bg text-[#121212] font-body-md text-label-lg uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 transition-all duration-300 border border-primary/50 relative overflow-hidden group" href="/#contact">
            <span className="relative z-10 flex items-center gap-2">
              Inquire Now
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></div>
          </Link>
        </FadeIn>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity hidden md:flex">
          <span className="text-[10px] font-body-md text-label-lg uppercase tracking-widest text-[#d0c5af]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#f2ca50] to-transparent"></div>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto" id="services">
        <FadeIn className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tighter">Exquisite Services</h2>
          <div className="w-24 h-px bg-primary/30 mx-auto"></div>
        </FadeIn>
        
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
            <div className="aspect-[16/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="Luxury Birthday Party Planning by Vision Beyond Events" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/birthday_IMG_20250710_182149.jpg.jpeg"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Birthdays</h3>
            </div>
          </div>
          
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:row-span-2">
            <div className="aspect-[3/4] h-full w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Luxury Indian Wedding and Marriage Planning" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_marriages.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Marriages</h3>
            </div>
          </div>
          
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-square w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Vibrant Haldi Ceremony Setup" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Haldi</h3>
            </div>
          </div>
          
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-square w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Dandiya Nights Event Organizer" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_dandiya.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Dandiya</h3>
            </div>
          </div>
          
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
            <div className="aspect-[21/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="House Warming and Griha Pravesh Event Decor" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%] object-center" src="/images/housewarming.jpeg"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">House Warming</h3>
            </div>
          </div>
          
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] h-full w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Corporate and School Event Organizer" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/corporate_event.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Corporate & School Events</h3>
            </div>
          </div>
          
          <div className="group relative bg-[#121212] ghost-border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-3">
            <div className="aspect-[16/9] lg:aspect-[21/9] h-full w-full overflow-hidden relative">
              <Image fill sizes="100vw" alt="Festival and Devotional Event Planning" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/festival_devotional.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-fixed transition-colors">Festival & Devotional Events</h3>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto" id="contact">
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="w-full py-20 bg-surface-dim border-t border-primary/10">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 gap-8 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</div>
            <div className="font-body-md text-on-surface-variant flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>📞 +91 80818 08902</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/" className="hover:text-primary transition-colors">Instagram (Coming Soon)</Link>
            </div>
          </div>
          <div className="flex gap-8">
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/">Privacy Policy</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/">Terms of Service</Link>
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant text-center lg:text-right">
              © {new Date().getFullYear()} Vision Beyond Events.<br/>Crafting Memories Since 2024.
          </div>
        </div>
      </footer>
    </>
  );
}
