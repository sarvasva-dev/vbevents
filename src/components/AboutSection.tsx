import { FadeIn } from "./FadeIn";
import ParallaxImage from "@/components/ParallaxImage";
import TextReveal from "@/components/TextReveal";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Images Column */}
        <div className="relative h-[600px] w-full hidden md:block">
          <FadeIn className="absolute top-0 left-0 w-3/4 h-[80%] z-10 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
            <ParallaxImage 
              src="/images/corporate_event.png" 
              alt="Corporate Event Setup" 
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
            />
          </FadeIn>
          <FadeIn className="absolute bottom-0 right-0 w-2/3 h-[60%] z-20">
            <div className="relative w-full h-full border-4 border-background shadow-2xl overflow-hidden">
              <ParallaxImage 
                src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png" 
                alt="Haldi Setup" 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </FadeIn>
          
          {/* Aesthetic Gold Badge */}
          <FadeIn className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 z-30 w-32 h-32 rounded-full gold-gradient-bg flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] animate-[spin_20s_linear_infinite]">
            <div className="w-full h-full absolute inset-0 flex items-center justify-center p-2 text-white">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                <text className="text-[14px] font-label-lg tracking-widest font-bold fill-current">
                  <textPath href="#curve">EST. 2024 â€¢ PREMIUM EVENTS â€¢</textPath>
                </text>
              </svg>
            </div>
          </FadeIn>
        </div>

        {/* Text Column */}
        <div className="flex flex-col justify-center">
          <FadeIn>
            <h4 className="font-label-lg text-primary uppercase tracking-[0.3em] mb-4">Our Story</h4>
            <TextReveal 
              text="We Don't Just Plan Events. We Curate Legacies."
              className="font-headline-lg text-headline-lg text-[#0f172a] mb-8 tracking-tighter"
              el="h2"
            />
            <div className="w-16 h-px bg-primary/50 mb-8"></div>
          </FadeIn>
          
          <FadeIn>
            <p className="font-body-lg text-[#475569]/90 mb-6 leading-relaxed">
              Founded on the belief that every celebration should be a masterpiece, Vision Beyond Events brings an unparalleled level of sophistication and detail to the Indian event landscape.
            </p>
            <p className="font-body-md text-[#475569]/70 mb-10 leading-relaxed">
              From the vibrant energy of Dandiya nights and the sacred intimacy of Haldi ceremonies to grand corporate galas and ultra-luxury weddings, our dedicated team works tirelessly behind the scenes. We blend traditional aesthetics with modern, high-end production to ensure your special day is absolutely flawless.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8 mt-4">
              <div>
                <div className="font-headline-md text-primary mb-2">50+</div>
                <div className="font-label-sm uppercase tracking-widest text-[#475569]/60">Events Mastered</div>
              </div>
              <div>
                <div className="font-headline-md text-primary mb-2">100%</div>
                <div className="font-label-sm uppercase tracking-widest text-[#475569]/60">Client Satisfaction</div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}


