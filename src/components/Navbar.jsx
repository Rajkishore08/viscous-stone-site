import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_INFO } from '../data/materialsData';
import '../styles/navbar.css';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home',                 to: '/',                id: 'home' },
    { label: 'Our Materials',        to: '/materials',       id: 'materials' },
    { label: 'Marble & Granite',     to: '/marble-granite',  id: 'marble-granite' },
    { label: 'Sourcing',             to: '/sourcing',        id: 'sourcing' },
    { label: 'About Us',             to: '/about',           id: 'about' },
    { label: 'Contact',              to: '/contact',         id: 'contact' },
  ];

  const isActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <>
      {/* Top Corporate Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <ShieldCheck size={14} style={{ color: 'var(--sky-400)' }} />
                <span>GSTIN: <strong>{COMPANY_INFO.gstin}</strong></span>
              </span>
              <span className="top-bar-sep">·</span>
              <span className="top-bar-item">
                <MapPin size={13} style={{ color: 'var(--sky-400)' }} />
                <span>Koramangala, Bengaluru · Karnataka</span>
              </span>
              <span className="top-bar-sep">·</span>
              <span className="top-bar-item">
                <span>Global Pithead Linkages &amp; Port Discharge</span>
              </span>
            </div>

            <div className="top-bar-right">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="top-bar-item"
                style={{ color: '#ffffff' }}
              >
                <Phone size={13} style={{ color: 'var(--sky-400)' }} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="top-bar-sep">|</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="top-bar-item"
                style={{ color: '#ffffff' }}
              >
                <Mail size={13} style={{ color: 'var(--sky-400)' }} />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container">
          <div className="nav-container">
            {/* Logo → Home */}
            <Link to="/" className="nav-logo-link" aria-label="Vicious Stone Home">
              <Logo type="rect" size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-links-desktop">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`nav-link-item ${isActive(item.to) ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  {isActive(item.to) && <span className="nav-active-indicator" />}
                </Link>
              ))}
            </nav>

            {/* Request a Quote */}
            <div className="nav-actions-desktop">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary nav-quote-btn"
                aria-label="Request a Quote"
              >
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-body">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${isActive(item.to) ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}

              <div className="mobile-drawer-footer">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="btn btn-primary w-full"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp w-full"
                  style={{ marginTop: '0.75rem' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Sourcing Desk</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
