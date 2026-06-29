const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!code.includes('"use client"')) {
    code = '"use client";\nimport { useState } from "react";\n' + code;
}

// Add state and handlers
const handlers = `
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, type: 'contact' })
    });
    alert('Thank you for your inquiry. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail, type: 'newsletter' })
    });
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };
`;

if (!code.includes('handleContactSubmit')) {
    code = code.replace(/export default function Home\(\) {/, 'export default function Home() {\n' + handlers + '\n');
}

// Update the contact form
code = code.replace(/<form className="space-y-8">/, '<form className="space-y-8" onSubmit={handleContactSubmit}>');
code = code.replace(/<input className="w-full input-minimal text-on-background focus:ring-0" placeholder="John Doe" type="text"\/>/, '<input className="w-full input-minimal text-on-background focus:ring-0" placeholder="John Doe" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />');
code = code.replace(/<input className="w-full input-minimal text-on-background focus:ring-0" placeholder="john@example.com" type="email"\/>/, '<input className="w-full input-minimal text-on-background focus:ring-0" placeholder="john@example.com" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />');
code = code.replace(/<textarea className="w-full input-minimal text-on-background focus:ring-0 resize-none" placeholder="Tell us about your vision\.\.\." rows="3"><\/textarea>/, '<textarea className="w-full input-minimal text-on-background focus:ring-0 resize-none" placeholder="Tell us about your vision..." rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required></textarea>');

// Update newsletter form
code = code.replace(/<form className="flex flex-col sm:flex-row gap-4">/, '<form className="flex flex-col sm:flex-row gap-4" onSubmit={handleNewsletterSubmit}>');
code = code.replace(/<input className="w-full input-minimal text-on-background focus:ring-0 py-3" placeholder="Enter your email" type="email"\/>/, '<input className="w-full input-minimal text-on-background focus:ring-0 py-3" placeholder="Enter your email" type="email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required />');

// Update footer with phone and "Since 2024"
code = code.replace(/<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto">([\s\S]*?)<\/footer>/, `<div className="flex flex-col lg:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto">
<div className="flex flex-col gap-2 text-center lg:text-left">
  <div className="font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</div>
  <div className="font-body-md text-on-surface-variant flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
    <span>📞 +91 80818 08902</span>
    <span className="hidden sm:inline">|</span>
    <a href="#" className="hover:text-primary transition-colors">Instagram (Coming Soon)</a>
  </div>
</div>
<div className="flex gap-8">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
</div>
<div className="font-body-md text-body-md text-on-surface-variant text-center lg:text-right">
    © 2026 Vision Beyond Events.<br/>Crafting Memories Since 2024.
</div>
</div>
</footer>`);

fs.writeFileSync('src/app/page.tsx', code);
