const fs = require('fs');

const assets = {
    Birthdays: '/gallery/birthday_IMG_20250710_182149.jpg.jpeg',
    Marriages: '/images/ai_marriages.png',
    Haldi: '/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png',
    Dandiya: '/images/ai_dandiya.png',
    'Corporate Events': '/images/corporate_event.png',
    'Festival & Devotional': '/images/festival_devotional.png',
    'Devotional Events': '/images/festival_devotional.png'
};

const logoSrc = '/images/vb_logo.png';
const heroSrc = '/images/sparkle_bg_ai.png';

['src/app/website2/page.tsx', 'src/app/website3/page.tsx', 'src/app/website4/page.tsx'].forEach(f => {
    if (!fs.existsSync(f)) return;
    let data = fs.readFileSync(f, 'utf8');

    // Replace Navbar logo text
    data = data.replace(
        /<div className="[^"]*?font-headline-sm[^"]*?">[\s\S]*?Vision Beyond Events[\s\S]*?<\/div>/i,
        `<div className="flex items-center gap-2"><Image src="${logoSrc}" alt="Vision Beyond Events Logo" width={48} height={48} className="h-12 w-auto object-contain rounded-full" /></div>`
    );

    // Replace generic background images with the main hero image
    // Find style={{backgroundImage: "url('https...')"}}
    data = data.replace(/style=\{\{\s*"backgroundImage"\s*:\s*"url\('[^']*'\)"\s*\}\}/g, `style={{backgroundImage: "url('${heroSrc}')"}}`);
    data = data.replace(/style=\{\{\s*"backgroundImage"\s*:\s*"url\([^)]+\)"\s*\}\}/g, `style={{backgroundImage: "url('${heroSrc}')"}}`);

    // Replace Icons with Real Images
    Object.keys(assets).forEach(key => {
        const imgSrc = assets[key];
        const regex = new RegExp(`(<span className="material-symbols-outlined[^>]*>[^<]+<\\/span>)([\\s\\S]*?<h3[^>]*>${key}<\\/h3>)`, 'gi');
        data = data.replace(regex, `<div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md"><Image src="${imgSrc}" alt="${key}" fill className="object-cover" /></div>$2`);
    });

    // Fix dummy links
    data = data.replace(/href="#"/g, 'href="/"');

    fs.writeFileSync(f, data);
    console.log(`Updated ${f}`);
});
