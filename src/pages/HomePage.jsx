import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import CoreMaterials from '../components/CoreMaterials';
import WhyChooseUs from '../components/WhyChooseUs';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Ship, 
  Building2, 
  MessageSquare,
  FileText,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materialsData';

export default function HomePage({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  const handleSelectCategory = (categoryName) => {
    if (categoryName === 'Marble & Granite') {
      navigate('/marble-granite');
    } else {
      navigate(`/materials?category=${encodeURIComponent(categoryName)}`);
    }
  };

  const portalCards = [
    {
      title: 'Materials Catalog & Spec Sheets',
      badge: '33+ PRODUCTS',
      icon: <Layers size={24} style={{ color: 'var(--sky-400)' }} />,
      desc: 'Browse imported thermal coal, low-ash met coke, calibrated iron ore lump (CLO), alumina, and industrial SMS flux with certified NABL test parameters.',
      to: '/materials',
      btnText: 'View Materials Catalog'
    },
    {
      title: 'Marble & Granite Export Division',
      badge: 'GLOBAL STONE SUPPLY',
      icon: <Sparkles size={24} style={{ color: 'var(--sky-400)' }} />,
      desc: 'Export-grade Makrana white marble, Rajasthan green serpentine, Absolute black granite, and raw quarried blocks with gang-saw slab processing for overseas projects.',
      to: '/marble-granite',
      btnText: 'Explore Stone Export'
    },
    {
      title: 'Sourcing, Ports & Logistics',
      badge: '14 DEEP-WATER PORTS',
      icon: <Ship size={24} style={{ color: 'var(--sky-400)' }} />,
      desc: 'Three flexible sourcing routes: vessel cargo discharge, port stockyard parcels, and domestic rail sidings (BOXN rakes) connecting global pitheads to your plant.',
      to: '/sourcing',
      btnText: 'View Supply Chain Network'
    },
    {
      title: 'Corporate Governance & About Us',
      badge: 'LEGAL CREDENTIALS',
      icon: <Building2 size={24} style={{ color: 'var(--sky-400)' }} />,
      desc: `Headquartered in Bengaluru with a Middle East desk in Dubai. Verified GSTIN ${COMPANY_INFO.gstin}, registered CIN, and downloadable 14-page corporate deck.`,
      to: '/about',
      btnText: 'Read Corporate Profile'
    }
  ];

  return (
    <>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      <CoreMaterials
        onSelectCategory={handleSelectCategory}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />

      {/* Division Gateways & CTAs Section */}
      <section style={{ 
        background: 'linear-gradient(180deg, #edf7fe 0%, #f4faff 50%, #e2effc 100%)',
        padding: '5rem 0',
        borderTop: '1px solid rgba(56, 189, 248, 0.25)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.25)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 0.75rem' }}>
              <ShieldCheck size={13} style={{ color: 'var(--sky-600)' }} />
              Operational Divisions
            </div>
            <h2 className="section-title">
              Explore Our Sourcing &amp; Export Divisions
            </h2>
            <p className="section-desc" style={{ marginTop: '0.5rem' }}>
              Navigate directly to our dedicated catalogs, international natural stone export suite, multi-port logistics routes, or corporate credentials.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {portalCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '1rem',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 18px rgba(2, 132, 199, 0.08)',
                  transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '0.75rem',
                      background: 'var(--navy-950)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {card.icon}
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--sky-700)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.35rem',
                      letterSpacing: '0.05em'
                    }}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--navy-950)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--navy-600)',
                    lineHeight: 1.55,
                    marginBottom: '1.5rem'
                  }}>
                    {card.desc}
                  </p>
                </div>

                <Link
                  to={card.to}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.65rem 1rem',
                    fontSize: '0.86rem',
                    fontWeight: 700
                  }}
                >
                  <span>{card.btnText}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Fast RFQ Callout Strip */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(7, 14, 27, 0.96) 0%, rgba(12, 74, 110, 0.92) 100%)',
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '1.25rem',
            padding: '2.25rem 2.5rem',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            boxShadow: '0 12px 35px rgba(2, 132, 199, 0.2)'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--sky-400)',
                letterSpacing: '0.1em',
                marginBottom: '0.35rem'
              }}>
                RAPID COMMODITY &amp; STONE RFQ DESK
              </div>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                color: '#ffffff',
                marginBottom: '0.4rem'
              }}>
                Need Landed Pricing or Project Delivery Schedules?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--navy-300)', lineHeight: 1.5 }}>
                Our Bengaluru &amp; Dubai sourcing desks compute landed freight, railway siding schedules, and lab-tested grade availability within 2 hours.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                <span>Request a Landed Quote</span>
                <ArrowRight size={16} />
              </button>

              <Link
                to="/contact"
                className="btn btn-glass-outline"
                style={{ padding: '0.75rem 1.4rem' }}
              >
                <MessageSquare size={16} />
                <span>Contact Sourcing Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

