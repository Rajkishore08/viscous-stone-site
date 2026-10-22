import React from 'react';
import { SOURCING_ROUTES_DATA } from '../data/materialsData';
import { Ship, Building2, Mountain, ArrowRight } from 'lucide-react';
import '../styles/sourcing-routes.css';

export default function SourcingRoutes({ onOpenQuoteModal }) {
  const getRouteIcon = (index) => {
    switch (index) {
      case 0: return <Ship size={24} className="text-sky-600" />;
      case 1: return <Building2 size={24} className="text-sky-600" />;
      case 2: return <Mountain size={24} className="text-sky-600" />;
      default: return null;
    }
  };

  return (
    <section id="suppliers" className="routes-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">SUPPLIERS & SOURCING ROUTES</div>
          <h2 className="section-title text-slate-900">
            THREE ROUTES TO YOUR PLANT
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            We pick the route that gives you the right grade at the lowest landed cost, whether you need one truck or a full vessel. Metals and minerals follow the same routes.
          </p>
        </div>

        {/* 3 Sourcing Routes Grid */}
        <div className="routes-grid">
          {SOURCING_ROUTES_DATA.map((route, idx) => (
            <div key={idx} className="route-card">
              <div className="route-card-header">
                <div className="route-icon-box">
                  {getRouteIcon(idx)}
                </div>
                <h3 className="route-card-title">{route.title}</h3>
              </div>
              <p className="route-card-desc">{route.desc}</p>

              <div className="route-specs-table">
                {route.lotSize && (
                  <div className="route-spec-row">
                    <span className="route-spec-key">Lot size</span>
                    <span className="route-spec-val">{route.lotSize}</span>
                  </div>
                )}
                {route.terms && (
                  <div className="route-spec-row">
                    <span className="route-spec-key">Terms</span>
                    <span className="route-spec-val">{route.terms}</span>
                  </div>
                )}
                {route.payment && (
                  <div className="route-spec-row">
                    <span className="route-spec-key">Payment</span>
                    <span className="route-spec-val">{route.payment}</span>
                  </div>
                )}
                {route.leadTime && (
                  <div className="route-spec-row">
                    <span className="route-spec-key">Lead time</span>
                    <span className="route-spec-val">{route.leadTime}</span>
                  </div>
                )}
                {route.grades && (
                  <div className="route-spec-row">
                    <span className="route-spec-key">Grades</span>
                    <span className="route-spec-val">{route.grades}</span>
                  </div>
                )}
                {route.transport && (
                  <div className="route-spec-row">
                    <span className="route-spec-key">Transport</span>
                    <span className="route-spec-val">{route.transport}</span>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <button
                  onClick={() => onOpenQuoteModal({ route: route.title })}
                  className="btn btn-secondary btn-sm w-full"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Enquire for {route.title.split(' ')[0]} Delivery</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
