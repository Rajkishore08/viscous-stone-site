import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/materialsData';
import Logo from './Logo';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    material: initialData?.name || 'Indonesian Steam Coal (3400 - 5800 GAR)',
    tonnage: '3,800 - 4,000 MT (1 Full BOXN Rake)',
    destination: initialData?.location || '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData?.name) {
      setFormData(prev => ({ ...prev, material: initialData.name }));
    }
    if (initialData?.location) {
      setFormData(prev => ({ ...prev, destination: initialData.location }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `*Immediate RFQ Quote Request - Vicious Stone*%0A%0A*Name:* ${formData.name || 'Industrial Buyer'}%0A*Company:* ${formData.company || 'Plant'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Material:* ${formData.material}%0A*Volume:* ${formData.tonnage}%0A*Delivery Siding:* ${formData.destination || 'India'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-sky-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3.5">
            <Logo type="square" size="md" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Official RFQ Portal
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Request a Plant Supply Quotation
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Receive landed price and delivery rake schedules within 2 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-2">
                Quotation Request Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Our Bengaluru commercial desk is calculating current landed logistics for <strong>{formData.material}</strong> to <strong>{formData.destination || 'your destination'}</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>Chat Immediately on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Company / Plant Name *</label>
                  <input
                    type="text"
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Southern Cements Ltd"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Business Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. procurement@plant.com"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Selected Material *</label>
                  <input
                    type="text"
                    required
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Estimated Volume *</label>
                  <select
                    name="tonnage"
                    value={formData.tonnage}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="50 - 500 MT (Road Tippers)">50 - 500 MT (Road Tippers)</option>
                    <option value="1,000 - 3,500 MT (Trial / Spot)">1,000 - 3,500 MT (Trial / Spot)</option>
                    <option value="3,800 - 4,000 MT (1 Full BOXN Rake)">3,800 - 4,000 MT (1 Full BOXN Rake)</option>
                    <option value="8,000 - 15,000 MT (2-4 Rakes/Month)">8,000 - 15,000 MT (2-4 Rakes/Month)</option>
                    <option value="25,000+ MT (Monthly Standing Supply)">25,000+ MT (Monthly Standing Supply)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">Delivery Destination (Railway Siding / Plant Location) *</label>
                <input
                  type="text"
                  required
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Raichur Thermal Siding, Karnataka"
                  className="form-control"
                />
              </div>

              <div>
                <label className="form-label">Additional Technical Requirements (Optional)</label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Mention required GCV, ash tolerance, or discharge port preference..."
                  className="form-control"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="btn btn-whatsapp text-xs sm:text-sm px-4"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Quote</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn btn-secondary text-xs sm:text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary text-xs sm:text-sm"
                  >
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
