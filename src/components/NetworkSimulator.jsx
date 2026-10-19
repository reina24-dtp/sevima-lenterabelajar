import React from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

// Indikator status koneksi - murni menampilkan status asli dari browser
// (navigator.onLine + event 'online'/'offline' yang didengarkan di App.jsx).
// SENGAJA tidak bisa dipencet/diubah manual, supaya statusnya selalu
// mencerminkan koneksi internet device yang sebenarnya, bukan simulasi.
export default function NetworkSimulator({ isOnline, pendingSyncCount, triggerSync, isEmbedded = false }) {
  return (
    <div className={`network-simulator-pill animate-fade-in ${isEmbedded ? 'embedded' : ''}`}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'default' }}
        title="Status koneksi internet device kamu saat ini, terdeteksi otomatis."
      >
        <span className={`network-dot ${isOnline ? 'online' : 'offline'}`}></span>
        {isOnline ? (
          <>
            <Wifi size={16} color="#059669" />
            <span style={{ color: '#059669' }}>Online</span>
          </>
        ) : (
          <>
            <WifiOff size={16} color="#DC2626" />
            <span style={{ color: '#DC2626' }}>Mode Offline</span>
          </>
        )}
      </div>

      {pendingSyncCount > 0 && (
        <button 
          onClick={triggerSync}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            backgroundColor: '#FEF3C7',
            color: '#D97706',
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: '700',
            marginLeft: '0.4rem'
          }}
          title="Ada antrean data offline. Klik untuk sinkronkan!"
        >
          <RefreshCw size={12} className={isOnline ? "animate-spin" : ""} />
          {pendingSyncCount} Antrean
        </button>
      )}
    </div>
  );
}
