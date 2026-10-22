import React from 'react';
import { TRADING_STEPS_DATA, TRADING_GUARANTEES_DATA } from '../data/materialsData';
import { ShieldCheck, FileCheck, Building, UserCheck, ArrowRight } from 'lucide-react';
import '../styles/trading-process.css';

export default function TradingProcess({ onOpenQuoteModal }) {
  const getGuaranteeIcon = (index) => {
    switch (index) {
      case 0: return <ShieldCheck size={20} className="text-sky-600" />;
      case 1: return <FileCheck size={20} className="text-sky-600" />;
      case 2: return <Building size={20} className="text-sky-600" />;
      case 3: return <UserCheck size={20} className="text-sky-600" />;
      default: return null;
    }
  };

  return (
    <section id="how-we-trade" className="trading-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">HOW WE TRADE</div>
          <h2 className="section-title text-slate-900">
            SIX STEPS. NO SURPRISES.
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Every deal follows the same six steps, so you always know what is agreed, what is inspected and when the coal moves.
          </p>
        </div>

        {/* 6 Steps Progression Grid */}
        <div className="trading-steps-grid">
          {TRADING_STEPS_DATA.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-card-num">{step.num}</div>
              <h3 className="step-card-title">{step.step}</h3>
              <p className="step-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* 4 Core Guarantees Banner */}
        <div className="guarantees-container">
          <div className="guarantees-header">
            <span className="guarantees-overline">
              OUR STANDING COMMITMENT
            </span>
            <h3 className="guarantees-title">
              Four Trade Guarantees On Every Contract
            </h3>
          </div>

          <div className="guarantees-grid">
            {TRADING_GUARANTEES_DATA.map((guar, idx) => (
              <div key={idx} className="guarantee-card">
                <div className="guarantee-icon-box">
                  {getGuaranteeIcon(idx)}
                </div>
                <h4 className="guarantee-title">{guar.title}</h4>
                <p className="guarantee-desc">{guar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="trading-cta-wrap">
          <button
            onClick={() => onOpenQuoteModal()}
            className="btn btn-primary"
          >
            <span>Start Step 01: Share Your Enquiry</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
