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
import { PORTS_INFRASTRUCTURE } from '../data/materialsData';

export default function LogisticsSupply({ onOpenQuoteModal }) {
  const [activePort, setActivePort] = useState(PORTS_INFRASTRUCTURE[0]);

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
    <section id="logistics" className="section bg-slate-50 border-b border-slate-200">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modes.map((mode, idx) => (
            <div key={idx} className="card-clean p-6 bg-white border border-slate-200 hover:border-sky-400">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                {mode.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                {mode.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {mode.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Port Visual & Interactive Terminal Explorer */}
        <div className="card-clean border border-slate-200 bg-white overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Port Image */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
              <img
                src="/assets/14_Bulk_carrier_at_a_port_with_cranes.jpg"
                alt="Bulk carrier vessel at port terminal being loaded with mineral ore"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-mono tracking-wider uppercase text-sky-300 font-bold block mb-1">
                  Active Evacuation Gateway
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-display">
                  East & West Coast Port Stockyards
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Handling over 1,200,000 MT annually across India's deepest bulk draft berths.
                </p>
              </div>
            </div>

            {/* Right: Interactive Port Selector & Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-600 font-bold mb-3">
                  Select Port Terminal
                </div>

                {/* Port Buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {PORTS_INFRASTRUCTURE.map((p) => (
                    <button
                      key={p.port}
                      onClick={() => setActivePort(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-display transition-all border ${
                        activePort.port === p.port
                          ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-sky-50'
                      }`}
                    >
                      {p.port}
                    </button>
                  ))}
                </div>

                {/* Active Port Info Box */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 font-display">
                        {activePort.port}
                      </h4>
                      <span className="text-xs font-mono text-sky-600 font-semibold">
                        {activePort.coast} Deep-Water Terminal
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-[11px] font-mono font-bold">
                      Active Berth
                    </span>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-slate-500 text-xs block uppercase tracking-wider">
                        Primary Mineral Cargoes:
                      </span>
                      <span className="text-slate-800 font-medium">
                        {activePort.cargo}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-500 text-xs block uppercase tracking-wider">
                        Terminal Capabilities & Discharge:
                      </span>
                      <span className="text-slate-700">
                        {activePort.handling}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-500 text-xs block uppercase tracking-wider">
                        Industrial Corridor Delivery Reach:
                      </span>
                      <span className="text-sky-700 font-medium">
                        {activePort.reach}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">
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
