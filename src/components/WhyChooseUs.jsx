import React from 'react';
import { 
  Globe2, 
  FlaskConical, 
  Boxes, 
  Factory, 
  CheckCircle, 
  FileCheck2, 
  ArrowRight 
} from 'lucide-react';
import '../styles/why-choose-us.css';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: <Globe2 size={28} />,
      title: 'Global Network',
      subtitle: 'Direct Mine Access',
      desc: 'Direct pithead agreements with major mines across Indonesia, South Africa, Australia, and regular linkages with Coal India auctions.',
      points: ['No broker markups', 'Long-term pithead linkages', 'Direct port discharge allocation']
    },
    {
      icon: <FlaskConical size={28} />,
      title: 'Quality Focus',
      subtitle: 'Pre-Dispatch Testing & COA',
      desc: 'Rigorous third-party testing (SGS / Inspectorate / NABL) for every rake and consignment. Parameter guarantees for GCV, Ash, Fe, and Moisture.',
      points: ['Pre-loading draft surveys', 'Automatic mechanical sampling', 'Certified lab test reports (COA)']
    },
    {
      icon: <Boxes size={28} />,
      title: 'Reliable Supply',
      subtitle: 'Consistent Bulk Availability',
      desc: 'Multi-thousand metric ton buffer stockpiles at strategic East & West coast ports, ensuring uninterrupted monthly standing supply for your plant.',
      points: ['Dedicated railway rakes (BOXN)', 'Port yard stockpiling buffers', 'Emergency spot dispatch within 48h']
    },
    {
      icon: <Factory size={28} />,
      title: 'Industry Expertise',
      subtitle: 'Technical Fuel & Mineral Engineering',
      desc: 'Over a decade of combined technical expertise serving blast furnaces, sponge iron DRI kilns, cement precalciners, and thermal boilers.',
      points: ['Custom coal blending', 'Slag basicity guidance', 'Ash fusion temperature analysis']
    }
  ];

  return (
    <section id="why-us" className="why-section">
      {/* Background Panoramic Mountain & Mining Image */}
      <img
        src="/assets/mountain_mining_panorama.jpg"
        alt="Panoramic mountain mineral mine with processing facilities and haul roads"
        className="why-bg-img"
        loading="lazy"
      />

      {/* Sky Blue & Dark Navy Gradient Mask */}
      <div className="why-overlay" />

      <div className="container why-content">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge dark-mode">
            End-To-End Sourcing & Supply Chain Support
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Why Choose Vicious Stone
          </h2>
          <p className="section-desc" style={{ color: 'var(--navy-300)' }}>
            From pithead to plant gate, we eliminate procurement uncertainties, volatile price surprises, and specification mismatches.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="cards-grid-4">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="why-card">
              <div>
                {/* Icon box */}
                <div className="why-icon-wrap">
                  {pillar.icon}
                </div>

                <div className="why-card-sub">
                  {pillar.subtitle}
                </div>
                <h3 className="why-card-title">
                  {pillar.title}
                </h3>
                <p className="why-card-desc">
                  {pillar.desc}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="why-card-points">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="why-card-point">
                    <CheckCircle size={14} style={{ color: 'var(--sky-400)', flexShrink: 0 }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip */}
        <div 
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            borderRadius: '1rem',
            background: 'rgba(11, 25, 44, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sky-300)',
                flexShrink: 0
              }}
            >
              <FileCheck2 size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                Need Guaranteed Spec Testing For Your Next Cargo?
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--navy-300)', marginTop: '0.2rem' }}>
                We provide pre-dispatch sampling reports from accredited NABL / SGS laboratories.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <span>Request Spec Analysis Sample</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
