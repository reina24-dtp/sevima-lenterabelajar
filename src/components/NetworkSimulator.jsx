import React from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

export default function NetworkSimulator({ isOnline, setIsOnline, pendingSyncCount, triggerSync, isEmbedded = false }) {
  return (
    <div className={`network-simulator-pill animate-fade-in ${isEmbedded ? 'embedded' : ''}`}>
      <button 
        onClick={() => setIsOnline(!isOnline)} 
        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', border: 'none', background: 'transparent' }}
        title="Otomatis mendeteksi status WiFi/Internet asli HP/Laptop Anda. Klik untuk mensimulasikan secara manual."
      >
        <span className={`network-dot ${isOnline ? 'online' : 'offline'}`}></span>
        {isOnline ? (
          <>
            <Wifi size={16} color="#059669" />
            <span style={{ color: '#059669' }}>Online (Dideteksi Sinyal)</span>
          </>
        ) : (
          <>
            <WifiOff size={16} color="#DC2626" />
            <span style={{ color: '#DC2626' }}>Mode Offline (Tanpa Sinyal)</span>
          </>
        )}
      </button>

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
