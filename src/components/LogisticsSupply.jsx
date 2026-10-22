import React, { useState } from 'react';
import { 
  Truck, 
  Train, 
  Anchor, 
  Warehouse, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Clock,
  Gauge
} from 'lucide-react';
import { PORTS_INFRASTRUCTURE, PORTS_DATA } from '../data/materialsData';
import '../styles/logistics-supply.css';

export default function LogisticsSupply({ onOpenQuoteModal }) {
  const portsList = Array.isArray(PORTS_INFRASTRUCTURE) && PORTS_INFRASTRUCTURE.length > 0
    ? PORTS_INFRASTRUCTURE
    : [
        ...(PORTS_DATA?.westCoast || []),
        ...(PORTS_DATA?.eastCoast || [])
      ];

  const [activePort, setActivePort] = useState(portsList[0] || {
    port: 'Mundra',
    coast: 'West Coast',
    cargo: 'Indonesian & South African Steam Coal, Petcoke, Limestone',
    handling: 'Deep-draft Capesize berths, automated wagon loaders.',
    reach: 'Direct railway links to North & West India'
  });

  const modes = [
    {
      icon: <Truck size={24} className="text-sky-600" />,
      title: 'Road Transport',
      desc: 'GPS-monitored multi-axle heavy tippers for direct gate delivery within 200–500 km clusters.'
    },
    {
      icon: <Train size={24} className="text-sky-600" />,
      title: 'Rail Connectivity',
      desc: 'Dedicated BOXN / BOBRN railway rakes (approx. 3,800 to 4,000 MT per rake) direct from port sidings.'
    },
    {
      icon: <Anchor size={24} className="text-sky-600" />,
      title: 'Port Handling',
      desc: 'Mechanized stevedoring, draft surveys, and automated stacker-reclaimers across East & West coast ports.'
    },
    {
      icon: <Warehouse size={24} className="text-sky-600" />,
      title: 'Warehousing & Yards',
      desc: 'Strategic buffer stockyards with dust suppression systems to safeguard emergency plant reserves.'
    }
  ];

  return (
    <section id="logistics" className="logistics-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Anchor size={13} className="text-sky-600" />
            Multi-Modal Evacuation & Siding Logistics
          </div>
          <h2 className="section-title text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Logistics & Supply Chain
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            From vessel berthing to plant siding, our integrated multi-modal freight network guarantees prompt turnaround and zero demurrage.
          </p>
        </div>

        {/* 4 Pillars Grid (matching reference image) */}
        <div className="logistics-modes-grid">
          {modes.map((mode, idx) => (
            <div key={idx} className="logistics-mode-card">
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.65rem',
                  backgroundColor: 'var(--sky-50)',
                  border: '1px solid var(--sky-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                {mode.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
                {mode.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--navy-600)', lineHeight: 1.55 }}>
                {mode.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Port Visual & Interactive Terminal Explorer */}
        <div className="port-explorer-card">
          <div className="port-terminal-grid">
            {/* Left: Port Image */}
            <div className="port-photo-wrap">
              <img
                src="/assets/logistics_bulk_carrier.jpg"
                alt="Bulk carrier vessel at port terminal being loaded with mineral cargo"
                loading="lazy"
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(7, 14, 27, 0.95) 100%)'
                }}
              />
              
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#ffffff' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sky-300)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                  Active Evacuation Gateway
                </span>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
                  East & West Coast Port Stockyards
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--navy-300)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                  Handling over 1,200,000 MT annually across India's deepest bulk draft berths.
                </p>
              </div>
            </div>

            {/* Right: Interactive Port Selector & Details */}
            <div className="port-details-pane">
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sky-600)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Select Port Terminal
                </div>

                {/* Port Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {portsList.map((p, idx) => {
                    const isSelected = (activePort?.port || '') === p.port;
                    return (
                      <button
                        key={p.port || idx}
                        onClick={() => setActivePort(p)}
                        style={{
                          padding: '0.45rem 0.9rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          fontFamily: 'var(--font-display)',
                          cursor: 'pointer',
                          transition: 'all 150ms ease',
                          border: '1.5px solid',
                          backgroundColor: isSelected ? 'var(--sky-600)' : '#ffffff',
                          color: isSelected ? '#ffffff' : 'var(--navy-800)',
                          borderColor: isSelected ? 'var(--sky-600)' : 'var(--border-color)',
                          boxShadow: isSelected ? 'var(--shadow-sm)' : 'none'
                        }}
                      >
                        {p.port}
                      </button>
                    );
                  })}
                </div>

                {/* Active Port Info Box */}
                <div style={{ padding: '1.25rem', borderRadius: '0.75rem', backgroundColor: 'var(--navy-100)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-display)' }}>
                        {activePort?.port || 'Port Terminal'}
                      </h4>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--sky-600)', fontWeight: 600 }}>
                        {activePort?.coast || 'India'} Deep-Water Terminal
                      </span>
                    </div>
                    <span style={{ padding: '0.25rem 0.65rem', borderRadius: '0.35rem', backgroundColor: 'var(--sky-100)', color: 'var(--sky-800)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      Active Berth
                    </span>
                  </div>

                  <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem' }}>
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--navy-500)', fontSize: '0.72rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Primary Mineral Cargoes:
                      </span>
                      <span style={{ color: 'var(--navy-900)', fontWeight: 600 }}>
                        {activePort?.cargo || 'Thermal Coal, Coking Coal, Fluxes'}
                      </span>
                    </div>

                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--navy-500)', fontSize: '0.72rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Terminal Capabilities & Discharge:
                      </span>
                      <span style={{ color: 'var(--navy-700)' }}>
                        {activePort?.handling || 'Mechanized conveyor discharge and rake loading'}
                      </span>
                    </div>

                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--navy-500)', fontSize: '0.72rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Industrial Corridor Delivery Reach:
                      </span>
                      <span style={{ color: 'var(--sky-700)', fontWeight: 600 }}>
                        {activePort?.reach || 'Direct connectivity to major national rail corridors'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--navy-600)' }}>
                  Need freight estimation to your nearest siding?
                </span>
                <button
                  onClick={() => onOpenQuoteModal({ location: activePort.port })}
                  className="btn btn-primary btn-sm"
                >
                  <span>Check Port Stock</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
