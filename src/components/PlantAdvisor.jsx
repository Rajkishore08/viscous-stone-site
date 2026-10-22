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
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {PLANT_ADVISOR_OPTIONS.map((plant) => (
            <button
              key={plant.id}
              onClick={() => setSelectedPlantId(plant.id)}
              className={`px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 ${
                selectedPlantId === plant.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md transform -translate-y-0.5'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
              }`}
            >
              <Factory size={15} className={selectedPlantId === plant.id ? 'text-sky-200' : 'text-slate-400'} />
              <span>{plant.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Plant Advisor Card */}
        <div className="card-clean border border-slate-200 bg-slate-50/50 p-6 sm:p-10 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Grade Match & Engineering Rationale */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                  <Flame size={13} className="text-sky-600" />
                  {currentOption.badge} Specification
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-3">
                  Recommended Feedstock:
                </h3>

                <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-sm mb-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-600 font-bold">
                    Primary Fuel Specification
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-0.5">
                    {currentOption.recommendedCoal}
                  </div>
                  {currentOption.recommendedIron !== "N/A" && currentOption.recommendedIron !== "N/A (Energy Feedstock)" && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
                        Paired Ore / Flux Feedstock
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        {currentOption.recommendedIron}
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentOption.desc}
                </p>

                {/* Technical Rationale */}
                <div className="p-4 rounded-xl bg-sky-50/80 border border-sky-100 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900">
                        Combustion & Operational Rationale
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        {currentOption.rationale}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
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
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Technical Limits Matrix */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center justify-between">
                  <span>Parameter Tolerance Matrix</span>
                  <span className="text-sky-600">NABL / SGS Verified</span>
                </h4>
                <div className="divide-y divide-slate-100">
                  {Object.entries(currentOption.specs).map(([param, val], idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-600 font-medium">{param}</span>
                      <span className="font-mono font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rake Logistics Estimator Tool */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-5 rounded-xl border border-slate-800 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                    <Train size={14} />
                    Rake Logistics Estimator
                  </span>
                  <span className="text-[11px] text-slate-400">BOXN Rakes</span>
                </div>

                <div className="mb-4">
                  <label className="text-xs text-slate-300 block mb-1">
                    Monthly Requirement: <strong className="text-sky-300 font-mono">{targetTonnage.toLocaleString()} MT</strong>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={targetTonnage}
                    onChange={(e) => setTargetTonnage(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>1,000 MT</span>
                    <span>25,000 MT</span>
                    <span>50,000 MT</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-slate-400 text-[11px]">Calculated Allocation:</div>
                    <div className="text-base font-bold text-sky-300 font-mono">
                      ≈ {estimatedRakes} Railway Rakes / Month
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-[11px]">Buffer Siding:</div>
                    <div className="text-xs font-semibold text-white">East/West Coast</div>
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
