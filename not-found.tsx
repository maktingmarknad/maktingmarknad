export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div>
        <h2>Halaman tidak ditemukan.</h2>
        <p>URL yang Anda tuju belum tersedia atau mungkin telah dipindahkan.</p>
        <a href="/" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: '999px', background: '#0756a4', color: '#fff', textDecoration: 'none' }}>
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
