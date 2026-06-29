const fs = require('fs');

// Update page.tsx
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.replace(
    /<img alt="Vision Beyond Events Logo"[\s\S]*?src="data:image[\s\S]*?\/>/, 
    '<img alt="Vision Beyond Events Logo" className="w-12 h-12 object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl" src="/images/vb_logo.png" />'
);
fs.writeFileSync('src/app/page.tsx', code);

// Update gallery/page.tsx
let galleryCode = fs.readFileSync('src/app/gallery/page.tsx', 'utf8');
galleryCode = galleryCode.replace(
    /<span className="hidden md:block font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events<\/span>/,
    '<img alt="Vision Beyond Events Logo" className="w-12 h-12 object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl" src="/images/vb_logo.png" />\n            <span className="hidden md:block font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</span>'
);
fs.writeFileSync('src/app/gallery/page.tsx', galleryCode);

console.log("Logos updated successfully.");
