import React from 'react';
import { COMPANY_INFO } from '../data/materialsData';
import { MessageSquare, ArrowUp } from 'lucide-react';
import '../styles/footer.css';
import Logo from './Logo';

export default function Footer({ onOpenQuoteModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 78;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
              Sourcing, trading and bulk supply of coal, coke, iron ore and industrial minerals. Powering industrial growth.
            </p>
          </div>

          <div className="flex items-center gap-3">
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
              <Logo type="rect" variant="dark" size="md" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Headquartered in Bengaluru. Sourcing, trading and supply of coal, coke, iron ore, aluminium and industrial minerals to heavy manufacturing units across India.
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
            <h4 className="footer-col-title">
              OUR MATERIALS
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#materials" onClick={(e) => handleNavClick(e, '#materials')}>
                  All Materials Catalog
                </a>
              </li>
              <li>
                <a href="#core-materials" onClick={(e) => handleNavClick(e, '#core-materials')}>
                  Core Materials Portfolio
                </a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => handleNavClick(e, '#materials')}>
                  Thermal & Steam Coal
                </a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => handleNavClick(e, '#materials')}>
                  Metallurgical Coke & PCI
                </a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => handleNavClick(e, '#materials')}>
                  Iron Ore & Minerals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SOURCING & LOGISTICS */}
          <div>
            <h4 className="footer-col-title">
              SOURCING & LOGISTICS
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#sourcing" onClick={(e) => handleNavClick(e, '#sourcing')}>
                  Sourcing & Procurement
                </a>
              </li>
              <li>
                <a href="#suppliers" onClick={(e) => handleNavClick(e, '#suppliers')}>
                  Global Suppliers & Routes
                </a>
              </li>
              <li>
                <a href="#logistics" onClick={(e) => handleNavClick(e, '#logistics')}>
                  Logistics & Port Terminals
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')}>
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT & CORPORATE */}
          <div>
            <h4 className="footer-col-title">
              CONTACT & CORPORATE
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                  About Us / Corporate Profile
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  RFQ Enquiry Desk
                </a>
              </li>
              <li>
                <a href="#documents" onClick={(e) => handleNavClick(e, '#documents')}>
                  Registration Documents
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
                  Commercial FAQ
                </a>
              </li>
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
            Vicious Stone Private Limited · GSTIN 29AAKCV5319E1Z3 · CIN U14299KA2023PTC176548 · © 2026 All Rights Reserved
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
