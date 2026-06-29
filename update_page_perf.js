const fs = require('fs');

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Replace Hero background
const heroRegex = /<div className="absolute inset-0 z-0">[\s\S]*?<\/div>/;
const newHeroBg = `<div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden flex items-center justify-center">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
  <div className="font-playfair text-[50vw] md:text-[30vw] text-primary opacity-10 select-none font-bold leading-none tracking-tighter mix-blend-overlay">VB</div>
</div>`;
code = code.replace(heroRegex, newHeroBg);

// 2. Add loading="lazy" decoding="async" to all images (except the logo in the nav, though it doesn't matter much)
// We will replace `<img alt="` with `<img loading="lazy" decoding="async" alt="` 
// Except the logo which is handled separately or we can just replace all.
code = code.replace(/<img alt=/g, '<img loading="lazy" decoding="async" alt=');

fs.writeFileSync('src/app/page.tsx', code);
console.log("Performance and Hero changes applied to page.tsx");
