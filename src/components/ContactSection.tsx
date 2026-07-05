"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    eventType: '',
    destination: '',
    guestCount: '',
    date: '',
    message: '' 
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'consultation' })
      });
      if (res.ok) {
        alert('Thank you for requesting a private consultation. Our team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', eventType: '', destination: '', guestCount: '', date: '', message: '' });
      } else {
        alert('Failed to send request. Please try again or contact us via WhatsApp.');
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
      {/* Consultation Form */}
      <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-primary/10">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tighter">Private Consultation</h2>
        <p className="font-body-md text-on-surface-variant mb-12">Share the preliminary details of your vision, and our team will curate a bespoke proposal.</p>
        <form className="space-y-6" onSubmit={handleContactSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Name *</label>
              <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="Your Name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required disabled={loading} />
            </div>
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Phone Number *</label>
              <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="+91" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required disabled={loading} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Email Address *</label>
              <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="Email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required disabled={loading} />
            </div>
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Event Type *</label>
              <select className="w-full input-minimal text-on-background focus:ring-0 bg-transparent" value={formData.eventType} onChange={e => setFormData({...formData, eventType: e.target.value})} required disabled={loading}>
                <option value="" disabled className="bg-[#121212]">Select Type</option>
                <option value="Destination Wedding" className="bg-[#121212]">Destination Wedding</option>
                <option value="Corporate Retreat" className="bg-[#121212]">Corporate Retreat</option>
                <option value="Private Celebration" className="bg-[#121212]">Private Celebration</option>
                <option value="Brand Activation" className="bg-[#121212]">Brand Activation</option>
                <option value="Other" className="bg-[#121212]">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Destination / City</label>
              <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="e.g. Udaipur, Dubai" type="text" value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})} disabled={loading} />
            </div>
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Estimated Guests</label>
              <select className="w-full input-minimal text-on-background focus:ring-0 bg-transparent" value={formData.guestCount} onChange={e => setFormData({...formData, guestCount: e.target.value})} disabled={loading}>
                <option value="" disabled className="bg-[#121212]">Select Count</option>
                <option value="Under 50" className="bg-[#121212]">Under 50 (Intimate)</option>
                <option value="50 - 200" className="bg-[#121212]">50 - 200</option>
                <option value="200 - 500" className="bg-[#121212]">200 - 500</option>
                <option value="500+" className="bg-[#121212]">500+ (Grand Scale)</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Preferred Dates</label>
            <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="e.g. November 2024" type="text" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} disabled={loading} />
          </div>
          <div className="relative">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Additional Details</label>
            <textarea className="w-full input-minimal text-on-background focus:ring-0 resize-none" placeholder="Tell us more about your vision..." rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} disabled={loading}></textarea>
          </div>
          <button className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-8 py-4 rounded-none hover:opacity-90 transition-opacity w-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] mt-8 disabled:opacity-50" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Request Consultation'}
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
