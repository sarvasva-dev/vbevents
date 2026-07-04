const fs = require('fs');

const files = {
    'src/app/website2/page.tsx': 'Concept: Classic Elegance',
    'src/app/website3/page.tsx': 'Concept: Vibrant Traditional',
    'src/app/website4/page.tsx': 'Concept: Ultra-Modern Minimal'
};

for (const [file, title] of Object.entries(files)) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Add Metadata import if missing
        if (!content.includes("import { Metadata } from 'next';")) {
            content = content.replace("import React from 'react';", "import React from 'react';\nimport { Metadata } from 'next';");
        }

        // Add Metadata export if missing
        if (!content.includes('export const metadata')) {
            const metaBlock = `\nexport const metadata: Metadata = {
  title: "Vision Beyond Events | ${title}",
  description: "Preview of ${title} design for Vision Beyond Events.",
};\n\n`;
            content = content.replace("export default function", metaBlock + "export default function");
            fs.writeFileSync(file, content);
            console.log(`Updated metadata in ${file}`);
        }
    }
}
