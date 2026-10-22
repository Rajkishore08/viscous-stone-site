import React from 'react';
import { 
  GitFork, 
  SearchCheck, 
  Scale, 
  FileCheck2, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import '../styles/sourcing-procurement.css';

export default function SourcingProcurement({ onOpenQuoteModal }) {
  const steps = [
    {
      num: '01',
      title: 'Supplier Identification & Mine Verification',
      desc: 'We identify pithead supply or auction allocations, vetting mine licenses, coal rank consistency, and producer solvency.'
    },
    {
      num: '02',
      title: 'Transparent Quotation & Cost Comparison',
      desc: 'We benchmark pithead pricing against current ICI (Indonesian Coal Index), API4 (South Africa), and Indian domestic landed freight rates.'
    },
    {
      num: '03',
      title: 'Quality Checks & Third-Party Documentation',
      desc: 'SGS or NABL accredited sampling at load port and discharge stockyards, producing legally certified Certificate of Sampling & Analysis (COA).'
    },
    {
      num: '04',
      title: 'Logistics Coordination & Gate Delivery',
      desc: 'Continuous railway rake tracing, port stevedoring, mechanized bagging/crushing, and computerized weighbridge gate clearance.'
    }
  ];

  return (
    <section id="sourcing" className="procurement-section">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="procurement-grid">
          {/* Left Column: Visual Image with Conveyors & Stockyard */}
          <div>
            <div className="procurement-visual-frame">
              <img
                src="/assets/procurement_stockyard.jpg"
                alt="Coal stockyard with stacker conveyor and automated bulk storage"
                loading="lazy"
              />

              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(7, 14, 27, 0.95) 100%)'
                }}
              />

              {/* Float Badge */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '0.85rem',
                  backgroundColor: 'rgba(7, 14, 27, 0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sky-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                  <ShieldCheck size={16} />
                  Inspection Standard
                </div>
                <p style={{ color: 'var(--navy-300)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                  Pre-dispatch automated sampling ensures zero moisture inflation and exact calorific compliance before gate dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Steps */}
          <div>
            <div className="section-badge dark-mode" style={{ marginBottom: '1rem' }}>
              <GitFork size={13} style={{ color: 'var(--sky-400)' }} />
              End-To-End Execution
            </div>

            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
              From requirement to delivery, we manage the entire procurement process.
            </h2>

            <p style={{ color: 'var(--navy-300)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Industrial plants face three chronic supply chain headaches: fluctuating international indices, unpredictable railway freight allotments, and off-spec mineral shipments. Vicious Stone insulates your plant with rigorous process controls.
            </p>

            {/* Steps List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {steps.map((step) => (
                <div key={step.num} className="procurement-step-card">
                  <span className="procurement-step-num">
                    {step.num}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.2rem' }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--navy-300)', lineHeight: 1.55 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-lg"
            >
              <span>Submit Your Requirement</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
