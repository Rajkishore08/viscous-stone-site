import React, { useState } from 'react';
import { 
  METALS_MINERALS_CATEGORIES, 
  METALS_MINERALS_DATA, 
  MINING_BELTS_DATA 
} from '../data/materialsData';
import { FileText, ArrowRight, MapPin } from 'lucide-react';
import '../styles/metals-minerals.css';

export default function MetalsMinerals({ onOpenQuoteModal, onOpenSpecModal }) {
  const [activeCategory, setActiveCategory] = useState(METALS_MINERALS_CATEGORIES[0]);

  const filteredItems = METALS_MINERALS_DATA.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="metals-minerals" className="metals-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">BEYOND COAL</div>
          <h2 className="section-title text-slate-900">
            IRON, ALUMINIUM AND THE MINERALS BEHIND THEM
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            The same sourcing desk that buys your coal also buys the ore, metal and minerals your plant needs. One supplier, one set of paperwork, one person to ask.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="metals-tab-bar">
          {METALS_MINERALS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`metals-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="metals-cards-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="metals-card">
              <div className="metals-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="metals-card-img"
                  loading="lazy"
                />
                <div className="metals-card-badges">
                  <span className="metals-origin-badge">{item.hsCode}</span>
                  <span className={`metals-status-badge ${item.statusBadge === 'CORE' ? 'core' : 'custom'}`}>
                    {item.statusBadge}
                  </span>
                </div>
              </div>

              <div className="metals-card-body">
                <h3 className="metals-card-title">{item.name}</h3>
                <p className="metals-card-desc">{item.desc}</p>

                {/* Specs Table */}
                <div className="metals-specs-table">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="metals-spec-row">
                      <span className="metals-spec-key">{spec.key}</span>
                      <span className="metals-spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="metals-card-actions">
                  <button
                    onClick={() => onOpenQuoteModal({ name: item.name, category: item.category, hsCode: item.hsCode })}
                    className="btn btn-primary btn-sm flex-1"
                  >
                    <span>Request Quote</span>
                  </button>
                  <button
                    onClick={() => onOpenSpecModal && onOpenSpecModal(item)}
                    className="btn btn-secondary btn-sm"
                    title="View Technical Specification Sheet"
                  >
                    <FileText size={14} />
                    <span>Spec Sheet</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MINING BELTS INDIA Section */}
        <div id="mining-belts" className="mining-belts-container">
          <div className="mining-belts-header">
            <span className="mining-belts-overline">MINING BELTS INDIA</span>
            <h3 className="mining-belts-title">
              WHERE OUR ORE COMES FROM
            </h3>
            <p className="mining-belts-subtitle">
              We source from India's four main iron ore regions, close to steel and DRI clusters.
            </p>
          </div>

          <div className="mining-belts-grid">
            {MINING_BELTS_DATA.map((belt) => (
              <div key={belt.region} className="mining-belt-card">
                <div className="mining-belt-header">
                  <MapPin size={18} className="text-sky-600" />
                  <h4 className="mining-belt-name">{belt.region}</h4>
                </div>
                <div className="mining-belt-locations">
                  {belt.locations}
                </div>
                <p className="mining-belt-desc">
                  {belt.mineral}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
