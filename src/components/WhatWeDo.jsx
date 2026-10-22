import React from 'react';
import { WHAT_WE_DO_DATA } from '../data/materialsData';
import { ArrowRight, Check } from 'lucide-react';
import '../styles/what-we-do.css';

export default function WhatWeDo({ onOpenQuoteModal }) {
  return (
    <section id="what-we-do" className="section bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">WHAT WE DO</div>
          <h2 className="section-title text-slate-900">
            {WHAT_WE_DATA_TITLE(WHAT_WE_DO_DATA.headline)}
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            {WHAT_WE_DO_DATA.subhead}
          </p>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="what-we-do-grid">
          {WHAT_WE_DO_DATA.pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div className="pillar-tag">{pillar.badge}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <ul className="pillar-list">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="pillar-item">
                    <span className="pillar-bullet"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenQuoteModal()}
            className="btn btn-primary"
          >
            <span>Request Standing Supply Proposal</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function WHAT_WE_DATA_TITLE(headline) {
  return headline || "WE SOURCE IT. WE TRADE IT. WE SUPPLY IT.";
}
