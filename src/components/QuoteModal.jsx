import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, RFQ_PRODUCTS_LIST } from '../data/materialsData';
import Logo from './Logo';
import '../styles/modals.css';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    material: initialData?.name || 'Indonesian Steam Coal',
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
    }, 400);
  };

  const handleWhatsApp = () => {
    const text = `*Immediate RFQ Quote Request - Vicious Stone*%0A%0A*Name:* ${formData.name || 'Industrial Buyer'}%0A*Company:* ${formData.company || 'Plant'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Material:* ${formData.material}%0A*Volume:* ${formData.tonnage}%0A*Delivery Destination:* ${formData.destination || 'India'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header-bar">
          <div className="modal-header-content">
            <Logo type="square" size="sm" />
            <div>
              <div className="modal-header-badge">
                <ShieldCheck size={13} />
                <span>OFFICIAL RFQ DESK</span>
              </div>
              <h3 className="modal-header-title">
                Request a Plant Supply Quotation
              </h3>
              <p className="modal-header-desc">
                Receive landed price and delivery rake schedules within 2 hours.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          {submitted ? (
            <div className="modal-success-box">
              <div className="modal-success-icon">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="modal-success-title">
                Quotation Request Received
              </h4>
              <p className="modal-success-desc">
                Our Bengaluru commercial desk is calculating current landed logistics for <strong>{formData.material}</strong> to <strong>{formData.destination || 'your destination'}</strong>.
              </p>
              <div className="modal-success-actions">
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
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label className="modal-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="modal-input"
                  />
                </div>
                <div className="modal-form-group">
                  <label className="modal-label">Company / Plant Name *</label>
                  <input
                    type="text"
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Southern Cements Ltd"
                    className="modal-input"
                  />
                </div>
              </div>

              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label className="modal-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="modal-input"
                  />
                </div>
                <div className="modal-form-group">
                  <label className="modal-label">Business Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. procurement@plant.com"
                    className="modal-input"
                  />
                </div>
              </div>

              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label className="modal-label">Selected Material *</label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="modal-select"
                  >
                    {RFQ_PRODUCTS_LIST.map((prod) => (
                      <option key={prod} value={prod}>
                        {prod}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="modal-form-group">
                  <label className="modal-label">Estimated Volume *</label>
                  <select
                    name="tonnage"
                    value={formData.tonnage}
                    onChange={handleChange}
                    className="modal-select"
                  >
                    <option value="50 - 500 MT (Road Tippers)">50 - 500 MT (Road Tippers)</option>
                    <option value="1,000 - 3,500 MT (Trial / Spot)">1,000 - 3,500 MT (Trial / Spot)</option>
                    <option value="3,800 - 4,000 MT (1 Full BOXN Rake)">3,800 - 4,000 MT (1 Full BOXN Rake)</option>
                    <option value="8,000 - 15,000 MT (2-4 Rakes/Month)">8,000 - 15,000 MT (2-4 Rakes/Month)</option>
                    <option value="25,000+ MT (Monthly Standing Supply)">25,000+ MT (Monthly Standing Supply)</option>
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Delivery Destination (Railway Siding / Plant Location) *</label>
                <input
                  type="text"
                  required
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Raichur Thermal Siding, Karnataka"
                  className="modal-input"
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Additional Technical Requirements (Optional)</label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Mention required GCV, ash tolerance, or discharge port preference..."
                  className="modal-textarea"
                />
              </div>

              <div className="modal-footer-actions">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Quote</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn btn-secondary btn-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-sm"
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
