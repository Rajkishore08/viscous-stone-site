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
    <section id="sourcing" className="section bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image with Conveyors & Stockyard */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl group">
              <img
                src="/assets/13_Coal_stockyard_with_stacker_conveyor.jpg"
                alt="Coal stockyard with stacker conveyor and bulk storage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />

              {/* Float Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs">
                <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-wider mb-1 font-mono">
                  <ShieldCheck size={16} />
                  Inspection Standard
                </div>
                <p className="text-slate-300">
                  Pre-dispatch automated sampling ensures zero moisture inflation and exact calorific compliance before gate dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="section-badge dark-mode mb-4">
              <GitFork size={13} className="text-sky-400" />
              End-To-End Execution
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              From requirement to delivery, we manage the entire procurement process.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Industrial plants face three chronic supply chain headaches: fluctuating international indices, unpredictable railway freight allotments, and off-spec mineral shipments. Vicious Stone insulates your plant with rigorous process controls.
            </p>

            {/* Steps List */}
            <div className="flex flex-col gap-5 mb-8">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 hover:border-sky-400/50 transition-colors">
                  <span className="font-mono text-lg font-extrabold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-400/30 shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-lg flex items-center gap-2"
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
