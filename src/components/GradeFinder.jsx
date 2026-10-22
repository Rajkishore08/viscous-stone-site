import React, { useState } from 'react';
import { GRADE_FINDER_INDUSTRIES, COMPANY_INFO } from '../data/materialsData';
import { ArrowRight, Train, CheckCircle2, Sliders, MessageSquare } from 'lucide-react';
import '../styles/grade-finder.css';

export default function GradeFinder({ onOpenQuoteModal }) {
  const [activeIndustryId, setActiveIndustryId] = useState(GRADE_FINDER_INDUSTRIES[0].id);
  const [rakeCount, setRakeCount] = useState(2);
  const [freightKm, setFreightKm] = useState(450);

  const activeIndustry = GRADE_FINDER_INDUSTRIES.find(
    (ind) => ind.id === activeIndustryId
  ) || GRADE_FINDER_INDUSTRIES[0];

  // Rake calculations: ~3,900 MT per BoxN rake
  const tonnage = rakeCount * 3900;
  const truckEquiv = Math.round(tonnage / 35); // 35 MT per tipper truck

  const handleWhatsAppForGrade = () => {
    const msg = `Hello Vicious Stone, I need a proposal for our plant running: ${activeIndustry.name}. Recommended fuels: ${activeIndustry.usuallyRunsOn}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="grade-finder" className="section bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">GRADE FINDER</div>
          <h2 className="section-title text-slate-900">
            WHICH COAL FITS YOUR PLANT?
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Choose your industry to see the grades buyers like you usually run. We confirm the final grade against your boiler or kiln data before we quote.
          </p>
        </div>

        {/* 7 Industry Selector Buttons */}
        <div className="grade-industry-nav">
          {GRADE_FINDER_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`grade-industry-btn ${activeIndustryId === ind.id ? 'active' : ''}`}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Rationale & Spec Panel */}
        <div className="grade-result-card">
          <div className="grade-result-header">
            <div>
              <span className="grade-result-tag">USUALLY RUNS ON</span>
              <h3 className="grade-result-title">{activeIndustry.name.toUpperCase()}</h3>
            </div>
            <button
              onClick={() => onOpenQuoteModal({
                name: `Coal for ${activeIndustry.name}`,
                spec: activeIndustry.usuallyRunsOn,
                category: 'GRADE FINDER'
              })}
              className="btn btn-primary"
            >
              <span>GET A QUOTE FOR THIS</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grade-feedstock-box">
            <div className="text-xs font-mono font-semibold uppercase text-sky-800 tracking-wider mb-1">
              Recommended Feedstock & Grades:
            </div>
            <div className="text-base font-semibold text-slate-900 leading-snug">
              {activeIndustry.usuallyRunsOn}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {/* Operational Rationale */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h4 className="font-display font-bold text-slate-900 mb-2">Operational Rationale</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeIndustry.rationale}
              </p>
            </div>

            {/* Parameter Matrix */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h4 className="font-display font-bold text-slate-900 mb-2">Parameter Tolerance Matrix</h4>
              <div className="divide-y divide-slate-200 text-xs font-mono">
                {Object.entries(activeIndustry.specs).map(([key, val]) => (
                  <div key={key} className="py-1.5 flex justify-between">
                    <span className="text-slate-500">{key}:</span>
                    <span className="font-bold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Railway Rake & Freight Logistics Estimator */}
          <div className="rake-estimator-box">
            <div className="flex items-center gap-2 mb-3">
              <Train size={20} className="text-sky-600" />
              <h4 className="font-display font-bold text-slate-900 text-base">
                Railway Rake Allotment & Landed Volume Estimator (Indian Railways BoxN)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  Monthly Standing Rakes: <strong>{rakeCount} Rakes</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={rakeCount}
                  onChange={(e) => setRakeCount(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  Est. Rail Siding Distance: <strong>{freightKm} km</strong>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="50"
                  value={freightKm}
                  onChange={(e) => setFreightKm(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-mono uppercase">Bulk Volume</div>
                <div className="text-xl font-extrabold text-sky-700 font-display">
                  {tonnage.toLocaleString()} MT
                </div>
                <div className="text-xs text-slate-500">Per Month Supply</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-mono uppercase">Road Equivalent</div>
                <div className="text-xl font-extrabold text-slate-900 font-display">
                  ~{truckEquiv} Trucks
                </div>
                <div className="text-xs text-slate-500">Saved Rake Movement</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-600">
                Dispatch directly from Paradip, Dhamra, Krishnapatnam, Mundra or Coal India pithead sidings.
              </span>
              <button
                onClick={handleWhatsAppForGrade}
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={14} />
                <span>Enquire Siding Rates on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
