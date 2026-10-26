import React from 'react';
import { COMPANY_INFO } from '../data/materialsData';
import { ArrowRight, MapPin, CheckCircle2, FileText, Download, ShieldCheck, Lock, FileDown } from 'lucide-react';
import '../styles/about-us.css';

export default function AboutUs({ onOpenQuoteModal, onOpenProfileModal }) {
  const storyStats = [
    { value: '10+', label: 'Countries Sourced From', desc: 'Direct pithead and global export terminal networks' },
    { value: '500+', label: 'Verified Suppliers', desc: 'Mines, coal washeries and international producers' },
    { value: '1M+', label: 'MT Supplied Annually', desc: 'High GCV thermal coal, coking coal, iron & flux' },
    { value: '100+', label: 'Industrial Clients', desc: 'Steel plants, power stations, cement kilns & foundries' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Top Corporate Narrative Grid */}
        <div className="about-top-grid">
          {/* Left Column: Narrative */}
          <div>
            <div className="section-overline">ABOUT US · CORPORATE PROFILE</div>
            <h2 className="section-title text-left mb-4" style={{ textAlign: 'left', lineHeight: 1.15 }}>
              A trusted partner in global mining and industrial raw material supply.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-4">
              We connect reliable mines, suppliers and industrial buyers to create a transparent, efficient and sustainable supply chain for coal, coke, iron ore and other minerals. Headquartered in Bengaluru, <strong>Vicious Stone Private Limited</strong> eliminates intermediary bottlenecks to deliver reliable raw materials for power plants, steel mills, cement rotary kilns, and foundries.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Whether you need spot single-rake delivery to mitigate emergency stockpiling deficits or a predictable 12-month standing fuel contract with strict GCV guarantees, our sourcing desks handle commercial negotiation, vessel chartering, port discharge, railway rake allotment, and certified NABL lab testing.
            </p>

            {/* 4 Stats Grid matching Image 1 */}
            <div className="stats-grid-4 mb-6">
              {storyStats.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <div className="stat-box-val">
                    {stat.value}
                  </div>
                  <div className="stat-box-label">
                    {stat.label}
                  </div>
                  <div className="stat-box-desc">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance & Our Story Button Strip */}
            <div className="about-compliance-strip">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="font-mono font-semibold text-slate-900 bg-white border border-sky-200 px-2.5 py-1 rounded">
                  GSTIN: {COMPANY_INFO.gstin}
                </span>
                <span>·</span>
                <span className="font-medium text-slate-700">
                  {COMPANY_INFO.address.split(',')[1]?.trim() || 'Koramangala, Bengaluru'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenProfileModal}
                  className="btn btn-secondary btn-sm"
                  title="Download Official 14-Page Company Profile PDF"
                >
                  <FileDown size={14} />
                  <span>Company Profile (PDF)</span>
                </button>
                <button
                  onClick={() => onOpenQuoteModal({ context: 'Our Story' })}
                  className="btn btn-primary btn-sm"
                >
                  <span>Our Story</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Excavator at open-pit mine quarry image */}
          <div>
            <div className="about-image-card">
              <div className="about-image-wrap">
                <img
                  src="/assets/excavator_quarry_mine.jpg"
                  alt="Excavator at an open-pit mine quarry"
                  className="about-image-img"
                  loading="lazy"
                />
              </div>
              <div className="about-image-caption">
                <div className="about-image-tag">
                  DIRECT PITHEAD & PORT NETWORK
                </div>
                <div className="about-image-title">
                  Excavator at an open-pit mine quarry
                </div>
                <p className="about-image-desc">
                  Bulk mechanical loading and rake evacuation at domestic pitheads and coastal discharge stockyards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Profile Card: Nature's Finest, Unearthed */}
        <div className="about-corporate-box">
          <div className="about-corporate-header">
            <div className="section-overline text-sky-400 mb-2">
              THE COMPANY
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
              NATURE'S FINEST, UNEARTHED.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
              Vicious Stone Private Limited is a Bengaluru commodity trading company. We source, trade and supply coal, iron ore, aluminium, ferro alloys and industrial minerals to power producers, steel and sponge iron plants, smelters, cement makers and industrial boilers.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We buy from mines, port stockists and producers, match each lot to the buyer's specification, and keep every deal documented and inspected. Our aim is simple: the right grade, at the agreed quantity, on the agreed date.
            </p>
          </div>

          {/* Corporate Facts Grid - Pure CSS 6 Columns with zero text collision */}
          <div className="about-facts-grid">
            <div className="about-fact-item">
              <span className="about-fact-label">LEGAL NAME</span>
              <strong className="about-fact-val">Vicious Stone Private Limited</strong>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">GSTIN</span>
              <strong className="about-fact-val font-mono text-sky-400">29AAKCV5319E1Z3</strong>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">OFFICE</span>
              <strong className="about-fact-val">4th Block Koramangala, Bengaluru</strong>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">DIRECTORS</span>
              <strong className="about-fact-val">Anand Bhagwan Shukla, Nikhil Shukla</strong>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">WE TRADE</span>
              <strong className="about-fact-val">Coal · Iron · Aluminium · Minerals</strong>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">BUYERS IN</span>
              <strong className="about-fact-val">India · UAE</strong>
            </div>
          </div>

          {/* Official Company Profile PDF Attachment & Gated Download */}
          <div className="profile-attachment-card">
            <div className="profile-attachment-left">
              <div className="profile-attachment-icon-wrap">
                <FileText size={28} />
                <span className="profile-attachment-ext">PDF</span>
              </div>
              <div className="profile-attachment-meta">
                <div className="profile-attachment-badge">
                  <ShieldCheck size={13} />
                  <span>OFFICIAL CORPORATE DOSSIER · CONFIDENTIAL</span>
                </div>
                <h4 className="profile-attachment-title">
                  Vicious Stone Private Limited — Corporate Profile & Sourcing Capabilities
                </h4>
                <p className="profile-attachment-desc">
                  Official 14-page executive deck covering coal & mineral sourcing corridors, marble & granite export yards, verified port stockyards, and corporate credentials.
                </p>
                <div className="profile-attachment-chips">
                  <span className="profile-attachment-chip">
                    <strong>CIN:</strong> {COMPANY_INFO.cin || 'U09900KA2024PTC194607'}
                  </span>
                  <span className="profile-attachment-chip">
                    <strong>GSTIN:</strong> {COMPANY_INFO.gstin}
                  </span>
                  <span className="profile-attachment-chip">
                    <strong>Incorporated:</strong> 06 Nov 2024
                  </span>
                  <span className="profile-attachment-chip">
                    <strong>Offices:</strong> Bengaluru & Dubai
                  </span>
                  <span className="profile-attachment-chip">
                    14 Pages · High Res (3.9 MB)
                  </span>
                </div>
              </div>
            </div>

            <div className="profile-attachment-right">
              <button
                onClick={onOpenProfileModal}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.35rem', fontSize: '0.9rem' }}
              >
                <Download size={16} />
                <span>Download Company Profile (PDF)</span>
              </button>
              <div className="profile-attachment-note">
                <Lock size={12} style={{ color: 'var(--sky-400)' }} />
                <span>Instant access upon verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
