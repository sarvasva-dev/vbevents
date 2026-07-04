"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' })
      });
      if (res.ok) {
        alert('Thank you for your inquiry. We will get back to you soon!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (e) {
      alert('An error occurred.');
    }
    setLoading(false);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, type: 'newsletter' })
      });
      if (res.ok) {
        alert('Thank you for subscribing to our newsletter!');
        setNewsletterEmail('');
      } else {
        alert('Failed to subscribe.');
      }
    } catch (e) {
      alert('An error occurred.');
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#121212] ghost-border">
      {/* Contact Form */}
      <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-primary/10">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12 tracking-tighter">Get in Touch</h2>
        <form className="space-y-8" onSubmit={handleContactSubmit}>
          <div className="relative">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Name</label>
            <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="John Doe" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required disabled={loading} />
          </div>
          <div className="relative">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Email</label>
            <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="john@example.com" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required disabled={loading} />
          </div>
          <div className="relative">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Event Details</label>
            <textarea className="w-full input-minimal text-on-background focus:ring-0 resize-none" placeholder="Tell us about your vision..." rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required disabled={loading}></textarea>
          </div>
          <button className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-8 py-4 rounded-none hover:opacity-90 transition-opacity w-full sm:w-auto shadow-[0_4px_20px_rgba(0,0,0,0.5)] mt-8 disabled:opacity-50" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>

      {/* Newsletter */}
      <div className="p-10 md:p-16 flex flex-col justify-center bg-surface-dim/30">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6 tracking-tighter">The Newsletter</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-12">Subscribe for exclusive insights, trend reports, and a glimpse into our most spectacular events.</p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleNewsletterSubmit}>
          <div className="flex-1">
            <label className="sr-only">Email address</label>
            <input className="w-full input-minimal text-on-background focus:ring-0 py-3" placeholder="Enter your email" type="email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required disabled={loading} />
          </div>
          <button className="ghost-border text-on-background font-body-md text-label-lg uppercase tracking-widest px-6 py-3 rounded-none hover:border-primary hover:text-primary transition-colors whitespace-nowrap disabled:opacity-50" type="submit" disabled={loading}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
