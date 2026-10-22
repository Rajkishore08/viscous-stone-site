import React from 'react';
import { MARKET_DATA } from '../data/materialsData';
import { TrendingUp, BarChart2 } from 'lucide-react';
import '../styles/market-data.css';

export default function MarketData() {
  return (
    <section id="market-data" className="section bg-slate-900 text-white">
      <div className="container">
        <div className="section-header">
          <div className="section-overline text-sky-400">THE MARKET WE WORK IN</div>
          <h2 className="section-title text-white">
            {MARKET_DATA.headline}
          </h2>
          <p className="section-desc text-slate-300 max-w-2xl mx-auto">
            {MARKET_DATA.desc}
          </p>
        </div>

        {/* 4 Large Industrial Metric Cards */}
        <div className="market-stats-grid">
          {MARKET_DATA.stats.map((stat, idx) => (
            <div key={idx} className="market-stat-card">
              <div className="market-stat-value">{stat.value}</div>
              <div className="market-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Real Source Citation Footnote */}
        <div className="market-source-note">
          <span>{MARKET_DATA.source}</span>
        </div>
      </div>
    </section>
  );
}
