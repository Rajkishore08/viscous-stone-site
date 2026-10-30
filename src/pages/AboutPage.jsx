import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import GstDocuments from '../components/GstDocuments';

export default function AboutPage({ onOpenQuoteModal, onOpenProfileModal }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <AboutUs
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenProfileModal={onOpenProfileModal}
      />
      <GstDocuments />
    </>
  );
}

