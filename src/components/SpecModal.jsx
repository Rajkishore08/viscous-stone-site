import React from 'react';
import { X, FileText, ArrowRight, ShieldCheck, MapPin, Truck } from 'lucide-react';
import '../styles/modals.css';

export default function SpecModal({ product, onClose, onOpenQuoteModal }) {
  if (!product) return null;

  // Defensive spec rows generation
  const specRows = product.fullSpecs 
    ? Object.entries(product.fullSpecs)
    : Array.isArray(product.specs)
      ? product.specs.map(s => [s.key, s.val])
      : product.specs && typeof product.specs === 'object'
        ? Object.entries(product.specs)
        : [];

  const originText = product.origin || product.originBadge || product.hsCode || product.fullSpecs?.Origins || 'Direct Mine Linkages';
  const descText = product.desc || product.shortDesc || '';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950 border border-sky-400/40 text-sky-300 font-mono text-[11px] font-semibold uppercase tracking-wider mb-2">
            {product.category || 'COMMODITY GRADE'}
          </div>
          <h3 className="text-2xl font-bold font-display text-white">
            {product.name}
          </h3>
          <p className="text-xs text-sky-200 mt-1 flex items-center gap-1.5 font-mono">
            <MapPin size={13} />
            Origin: {originText}
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Summary */}
          {descText && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                Grade Overview
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {descText}
              </p>
            </div>
          )}

          {/* Certified Specifications Table */}
          {specRows.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center justify-between">
                <span>Technical Specification Sheet</span>
                <span className="text-sky-600 flex items-center gap-1 text-[11px]">
                  <ShieldCheck size={14} /> NABL / SGS Certified
                </span>
              </h4>

              <div className="spec-table-container">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Chemical / Physical Parameter</th>
                      <th>Guaranteed Specification Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specRows.map(([param, val], idx) => (
                      <tr key={idx}>
                        <td className="font-sans font-semibold text-slate-800">{param}</td>
                        <td>{typeof val === 'object' ? JSON.stringify(val) : String(val)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sizing & Available Ranks if present */}
          {product.typicalGrades && Array.isArray(product.typicalGrades) && product.typicalGrades.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                Commercial Available Grades
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.typicalGrades.map((g, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-900 border border-sky-200 text-xs font-mono font-semibold"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Target Industry Applications if present */}
          {product.applications && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                Key Industrial Applications
              </h4>
              <p className="text-xs sm:text-sm text-slate-700">
                {product.applications}
              </p>
            </div>
          )}

          {/* Logistics & Dispatch Options */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
            <Truck size={16} className="text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-sans">Dispatch & Evacuation Modes:</strong>
              {product.supplyMode || 'BOXN / BOBRN Rakes from Port Siding, GPS-tracked Heavy Tippers, or Full Bulk Vessel Cargoes.'}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal?.(product);
            }}
            className="btn btn-primary btn-sm flex items-center gap-1.5"
          >
            <span>Request Quotation for {product.name}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
