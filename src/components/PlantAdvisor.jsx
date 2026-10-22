import React, { useState } from 'react';
import { 
  Cpu, 
  Flame, 
  Zap, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  FileCheck,
  Calculator,
  Train
} from 'lucide-react';
import { PLANT_ADVISOR_OPTIONS } from '../data/materialsData';

export default function PlantAdvisor({ onOpenQuoteModal }) {
  const [selectedPlantId, setSelectedPlantId] = useState(PLANT_ADVISOR_OPTIONS[0].id);
  const [targetTonnage, setTargetTonnage] = useState(10000);

  const currentOption = PLANT_ADVISOR_OPTIONS.find(p => p.id === selectedPlantId) || PLANT_ADVISOR_OPTIONS[0];

  // Calculate approx rakes (approx 3,800 MT per BOXN railway rake)
  const estimatedRakes = (targetTonnage / 3800).toFixed(1);

  return (
    <section id="advisor" className="section bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={13} className="text-sky-600" />
            Engineering Intelligence & Fuel Selection
          </div>
          <h2 className="section-title text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Plant Fuel & Mineral Advisor
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Optimize your boiler efficiency, protect refractory linings, and prevent clinkering with metallurgical and thermal fuel recommendations tailored to your industrial process.
          </p>
        </div>

        {/* Plant Facility Selector Bar */}
        <div className="facility-row">
          {PLANT_ADVISOR_OPTIONS.map((plant) => (
            <button
              key={plant.id}
              onClick={() => setSelectedPlantId(plant.id)}
              className={`facility-btn ${selectedPlantId === plant.id ? 'active' : ''}`}
            >
              <Factory size={15} style={{ color: selectedPlantId === plant.id ? '#ffffff' : 'var(--sky-600)' }} />
              <span>{plant.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Plant Advisor Card */}
        <div className="advisor-card-wrap">
          <div className="advisor-grid">
            {/* Left Column: Grade Match & Engineering Rationale */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--sky-100)',
                    color: 'var(--sky-800)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '1rem'
                  }}
                >
                  <Flame size={13} style={{ color: 'var(--sky-600)' }} />
                  {currentOption.badge} Specification
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '1rem' }}>
                  Recommended Feedstock:
                </h3>

                <div className="advisor-feedstock-box">
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sky-600)', fontWeight: 700 }}>
                    Primary Fuel Specification
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy-900)', marginTop: '0.25rem', lineHeight: 1.3 }}>
                    {currentOption.recommendedCoal}
                  </div>
                  {currentOption.recommendedIron !== "N/A" && currentOption.recommendedIron !== "N/A (Energy Feedstock)" && (
                    <div style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid var(--navy-100)' }}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#d97706', fontWeight: 700 }}>
                        Paired Ore / Flux Feedstock
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy-800)', marginTop: '0.2rem' }}>
                        {currentOption.recommendedIron}
                      </div>
                    </div>
                  )}
                </div>

                <p style={{ color: 'var(--navy-600)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {currentOption.desc}
                </p>

                {/* Technical Rationale */}
                <div className="advisor-rationale-box">
                  <CheckCircle2 size={20} style={{ color: 'var(--sky-600)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sky-900)', marginBottom: '0.25rem' }}>
                      Combustion & Operational Rationale
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--navy-700)', lineHeight: 1.6 }}>
                      {currentOption.rationale}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={() => onOpenQuoteModal({ name: currentOption.recommendedCoal })}
                  className="btn btn-primary"
                >
                  <span>Request Supply Proposal for this Grade</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Spec Parameters & Rake Estimator */}
            <div>
              {/* Technical Limits Matrix */}
              <div className="tolerance-matrix-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--navy-100)' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-500)', fontWeight: 700 }}>
                    Parameter Tolerance Matrix
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--sky-600)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    NABL / SGS Verified
                  </span>
                </div>
                <div>
                  {Object.entries(currentOption.specs).map(([param, val], idx) => (
                    <div key={idx} className="tolerance-row">
                      <span style={{ color: 'var(--navy-700)', fontWeight: 600 }}>{param}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--navy-950)', backgroundColor: 'var(--sky-50)', padding: '0.2rem 0.5rem', borderRadius: '0.3rem', border: '1px solid var(--sky-100)' }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rake Logistics Estimator Tool */}
              <div className="rake-estimator-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sky-300)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Train size={15} />
                    Rake Logistics Estimator
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--navy-400)', fontFamily: 'var(--font-mono)' }}>BOXN Rakes</span>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--navy-300)', marginBottom: '0.4rem' }}>
                    Monthly Requirement: <strong style={{ color: 'var(--sky-300)', fontFamily: 'var(--font-mono)' }}>{targetTonnage.toLocaleString()} MT</strong>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={targetTonnage}
                    onChange={(e) => setTargetTonnage(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--sky-400)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--navy-400)', marginTop: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                    <span>1,000 MT</span>
                    <span>25,000 MT</span>
                    <span>50,000 MT</span>
                  </div>
                </div>

                <div 
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '0.65rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--navy-400)', fontSize: '0.72rem' }}>Calculated Allocation:</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--sky-300)', fontFamily: 'var(--font-mono)', marginTop: '0.1rem' }}>
                      ≈ {estimatedRakes} Railway Rakes / Month
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'var(--navy-400)', fontSize: '0.72rem' }}>Buffer Siding:</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginTop: '0.1rem' }}>East/West Coast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
