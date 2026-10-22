import React from 'react';

export default function Logo({ size = 'md', variant = 'light', showSubtitle = true, className = '' }) {
  // Sizes: sm, md, lg
  const dimensions = {
    sm: { icon: 34, title: 'text-base', sub: 'text-[9px]' },
    md: { icon: 44, title: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 56, title: 'text-2xl', sub: 'text-xs' }
  }[size] || { icon: 44, title: 'text-xl', sub: 'text-[10px]' };

  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Mountain & Faceted Mineral Stone Emblem */}
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="vsSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          <linearGradient id="vsDeepNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#0B2A5B" />
          </linearGradient>

          <linearGradient id="vsIceCap" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          <filter id="vsGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Faceted Geometric Stone Diamond Base */}
        <polygon
          points="32,4 58,18 52,50 32,60 12,50 6,18"
          fill="url(#vsDeepNavy)"
          stroke="#0284C7"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Back Ridge: Subtle Sky Blue */}
        <polygon points="32,13 47,38 17,38" fill="url(#vsSkyGrad)" opacity="0.65" />

        {/* Primary Mountain Ridge (Left Peak) */}
        <polygon points="22,20 34,46 10,46" fill="#0EA5E9" />
        <polygon points="22,20 27,30 22,28 17,30" fill="url(#vsIceCap)" />

        {/* Dominant Soaring Mountain Ridge (Right Peak with geological strata) */}
        <polygon points="38,14 54,49 26,49" fill="url(#vsSkyGrad)" />
        <polygon points="38,14 45,26 38,23 31,26" fill="url(#vsIceCap)" />

        {/* Geological Strata Horizontal Facet Cuts */}
        <path d="M12 40L24 38L38 42L52 38" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M16 46L32 44L48 46" stroke="#BAE6FD" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

        {/* Precision Stone Keystones at Lower Shield */}
        <polygon points="32,44 48,53 32,58 16,53" fill="#0369A1" opacity="0.9" />
        <line x1="32" y1="44" x2="32" y2="58" stroke="#38BDF8" strokeWidth="1.8" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            } ${dimensions.title}`}
          >
            VICIOUS
          </span>
          <span className={`font-display font-extrabold tracking-tight text-sky-500 ${dimensions.title}`}>
            STONE
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`font-mono uppercase tracking-[0.22em] font-semibold ${
                isDark ? 'text-sky-300' : 'text-sky-700'
              } ${dimensions.sub}`}
            >
              PRIVATE LIMITED
            </span>
            <span className="w-1 h-1 rounded-full bg-sky-400" />
            <span
              className={`text-[9px] tracking-wider uppercase hidden sm:inline ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              MINERALS & SUPPLY
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
