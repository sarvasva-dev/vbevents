const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!code.includes('useEffect')) {
    code = code.replace(/import { useState } from "react";/, 'import { useState, useEffect } from "react";');
}

const observerEffect = `
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
`;

if (!code.includes('IntersectionObserver')) {
    code = code.replace(/const \[newsletterEmail, setNewsletterEmail\] = useState\(''\);/, "const [newsletterEmail, setNewsletterEmail] = useState('');\n" + observerEffect);
}

fs.writeFileSync('src/app/page.tsx', code);
