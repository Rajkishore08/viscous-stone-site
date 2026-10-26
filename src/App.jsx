import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreMaterials from './components/CoreMaterials';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import MaterialsCatalog from './components/MaterialsCatalog';
import MarbleGraniteExport from './components/MarbleGraniteExport';
import SourcingProcurement from './components/SourcingProcurement';
import LogisticsSupply from './components/LogisticsSupply';
import SourcingRoutes from './components/SourcingRoutes';
import MetalsMinerals from './components/MetalsMinerals';
import TradingProcess from './components/TradingProcess';
import GstDocuments from './components/GstDocuments';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SpecModal from './components/SpecModal';
import ProfileDownloadModal from './components/ProfileDownloadModal';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/materialsData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSpecProduct, setActiveSpecProduct] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const handleOpenProfileModal = () => {
    setProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setProfileModalOpen(false);
  };

  const handleOpenQuoteModal = (productOrData = null) => {
    setQuoteModalData(productOrData);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteModalData(null);
  };

  const handleOpenSpecModal = (product) => {
    setActiveSpecProduct(product);
  };

  const handleCloseSpecModal = () => {
    setActiveSpecProduct(null);
  };

  const handleSelectCategoryFromCore = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleFloatingWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
      {/* 1. Header with Clean 7-Link Navigation matching Image 2 */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero: Powering Industries with Reliable Raw Materials, Dual CTAs & 4 Feature Cards */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. Our Core Materials: 4 Photo Cards (Coal, Coke, Iron Ore, Other Minerals) */}
        <CoreMaterials 
          onSelectCategory={handleSelectCategoryFromCore}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. Why Choose Us: Immersive Mountain Panorama & 4 Frosted Cards */}
        <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. About Us: Narrative, Excavator Photo, 4 Key Metrics (10+, 500+, 1M+, 100+) & Company Profile PDF */}
        <AboutUs 
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenProfileModal={handleOpenProfileModal} 
        />

        {/* 6. Our Materials: Interactive Catalog with Tabs, Live Search & Certified Chemical Specs */}
        <MaterialsCatalog 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenSpecModal={handleOpenSpecModal}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 6B. Marble & Granite Export: 12-Section Natural Stone & Global Supply Suite */}
        <MarbleGraniteExport 
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenSpecModal={handleOpenSpecModal}
        />

        {/* 7. Sourcing & Procurement: 4 Process Steps, Stockyard Photo & Submit Requirement */}
        <SourcingProcurement onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. Logistics & Supply Chain: 4 Modes, Bulk Carrier Photo & 14-Port Interactive Explorer */}
        <LogisticsSupply onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 9. Suppliers: Three Sourcing Routes (Vessel, Port Stockyard, Domestic Mine) */}
        <SourcingRoutes onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 10. Indian Mining Belts: Ballari, Barbil, Bailadila, Goa */}
        <MetalsMinerals 
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenSpecModal={handleOpenSpecModal}
        />

        {/* 11. Trading Process: Six Steps & 4 Guarantees */}
        <TradingProcess onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 12. Corporate Documents: Form GST REG-06, Paperwork, 18 HSN Codes */}
        <GstDocuments />

        {/* 13. Contact Us: 33-Product RFQ Desk, Direct Phone, WhatsApp & Office Details */}
        <ContactSection preselectedMaterial={quoteModalData?.name} />

        {/* 14. Questions Buyers Ask: Direct Industry Answers */}
        <FaqSection />
      </main>

      {/* 15. Structured Industrial Footer */}
      <Footer 
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenProfileModal={handleOpenProfileModal}
      />

      {/* Floating Direct WhatsApp Button */}
      <button
        onClick={handleFloatingWhatsApp}
        className="float-whatsapp"
        title="Chat with Sourcing Desk on WhatsApp"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare size={20} />
        <span className="font-display font-semibold">WhatsApp Desk</span>
      </button>

      {/* Interactive Modals */}
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
