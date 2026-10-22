import React from 'react';
import { PORTS_DATA } from '../data/materialsData';
import { Anchor, ArrowRight } from 'lucide-react';
import '../styles/ports.css';

export default function PortsSection({ onOpenQuoteModal }) {
  // Max volume for relative bar width
  const maxVolume = 17.0;

  return (
    <section id="ports" className="section bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">DELIVERY PORTS</div>
          <h2 className="section-title text-slate-900">
            INDIA'S MAIN COAL PORTS
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            We deliver to India's busiest coal import terminals on both coasts, and onward by rail or road. Gujarat ports take about a third of imports; Odisha and Andhra Pradesh take about half.
          </p>
        </div>

        {/* Dual Coasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* West Coast */}
          <div className="port-coast-card">
            <div className="port-coast-header">
              <span className="port-coast-tag">WEST COAST</span>
              <span className="text-xs text-slate-500 font-mono">Arabian Sea Corridor</span>
            </div>
            <div className="port-list">
              {PORTS_DATA.westCoast.map((item, idx) => {
                const numVal = parseFloat(item.volume);
                const percent = (numVal / maxVolume) * 100;
                return (
                  <div key={idx} className="port-row">
                    <div className="port-row-info">
                      <span className="port-name">{item.port}</span>
                      <span className="port-state">{item.state}</span>
                    </div>
                    <div className="port-bar-wrap">
                      <div className="port-bar-track">
                        <div 
                          className="port-bar-fill" 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="port-volume">{item.volume}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* East Coast */}
          <div className="port-coast-card">
            <div className="port-coast-header">
              <span className="port-coast-tag">EAST COAST</span>
              <span className="text-xs text-slate-500 font-mono">Bay of Bengal Corridor</span>
            </div>
            <div className="port-list">
              {PORTS_DATA.eastCoast.map((item, idx) => {
                const numVal = parseFloat(item.volume);
                const percent = (numVal / maxVolume) * 100;
                return (
                  <div key={idx} className="port-row">
                    <div className="port-row-info">
                      <span className="port-name">{item.port}</span>
                      <span className="port-state">{item.state}</span>
                    </div>
                    <div className="port-bar-wrap">
                      <div className="port-bar-track">
                        <div 
                          className="port-bar-fill" 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="port-volume">{item.volume}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Real Source Footnote */}
        <div className="text-center text-xs text-slate-500 font-mono mb-6">
          {PORTS_DATA.source}
        </div>

        {/* Trading Terms Bar */}
        <div className="port-terms-strip">
          <span className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider">
            Available Commercial Terms:
          </span>
          <div className="port-terms-chips">
            {PORTS_DATA.tradingTerms.map((term) => (
              <span key={term} className="term-chip">
                {term}
              </span>
            ))}
          </div>
          <button
            onClick={() => onOpenQuoteModal({ context: 'Port Discharge' })}
            className="btn btn-primary btn-sm ml-auto"
          >
            <span>Request Port Discharge Rates</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
