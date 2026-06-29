const fs = require('fs');

let pageCode = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!pageCode.includes('isDrawerOpen')) {
  pageCode = pageCode.replace(
    /const \[newsletterEmail, setNewsletterEmail\] = useState\(''\);/,
    "const [newsletterEmail, setNewsletterEmail] = useState('');\n  const [isDrawerOpen, setIsDrawerOpen] = useState(false);"
  );
}

const stitchJsx = `
{/* Mobile Drawer Overlay */}
<div className={\`fixed inset-0 bg-black/60 backdrop-blur-sm z-[51] transition-opacity duration-300 \${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}\`} onClick={() => setIsDrawerOpen(false)}></div>
<aside className={\`fixed top-0 left-0 h-full w-80 bg-[#201f1f] shadow-2xl z-[52] flex flex-col gap-2 p-6 rounded-r-xl border-r border-[#4d4635]/20 overflow-y-auto transition-transform duration-300 ease-in-out \${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}\`}>
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
<header className="fixed top-0 w-full z-50 glass-nav border-b border-primary/10 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 transition-all duration-300 h-20">
  <a className="flex items-center gap-4 group" href="#">
    <img loading="lazy" decoding="async" alt="Vision Beyond Events Logo" className="h-12 w-auto object-contain drop-shadow-md rounded-full border border-primary/20 opacity-90 group-hover:opacity-100 transition-opacity" src="/images/vb_logo.png" />
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
  <div className="absolute inset-0 w-full h-full z-0">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCH4w0IfiV-_N8mrU5tCCqh49rhwu2cBxswugqWDQADQ0tF32KpkjTw4QaDQJta0BkFcWj_xA_QdzgbF9MpzjowvP0s8kouevOScHs8qshL8TUczwuULijSLYTnFp92hIV-KaU1-kgEG_LKWH9n39yN0ilk7cKA5TzMFRKObzqAOm6ImcpfWzqijb8jVox9VPNJO0jLXEuaDGb7V4GnGC7WsVgLCNAOy7bFaASwOG45j94_zsYLKp5y_GsWABTHP3fpj-4dFgA1l0rb')" }}></div>
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
`;

const replaceRegex = /\{\/\*  \*\/\}[\s\S]*?<nav[\s\S]*?<\/nav>[\s\S]*?\{\/\*  \*\/\}[\s\S]*?<section className="relative min-h-screen[\s\S]*?<\/section>/;
pageCode = pageCode.replace(replaceRegex, stitchJsx);
fs.writeFileSync('src/app/page.tsx', pageCode);

let cssCode = fs.readFileSync('src/app/globals.css', 'utf8');
const customCSS = "\n/* High-End Enhancements */\n.glass-nav {\n    background: rgba(19, 19, 19, 0.6);\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n}\n\n.gold-gradient-text {\n    background: linear-gradient(135deg, #f2ca50 0%, #d4af37 50%, #e9c349 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n}\n\n.gold-gradient-bg {\n    background: linear-gradient(135deg, #d4af37 0%, #705E21 100%);\n}\n\n.hero-overlay {\n    background: linear-gradient(to bottom, rgba(19,19,19,0.3) 0%, rgba(19,19,19,0.8) 70%, rgba(19,19,19,1) 100%);\n}\n\n@keyframes subtleZoom {\n    0% { transform: scale(1.05); }\n    100% { transform: scale(1.1); }\n}\n";

if (!cssCode.includes('.glass-nav')) {
    fs.writeFileSync('src/app/globals.css', cssCode + customCSS);
}
