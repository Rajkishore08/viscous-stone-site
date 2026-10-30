import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SpecModal from './components/SpecModal';
import ProfileDownloadModal from './components/ProfileDownloadModal';
import ScrollToTop from './components/ScrollToTop';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/materialsData';

// Pages
import HomePage from './pages/HomePage';
import MaterialsPage from './pages/MaterialsPage';
import MarbleGranitePage from './pages/MarbleGranitePage';
import SourcingPage from './pages/SourcingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function AppLayout() {
  const [activeSpecProduct, setActiveSpecProduct] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const handleOpenProfileModal = () => setProfileModalOpen(true);
  const handleCloseProfileModal = () => setProfileModalOpen(false);

  const handleOpenQuoteModal = (productOrData = null) => {
    setQuoteModalData(productOrData);
    setQuoteModalOpen(true);
  };
  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteModalData(null);
  };

  const handleOpenSpecModal = (product) => setActiveSpecProduct(product);
  const handleCloseSpecModal = () => setActiveSpecProduct(null);

  const handleFloatingWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
      <ScrollToTop />
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/materials"
            element={
              <MaterialsPage
                onOpenQuoteModal={handleOpenQuoteModal}
                onOpenSpecModal={handleOpenSpecModal}
              />
            }
          />
          <Route
            path="/marble-granite"
            element={
              <MarbleGranitePage
                onOpenQuoteModal={handleOpenQuoteModal}
                onOpenSpecModal={handleOpenSpecModal}
              />
            }
          />
          <Route
            path="/sourcing"
            element={<SourcingPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenQuoteModal={handleOpenQuoteModal}
                onOpenProfileModal={handleOpenProfileModal}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          {/* Catch-all: redirect to home */}
          <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
        </Routes>
      </main>

      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenProfileModal={handleOpenProfileModal}
      />

      {/* Floating WhatsApp */}
      <button
        onClick={handleFloatingWhatsApp}
        className="float-whatsapp"
        title="Chat with Sourcing Desk on WhatsApp"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare size={20} />
        <span className="font-display font-semibold">WhatsApp Desk</span>
      </button>

      {/* Shared Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialData={quoteModalData}
      />
      <SpecModal
        product={activeSpecProduct}
        onClose={handleCloseSpecModal}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
      <ProfileDownloadModal
        isOpen={profileModalOpen}
        onClose={handleCloseProfileModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
