import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Globe2, 
  CheckCircle2, 
  Box, 
  Layers, 
  Grid, 
  ShieldCheck, 
  Ship,
  MessageSquare,
  Anchor,
  Truck
} from 'lucide-react';
import { 
  MARBLE_GRANITE_PRODUCTS, 
  MARBLE_GRANITE_SECTION_DATA, 
  COMPANY_INFO 
} from '../data/materialsData';
import '../styles/marble-granite.css';

export default function MarbleGraniteExport({ onOpenQuoteModal, onOpenSpecModal }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'All Natural Stone' },
    { id: 'MARBLE', label: 'Marble Varieties' },
    { id: 'GRANITE', label: 'Granite Varieties' },
    { id: 'BLOCKS', label: 'Raw Blocks & Slabs' }
  ];

  const filteredProducts = MARBLE_GRANITE_PRODUCTS.filter((prod) => {
    if (activeTab === 'ALL') return true;
    return prod.subCategory === activeTab;
  });

  const getFormatIcon = (iconName) => {
    switch (iconName) {
      case 'Box': return <Box size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Grid': return <Grid size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      default: return <Layers size={24} />;
    }
  };

  const handleWhatsAppExport = () => {
    const msg = "Hello Vicious Stone Export Team, I am looking to import Marble / Granite slabs and blocks from India.";
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="marble-granite" className="stone-export-section">
      <div className="container">
        
        {/* 1. Main Website Banner (matching Section 1 of content pack) */}
        <div className="stone-hero-banner">
          <div className="stone-banner-watermark">STONE</div>
          
          <div className="stone-banner-badge">
            <Sparkles size={14} />
            <span>{MARBLE_GRANITE_SECTION_DATA.banner.badge}</span>
          </div>

          <h2 className="stone-banner-title">
            {MARBLE_GRANITE_SECTION_DATA.banner.headline}
          </h2>

          <p className="stone-banner-subhead">
            {MARBLE_GRANITE_SECTION_DATA.banner.subhead}
          </p>

          <div className="stone-banner-tagline">
            — {MARBLE_GRANITE_SECTION_DATA.banner.tagline}
          </div>

          <div className="stone-banner-ctas">
            <button
              onClick={() => onOpenQuoteModal({ 
                category: 'Marble & Granite', 
                name: 'Marble & Granite Export Inquiry' 
              })}
              className="btn btn-primary"
            >
              <span>{MARBLE_GRANITE_SECTION_DATA.banner.secondaryCta}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={handleWhatsAppExport}
              className="btn btn-glass-outline"
            >
              <MessageSquare size={16} />
              <span>Contact Export Desk (WhatsApp)</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="stone-tab-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`stone-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 2 & 3. Marble & Granite Product Range Cards Grid */}
        <div className="stone-cards-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="stone-product-card">
              <div className="stone-card-img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="stone-card-img"
                  loading="lazy"
                />
                <div className="stone-card-badges">
                  <span className="stone-hs-badge">{product.hsCode}</span>
                  <span className="stone-status-badge">{product.statusBadge}</span>
                </div>
              </div>

              <div className="stone-card-body">
                <h3 className="stone-card-title">{product.name}</h3>
                <p className="stone-card-desc">{product.desc}</p>

                {/* Specs Table */}
                <div className="stone-specs-table">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="stone-spec-row">
                      <span className="stone-spec-key">{spec.key}</span>
                      <span className="stone-spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="stone-card-actions">
                  <button
                    onClick={() => onOpenQuoteModal({
                      name: product.name,
                      category: product.category,
                      hsCode: product.hsCode,
                      origin: product.originBadge
                    })}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <span>Request Quote</span>
                  </button>
                  <button
                    onClick={() => onOpenSpecModal && onOpenSpecModal(product)}
                    className="btn btn-secondary btn-sm"
                    title="View Technical Export Specification Sheet"
                  >
                    <FileText size={14} />
                    <span>Spec Sheet</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Export Product Formats & Finishes (matching Section 4) */}
        <div className="stone-formats-container">
          <div className="section-header">
            <div className="section-overline">EXPORT PRODUCT FORMATS</div>
            <h3 className="section-title">
              Blocks, Slabs, Tiles & Architectural Finishes
            </h3>
            <p className="section-desc max-w-2xl mx-auto">
              Supplying raw quarried blocks for overseas factories and precision-finished slabs ready for project installation.
            </p>
          </div>

          <div className="stone-formats-grid">
            {MARBLE_GRANITE_SECTION_DATA.formats.map((fmt, idx) => (
              <div key={idx} className="stone-format-card">
                <div className="stone-format-icon">
                  {getFormatIcon(fmt.icon)}
                </div>
                <h4 className="stone-format-title">{fmt.title}</h4>
                <p className="stone-format-desc">{fmt.desc}</p>
                
                <div className="stone-format-features">
                  {fmt.features.map((feat, fIdx) => (
                    <span key={fIdx} className="stone-format-chip">
                      <CheckCircle2 size={13} style={{ color: 'var(--sky-600)', shrink: 0 }} />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 & 6. International Export & Quality Buyer Support (Sections 5 & 6) */}
        <div className="stone-export-map-card">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="section-overline">INTERNATIONAL EXPORT & LOGISTICS</div>
            <h3 className="section-title">
              Your Natural Stone Sourcing Partner
            </h3>
            <p className="section-desc max-w-2xl mx-auto">
              We support international buyers seeking marble and granite for wholesale distribution, processing factories, and large architectural developments.
            </p>
          </div>

          {/* Target Markets */}
          <div className="stone-markets-grid">
            {MARBLE_GRANITE_SECTION_DATA.targetMarkets.map((mkt, idx) => (
              <div key={idx} className="stone-market-item">
                <div className="stone-market-region">
                  <Globe2 size={18} style={{ color: 'var(--sky-600)' }} />
                  <span>{mkt.region}</span>
                </div>
                <div className="stone-market-ports">
                  {mkt.ports}
                </div>
              </div>
            ))}
          </div>

          {/* 6-Point Quality Checklist */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--sky-700)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                BUYER ASSURANCE & ORDER CONFIRMATION
              </span>
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-950)', fontFamily: 'var(--font-display)', marginTop: '0.25rem' }}>
                Every Export Order Verified Before Dispatch
              </h4>
            </div>

            <div className="stone-checklist-grid">
              {MARBLE_GRANITE_SECTION_DATA.buyerChecklist.map((chk, idx) => (
                <div key={idx} className="stone-checklist-card">
                  <div className="stone-step-number">{chk.step}</div>
                  <div>
                    <h5 className="stone-checklist-title">{chk.title}</h5>
                    <p className="stone-checklist-desc">{chk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Call To Action / Fast Export Enquiry (Section 7) */}
        <div className="stone-cta-banner">
          <div className="stone-cta-text">
            <h3>Looking for a Reliable Marble & Granite Supplier?</h3>
            <p>
              Source natural stone for your next international project with customized thicknesses, surface finishes, and seaworthy container packing.
            </p>
          </div>

          <div className="stone-cta-actions">
            <button
              onClick={() => onOpenQuoteModal({ 
                category: 'Marble & Granite', 
                name: 'Custom Stone Project Inquiry' 
              })}
              className="btn btn-primary"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={handleWhatsAppExport}
              className="btn btn-glass-outline"
            >
              <MessageSquare size={16} />
              <span>Contact Our Export Team</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
