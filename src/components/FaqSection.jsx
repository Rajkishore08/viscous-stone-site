import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/materialsData';
import '../styles/faq.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section bg-slate-50 border-b border-slate-200">
      <div className="container max-w-4xl">
        {/* Section Header matching exact prompt text */}
        <div className="section-header">
          <div className="section-overline">QUESTIONS BUYERS ASK</div>
          <h2 className="section-title text-slate-900">
            STRAIGHT ANSWERS
          </h2>
          <p className="section-desc max-w-xl mx-auto">
            The points purchase teams ask us most often. If yours is not here, send it with your enquiry.
          </p>
        </div>

        {/* 11 FAQ Items List */}
        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-card"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="faq-btn"
                  aria-expanded={isOpen}
                >
                  <span className="text-left font-display text-slate-900 font-bold text-base sm:text-lg">
                    {item.q}
                  </span>
                  <div className="faq-icon-pill">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer text-sm text-slate-700 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
