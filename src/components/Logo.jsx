import React from 'react';

/**
 * Logo component for Vicious Stone Private Limited
 * Pure CSS with explicit pixel dimensions so it never bursts or overflows
 */
export default function Logo({ 
  type = 'rect', 
  variant = 'light', 
  size = 'md', 
  className = '',
  showLabel = false 
}) {
  const isDark = variant === 'dark';

  // Pixel heights for rectangle logo
  const rectHeight = {
    sm: 36,
    md: 54,
    lg: 64,
    xl: 78
  }[size] || 54;

  // Pixel dimensions for square logo emblem
  const squareDim = {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 84
  }[size] || 48;

  // If Square Emblem requested
  if (type === 'square') {
    return (
      <div 
        className={`logo-square-container ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}
      >
        <div 
          style={{
            width: `${squareDim}px`,
            height: `${squareDim}px`,
            borderRadius: '0.5rem',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 2px 8px rgba(11, 25, 44, 0.15)',
            flexShrink: 0,
            backgroundColor: '#070e1b'
          }}
        >
          <img
            src="/assets/logo-square.jpg"
            alt="Vicious Stone Emblem"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </div>

        {showLabel && (
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <div style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: '1.05rem', 
              letterSpacing: '-0.02em',
              color: isDark ? '#ffffff' : 'var(--navy-950)'
            }}>
              <span>VICIOUS </span>
              <span style={{ color: 'var(--sky-500)' }}>STONE</span>
            </div>
            <span style={{ 
              fontSize: '0.62rem', 
              fontFamily: 'var(--font-mono)', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase',
              color: isDark ? 'var(--sky-300)' : 'var(--sky-700)',
              marginTop: '2px'
            }}>
              PRIVATE LIMITED
            </span>
          </div>
        )}
      </div>
    );
  }

  // Default: Rectangle Logo for Navbar and Footer
  const rectSrc = isDark ? '/assets/logo-rect-dark.png' : '/assets/logo-rect.png';

  return (
    <div 
      className={`logo-rect-container ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
    >
      <img
        src={rectSrc}
        alt="Vicious Stone Private Limited"
        className="logo-rect-img"
        style={{ 
          height: `${rectHeight}px`, 
          width: 'auto', 
          maxHeight: `${rectHeight}px`,
          objectFit: 'contain',
          display: 'block'
        }}
        loading="eager"
      />
    </div>
  );
}
