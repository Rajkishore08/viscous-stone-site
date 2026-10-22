import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Building2,
  Clock
} from 'lucide-react';
import { COMPANY_INFO, CATALOG_PRODUCTS } from '../data/materialsData';

export default function ContactSection({ preselectedMaterial }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    material: preselectedMaterial || 'Indonesian Steam Coal (3400 - 5800 GAR)',
    tonnage: '5,000 MT (Multi-Rake)',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const materialsList = [
    'Indonesian Steam Coal (3400 - 5800 GAR)',
    'South African Thermal Coal (RB1 / RB2 / RB3)',
    'Australian Thermal / Coking Coal',
    'Low Ash Metallurgical Coke (Met Coke)',
    'Iron Ore Fines (58% - 64.5% Fe)',
    'Calibrated Lump Ore (CLO 10-30mm)',
    'Iron Ore Pellets (BF & DRI Grade)',
    'Metallurgical & Refractory Bauxite',
    'Silico Manganese (SiMn 60/14 & 65/16)',
    'SMS / BF Grade Limestone',
    'Manganese Ore (28% - 46% Mn)',
    'Dolomite (Calcined & Raw)',
    'Other Minerals / Custom Blend'
  ];

  const tonnageOptions = [
    '50 - 500 MT (Road Tippers)',
    '1,000 - 3,500 MT (Trial / Spot)',
    '3,800 - 4,000 MT (1 Full BOXN Rake)',
    '8,000 - 15,000 MT (2-4 Rakes/Month)',
    '20,000+ MT (Standing Supply Contract)',
    '50,000+ MT (Full Vessel Cargo)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Bulk Sourcing Enquiry - Vicious Stone*%0A%0A*Name:* ${formData.name || 'Industrial Buyer'}%0A*Company:* ${formData.company || 'Plant Operator'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Material:* ${formData.material}%0A*Volume:* ${formData.tonnage}%0A*Destination:* ${formData.destination || 'India'}%0A*Notes:* ${formData.message || 'Please send landed quote.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={13} className="text-sky-600" />
            Direct Commercial Desk
          </div>
          <h2 className="section-title text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let's Build a Stronger Supply Chain Together
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Get in touch for spot rakes, long-term monthly standing supply agreements, custom blending, or certified testing documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards & Sunset Machinery Background Frame */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-900 text-white p-8 overflow-hidden relative shadow-xl">
            {/* Background Sunset Conveyor Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/16_Conveyor_at_sunset.jpg"
                alt="Conveyor machinery at sunset"
                className="w-full h-full object-cover filter brightness-40"
                loading="lazy"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(7, 14, 27, 0.94) 0%, rgba(11, 25, 44, 0.88) 100%)'
                }}
              />
            </div>

            {/* Content atop background */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/90 text-sky-300 font-mono text-xs font-semibold uppercase tracking-wider mb-6 border border-sky-400/30">
                <Clock size={13} className="text-sky-400" />
                Response Within 2 Hours
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-4">
                Corporate Sourcing Office
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Connect directly with our Bengaluru trading floor and port logistics coordinators for instant landed prices, GCV analysis, and rake placement schedules.
              </p>

              {/* Direct Channels */}
              <div className="flex flex-col gap-5 text-sm mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-900/60 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-mono">Direct Phone / WhatsApp</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-bold hover:text-sky-300 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-slate-400 text-xs block mt-0.5">
                      Alt: {COMPANY_INFO.altPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-900/60 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-mono">Commercial Enquiries</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-bold hover:text-sky-300 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-900/60 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-mono">Registered Office</span>
                    <span className="text-slate-200">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom GST Credential Pill */}
            <div className="relative z-10 pt-6 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-mono">
                <ShieldCheck size={16} className="text-sky-400" />
                GSTIN: <strong className="text-white">{COMPANY_INFO.gstin}</strong>
              </span>
              <span className="text-sky-300 font-semibold">Regular Taxpayer</span>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7 card-clean p-6 sm:p-10 bg-white border border-slate-200 shadow-xl flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                  Enquiry Transmitted Successfully
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our mineral trading desk will review your technical requirement for <strong>{formData.material}</strong> and respond with a landed specification quote within 2 business hours.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={16} />
                    <span>Instant Follow-Up on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => { setSubmitted(false); }}
                    className="btn btn-secondary"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="form-group mb-0">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="form-control"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="form-group mb-0">
                    <label className="form-label">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rajesh@plant.com"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="form-group mb-0">
                    <label className="form-label">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="form-control"
                    />
                  </div>

                  {/* Company */}
                  <div className="form-group mb-0">
                    <label className="form-label">Company / Industrial Plant *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Deccan Steel & Power Ltd"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Material Selector */}
                  <div className="form-group mb-0">
                    <label className="form-label">Select Raw Material *</label>
                    <select
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      className="form-control bg-white cursor-pointer"
                    >
                      {materialsList.map((m, idx) => (
                        <option key={idx} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Volume */}
                  <div className="form-group mb-0">
                    <label className="form-label">Estimated Volume / Rakes *</label>
                    <select
                      name="tonnage"
                      value={formData.tonnage}
                      onChange={handleChange}
                      className="form-control bg-white cursor-pointer"
                    >
                      {tonnageOptions.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Delivery Destination */}
                <div className="form-group mb-0">
                  <label className="form-label">Delivery Location / Siding (City, State, PIN) *</label>
                  <input
                    type="text"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Bellary Railway Siding, Karnataka"
                    className="form-control"
                  />
                </div>

                {/* Message */}
                <div className="form-group mb-0">
                  <label className="form-label">Specific Parameters / Delivery Timeline (Optional)</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify GCV range, Ash limit %, sizing preferences, or target delivery date..."
                    className="form-control"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full sm:w-auto flex-1 py-3 text-base"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Formal Enquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="btn btn-whatsapp w-full sm:w-auto px-5 py-3"
                    title="Send via WhatsApp"
                  >
                    <MessageSquare size={18} />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
