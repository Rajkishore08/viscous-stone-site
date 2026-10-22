import React from 'react';
import { GST_DOCUMENTS_DATA } from '../data/materialsData';
import { ShieldCheck, ExternalLink, FileCheck, FileText, CheckCircle2 } from 'lucide-react';
import '../styles/gst-documents.css';

export default function GstDocuments() {
  return (
    <section id="documents" className="gst-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">REGISTRATION & DOCUMENTS</div>
          <h2 className="section-title text-slate-900">
            REGISTERED. INVOICED. DOCUMENTED.
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Every sale is invoiced under our GST registration and moves with the documents your accounts team, transporter and auditors expect.
          </p>
        </div>

        {/* GST Registration Certificate Official Card */}
        <div className="gst-cert-card">
          <div className="gst-cert-header">
            <div>
              <span className="gst-cert-form">
                {GST_DOCUMENTS_DATA.certForm}
              </span>
              <h3 className="gst-cert-title">
                {GST_DOCUMENTS_DATA.certTitle}
              </h3>
            </div>
            <a
              href={GST_DOCUMENTS_DATA.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>Verify this GSTIN on GST Portal</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="gst-cert-grid">
            {GST_DOCUMENTS_DATA.fields.map((field) => (
              <div key={field.label} className="gst-cert-field">
                <span className="gst-cert-label">{field.label}</span>
                <span className="gst-cert-val">{field.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Documents & HSN Grid */}
        <div className="gst-details-columns">
          {/* Paperwork On Every Order */}
          <div className="gst-doc-card">
            <div className="gst-card-header">
              <div className="gst-card-header-icon">
                <FileCheck size={20} className="text-sky-600" />
              </div>
              <h3 className="gst-card-header-title">
                PAPERWORK ON EVERY ORDER
              </h3>
            </div>
            <div className="paperwork-list">
              {GST_DOCUMENTS_DATA.paperwork.map((doc, idx) => (
                <div key={idx} className="paperwork-item">
                  <div className="paperwork-item-head">
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0" />
                    <span>{doc.title}</span>
                  </div>
                  <p className="paperwork-item-desc">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HSN Codes We Trade Under */}
          <div className="gst-doc-card">
            <div className="gst-card-header">
              <div className="gst-card-header-icon">
                <FileText size={20} className="text-sky-600" />
              </div>
              <h3 className="gst-card-header-title">
                HSN CODES WE TRADE UNDER
              </h3>
            </div>
            <div className="hsn-grid-wrap">
              {GST_DOCUMENTS_DATA.hsnCodes.map((hsn) => (
                <div key={hsn.code} className="hsn-pill">
                  <span className="hsn-code">{hsn.code}</span>
                  <span className="hsn-desc">{hsn.desc}</span>
                </div>
              ))}
            </div>
            <div className="hsn-disclaimer">
              GST rates change with Council decisions, so the rate for each product is stated on your invoice instead of on this page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
