import React from 'react';

/**
 * Logo component for Vicious Stone Private Limited
 * Supports:
 * - type="rect": Horizontal banner logo (Image 2) designed for Navbar and Footer
 * - type="square": 3D faceted square emblem (Image 1)
 * - variant="light": optimized for white/light backgrounds (Navbar)
 * - variant="dark": optimized for dark backgrounds (Footer)
 */
export default function Logo({ 
  type = 'rect', 
  variant = 'light', 
  size = 'md', 
  className = '',
  showLabel = false 
}) {
  const isDark = variant === 'dark';

  // Height configurations
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  }[size] || 'h-10 sm:h-12';

  // Square size configurations
  const squareSizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }[size] || 'w-12 h-12';

  // If Square Logo requested
  if (type === 'square') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <div className={`relative rounded-xl overflow-hidden shadow-lg border border-sky-400/30 group shrink-0 ${squareSizes}`}>
          <img
            src="/assets/logo-square.jpg"
            alt="Vicious Stone Private Limited Square Logo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </div>

        {showLabel && (
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1.5 font-display font-extrabold text-lg tracking-tight">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>VICIOUS</span>
              <span className="text-sky-500">STONE</span>
            </div>
            <span className={`text-[10px] font-mono tracking-widest uppercase mt-0.5 ${isDark ? 'text-sky-300' : 'text-sky-700'}`}>
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
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={rectSrc}
        alt="Vicious Stone Private Limited"
        className={`${heights} w-auto object-contain transition-transform duration-200 hover:scale-[1.02] drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
}
