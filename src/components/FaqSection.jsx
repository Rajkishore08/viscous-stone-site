import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/materialsData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section bg-slate-50 border-b border-slate-200">
      <div className="container max-w-4xl">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={13} className="text-sky-600" />
            Industrial Buyer Guidance
          </div>
          <h2 className="section-title text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="section-desc">
            Essential commercial, compliance, and sampling details for plant procurement officers.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-clean bg-white border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-900 hover:text-sky-600 transition-colors focus:outline-none"
                >
                  <span>{item.q}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
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
