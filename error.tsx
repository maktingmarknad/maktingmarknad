"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div>
        <h2>Terjadi kesalahan saat memuat halaman.</h2>
        <p>Silakan coba lagi atau kembali ke beranda.</p>
        <button onClick={() => reset()} style={{ marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: '999px', border: '0', background: '#0756a4', color: '#fff', cursor: 'pointer' }}>
          Coba lagi
        </button>
      </div>
    </div>
  );
}
