import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreMaterials from './components/CoreMaterials';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import MaterialsCatalog from './components/MaterialsCatalog';
import PlantAdvisor from './components/PlantAdvisor';
import SourcingProcurement from './components/SourcingProcurement';
import LogisticsSupply from './components/LogisticsSupply';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SpecModal from './components/SpecModal';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/materialsData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSpecProduct, setActiveSpecProduct] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState(null);

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

  const handleFloatingWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Mountain & Mining Machinery */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Core Materials Showcase (4 Primary Pillars) */}
        <CoreMaterials 
          onSelectCategory={(cat) => setSelectedCategory(cat)} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        {/* Why Choose Us with Panoramic Mountain Mine Background */}
        <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Corporate Profile / About Us */}
        <AboutUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Materials Portfolio & Spec Viewer */}
        <MaterialsCatalog 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenSpecModal={handleOpenSpecModal}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Plant Fuel Advisor & Railway Rake Estimator */}
        <PlantAdvisor onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Sourcing & Procurement Workflow */}
        <SourcingProcurement onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Logistics & Multi-Port Supply Chain */}
        <LogisticsSupply onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Contact Us & Interactive RFQ Form */}
        <ContactSection preselectedMaterial={quoteModalData?.name} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Floating Instant WhatsApp Action Button */}
      <button
        onClick={handleFloatingWhatsApp}
        className="float-whatsapp"
        title="Chat with Sourcing Desk on WhatsApp"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare size={20} />
        <span className="font-display">WhatsApp Desk</span>
      </button>

      {/* Modals */}
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
    </div>
  );
}
