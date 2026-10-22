import React from 'react';
import { 
  Building2, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Globe2,
  Users2,
  Boxes
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materialsData';

export default function AboutUs({ onOpenQuoteModal }) {
  return (
    <section id="about" className="section bg-white border-b border-slate-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-7">
            {/* Breadcrumb / Eyebrow */}
            <div className="section-badge mb-4">
              <Building2 size={13} className="text-sky-600" />
              Corporate Profile · Bengaluru
            </div>

            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              A trusted partner in global mining and industrial raw material supply.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Headquartered in Bengaluru, <strong>Vicious Stone Private Limited</strong> connects reliable global mines, domestic coal auctions, and port stockyards directly with India’s heavy manufacturing base. We eliminate intermediary bottlenecks to deliver a transparent, cost-efficient, and dependable supply chain for power plants, steel mills, cement rotary kilns, and foundries.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need spot single-rake delivery to mitigate emergency stockpiling deficits or a predictable 12-month standing fuel contract with strict GCV guarantees, our sourcing desks handle commercial negotiation, vessel chartering, port discharge, railway rake allotment, and certified NABL lab testing.
            </p>

            {/* 4 Stats Grid directly matching reference mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 flex flex-col justify-between">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-4 border-t border-slate-200">
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md font-mono">
                <CheckCircle2 size={14} className="text-sky-600" />
                GSTIN: <strong>{COMPANY_INFO.gstin}</strong>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                <MapPin size={14} className="text-sky-600" />
                HQ: Koramangala, Bengaluru
              </span>
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary btn-sm ml-auto"
              >
                <span>Partner With Us</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="/assets/12_Excavator_at_an_open-pit_mine.jpg"
                alt="Excavator at an open-pit mine quarry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

              {/* Floating Stat Card over Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-sky-700 font-semibold">
                      Port & Mine Network
                    </div>
                    <div className="text-slate-900 font-bold text-lg font-display">
                      Pan-India Rake Logistics
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold shadow-md">
                    24/7
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Direct evacuation linkages at Vizag, Krishnapatnam, Ennore, Paradip, and Mangalore ports.
                </p>
              </div>
            </div>

            {/* Decorative Geometric Accent */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-sky-200/50 rounded-full filter blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-400/20 rounded-full filter blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
