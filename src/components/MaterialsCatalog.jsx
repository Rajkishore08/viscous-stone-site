import React, { useState } from 'react';
import { 
  Search, 
  FileSpreadsheet, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/materialsData';
import '../styles/materials-catalog.css';

export default function MaterialsCatalog({ selectedCategory = 'All', onSelectCategory, onOpenSpecModal, onOpenQuoteModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Coal & Coke',
    'Iron & Steel',
    'Aluminium & Ferro Alloys',
    'Industrial Minerals'
  ];

  // Map high-level tabs to product categories
  const isCategoryMatch = (prodCat, selected) => {
    if (!selected || selected === 'All') return true;
    const cat = (prodCat || '').toUpperCase();
    if (selected === 'Coal & Coke') {
      return cat.includes('THERMAL') || cat.includes('COAL') || cat.includes('COKING') || cat.includes('PETCOKE') || cat.includes('COKE');
    }
    if (selected === 'Iron & Steel') {
      return cat.includes('IRON') || cat.includes('STEEL');
    }
    if (selected === 'Aluminium & Ferro Alloys') {
      return cat.includes('ALUMINIUM') || cat.includes('ALLOY') || cat.includes('FERRO') || cat.includes('SCRAP') || cat.includes('BAUXITE');
    }
    if (selected === 'Industrial Minerals') {
      return cat.includes('MINERAL') || cat.includes('LIMESTONE') || cat.includes('DOLOMITE') || cat.includes('SILICA') || cat.includes('BENTONITE');
    }
    return cat === selected.toUpperCase();
  };

  // Filter products defensively
  const filteredProducts = (CATALOG_PRODUCTS || []).filter((prod) => {
    const matchesCategory = isCategoryMatch(prod.category, selectedCategory);
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const name = prod.name?.toLowerCase() || '';
    const origin = (prod.origin || prod.originBadge || prod.hsCode || prod.fullSpecs?.Origins || '').toLowerCase();
    const desc = (prod.desc || prod.shortDesc || '').toLowerCase();
    const hasGrade = Array.isArray(prod.typicalGrades) && prod.typicalGrades.some(g => g.toLowerCase().includes(q));
    const hasSpec = Array.isArray(prod.specs) && prod.specs.some(s => s.key?.toLowerCase().includes(q) || s.val?.toLowerCase().includes(q));

    const matchesSearch = name.includes(q) || origin.includes(q) || desc.includes(q) || hasGrade || hasSpec;
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="materials" className="materials-catalog-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={13} style={{ color: 'var(--sky-600)' }} />
            Product Catalogue & Technical Specifications
          </div>
          <h2 className="section-title">
            Our Materials Portfolio
          </h2>
          <p className="section-desc">
            Directly sourced, laboratory tested, and custom-dispatched in bulk across industrial grades. Click on any product to view certified chemical specifications.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Tabs */}
          <div className="tabs-row" style={{ marginBottom: 0 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory?.(cat)}
                className={`tab-pill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--navy-400)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grade, e.g. 4200 GAR..."
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.5rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--border-color)',
                backgroundColor: '#ffffff',
                fontSize: '0.85rem',
                color: 'var(--navy-900)',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.75rem',
                  color: 'var(--navy-400)',
                  cursor: 'pointer'
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
            <p style={{ color: 'var(--navy-600)', fontSize: '1rem' }}>No materials found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); onSelectCategory?.('All'); }}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="catalog-grid-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="catalog-card">
                <div>
                  {/* Product Image */}
                  <div className="catalog-img-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: 'rgba(7, 14, 27, 0.85)',
                        color: 'var(--sky-300)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '0.35rem',
                        border: '1px solid rgba(56, 189, 248, 0.3)'
                      }}
                    >
                      {product.category}
                    </div>

                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        left: '0.75rem',
                        right: '0.75rem',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {product.origin || product.originBadge || product.hsCode || 'GLOBAL SOURCING'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="catalog-body">
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-display)' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--navy-600)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                      {product.desc || product.shortDesc}
                    </p>

                    {/* Typical Grades if available */}
                    {product.typicalGrades && Array.isArray(product.typicalGrades) && product.typicalGrades.length > 0 && (
                      <div style={{ marginTop: '1rem' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--navy-400)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                          Available Grades:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {product.typicalGrades.map((grade, gIdx) => (
                            <span key={gIdx} className="spec-chip">
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Specs Box */}
                    {product.specs && (
                      <div 
                        style={{
                          marginTop: '1rem',
                          padding: '0.75rem',
                          borderRadius: '0.5rem',
                          backgroundColor: 'var(--navy-100)',
                          border: '1px solid var(--border-color)',
                          fontSize: '0.78rem'
                        }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                          {Array.isArray(product.specs)
                            ? product.specs.slice(0, 4).map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                                  <span style={{ fontSize: '0.68rem', color: 'var(--navy-500)', textTransform: 'uppercase' }}>{item.key}:</span>
                                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--navy-900)' }}>{item.val}</span>
                                </div>
                              ))
                            : Object.entries(product.specs).slice(0, 4).map(([key, val], idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                                  <span style={{ fontSize: '0.68rem', color: 'var(--navy-500)', textTransform: 'uppercase' }}>{key}:</span>
                                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--navy-900)' }}>{typeof val === 'object' ? JSON.stringify(val) : String(val)}</span>
                                </div>
                              ))
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="catalog-actions">
                  <button
                    onClick={() => onOpenSpecModal?.(product)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <FileSpreadsheet size={15} />
                    <span>View Spec Sheet</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal?.(product)}
                    className="btn btn-primary btn-sm"
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
      </div>
    </section>
  );
}
