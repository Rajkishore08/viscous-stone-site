import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materialsData';
import Logo from './Logo';
import '../styles/modals.css';

export default function ProfileDownloadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    interest: 'Natural Stone (Marble & Granite Export)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const triggerPdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/vicious_stone_company_profile.pdf';
    link.download = 'Vicious_Stone_Private_Limited_Company_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto-trigger the download
      triggerPdfDownload();
    }, 450);
  };

  const handleWhatsAppDesk = () => {
    const text = `*Company Profile Download Enquiry*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Location:* ${formData.location || 'India'}%0A*Interest:* ${formData.interest}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        {/* Modal Header */}
        <div className="modal-header-bar">
          <div className="modal-header-content">
            <Logo type="square" size="sm" />
            <div>
              <div className="modal-header-badge">
                <ShieldCheck size={13} />
                <span>OFFICIAL CORPORATE DOSSIER · CONFIDENTIAL</span>
              </div>
              <h3 className="modal-header-title">
                Download Company Profile
              </h3>
              <p className="modal-header-desc">
                14-Page Executive Deck · Sourcing Footprint · Legal & Corporate Credentials
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
            /* Post-Submission Success & Download Access */
            <div className="modal-success-box text-center py-4">
              <div className="modal-success-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', margin: '0 auto 1.25rem' }}>
                <CheckCircle2 size={40} />
              </div>

              <h4 className="modal-success-title" style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                Credentials Verified · Profile Unlocked
              </h4>

              <p className="modal-success-desc" style={{ maxWidth: '480px', margin: '0 auto 1.5rem', color: 'var(--navy-600)' }}>
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Your download of the official 14-page corporate deck has initiated.
              </p>

              {/* Document Overview Pill */}
              <div style={{
                background: 'rgba(230, 244, 255, 0.65)',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '0.85rem',
                padding: '1.25rem',
                marginBottom: '1.75rem',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={18} style={{ color: 'var(--sky-600)' }} />
                    <span style={{ fontWeight: 800, color: 'var(--navy-900)', fontSize: '0.92rem' }}>
                      Vicious_Stone_Company_Profile.pdf
                    </span>
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    color: 'var(--sky-700)', 
                    background: 'white',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '0.35rem',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}>
                    14 PAGES · 3.9 MB
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--navy-600)', lineHeight: 1.45 }}>
                  CIN: <strong>{COMPANY_INFO.cin || 'U09900KA2024PTC194607'}</strong> · GSTIN: <strong>{COMPANY_INFO.gstin}</strong> · Incorporators: Anand & Nikhil Shukla · Offices: Bengaluru & Dubai
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '420px', margin: '0 auto' }}>
                <button
                  onClick={triggerPdfDownload}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
                >
                  <Download size={18} />
                  <span>Download Company Profile (3.9 MB PDF)</span>
                </button>

                <a
                  href="/assets/vicious_stone_company_profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <ExternalLink size={16} />
                  <span>View PDF Directly in Browser</span>
                </a>

                <button
                  onClick={handleWhatsAppDesk}
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} />
                  <span>Connect with Sourcing Desk on WhatsApp</span>
                </button>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <button 
                  onClick={handleReset}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--navy-400)', 
                    fontSize: '0.8rem', 
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} className="modal-form">
              
              {/* Document Preview Badge */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.7) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '0.75rem',
                padding: '0.9rem 1.15rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '0.5rem',
                  background: 'var(--navy-950)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--sky-400)',
                  flexShrink: 0
                }}>
                  <FileText size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--navy-950)' }}>
                    Corporate Profile & Sourcing Dossier (PDF)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--navy-600)', marginTop: '0.15rem' }}>
                    14 pages detailing pithead allocations, port stockyards, marble export yards, GST credentials & executive governance.
                  </div>
                </div>
              </div>

              {/* Row 1: Name & Company */}
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label className="modal-label">
                    Your Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="e.g. Ramesh Menon"
                      value={formData.name}
                      onChange={handleChange}
                      className="modal-input"
                    />
                  </div>
                </div>

                <div className="modal-form-group">
                  <label className="modal-label">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    name="company"
                    placeholder="e.g. Apex Minerals FZE / Infra Ltd"
                    value={formData.company}
                    onChange={handleChange}
                    className="modal-input"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label className="modal-label">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="purchase@yourfirm.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="modal-input"
                  />
                </div>

                <div className="modal-form-group">
                  <label className="modal-label">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    placeholder="+91 98765 43210 / +971 50..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="modal-input"
                  />
                </div>
              </div>

              {/* Row 3: Location & Primary Interest */}
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label className="modal-label">
                    City / Country
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Dubai, UAE or Mumbai, India"
                    value={formData.location}
                    onChange={handleChange}
                    className="modal-input"
                  />
                </div>

                <div className="modal-form-group">
                  <label className="modal-label">
                    Primary Sourcing Focus
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="modal-select"
                  >
                    <option value="Natural Stone (Marble & Granite Export)">Natural Stone (Marble & Granite Export)</option>
                    <option value="Imported & Domestic Coal (Thermal / Steam)">Imported & Domestic Coal (Thermal / Steam)</option>
                    <option value="Metallurgical & Foundry Coke">Metallurgical & Foundry Coke</option>
                    <option value="Iron Ore Fines, CLO & Pellets">Iron Ore Fines, CLO & Pellets</option>
                    <option value="Industrial Minerals & Ferro Alloys">Industrial Minerals & Ferro Alloys</option>
                    <option value="General Corporate Partnership / Supplier">General Corporate Partnership / Supplier</option>
                  </select>
                </div>
              </div>

              {/* Privacy / Security Notice */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                fontSize: '0.72rem', 
                color: 'var(--navy-500)', 
                marginTop: '0.25rem',
                marginBottom: '1rem' 
              }}>
                <Lock size={12} style={{ color: 'var(--sky-600)' }} />
                <span>Your contact details are strictly confidential and shared only with our corporate sales desk.</span>
              </div>

              {/* Submit Button */}
              <div className="modal-form-actions">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
                >
                  <Download size={18} />
                  <span>{loading ? 'Validating Credentials...' : 'Submit & Download Company Profile (PDF)'}</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
