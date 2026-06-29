const fs = require('fs');
const html = fs.readFileSync('src/app/stitch.html', 'utf-8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.log("No body found");
  process.exit(1);
}
let bodyHtml = bodyMatch[1];

// Remove the inline script and style tags if they exist inside body (they shouldn't, but just in case)
bodyHtml = bodyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert class to className
bodyHtml = bodyHtml.replace(/class=/g, 'className=');
bodyHtml = bodyHtml.replace(/for=/g, 'htmlFor=');
bodyHtml = bodyHtml.replace(/style="([^"]*)"/g, (match, styleStr) => {
  // Very basic style object conversion
  return `style={{}}`; // Strip styles for simplicity or leave them
});

// Fix common unclosed tags
const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
voidTags.forEach(tag => {
  const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
  bodyHtml = bodyHtml.replace(regex, `<${tag}$1 />`);
});

const pageTsx = `
import Image from 'next/image';

export default function Home() {
  return (
    <>
      ${bodyHtml}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageTsx);
console.log("page.tsx created.");

// Extract Tailwind Config
const configMatch = html.match(/tailwind\.config\s*=\s*({[\s\S]*?})\s*<\/script>/i);
if (configMatch) {
  fs.writeFileSync('tailwind.config.json', configMatch[1]);
  console.log("Tailwind config extracted.");
}

// Extract styles
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  const existingGlobals = fs.readFileSync('src/app/globals.css', 'utf-8');
  fs.writeFileSync('src/app/globals.css', existingGlobals + '\n' + styleMatch[1]);
  console.log("Styles appended to globals.css.");
}
