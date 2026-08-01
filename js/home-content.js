document.addEventListener('DOMContentLoaded', () => {
  const heroContainer = document.getElementById('heroContent');
  const statsContainer = document.getElementById('statsGrid');
  const searchInput = document.getElementById('siteSearch');
  const searchResults = document.getElementById('searchResults');
  const latestArticlesContainer = document.getElementById('latestArticlesSection');
  const sidebarContainer = document.getElementById('sidebarWidgets');
  const categoryContainer = document.getElementById('categoryGridSection');
  const productsContainer = document.getElementById('latestProductsSection');
  const promoContainer = document.getElementById('promoBannerSection');
  const benefitsContainer = document.getElementById('benefitsSection');
  const faqContainer = document.getElementById('faqSection');
  const testimonialsContainer = document.getElementById('testimonialsSection');
  const timelineContainer = document.getElementById('timelineSection');

  const homeData = {
    heroSlides: [
      {
        eyebrow: 'Pilihan Herbal Berkualitas',
        title: 'Dukung kesehatan dan <em>vitalitas</em> Anda dengan pilihan terbaik',
        description: 'Makting Marknad menyajikan informasi produk herbal, wellness, dan kesehatan pria secara terstruktur agar Anda bisa memilih dengan lebih percaya diri.',
        ctaPrimary: { label: 'Lihat Koleksi Produk', href: 'produk.html' },
        ctaSecondary: { label: 'Kenali Kami', href: 'about.html' },
        trust: ['Produk Pilihan', 'Informasi Terpercaya', 'Pemesanan Mudah']
      },
      {
        eyebrow: 'Update Konten Otomatis',
        title: 'Homepage selalu hidup dengan artikel dan produk terbaru',
        description: 'Semua section dapat diperbarui dari data terpusat sehingga konten baru muncul otomatis tanpa merombak struktur homepage.',
        ctaPrimary: { label: 'Baca Artikel', href: 'blog.html' },
        ctaSecondary: { label: 'Hubungi Kami', href: 'contact.html' },
        trust: ['Artikel Terkini', 'Kategori Populer', 'Promo Mingguan']
      },
      {
        eyebrow: 'Portal Informasi Premium',
        title: 'Bangun kepercayaan dengan konten yang relevan dan terorganisir',
        description: 'Homepage dirancang untuk memaksimalkan engagement, memperpanjang waktu kunjungan, dan memperjelas jalur konversi pelanggan.',
        ctaPrimary: { label: 'Lihat Produk', href: 'produk.html' },
        ctaSecondary: { label: 'Buka FAQ', href: 'faq.html' },
        trust: ['SEO Friendly', 'Mobile Optimized', 'WhatsApp Ready']
      }
    ],
    stats: [
      { value: 32, suffix: '+', label: 'Artikel Tersedia' },
      { value: 12, suffix: '+', label: 'Produk Unggulan' },
      { value: 8, suffix: '+', label: 'Kategori Populer' },
      { value: 1280, suffix: '+', label: 'Pengunjung Bulanan' }
    ],
    articles: [
      { title: 'Panduan Memilih Suplemen Vitalitas Pria: Kenali Kandungan, Manfaat, dan Cara Memilih Produk yang Tepat', excerpt: 'Memahami apa yang dimaksud dengan suplemen vitalitas pria, faktor yang dapat memengaruhi stamina, serta cara memilih produk vitalitas pria yang aman dan sesuai kebutuhan.', category: 'Tips Kesehatan', date: '21 Jul 2026', readTime: '5 menit', image: 'img/blog/Panduan Suplemen Vitalitas Pria.png', href: 'artikel-suplemen-vitalitas-pria.html' },
      { title: 'Viagra China: Kenali Kandungan, Risiko, dan Cara Memeriksa Legalitas Produk', excerpt: 'Istilah “Viagra China” sering dipakai untuk produk vitalitas pria yang beredar online. Kenali perbedaan obat yang terdaftar, produk tanpa identitas jelas, serta risiko penggunaan tanpa pengawasan tenaga kesehatan.', category: 'Kesehatan Pria', date: '19 Jul 2026', readTime: '6 menit', image: 'img/blog/kenali-viagra-china.png', href: 'artikel-viagra-china.html' },
      { title: 'Viagra USA: Mengenal Sildenafil, Kegunaan Medis, Risiko, dan Cara Memeriksa Keaslian', excerpt: 'Panduan edukatif untuk memahami istilah Viagra USA, kandungan sildenafil, penggunaan medis, risiko, serta cara memeriksa legalitas dan keaslian produk.', category: 'Kesehatan Pria', date: '17 Jul 2026', readTime: '7 menit', image: 'img/blog/apa-itu-viagra.png', href: 'artikel-viagra-usa.html' },
      { title: 'Vigamax: Kenali Kandungan, Klaim, Risiko, dan Cara Memeriksa Keaslian Produk', excerpt: 'Vigamax sering dipasarkan sebagai produk pendukung vitalitas pria. Sebelum membeli atau menggunakannya, penting untuk memahami identitas produk, membaca komposisi, menilai klaim secara kritis, serta memeriksa legalitas dan keasliannya.', category: 'Tips Kesehatan', date: '15 Jul 2026', readTime: '5 menit', image: 'img/blog/vigamax-asli-untuk-stamina-pria.png', href: 'artikel-vigamax.html' },

      { title: 'Panduan memilih produk herbal yang sesuai kebutuhan', excerpt: 'Pelajari cara menilai kualitas, keamanan, dan manfaat produk sebelum memutuskan.', category: 'Tips Kesehatan', date: '12 Jul 2026', readTime: '4 menit', image: 'img/product/black-blue-mmc.jpg', href: 'blog.html' },
      { title: 'Kenali manfaat wellness untuk rutinitas harian', excerpt: 'Rutinitas yang sederhana bisa membantu Anda merasa lebih segar dan terjaga.', category: 'Wellness', date: '10 Jul 2026', readTime: '3 menit', image: 'img/product/viagra-mmc-blue.jpg', href: 'blog.html' },
      { title: 'Produk kesehatan pria yang sering dicari', excerpt: 'Temukan kategori produk yang paling sering dibahas pelanggan.', category: 'Kesehatan Pria', date: '07 Jul 2026', readTime: '5 menit', image: 'img/product/super-stud-007.jpg', href: 'blog.html' },
      { title: 'Cara memanfaatkan informasi produk secara lebih efisien', excerpt: 'Informasi yang jelas membantu mempercepat keputusan pembelian.', category: 'Panduan', date: '05 Jul 2026', readTime: '4 menit', image: 'img/product/pil-biru-cina.jpg', href: 'blog.html' },
      { title: 'Kapan waktu terbaik untuk memperbarui kebutuhan wellness', excerpt: 'Pelajari cara menyeimbangkan rutinitas dan kebutuhan tubuh Anda.', category: 'Lifestyle', date: '02 Jul 2026', readTime: '3 menit', image: 'img/product/alat-pijat.jpg', href: 'blog.html' },
      { title: 'Review singkat produk terbaru untuk referensi Anda', excerpt: 'Informasi singkat yang membantu Anda membandingkan pilihan secara cepat.', category: 'Review Produk', date: '28 Jun 2026', readTime: '2 menit', image: 'img/product/japan-tengsu.jpg', href: 'blog.html' }
    ],
    popularArticles: [
      { title: 'Artikel paling sering dibaca', excerpt: 'Konten yang terus mendapat perhatian pembaca.', href: 'blog.html' },
      { title: 'Tips memilih produk dengan aman', excerpt: 'Panduan sederhana untuk keputusan yang lebih nyaman.', href: 'blog.html' },
      { title: 'Promo terbaru yang bisa dipantau', excerpt: 'Update khusus untuk pembelian dengan nilai lebih baik.', href: 'blog.html' }
    ],
    categories: [
      { name: 'Tanaman Herbal', icon: '🌿', description: 'Panduan herbal dan pemanfaatan alami.', href: 'produk.html' },
      { name: 'Kesehatan Pria', icon: '🧔', description: 'Informasi produk yang relevan untuk kebutuhan pria.', href: 'produk.html' },
      { name: 'Wellness', icon: '💧', description: 'Tips menjaga energi dan rutinitas kesehatan.', href: 'blog.html' },
      { name: 'Review Produk', icon: '⭐', description: 'Ringkasan singkat untuk membantu pencarian.', href: 'blog.html' }
    ],
    products: [
      { name: 'Black Blue MMC', price: 'Rp 180.000', image: 'img/product/black-blue-mmc.jpg', label: 'Terlaris', rating: '4.9', href: 'black-blue-mmc.html' },
      { name: 'Viagra MMC Blue', price: 'Rp 160.000', image: 'img/product/viagra-mmc-blue.jpg', label: 'Rekomendasi', rating: '4.8', href: 'viagra-mmc-blue.html' },
      { name: 'Super Stud 007', price: 'Rp 145.000', image: 'img/product/super-stud-007.jpg', label: 'Baru', rating: '4.7', href: 'super-stud-007.html' }
    ],
    benefits: [
      { title: 'Artikel Terverifikasi', description: 'Konten disusun dengan bahasa yang jelas dan informatif.', icon: '🛡️' },
      { title: 'Informasi Terbaru', description: 'Homepage terus diperbarui seiring konten dan produk baru.', icon: '📈' },
      { title: 'Konsultasi Gratis', description: 'Tim kami siap membantu untuk memastikan pilihan yang lebih tepat.', icon: '💬' }
    ],
    faq: [
      { question: 'Apakah informasi di website ini selalu diperbarui?', answer: 'Ya. Struktur homepage dirancang agar konten baru dapat ditambahkan tanpa mengubah layout utama.' },
      { question: 'Apakah situs ini mendukung pencarian artikel dan produk?', answer: 'Tentu. Fitur pencarian live membantu pengguna menemukan konten dengan cepat.' },
      { question: 'Bagaimana saya bisa menghubungi tim Makting Marknad?', answer: 'Anda dapat menghubungi melalui halaman kontak atau tombol WhatsApp yang tersedia.' }
    ],
    testimonials: [
      { name: 'Rina', role: 'Pembaca', quote: 'Informasi sangat rapi dan mudah dipahami, sehingga saya lebih cepat menemukan produk yang sesuai.', avatar: 'RI' },
      { name: 'Budi', role: 'Pelanggan', quote: 'Saya suka desainnya yang modern dan halaman berisi konten yang selalu update.', avatar: 'BU' },
      { name: 'Sari', role: 'Pengguna', quote: 'Pencarian dan kategori membuat browsing terasa lebih nyaman dan tidak membingungkan.', avatar: 'SA' }
    ],
    timeline: [
      { title: 'Artikel baru diterbitkan', description: 'Update artikel informatif dan relevan ditambahkan secara berkala.', date: '12 Juli 2026' },
      { title: 'Produk unggulan diperbarui', description: 'Daftar produk utama disusun ulang agar tetap menarik dan mudah dipilih.', date: '08 Juli 2026' },
      { title: 'Kategori tambahan tersedia', description: 'Kategori baru diperkenalkan untuk membantu navigasi pengguna.', date: '03 Juli 2026' }
    ],
    tags: ['Herbal', 'Wellness', 'Kesehatan Pria', 'Artikel', 'Promo', 'Review', 'Tips', 'Lifestyle']
  };

  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const createSkeleton = (count, className) => {
    const items = [];
    for (let i = 0; i < count; i += 1) {
      items.push(`<div class="${className}"><div class="skeleton-line"></div><div class="skeleton-line short"></div><div class="skeleton-line"></div></div>`);
    }
    return items.join('');
  };

  const renderHero = () => {
    if (!heroContainer) return;

    let slideIndex = 0;
    const renderSlide = () => {
      const slide = homeData.heroSlides[slideIndex];
      heroContainer.innerHTML = `
        <div class="hero-badge"><span></span>${escapeHtml(slide.eyebrow)}</div>
        <h1>${slide.title}</h1>
        <p>${escapeHtml(slide.description)}</p>
        <div class="hero-buttons">
          <a href="${slide.ctaPrimary.href}" class="btn btn-primary">${escapeHtml(slide.ctaPrimary.label)} <span>→</span></a>
          <a href="${slide.ctaSecondary.href}" class="btn btn-outline">${escapeHtml(slide.ctaSecondary.label)}</a>
        </div>
        <div class="hero-trust">
          ${slide.trust.map((item) => `<div class="trust-item"><span class="trust-icon">✓</span>${escapeHtml(item)}</div>`).join('')}
        </div>
        <div class="hero-slide__dots">
          ${homeData.heroSlides.map((item, index) => `<button type="button" class="${index === slideIndex ? 'active' : ''}" data-slide-index="${index}" aria-label="Pindah ke slide ${index + 1}"></button>`).join('')}
        </div>
      `;
      heroContainer.querySelectorAll('.hero-slide__dots button').forEach((button) => {
        button.addEventListener('click', () => {
          slideIndex = Number(button.getAttribute('data-slide-index'));
          renderSlide();
        });
      });
    };

    renderSlide();
    let timer = window.setInterval(() => {
      slideIndex = (slideIndex + 1) % homeData.heroSlides.length;
      renderSlide();
    }, 6000);

    heroContainer.addEventListener('mouseenter', () => window.clearInterval(timer));
    heroContainer.addEventListener('mouseleave', () => {
      timer = window.setInterval(() => {
        slideIndex = (slideIndex + 1) % homeData.heroSlides.length;
        renderSlide();
      }, 6000);
    });
  };

  const renderStats = () => {
    if (!statsContainer) return;
    statsContainer.innerHTML = homeData.stats.map((item) => `
      <div class="stat-item">
        <strong data-counter="${item.value}" data-suffix="${item.suffix}">0</strong>
        <span>${escapeHtml(item.label)}</span>
      </div>
    `).join('');

    const counters = statsContainer.querySelectorAll('[data-counter]');
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute('data-counter'));
      const suffix = counter.getAttribute('data-suffix') || '';
      let start = 0;
      const duration = 850;
      const startTime = performance.now();
      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.round(target * eased);
        counter.textContent = `${start}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  };

  const renderSearch = () => {
    if (!searchInput || !searchResults) return;
    const allItems = [
      ...homeData.articles.map((article) => ({ type: 'Artikel', title: article.title, href: article.href })),
      ...homeData.products.map((product) => ({ type: 'Produk', title: product.name, href: product.href })),
      ...homeData.categories.map((category) => ({ type: 'Kategori', title: category.name, href: category.href }))
    ];

    const handleSearch = () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '';
        return;
      }
      const filtered = allItems.filter((item) => item.title.toLowerCase().includes(query) || item.type.toLowerCase().includes(query));
      searchResults.innerHTML = filtered.slice(0, 6).map((item) => `
        <a class="search-result" href="${item.href}">
          <span>${escapeHtml(item.type)}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </a>
      `).join('');
    };

    searchInput.addEventListener('input', handleSearch);
  };

  const renderArticles = () => {
    if (!latestArticlesContainer) return;
    latestArticlesContainer.innerHTML = `
      <div class="article-grid">
        ${homeData.articles.map((article) => `
          <article class="article-card">
            <img src="${article.image}" alt="${escapeHtml(article.title)}">
            <div class="meta">
              <span>${escapeHtml(article.category)}</span>
              <span>${escapeHtml(article.date)}</span>
            </div>
            <h4>${escapeHtml(article.title)}</h4>
            <p>${escapeHtml(article.excerpt)}</p>
            <a href="${article.href}">Baca selengkapnya →</a>
          </article>
        `).join('')}
      </div>
    `;
  };

  const renderSidebar = () => {
    if (!sidebarContainer) return;
    sidebarContainer.innerHTML = `
      <div class="sidebar-card">
        <h3>Artikel Populer</h3>
        ${homeData.popularArticles.map((item) => `
          <div class="timeline-card">
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.excerpt)}</p>
            <a href="${item.href}">Lihat →</a>
          </div>
        `).join('')}
      </div>
      <div class="sidebar-card">
        <h3>Tag Populer</h3>
        <div class="tag-cloud">
          ${homeData.tags.map((tag) => `<a href="blog.html">${escapeHtml(tag)}</a>`).join('')}
        </div>
      </div>
      <div class="sidebar-card">
        <h3>Promo Mingguan</h3>
        <p>Jelajahi promo terbaru dan temukan pilihan produk dengan nilai yang lebih baik setiap minggu.</p>
        <a href="promo.html">Lihat promo →</a>
      </div>
    `;
  };

  const renderCategories = () => {
    if (!categoryContainer) return;
    categoryContainer.innerHTML = `
      <div class="category-grid">
        ${homeData.categories.map((category) => `
          <article class="category-card">
            <div class="meta"><span>${escapeHtml(category.icon)}</span></div>
            <h4>${escapeHtml(category.name)}</h4>
            <p>${escapeHtml(category.description)}</p>
            <a href="${category.href}">Lihat kategori →</a>
          </article>
        `).join('')}
      </div>
    `;
  };

  const renderProducts = () => {
    if (!productsContainer) return;
    productsContainer.innerHTML = `
      <div class="product-grid">
        ${homeData.products.map((product) => `
          <article class="product-card">
            <img src="${product.image}" alt="${escapeHtml(product.name)}">
            <div class="meta"><span>${escapeHtml(product.label)}</span><span>★ ${escapeHtml(product.rating)}</span></div>
            <h4>${escapeHtml(product.name)}</h4>
            <p class="price">${escapeHtml(product.price)}</p>
            <a href="${product.href}">Lihat detail →</a>
          </article>
        `).join('')}
      </div>
    `;
  };

  const renderPromo = () => {
    if (!promoContainer) return;
    promoContainer.innerHTML = `
      <div class="promo-banner">
        <div>
          <div class="section-label">Promo Hari Ini</div>
          <h3>Temukan penawaran menarik untuk kebutuhan wellness dan kesehatan Anda</h3>
          <p>Homepage kami memudahkan pelanggan melihat informasi terkini tanpa harus mengunjungi banyak halaman.</p>
        </div>
        <div>
          <a href="promo.html" class="btn btn-outline">Lihat Promo</a>
        </div>
      </div>
    `;
  };

  const renderBenefits = () => {
    if (!benefitsContainer) return;
    benefitsContainer.innerHTML = `
      <div class="benefit-grid">
        ${homeData.benefits.map((item) => `
          <article class="benefit-card">
            <div class="feature-icon">${escapeHtml(item.icon)}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `).join('')}
      </div>
    `;
  };

  const renderFaq = () => {
    if (!faqContainer) return;
    faqContainer.innerHTML = homeData.faq.map((item) => `
      <details class="faq-item">
        <summary>${escapeHtml(item.question)}</summary>
        <p>${escapeHtml(item.answer)}</p>
      </details>
    `).join('');
  };

  const renderTestimonials = () => {
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = `
      <div class="section-heading" data-aos="fade-up">
        <div class="section-label">Testimoni</div>
        <h2>Apa yang pelanggan rasakan saat mengunjungi website kami</h2>
      </div>
      <div class="testimonial-grid">
        ${homeData.testimonials.map((item) => `
          <article class="testimonial-card">
            <div class="feature-icon">${escapeHtml(item.avatar)}</div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.role)}</p>
            <p>“${escapeHtml(item.quote)}”</p>
          </article>
        `).join('')}
      </div>
    `;
  };

  const renderTimeline = () => {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = `
      <div class="home-card">
        <div class="section-label">Timeline Update</div>
        <h3>Aktivitas terbaru website</h3>
        ${homeData.timeline.map((item) => `
          <div class="timeline-card">
            <div class="meta"><span>${escapeHtml(item.date)}</span></div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
          </div>
        `).join('')}
      </div>
    `;
  };

  const renderBackToTop = () => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Kembali ke atas');
    button.textContent = '↑';
    document.body.appendChild(button);

    const toggleVisibility = () => {
      button.style.display = window.scrollY > 300 ? 'grid' : 'none';
    };
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  const renderAll = () => {
    renderHero();
    renderStats();
    renderSearch();
    renderArticles();
    renderSidebar();
    renderCategories();
    renderProducts();
    renderPromo();
    renderBenefits();
    renderFaq();
    renderTestimonials();
    renderTimeline();
    renderBackToTop();
    if (window.AOS) {
      window.AOS.refresh();
    }
  };

  const showSkeletons = () => {
    if (latestArticlesContainer) latestArticlesContainer.innerHTML = createSkeleton(3, 'article-card skeleton-card');
    if (sidebarContainer) sidebarContainer.innerHTML = createSkeleton(2, 'timeline-card skeleton-card');
    if (categoryContainer) categoryContainer.innerHTML = createSkeleton(4, 'category-card skeleton-card');
    if (productsContainer) productsContainer.innerHTML = createSkeleton(3, 'product-card skeleton-card');
    if (benefitsContainer) benefitsContainer.innerHTML = createSkeleton(3, 'benefit-card skeleton-card');
    if (faqContainer) faqContainer.innerHTML = createSkeleton(3, 'faq-item skeleton-card');
    if (testimonialsContainer) testimonialsContainer.innerHTML = createSkeleton(3, 'testimonial-card skeleton-card');
  };

  showSkeletons();
  window.setTimeout(renderAll, 280);
});
