import React from 'react';

export default function BrandLogo({ height = 40, className = '' }) {
  const logoHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: logoHeight,
        flex: '0 0 auto'
      }}
    >
      <img
        src="/logo.png"
        alt="Lentera Belajar Logo"
        className={`brand-logo-img ${className}`}
        style={{
          height: '100%',
          width: 'auto',
          maxWidth: 'none',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </span>
  );
}
