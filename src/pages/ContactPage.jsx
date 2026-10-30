import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';

export default function ContactPage({ onOpenQuoteModal }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <ContactSection />
      <FaqSection />
    </>
  );
}

