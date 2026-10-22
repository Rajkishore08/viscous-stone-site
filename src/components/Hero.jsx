import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Globe2, 
  Truck, 
  TrendingUp, 
  Award,
  CheckCircle2,
  Layers,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materialsData';

export default function Hero({ onOpenQuoteModal }) {
  const handleScrollToMaterials = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#materials');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative bg-slate-950 overflow-hidden">
      {/* Hero Visual Area with Mountain & Mining Machinery Image */}
      <div className="relative min-h-[640px] lg:min-h-[720px] flex items-center">
        {/* Background Image: Mountain & Open-Pit Mine with Excavator & Haul Truck */}
        <picture>
          <img
            src="/assets/mountain_mining_hero.jpg"
            alt="Mountain open-pit mining operations with heavy hydraulic excavator loading iron ore into giant haul dump truck"
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-right filter brightness-95"
            loading="eager"
          />
        </picture>

        {/* High-Contrast Gradient Mask: Crisp Legibility for Text on Left, Machinery Visible on Right */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(7, 14, 27, 0.94) 0%, rgba(7, 14, 27, 0.82) 42%, rgba(7, 14, 27, 0.45) 70%, rgba(7, 14, 27, 0.15) 100%)'
          }}
        />

        {/* Subtle Sky Blue Glow Element */}
        <div 
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full pointer-events-none opacity-20 filter blur-3xl"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }}
        />

        {/* Hero Content Container */}
        <div className="container relative z-10 py-16 lg:py-24">
          <div className="max-w-2xl">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-300 font-mono text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              GLOBAL SOURCING · BULK SUPPLY · INDUSTRIAL SOLUTIONS
            </div>

            {/* Main Headline */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              Powering Industries with{' '}
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                Reliable Raw Materials
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-xl">
              Your trusted partner for <strong>Coal</strong>, <strong>Coke</strong>, <strong>Iron Ore</strong>, and <strong>Industrial Minerals</strong> sourcing and procurement. Direct mine connections with pan-India rake and port logistics.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary btn-lg flex items-center gap-2.5 shadow-lg group"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#materials"
                onClick={handleScrollToMaterials}
                className="btn btn-secondary btn-lg flex items-center gap-2 bg-white/95 hover:bg-white text-slate-900 border-white/40 backdrop-blur-sm"
              >
                <span>Explore Our Materials</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="btn btn-whatsapp btn-lg flex items-center gap-2"
                title="Direct WhatsApp Consultation"
              >
                <MessageSquare size={18} />
                <span className="hidden sm:inline">WhatsApp Desk</span>
              </button>
            </div>

            {/* Corporate Registration & Taxpayer Footnote */}
            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={15} className="text-sky-400" />
                GST Registered Regular Taxpayer
              </span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="font-mono text-sky-300 font-semibold">
                GSTIN: {COMPANY_INFO.gstin}
              </span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="text-slate-300">
                HQ: Koramangala, Bengaluru 560034
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#materials" 
          onClick={handleScrollToMaterials}
          className="absolute bottom-4 right-8 z-10 hidden xl:flex items-center gap-2 text-xs text-sky-200/80 hover:text-white transition-colors bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-400/20"
        >
          <span>Scroll down</span>
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </div>

      {/* Trust Pillars Bar (Directly matching the 4 reference pillars) */}
      <div className="trust-bar bg-white border-y border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2">
            {/* Pillar 1 */}
            <div className="trust-item">
              <div className="trust-icon-box">
                <Globe2 size={22} />
              </div>
              <div>
                <h4 className="trust-title">Trusted Suppliers</h4>
                <p className="trust-desc">Direct linkage from global & domestic mines</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="trust-item">
              <div className="trust-icon-box">
                <Award size={22} />
              </div>
              <div>
                <h4 className="trust-title">Quality Assurance</h4>
                <p className="trust-desc">SGS & NABL pre-dispatch sampling & COA</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="trust-item">
              <div className="trust-icon-box">
                <Truck size={22} />
              </div>
              <div>
                <h4 className="trust-title">Efficient Logistics</h4>
                <p className="trust-desc">Dedicated rail rakes, port clearance & fleet</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="trust-item">
              <div className="trust-icon-box">
                <TrendingUp size={22} />
              </div>
              <div>
                <h4 className="trust-title">Competitive Pricing</h4>
                <p className="trust-desc">Transparent index contracts & bulk savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
