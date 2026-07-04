const fs = require('fs');

['src/app/website2/page.tsx', 'src/app/website3/page.tsx', 'src/app/website4/page.tsx'].forEach(f => {
    if (!fs.existsSync(f)) return;
    let data = fs.readFileSync(f, 'utf8');

    // Add import Link from 'next/link'; if not present
    if (!data.includes("import Link from 'next/link';")) {
        data = data.replace(/import Image from 'next\/image';/, "import Image from 'next/image';\nimport Link from 'next/link';");
    }

    // Replace <a> tags with <Link>
    data = data.replace(/<a /g, '<Link ');
    data = data.replace(/<\/a>/g, '</Link>');

    fs.writeFileSync(f, data);
    console.log(`Updated links in ${f}`);
});
