import React, { useEffect } from 'react';
import SourcingProcurement from '../components/SourcingProcurement';
import LogisticsSupply from '../components/LogisticsSupply';
import SourcingRoutes from '../components/SourcingRoutes';
import TradingProcess from '../components/TradingProcess';

export default function SourcingPage({ onOpenQuoteModal }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SourcingProcurement onOpenQuoteModal={onOpenQuoteModal} />
      <LogisticsSupply onOpenQuoteModal={onOpenQuoteModal} />
      <SourcingRoutes onOpenQuoteModal={onOpenQuoteModal} />
      <TradingProcess onOpenQuoteModal={onOpenQuoteModal} />
    </>
  );
}

