import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#ffffff]/80 backdrop-blur-md border-t border-[#d4af37]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-800">
        
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div>
            <div className="font-headline-md text-3xl text-[#d4af37] tracking-tighter mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Vision Beyond Events
            </div>
            <div className="font-body-md text-slate-500 text-xs tracking-[0.2em] uppercase">
              Luxury Event Planners & Experience Architects
            </div>
          </div>
          <p className="font-body-md text-sm text-slate-600 leading-relaxed max-w-sm">
            Crafting flawless destination weddings, grand corporate offsites, and bespoke celebrations across India. Operating with absolute discretion.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <div className="font-headline-sm text-lg text-[#0f172a] font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Explore</div>
          <nav className="flex flex-col gap-2 font-body-md text-sm text-slate-600">
            <Link className="hover:text-[#a07820] transition-colors" href="/services/weddings">Our Services</Link>
            <Link className="hover:text-[#a07820] transition-colors" href="/gallery?v=1">Our Gallery</Link>
            <Link className="hover:text-[#a07820] transition-colors" href="/about">About Us</Link>
            <Link className="hover:text-[#a07820] transition-colors" href="/discretion">Discretion Protocols</Link>
            <Link className="hover:text-[#a07820] transition-colors" href="/contact">Inquire</Link>
          </nav>
        </div>

        {/* Contact / Portal Column */}
        <div className="flex flex-col gap-4">
          <div className="font-headline-sm text-lg text-[#0f172a] font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Get In Touch</div>
          <div className="flex flex-col gap-2 font-body-md text-sm text-slate-600">
            <span>📞 +91 80818 08902</span>
            <span>✉️ contact@vbevents.co.in</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider mt-2 block">Client Infrastructure</span>
            <span className="text-slate-400 opacity-70 cursor-not-allowed select-none flex items-center gap-1 hover:text-[#a07820] transition-colors text-xs" title="Secure Client Portal (Planning Workspace)">
              <span className="material-symbols-outlined text-[14px]">lock</span> Client Workspace
            </span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
        <div>
          © {new Date().getFullYear()} Vision Beyond Events. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/discretion" className="hover:text-[#a07820] transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/" className="hover:text-[#a07820] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
