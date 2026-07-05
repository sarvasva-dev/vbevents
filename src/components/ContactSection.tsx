"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  disabled 
}: { 
  value: string; 
  onChange: (val: string) => void; 
  options: {value: string, label: string}[]; 
  placeholder: string; 
  disabled?: boolean 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button 
        type="button" 
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full input-minimal flex justify-between items-center text-left ${!value ? 'text-on-surface-variant' : 'text-on-background'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span>{value ? options.find(o => o.value === value)?.label : placeholder}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-[#121212] border border-primary/20 z-50 shadow-2xl max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <div 
              key={opt.value}
              className={`px-4 py-3 font-body-md text-sm cursor-pointer transition-colors ${value === opt.value ? 'bg-primary/20 text-primary' : 'text-on-surface hover:bg-primary/10 hover:text-primary'}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [newsletterStatus, setNewsletterStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    if (!formData.eventType) {
      setSubmitStatus({ type: 'error', message: 'Please select an Event Type to proceed.' });
      return;
    }
    if (!formData.guestCount) {
      setSubmitStatus({ type: 'error', message: 'Please estimate your Guest Count.' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'consultation' })
      });
      
      const responseData = await res.json().catch(() => ({}));
      
      if (res.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for requesting a private consultation. Our team will contact you shortly.' });
        setFormData({ name: '', email: '', phone: '', eventType: '', destination: '', guestCount: '', date: '', message: '' });
      } else {
        let errorMessage = responseData.message || 'Failed to send request. Please try again.';
        if (responseData.errors) {
          const firstErrorKey = Object.keys(responseData.errors).find(k => k !== '_errors');
          if (firstErrorKey && responseData.errors[firstErrorKey]._errors) {
            errorMessage = responseData.errors[firstErrorKey]._errors[0];
          }
        }
        setSubmitStatus({ type: 'error', message: errorMessage });
      }
    } catch (e) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    }
    setLoading(false);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNewsletterStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, type: 'newsletter' })
      });
      
      const responseData = await res.json().catch(() => ({}));
      
      if (res.ok) {
        setNewsletterStatus({ type: 'success', message: 'Thank you for subscribing to our newsletter!' });
        setNewsletterEmail('');
      } else {
        let errorMessage = responseData.message || 'Failed to subscribe.';
        if (responseData.errors && responseData.errors.email) {
          errorMessage = responseData.errors.email._errors[0];
        }
        setNewsletterStatus({ type: 'error', message: errorMessage });
      }
    } catch (e) {
      setNewsletterStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#121212] ghost-border relative z-10">
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
            <div className="relative z-30">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Event Type *</label>
              <CustomSelect 
                value={formData.eventType}
                onChange={val => setFormData({...formData, eventType: val})}
                placeholder="Select Type"
                disabled={loading}
                options={[
                  {value: 'Destination Wedding', label: 'Destination Wedding'},
                  {value: 'Corporate Retreat', label: 'Corporate Retreat'},
                  {value: 'Private Celebration', label: 'Private Celebration'},
                  {value: 'Brand Activation', label: 'Brand Activation'},
                  {value: 'Other', label: 'Other'}
                ]}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Destination / City</label>
              <input className="w-full input-minimal text-on-background focus:ring-0" placeholder="e.g. Udaipur, Dubai" type="text" value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})} disabled={loading} />
            </div>
            <div className="relative z-20">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Estimated Guests</label>
              <CustomSelect 
                value={formData.guestCount}
                onChange={val => setFormData({...formData, guestCount: val})}
                placeholder="Select Count"
                disabled={loading}
                options={[
                  {value: 'Under 50', label: 'Under 50 (Intimate)'},
                  {value: '50 - 200', label: '50 - 200'},
                  {value: '200 - 500', label: '200 - 500'},
                  {value: '500+', label: '500+ (Grand Scale)'}
                ]}
              />
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

          {submitStatus && (
            <div className={`p-4 border ${submitStatus.type === 'success' ? 'border-primary/50 bg-primary/10 text-primary' : 'border-red-500/50 bg-red-500/10 text-red-400'} font-body-md text-sm transition-all duration-300`}>
              {submitStatus.message}
            </div>
          )}

          <button className="gold-gradient-bg text-on-primary font-body-md text-label-lg uppercase tracking-widest px-8 py-4 rounded-none hover:opacity-90 transition-opacity w-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] mt-8 disabled:opacity-50" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Request Consultation'}
          </button>
        </form>
      </div>

      {/* Newsletter */}
      <div className="p-10 md:p-16 flex flex-col justify-center bg-surface-dim/30">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6 tracking-tighter">The Newsletter</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-12">Subscribe for exclusive insights, trend reports, and a glimpse into our most spectacular events.</p>
        <form className="flex flex-col gap-4" onSubmit={handleNewsletterSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <label className="sr-only">Email address</label>
              <input className="w-full input-minimal text-on-background focus:ring-0 py-3" placeholder="Enter your email" type="email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required disabled={loading} />
            </div>
            <button className="ghost-border text-on-background font-body-md text-label-lg uppercase tracking-widest px-6 py-3 rounded-none hover:border-primary hover:text-primary transition-colors whitespace-nowrap disabled:opacity-50" type="submit" disabled={loading}>
              Subscribe
            </button>
          </div>
          {newsletterStatus && (
            <div className={`p-3 border ${newsletterStatus.type === 'success' ? 'border-primary/50 bg-primary/10 text-primary' : 'border-red-500/50 bg-red-500/10 text-red-400'} font-body-md text-sm mt-2 transition-all duration-300`}>
              {newsletterStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
