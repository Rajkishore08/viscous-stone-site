import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/materialsData';
import { MessageSquare, ArrowUp } from 'lucide-react';
import '../styles/footer.css';
import Logo from './Logo';

export default function Footer({ onOpenQuoteModal, onOpenProfileModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      {/* Upper Direct Callout */}
      <div className="footer-upper-bar">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">
              Vicious Stone Private Limited
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Sourcing, trading and bulk supply of coal, coke, iron ore and natural stone products worldwide. Powering industrial growth.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenProfileModal ? onOpenProfileModal() : onOpenQuoteModal()}
              className="btn btn-secondary btn-sm"
              title="Download 14-page Corporate Deck"
            >
              COMPANY PROFILE (PDF)
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm"
            >
              REQUEST A QUOTE
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageSquare size={14} />
              <span>WHATSAPP DESK</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="container">
        <div className="footer-grid-4">
          {/* Column 1: Brand & Tagline */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <Logo type="rect" variant="dark" size="md" />
              </Link>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Headquartered in Bengaluru with regional desks in Dubai. Sourcing, trading and export of coal, coke, iron ore, aluminium and Indian marble &amp; granite to global project buyers.
            </p>
            <div className="text-xs font-mono text-sky-400">
              GSTIN: {COMPANY_INFO.gstin}
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1">
              CIN: {COMPANY_INFO.cin}
            </div>
          </div>

          {/* Column 2: MATERIALS */}
          <div>
            <h4 className="footer-col-title">OUR MATERIALS</h4>
            <ul className="footer-links-list">
              <li><Link to="/materials">All Materials Catalog</Link></li>
              <li>
                <Link to="/marble-granite" className="text-sky-400 font-semibold">
                  Marble &amp; Granite Export ★
                </Link>
              </li>
              <li><Link to="/materials">Core Materials Portfolio</Link></li>
              <li><Link to="/materials?category=Coal%20%26%20Coke">Thermal &amp; Steam Coal</Link></li>
              <li><Link to="/materials?category=Coal%20%26%20Coke">Metallurgical Coke &amp; PCI</Link></li>
              <li><Link to="/materials?category=Iron%20%26%20Steel">Iron Ore &amp; Minerals</Link></li>
            </ul>
          </div>

          {/* Column 3: SOURCING & LOGISTICS */}
          <div>
            <h4 className="footer-col-title">SOURCING &amp; LOGISTICS</h4>
            <ul className="footer-links-list">
              <li><Link to="/sourcing">Sourcing &amp; Procurement</Link></li>
              <li><Link to="/sourcing">Global Suppliers &amp; Routes</Link></li>
              <li><Link to="/sourcing">Logistics &amp; Port Terminals</Link></li>
              <li><Link to="/">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Column 4: CONTACT & CORPORATE */}
          <div>
            <h4 className="footer-col-title">CONTACT &amp; CORPORATE</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Us / Corporate Profile</Link></li>
              <li>
                <button
                  onClick={onOpenProfileModal}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--sky-400)', cursor: 'pointer', fontSize: 'inherit', textAlign: 'left' }}
                >
                  Download Company Profile (PDF)
                </button>
              </li>
              <li><Link to="/contact">RFQ Enquiry Desk</Link></li>
              <li><Link to="/about">Registration Documents</Link></li>
              <li><Link to="/contact">Commercial FAQ</Link></li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              <div>Koramangala, Bengaluru 560034</div>
              <div className="text-sky-400 font-mono mt-1">{COMPANY_INFO.phone}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Vicious Stone Private Limited · GSTIN {COMPANY_INFO.gstin} · CIN {COMPANY_INFO.cin} · © 2026 All Rights Reserved
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
