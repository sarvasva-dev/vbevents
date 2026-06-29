const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

code = code.replace(/url\('https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^']+'\)/g, "url('/images/hero.jpeg')");

code = code.replace(/<img\s+alt="([^"]+)"[^>]*?src="https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^"]+"/g, (match, altText) => {
    if (altText === 'Birthdays') return match.replace(/src="[^"]+"/, 'src="/images/birthdays.jpeg"');
    if (altText === 'Marriages') return match.replace(/src="[^"]+"/, 'src="/images/marriages.jpeg"');
    if (altText === 'Haldi') return match.replace(/src="[^"]+"/, 'src="/images/haldi.png"');
    if (altText === 'Dandiya') return match.replace(/src="[^"]+"/, 'src="/images/dandiya.jpeg"');
    if (altText === 'House Warming') return match.replace(/src="[^"]+"/, 'src="/images/housewarming.jpeg"');
    return match;
});

fs.writeFileSync('src/app/page.tsx', code);
