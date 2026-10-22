import React from 'react';
import { 
  Globe2, 
  FlaskConical, 
  Boxes, 
  Factory, 
  CheckCircle,
  FileCheck2,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: <Globe2 className="text-sky-500" size={32} />,
      title: 'Global Network',
      subtitle: 'Direct Mine Access',
      desc: 'Direct pithead agreements with major mines across Indonesia, South Africa, Australia, and regular linkages with Coal India auctions.',
      points: ['No broker markups', 'Long-term pithead linkages', 'Direct port discharge allocation']
    },
    {
      icon: <FlaskConical className="text-sky-500" size={32} />,
      title: 'Quality Focus',
      subtitle: 'Pre-Dispatch Testing & COA',
      desc: 'Rigorous third-party testing (SGS / Inspectorate / NABL) for every rake and consignment. Parameter guarantees for GCV, Ash, Fe, and Moisture.',
      points: ['Pre-loading draft surveys', 'Automatic mechanical sampling', 'Certified lab test reports (COA)']
    },
    {
      icon: <Boxes className="text-sky-500" size={32} />,
      title: 'Reliable Supply',
      subtitle: 'Consistent Bulk Availability',
      desc: 'Multi-thousand metric ton buffer stockpiles at strategic East & West coast ports, ensuring uninterrupted monthly standing supply for your plant.',
      points: ['Dedicated railway rakes (BOXN)', 'Port yard stockpiling buffers', 'Emergency spot dispatch within 48h']
    },
    {
      icon: <Factory className="text-sky-500" size={32} />,
      title: 'Industry Expertise',
      subtitle: 'Technical Fuel & Mineral Engineering',
      desc: 'Over a decade of combined technical expertise serving blast furnaces, sponge iron DRI kilns, cement precalciners, and thermal boilers.',
      points: ['Custom coal blending', 'Slag basicity guidance', 'Ash fusion temperature analysis']
    }
  ];

  return (
    <section id="why-us" className="relative section overflow-hidden bg-slate-900 text-white">
      {/* Background Panoramic Mountain & Mining Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/mountain_mining_panorama.jpg"
          alt="Panoramic mountain mineral mine with processing facilities and haul roads"
          className="w-full h-full object-cover object-center filter brightness-50"
          loading="lazy"
        />
        {/* Sky Blue & Navy Gradient Layer */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 25, 44, 0.92) 0%, rgba(15, 23, 42, 0.88) 50%, rgba(7, 14, 27, 0.95) 100%)'
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge dark-mode">
            End-To-End Sourcing & Supply Chain Support
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Why Choose Vicious Stone
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From pithead to plant gate, we eliminate procurement uncertainties, volatile price surprises, and specification mismatches.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card-glass-dark p-6 sm:p-7 flex flex-col justify-between hover:border-sky-400/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-xl bg-sky-950/80 border border-sky-400/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>

                <div className="text-xs font-mono font-semibold text-sky-400 tracking-wider uppercase">
                  {pillar.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-2">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle size={14} className="text-sky-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-900/60 via-slate-900/80 to-sky-950/70 border border-sky-400/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0">
              <FileCheck2 size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need Guaranteed Spec Testing For Your Next Cargo?</h4>
              <p className="text-xs sm:text-sm text-slate-300">We provide pre-dispatch sampling reports from accredited NABL / SGS labs.</p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="btn btn-primary whitespace-nowrap px-6 py-3"
          >
            <span>Request Spec Analysis Sample</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
