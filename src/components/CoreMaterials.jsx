import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { CORE_MATERIALS } from '../data/materialsData';
import '../styles/core-materials.css';

export default function CoreMaterials({ onSelectCategory, onOpenQuoteModal }) {
  const handleCardClick = (e, catId) => {
    e.preventDefault();
    const target = document.querySelector('#materials');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (catId === 'coal' || catId === 'coke') {
      onSelectCategory?.('Coal & Coke');
    } else if (catId === 'iron-ore') {
      onSelectCategory?.('Iron & Steel');
    } else {
      onSelectCategory?.('Industrial Minerals');
    }
  };

  return (
    <section id="core-materials" className="core-materials-section">
      <div className="container">
        {/* Section Header */}
        <div className="core-materials-header">
          <div>
            <div className="section-badge">
              <Sparkles size={13} style={{ color: 'var(--sky-600)' }} />
              Primary Supply Portfolios
            </div>
            <h2 className="section-title">
              Our Core Materials
            </h2>
            <p className="section-desc" style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
              Supplying key raw materials for power, steel, cement and industrial sectors.
            </p>
          </div>

          <a
            href="#materials"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#materials')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              color: 'var(--sky-600)', 
              fontSize: '0.9rem' 
            }}
          >
            <span>View All Materials</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="cards-grid-4">
          {CORE_MATERIALS.map((mat) => (
            <div
              key={mat.id}
              onClick={(e) => handleCardClick(e, mat.id)}
              className="material-card"
            >
              {/* Image Frame */}
              <div className="material-card-img-wrap">
                <img
                  src={mat.image}
                  alt={mat.title}
                  className="material-card-img"
                  loading="lazy"
                />
                <div className="material-card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Body */}
              <div className="material-card-body">
                <div>
                  <h3 className="material-card-title">
                    {mat.title}
                  </h3>
                  <div className="material-card-tagline">
                    {mat.tagline}
                  </div>
                  <p className="material-card-desc">
                    {mat.desc}
                  </p>
                </div>

                {/* Key Spec Badges */}
                <div className="material-card-specs">
                  {mat.specs.map((s, idx) => (
                    <span key={idx} className="spec-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
