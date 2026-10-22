import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/materialsData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  MessageSquare
} from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const materials = [
    'Indonesian Steam Coal (3400–5800 GAR)',
    'South African RB1 / RB2 / RB3 Coal',
    'Low Ash Metallurgical Coke',
    'Iron Ore Fines (58% – 64.5% Fe)',
    'Calibrated Lump Ore (CLO)',
    'Iron Ore Pellets (DRI & BF Grade)',
    'Metallurgical Bauxite & Calcined Bauxite',
    'SMS & BF Grade High Purity Limestone'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer CTA Strip */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 py-10 border-b border-slate-800">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-display text-white">
              Ready to Secure Your Plant's Fuel & Mineral Supply?
            </h3>
            <p className="text-sm text-sky-200 mt-1">
              Speak directly with our Bengaluru trading desk for landed freight quotes and port stock availability.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary whitespace-nowrap"
            >
              Request Landed Quote
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp whitespace-nowrap"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-4">
            <Logo size="md" variant="dark" className="mb-4" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              <strong>Vicious Stone Private Limited</strong> is India's leading industrial mineral sourcing, coal trading, and multi-modal logistics partner, serving thermal power plants, sponge iron kilns, cement producers, and steel mills.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono font-semibold">
                <ShieldCheck size={16} />
                <span>GSTIN: <strong className="text-white">{COMPANY_INFO.gstin}</strong></span>
              </div>
              <div className="text-slate-400">
                Registered Regular Taxpayer under GST Acts.
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#core-materials" className="hover:text-sky-400 transition-colors">Core Materials</a></li>
              <li><a href="#materials" className="hover:text-sky-400 transition-colors">Complete Catalogue</a></li>
              <li><a href="#why-us" className="hover:text-sky-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#advisor" className="hover:text-sky-400 transition-colors">Plant Fuel Advisor</a></li>
              <li><a href="#sourcing" className="hover:text-sky-400 transition-colors">Sourcing & Testing</a></li>
              <li><a href="#logistics" className="hover:text-sky-400 transition-colors">Logistics & Ports</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">Corporate Profile</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact & RFQ</a></li>
            </ul>
          </div>

          {/* Materials Portfolio Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Materials Handled
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {materials.map((m, idx) => (
                <li key={idx}>
                  <a href="#materials" className="hover:text-sky-400 transition-colors">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Registered Office
            </h4>
            <div className="flex flex-col gap-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-200 hover:text-sky-400">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-sky-400">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono uppercase text-sky-400 font-bold block mb-1">
                Port Evacuation Hubs
              </span>
              <p className="text-[11px] text-slate-400">
                Visakhapatnam · Krishnapatnam · Ennore · New Mangalore · Kandla · Paradip
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-slate-900/80 border-t border-slate-800 py-6 text-xs text-slate-400">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} <strong>Vicious Stone Private Limited</strong>. All rights reserved. Sourcing · Trading · Supply.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Koramangala, Bengaluru, Karnataka, India</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
