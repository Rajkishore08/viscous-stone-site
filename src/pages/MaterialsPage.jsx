import React, { useState, useEffect } from 'react';
import MaterialsCatalog from '../components/MaterialsCatalog';
import MetalsMinerals from '../components/MetalsMinerals';
import { useSearchParams } from 'react-router-dom';

export default function MaterialsPage({ onOpenQuoteModal, onOpenSpecModal }) {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Pick up ?category= from the URL (e.g. when navigating from Home core cards)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <MaterialsCatalog
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenSpecModal={onOpenSpecModal}
        onOpenQuoteModal={onOpenQuoteModal}
      />
      <MetalsMinerals
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenSpecModal={onOpenSpecModal}
      />
    </>
  );
}

