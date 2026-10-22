import React from 'react';
import { COMPANY_INFO, LIVE_TICKER_ITEMS } from '../data/materialsData';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  TrendingUp, 
  Users,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import '../styles/hero.css';

export default function Hero({ onOpenQuoteModal }) {
  const handleScrollToMaterials = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#core-materials') || document.querySelector('#materials');
    if (elem) {
      const headerOffset = 78;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const featurePillars = [
    {
      icon: <Users size={22} />,
      title: 'Trusted Suppliers',
      subtitle: 'from Global Mines'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Quality Assurance',
      subtitle: '& Inspection'
    },
    {
      icon: <Truck size={22} />,
      title: 'Efficient Logistics',
      subtitle: '& On-Time Delivery'
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Competitive Pricing',
      subtitle: '& Long-Term Partnerships'
    }
  ];

  return (
    <>
      <section id="home" className="hero-section">
        {/* Responsive Hero Image: Desktop widescreen & Mobile 9:16 portrait */}
        <picture className="hero-bg-picture">
          <source media="(max-width: 768px)" srcSet="/assets/hero_mobile_mining.jpg" />
          <img
            src="/assets/mountain_mining_hero.jpg"
            alt="Heavy-duty hydraulic CAT excavator loading mineral ore at open-pit mine under blue sky"
            className="hero-bg-img"
            loading="eager"
          />
        </picture>

        {/* Immersive Sky-Blue & Deep Navy Atmospheric Gradient Overlay */}
        <div className="hero-overlay" />

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-content">
            {/* Upper Badge / Overline matching Image 1 */}
            <div className="hero-overline">
              GLOBAL SOURCING • BULK SUPPLY • INDUSTRIAL SOLUTIONS
            </div>

            {/* Main Headline matching Image 1 */}
            <h1 className="hero-title">
              Powering Industries with Reliable Raw Materials
            </h1>

            {/* Subtitle matching Image 1 */}
            <p className="hero-subtitle">
              Your trusted partner for Coal, Coke, Iron Ore and Industrial Minerals sourcing and procurement. We connect global pitheads, domestic auctions, and deep-water ports directly to your plant gate.
            </p>

            {/* Dual CTAs matching Image 1 */}
            <div className="hero-ctas">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary btn-lg hero-btn-quote"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#core-materials"
                onClick={handleScrollToMaterials}
                className="btn btn-glass-outline btn-lg"
              >
                <span>Explore Our Materials</span>
              </a>
            </div>

            {/* Trust Pill Strip */}
            <div className="hero-trust-foot">
              <span className="hero-trust-item">
                <CheckCircle2 size={15} style={{ color: 'var(--sky-400)' }} />
                <span>GSTIN: <strong>{COMPANY_INFO.gstin}</strong></span>
              </span>
              <span className="hero-sep">·</span>
              <span className="hero-trust-item">
                <span>Bengaluru Headquarters · Pan-India Dispatch</span>
              </span>
            </div>
          </div>

          {/* 4 Bottom Feature Cards Overlay matching Image 1 */}
          <div className="hero-feature-cards-grid">
            {featurePillars.map((item, idx) => (
              <div key={idx} className="hero-feature-card">
                <div className="hero-feature-icon">
                  {item.icon}
                </div>
                <div className="hero-feature-text">
                  <div className="hero-feature-title">{item.title}</div>
                  <div className="hero-feature-subtitle">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Trading Commodities Continuous Ticker Strip */}
      <div className="ticker-strip">
        <div className="ticker-label">
          <span>MARKET TICKER</span>
        </div>
        <div className="ticker-marquee">
          <div className="ticker-track">
            {LIVE_TICKER_ITEMS.concat(LIVE_TICKER_ITEMS).map((item, idx) => (
              <span key={idx} className="ticker-item">
                <span className="ticker-dot" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
