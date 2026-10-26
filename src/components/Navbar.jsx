import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Materials', href: '#materials', id: 'materials' },
    { label: 'Marble & Granite', href: '#marble-granite', id: 'marble-granite' },
    { label: 'Sourcing & Procurement', href: '#sourcing', id: 'sourcing' },
    { label: 'Suppliers', href: '#suppliers', id: 'suppliers' },
    { label: 'Logistics', href: '#logistics', id: 'logistics' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
                <span>Global Pithead Linkages & Port Discharge</span>
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
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home', 'home')}
              className="nav-logo-link"
              aria-label="Vicious Stone Home"
            >
              <Logo type="rect" size="md" />
            </a>

            {/* Desktop Navigation Links matching Image 2 */}
            <nav className="nav-links-desktop">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`nav-link-item ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="nav-active-indicator" />}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Request a Quote (pill blue button) */}
            <div className="nav-actions-desktop">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary nav-quote-btn"
                aria-label="Request a Quote"
              >
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
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
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </a>
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
