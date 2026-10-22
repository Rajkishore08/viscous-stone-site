import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/materialsData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  FileText, 
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Materials', href: '#materials' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Plant Fuel Advisor', href: '#advisor' },
    { label: 'Sourcing & Quality', href: '#sourcing' },
    { label: 'Logistics', href: '#logistics' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Top Corporate Trust Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden md:block">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <ShieldCheck size={14} className="text-sky-400" />
              GSTIN: <strong className="text-white font-mono">{COMPANY_INFO.gstin}</strong>
            </span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={13} className="text-sky-400" />
              Koramangala, Bengaluru, Karnataka
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">
              Bulk Supply from Global Mines & Indian Ports
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-400 transition-colors"
            >
              <Phone size={13} className="text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-400 transition-colors"
            >
              <Mail size={13} className="text-sky-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${isScrolled ? 'shadow-md py-3' : 'py-4'}`}>
        <div className="container flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none"
          >
            <Logo size="md" variant="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link font-medium text-slate-700 hover:text-sky-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="btn btn-whatsapp btn-sm flex items-center gap-2"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm sm:hidden text-xs px-3 py-1.5"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl px-6 py-6 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-2 text-slate-800 hover:text-sky-600 font-semibold text-base border-b border-slate-100"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="text-slate-400" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="btn btn-primary w-full py-3"
                >
                  Request a Formal Quote
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsApp();
                  }}
                  className="btn btn-whatsapp w-full py-3"
                >
                  Chat with Sourcing Desk on WhatsApp
                </button>
              </div>

              <div className="pt-4 text-xs text-slate-500 border-t border-slate-100 flex flex-col gap-1">
                <span><strong>GSTIN:</strong> {COMPANY_INFO.gstin}</span>
                <span><strong>Office:</strong> {COMPANY_INFO.address}</span>
                <span><strong>Direct Line:</strong> {COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
