import React from 'react';
import { ArrowUpRight, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import { CORE_MATERIALS } from '../data/materialsData';

export default function CoreMaterials({ onSelectCategory, onOpenQuoteModal }) {
  const handleCardClick = (e, catId) => {
    e.preventDefault();
    const target = document.querySelector('#materials');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (catId === 'coal' || catId === 'coke') {
      onSelectCategory('Coal & Coke');
    } else if (catId === 'iron-ore') {
      onSelectCategory('Iron & Steel');
    } else {
      onSelectCategory('Industrial Minerals');
    }
  };

  return (
    <section id="core-materials" className="section bg-slate-50/70 border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-badge">
              <Sparkles size={13} className="text-sky-600" />
              Primary Supply Portfolios
            </div>
            <h2 className="section-title text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Core Materials
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mt-2">
              Supplying key raw materials for power, steel, cement, foundries and manufacturing sectors across India.
            </p>
          </div>

          <a
            href="#materials"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#materials')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-display font-bold text-sky-600 hover:text-sky-700 text-sm tracking-wide group"
          >
            <span>View All Materials</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_MATERIALS.map((mat) => (
            <div
              key={mat.id}
              onClick={(e) => handleCardClick(e, mat.id)}
              className="card-clean group cursor-pointer flex flex-col bg-white border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={mat.image}
                  alt={mat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Arrow Icon Badge */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 group-hover:bg-sky-500 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-sky-600 transition-colors">
                    {mat.title}
                  </h3>
                  <div className="text-xs font-semibold text-sky-600 font-mono tracking-wide mt-1">
                    {mat.tagline}
                  </div>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed line-clamp-3">
                    {mat.desc}
                  </p>
                </div>

                {/* Key Spec Badges */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {mat.specs.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-sky-50 text-sky-800 px-2 py-0.5 rounded border border-sky-100"
                    >
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
