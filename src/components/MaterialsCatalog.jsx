import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  FileSpreadsheet, 
  ArrowRight,
  Flame,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/materialsData';

export default function MaterialsCatalog({ selectedCategory, onSelectCategory, onOpenSpecModal, onOpenQuoteModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Coal & Coke',
    'Iron & Steel',
    'Aluminium & Ferro Alloys',
    'Industrial Minerals'
  ];

  // Filter products by category and search query
  const filteredProducts = CATALOG_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.typicalGrades.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="materials" className="section bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={13} className="text-sky-600" />
            Product Catalogue & Technical Specifications
          </div>
          <h2 className="section-title text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Materials Portfolio
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Directly sourced, laboratory tested, and custom-dispatched in bulk across industrial grades. Click on any product to view certified chemical specifications.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="tabs-nav mb-0 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grade, e.g. 4200 GAR, RB2..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-600 text-base">No materials found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); onSelectCategory('All'); }}
              className="btn btn-secondary btn-sm mt-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card-clean bg-white flex flex-col justify-between border border-slate-200 hover:border-sky-400 group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-sky-300 font-mono text-[11px] font-semibold px-2.5 py-1 rounded-md border border-sky-400/30">
                      {product.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-sky-200 block drop-shadow">
                        Origin: {product.origin}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-display">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Typical Grades Pills */}
                    <div className="mt-4">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Available Grades:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.typicalGrades.map((grade, gIdx) => (
                          <span
                            key={gIdx}
                            className="text-[11px] font-mono font-medium bg-sky-50 text-sky-800 px-2 py-0.5 rounded border border-sky-100"
                          >
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Specs Snippet */}
                    <div className="mt-5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                      <div className="grid grid-cols-2 gap-2 text-slate-700">
                        {Object.entries(product.specs).slice(0, 4).map(([key, val], idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider">{key}:</span>
                            <span className="font-mono font-semibold text-slate-900 truncate">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onOpenSpecModal(product)}
                    className="btn btn-secondary btn-sm flex-1 flex items-center justify-center gap-1.5"
                  >
                    <FileSpreadsheet size={15} />
                    <span>View Spec Sheet</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(product)}
                    className="btn btn-primary btn-sm flex items-center justify-center gap-1 px-4"
                    title="Request RFQ"
                  >
                    <span>RFQ</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bulk Vessel & Rake Delivery Info Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Need custom GCV blending or specific sizing screening? We handle on-site port screening, mechanical crushing, and custom moisture control prior to rake loading.
        </div>
      </div>
    </section>
  );
}
