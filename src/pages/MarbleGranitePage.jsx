import React, { useEffect } from 'react';
import MarbleGraniteExport from '../components/MarbleGraniteExport';

export default function MarbleGranitePage({ onOpenQuoteModal, onOpenSpecModal }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <MarbleGraniteExport
      onOpenQuoteModal={onOpenQuoteModal}
      onOpenSpecModal={onOpenSpecModal}
    />
  );
}

