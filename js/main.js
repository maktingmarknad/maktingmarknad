document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('.site-header');
  if (!header) {
    header = document.querySelector('header');
  }
  if (!header) {
    header = document.createElement('header');
    header.className = 'site-header';
    document.body.prepend(header);
  }

  let footer = document.querySelector('.site-footer');
  if (!footer) {
    footer = document.querySelector('footer');
  }
  if (!footer) {
    footer = document.createElement('footer');
    footer.className = 'site-footer';
    document.body.append(footer);
  }

  header.innerHTML = `
    <div class="container site-header__inner">
      <a class="brand" href="/" aria-label="Makting Marknad beranda">
        <img class="brand-logo" src="/img/logo.png" alt="Logo Makting Marknad">
        <span class="brand-name">
          <strong>Makting Marknad</strong>
          <span>Produk herbal & wellness</span>
        </span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Buka menu navigasi" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" aria-label="Navigasi utama">
        <a href="/">Beranda</a>
        <a href="/produk.html">Produk</a>
        <a href="/about.html">Tentang</a>
        <a href="/blog.html">Blog</a>
        <a href="/official-store.html">Official Store</a>
        <a href="/kontak.html">Kontak</a>
        <a class="header-cta" href="/kontak.html">Hubungi Kami</a>
      </nav>
    </div>
  `;

  footer.innerHTML = `
    <div class="container site-footer__grid">
      <div class="footer-column">
        <a class="footer-brand" href="/">
          <strong>Makting Marknad</strong>
        </a>
        <p class="footer-description">Makting Marknad menyediakan informasi dan pilihan produk untuk mendukung kesehatan, kebugaran, dan kualitas hidup.</p>
      </div>
      <div class="footer-column">
        <h3>Navigasi</h3>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/produk.html">Produk</a></li>
          <li><a href="/about.html">Tentang</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="/official-store.html">Official Store</a></li>
          <li><a href="/kontak.html">Kontak</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Informasi</h3>
        <ul>
          <li><a href="/Kebijakan-Privasi.html">Kebijakan Privasi</a></li>
          <li><a href="/syarat%20%26%20ketentuan.html">Syarat &amp; Ketentuan</a></li>
          <li><a href="/disclaimer.html">Disclaimer</a></li>
          <li><a href="/faq.html">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Hubungi Kami</h3>
        <p>WhatsApp: 088980874055</p>
        <a class="whatsapp-btn" href="https://wa.me/6288980874055?text=Halo%20Makting%20Marknad,%20saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut." target="_blank" rel="noopener noreferrer">Hubungi via WhatsApp</a>
        <p style="margin-top:0.75rem;"><a href="/kontak.html">Lihat halaman kontak</a></p>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© 2026 Makting Marknad. Semua hak dilindungi.</p>
    </div>
  `;

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
      });
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
      }
    });
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const relativePath = href.split('?')[0].split('#')[0];
    const currentPath = window.location.pathname;
    
    const isHome = (currentPath === '/' || currentPath === '/index.html' || currentPath === '') && (relativePath === '/' || relativePath === '/index.html');
    const isMatch = relativePath !== '/' && (currentPath === relativePath || currentPath.endsWith(relativePath));
    
    if (isHome || isMatch) {
      link.classList.add('active');
    }
  });
});
