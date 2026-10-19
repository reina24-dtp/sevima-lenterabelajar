import React from 'react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <BrandLogo height={34} />
          <p>
            Platform belajar offline-first untuk siswa SMA/SMK Kurikulum Merdeka -
            unduh materi sekali, belajar kapan saja walau tanpa sinyal.
          </p>
        </div>

        <div className="site-footer-col">
          <h4>Jelajahi</h4>
          <ul>
            <li>Matematika</li>
            <li>Bahasa Indonesia</li>
            <li>Bahasa Inggris</li>
            <li>Mentoring Belajar</li>
          </ul>
        </div>

      </div>

      <div className="site-footer-bottom">
        <div className="container">
          © {year} Lentera Belajar. Dibuat untuk membantu siswa belajar tanpa hambatan sinyal.
        </div>
      </div>
    </footer>
  );
}
