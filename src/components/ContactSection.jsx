import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, RFQ_PRODUCTS_LIST } from '../data/materialsData';
import '../styles/contact.css';

export default function ContactSection({ preselectedMaterial }) {
  const [formData, setFormData] = useState({
    product: preselectedMaterial || RFQ_PRODUCTS_LIST[0],
    gradeSpec: '',
    quantity: '',
    deliveryPoint: '',
    terms: 'Delivered to plant',
    deliveryWindow: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const termOptions = [
    'Delivered to plant',
    'Ex-yard (port stockyard)',
    'FOR (rail)',
    'CFR / CIF (vessel)',
    'FOB',
    'Not sure yet'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Commodity Enquiry - Vicious Stone*%0A%0A*Product:* ${formData.product}%0A*Grade/Spec:* ${formData.gradeSpec || 'Standard Specification'}%0A*Quantity:* ${formData.quantity ? formData.quantity + ' Tonnes' : 'Spot/Standing'}%0A*Delivery Point:* ${formData.deliveryPoint || 'India'}%0A*Commercial Terms:* ${formData.terms}%0A*Delivery Window:* ${formData.deliveryWindow || 'Immediate'}%0A%0A*Buyer Name:* ${formData.name || 'Procurement Desk'}%0A*Company:* ${formData.company || 'Industrial Plant'}%0A*Email:* ${formData.email || 'N/A'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Notes:* ${formData.notes || 'Please reply with firm offer.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppDirect();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header matching Image 1 */}
        <div className="section-header">
          <div className="section-overline">CONTACT US</div>
          <h2 className="section-title text-slate-900">
            Let's Build a Stronger Supply Chain Together
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Get in touch for bulk enquiries, sourcing support or long-term industrial fuel and mineral partnerships.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Communication Channels & Info Box */}
          <div>
            <div className="contact-channels-card">
              <div className="section-overline text-sky-800 mb-4">
                DIRECT CONTACT CHANNELS
              </div>

              <div className="contact-channel-list">
                {/* India WhatsApp */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon whatsapp">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="contact-channel-label">WHATSAPP — INDIA</div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Vicious Stone, I have a coal enquiry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-val text-emerald-600 hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Dubai WhatsApp */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon whatsapp">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="contact-channel-label">WHATSAPP — DUBAI (MIDDLE EAST)</div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.dubaiContact.whatsapp}?text=${encodeURIComponent('Hello Vicious Stone Middle East, I have an enquiry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-val text-emerald-600 hover:underline"
                    >
                      {COMPANY_INFO.dubaiContact.phone}
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">{COMPANY_INFO.dubaiContact.name} · {COMPANY_INFO.dubaiContact.role}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon email">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-channel-label">EMAIL — INDIA</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="contact-channel-val text-sky-700 hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Dubai Email */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon email">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-channel-label">EMAIL — DUBAI (MIDDLE EAST)</div>
                    <a
                      href={`mailto:${COMPANY_INFO.dubaiContact.email}`}
                      className="contact-channel-val text-sky-700 hover:underline"
                    >
                      {COMPANY_INFO.dubaiContact.email}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon location">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-channel-label">REGISTERED OFFICE</div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed mb-1">
                      {COMPANY_INFO.address}
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=No+8+16th+Main+Road+4th+Block+Koramangala+Bengaluru+560034"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Vicious Stone, I have a coal enquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} />
                  <span>WHATSAPP — INDIA (+91 99863 72383)</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.dubaiContact.whatsapp}?text=${encodeURIComponent('Hello Vicious Stone Middle East, I have an enquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}
                >
                  <MessageSquare size={16} />
                  <span>WHATSAPP — DUBAI (+971 50 461 6428)</span>
                </a>
              </div>
            </div>

            {/* Information Callout Box */}
            <div className="contact-info-callout">
              <div className="contact-info-callout-title">
                INFORMATION THAT HELPS US QUOTE FAST
              </div>
              <ul className="contact-info-callout-list">
                <li>• Product and grade, or your boiler / furnace technical data</li>
                <li>• Quantity per month or per shipment (in MT)</li>
                <li>• Delivery port, rail siding or plant gate location</li>
                <li>• Preferred commercial terms (FOR, CIF, Delivered) and delivery timing</li>
              </ul>
            </div>
          </div>

          {/* Right Column: 33-Product RFQ Form Card */}
          <div>
            <div className="contact-form-card">
              <h3 className="text-xl font-extrabold text-slate-900 font-display mb-5">
                Prepare Supply Enquiry
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                  <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-slate-900">Enquiry Prepared!</h4>
                  <p className="text-sm text-slate-600 mt-1 mb-4">
                    Your details have been pre-filled into WhatsApp and our sourcing desk is ready to reply.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* PRODUCT */}
                  <div className="contact-field-group">
                    <label className="contact-field-label">
                      PRODUCT *
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="contact-select"
                    >
                      {RFQ_PRODUCTS_LIST.map((prod) => (
                        <option key={prod} value={prod}>
                          {prod}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-form-row-2">
                    {/* GRADE / SPEC */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        GRADE / SPEC
                      </label>
                      <input
                        type="text"
                        name="gradeSpec"
                        placeholder="e.g. GAR 4,200 / Fe 63% / RB2"
                        value={formData.gradeSpec}
                        onChange={handleChange}
                        className="contact-input"
                      />
                    </div>

                    {/* QUANTITY (TONNES) */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        QUANTITY (TONNES) *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        placeholder="e.g. 4,000 MT / 1 Rake"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row-2">
                    {/* DELIVERY POINT */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        DELIVERY POINT *
                      </label>
                      <input
                        type="text"
                        name="deliveryPoint"
                        placeholder="e.g. Toranagallu, Ballari / Vizag Port"
                        value={formData.deliveryPoint}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </div>

                    {/* TERMS */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        TERMS
                      </label>
                      <select
                        name="terms"
                        value={formData.terms}
                        onChange={handleChange}
                        className="contact-select"
                      >
                        {termOptions.map((term) => (
                          <option key={term} value={term}>
                            {term}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* DELIVERY WINDOW */}
                  <div className="contact-field-group">
                    <label className="contact-field-label">
                      DELIVERY WINDOW
                    </label>
                    <input
                      type="text"
                      name="deliveryWindow"
                      placeholder="e.g. Immediate spot / 1st week next month"
                      value={formData.deliveryWindow}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-form-row-2">
                    {/* YOUR NAME */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Procurement Head / Director"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </div>

                    {/* COMPANY */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        COMPANY *
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Plant / Industrial Firm Name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row-2">
                    {/* EMAIL */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="purchase@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </div>

                    {/* PHONE / WHATSAPP */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* ANYTHING ELSE */}
                  <div className="contact-field-group">
                    <label className="contact-field-label">
                      ANYTHING ELSE
                    </label>
                    <textarea
                      name="notes"
                      rows="2"
                      placeholder="Boiler type, Ash limit, discharge siding restrictions..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="contact-textarea"
                    />
                  </div>

                  {/* PREPARE ENQUIRY */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Send size={15} />
                      <span>PREPARE ENQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
