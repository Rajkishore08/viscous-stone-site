import React, { useState } from 'react';
import { COAL_CATEGORIES, COAL_CATALOGUE_DATA } from '../data/materialsData';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import '../styles/coal-catalogue.css';

export default function CoalCatalogue({ onOpenQuoteModal, onOpenSpecModal }) {
  const [activeCategory, setActiveCategory] = useState(COAL_CATEGORIES[0]);

  const filteredItems = COAL_CATALOGUE_DATA.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="coal-catalogue" className="section bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">COAL CATALOGUE</div>
          <h2 className="section-title text-slate-900">
            ALL COAL, DOMESTIC AND IMPORTED
          </h2>
          <p className="section-desc max-w-3xl mx-auto">
            Thermal coal for burning, coking coal for steel. Imported grades are quoted in the calorific basis the market trades them on: GAR for Indonesia, NAR for South Africa and Australia. Indian grades follow the Ministry of Coal classification.
          </p>
        </div>

        {/* Operational Context Sub-box */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-8 max-w-3xl mx-auto text-sm text-slate-700 leading-relaxed shadow-sm">
          <p className="mb-2">
            <strong>Application Note:</strong> Steam coal for power plants, cement kilns, sponge iron, and industrial boilers in paper, textile, chemical and food processing. Our core origins are Indonesia and Australia; other origins are sourced against firm enquiries.
          </p>
          <p className="text-slate-600">
            <strong>Supply Options:</strong> Supplied by full vessel (Supramax / Panamax), or in smaller lots from port stockyards by truck and railway rake for buyers who need 500 – 5,000 tonnes at a time.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="coal-tab-bar">
          {COAL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`coal-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Coal Cards Grid */}
        <div className="coal-cards-grid">
          {filteredItems.map((coal) => (
            <div key={coal.id} className="coal-card">
              <div className="coal-card-img-wrap">
                <img
                  src={coal.image}
                  alt={coal.name}
                  className="coal-card-img"
                  loading="lazy"
                />
                <div className="coal-card-badges">
                  <span className="origin-badge">{coal.originBadge}</span>
                  <span className={`status-badge ${coal.statusBadge === 'CORE' ? 'core' : 'custom'}`}>
                    {coal.statusBadge}
                  </span>
                </div>
              </div>

              <div className="coal-card-body">
                <h3 className="coal-card-title">{coal.name}</h3>
                <p className="coal-card-desc">{coal.desc}</p>

                {/* Specs Table */}
                <div className="coal-specs-table">
                  {coal.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="coal-spec-row">
                      <span className="coal-spec-key">{spec.key}</span>
                      <span className="coal-spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="coal-card-actions">
                  <button
                    onClick={() => onOpenQuoteModal({ name: coal.name, category: coal.category, origin: coal.originBadge })}
                    className="btn btn-primary btn-sm flex-1"
                  >
                    <span>Request Quote</span>
                  </button>
                  <button
                    onClick={() => onOpenSpecModal && onOpenSpecModal(coal)}
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
      </div>
    </section>
  );
}
