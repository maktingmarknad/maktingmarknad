from pathlib import Path
import re

root = Path(r'd:\website\maktingmarknad')
site = 'https://maktingmarknad.netlify.app'

files = [
    'index.html','produk.html','about.html','contact.html','blog.html','official-store.html','promo.html',
    'alat-pijat-wanita.html','black-blue-mmc.html','daun-tiga-jari.html','japan-tengsu.html',
    'minyak-lintah.html','minyak-wamena.html','pil-biru-cina.html','super-stud-007.html',
    'titan-gel-gold.html','titan-gel-red.html','viagra-mmc-blue.html','vigamax.html'
]

meta_map = {
    'index.html': ('Makting Marknad | Produk Herbal, Wellness & Kesehatan Pria', 'Makting Marknad menghadirkan produk herbal, wellness, dan kesehatan pria pilihan dengan informasi lengkap serta layanan konsultasi yang mudah.', '/'),
    'produk.html': ('Katalog Produk Makting Marknad | Herbal, Wellness & Kesehatan Pria', 'Temukan katalog produk Makting Marknad yang mencakup herbal, wellness, dan kebutuhan kesehatan pria dengan informasi yang jelas.', '/produk.html'),
    'about.html': ('Tentang Makting Marknad | Brand Herbal & Wellness', 'Kenali Makting Marknad sebagai brand yang menghadirkan pilihan produk herbal dan wellness dengan informasi yang transparan.', '/about.html'),
    'contact.html': ('Hubungi Makting Marknad | Kontak & Informasi Produk', 'Hubungi Makting Marknad melalui formulir kontak atau WhatsApp untuk informasi produk, pemesanan, dan layanan konsultasi.', '/contact.html'),
    'blog.html': ('Blog Makting Marknad | Informasi Kesehatan & Wellness', 'Jelajahi artikel Makting Marknad tentang kesehatan, wellness, dan tips hidup yang informatif.', '/blog.html'),
    'official-store.html': ('Official Store Makting Marknad | Shopee, Lazada & TikTok Shop', 'Kunjungi Official Store Makting Marknad di Shopee, Lazada, dan TikTok Shop untuk belanja produk pilihan secara resmi.', '/official-store.html'),
    'promo.html': ('Promo Produk Makting Marknad | Informasi Produk Pilihan', 'Temukan promo dan informasi produk pilihan Makting Marknad untuk kebutuhan kesehatan dan wellness Anda.', '/promo.html'),
    'alat-pijat-wanita.html': ('Alat Pijat Wanita | Makting Marknad', 'Informasi produk Alat Pijat Wanita dari Makting Marknad dengan penjelasan manfaat, penggunaan, dan cara pemesanan.', '/alat-pijat-wanita.html'),
    'black-blue-mmc.html': ('Black Blue MMC | Makting Marknad', 'Pelajari produk Black Blue MMC dari Makting Marknad sebagai salah satu pilihan untuk kebutuhan kesehatan pria.', '/black-blue-mmc.html'),
    'daun-tiga-jari.html': ('Daun Tiga Jari | Makting Marknad', 'Temukan informasi produk Daun Tiga Jari dari Makting Marknad dengan penjelasan singkat dan cara pemesanan.', '/daun-tiga-jari.html'),
    'japan-tengsu.html': ('Japan Tengsu | Makting Marknad', 'Informasi produk Japan Tengsu dari Makting Marknad sebagai pilihan produk wellness dan vitalitas.', '/japan-tengsu.html'),
    'minyak-lintah.html': ('Minyak Lintah | Makting Marknad', 'Pelajari produk Minyak Lintah dari Makting Marknad dengan informasi manfaat dan cara pemesanan.', '/minyak-lintah.html'),
    'minyak-wamena.html': ('Minyak Wamena | Makting Marknad', 'Temukan informasi produk Minyak Wamena dari Makting Marknad sebagai pilihan herbal dan wellness.', '/minyak-wamena.html'),
    'pil-biru-cina.html': ('Pil Biru Cina | Makting Marknad', 'Informasi produk Pil Biru Cina dari Makting Marknad dengan penjelasan singkat dan tombol pemesanan.', '/pil-biru-cina.html'),
    'super-stud-007.html': ('Super Stud 007 | Makting Marknad', 'Pelajari produk Super Stud 007 dari Makting Marknad dengan informasi ringkas untuk kebutuhan kesehatan pria.', '/super-stud-007.html'),
    'titan-gel-gold.html': ('Titan Gel Gold | Makting Marknad', 'Informasi produk Titan Gel Gold dari Makting Marknad dengan penjelasan manfaat dan cara pemesanan.', '/titan-gel-gold.html'),
    'titan-gel-red.html': ('Titan Gel Red | Makting Marknad', 'Temukan informasi produk Titan Gel Red dari Makting Marknad sebagai salah satu pilihan produk kesehatan pria.', '/titan-gel-red.html'),
    'viagra-mmc-blue.html': ('Viagra MMC Blue | Makting Marknad', 'Pelajari produk Viagra MMC Blue dari Makting Marknad dengan informasi ringkas untuk kebutuhan kesehatan pria.', '/viagra-mmc-blue.html'),
    'vigamax.html': ('Vigamax | Makting Marknad', 'Temukan informasi produk Vigamax dari Makting Marknad sebagai pilihan suplemen wellness dan kesehatan pria.', '/vigamax.html'),
}

for file in files:
    path = root / file
    if not path.exists():
        continue
    text = path.read_text(encoding='utf-8')
    title, description, canonical_path = meta_map[file]

    text = re.sub(r'<title[^>]*>.*?</title>', f'<title>{title}</title>', text, count=1, flags=re.I | re.S)
    text = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', f'<meta name="description" content="{description}">', text, count=1, flags=re.I)
    if '<meta name="description"' not in text:
        text = text.replace('<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="{0}">'.format(description), 1)

    text = re.sub(r'<meta\s+name=["\']robots["\'][^>]*>', '<meta name="robots" content="index, follow">', text, count=1, flags=re.I)
    if '<meta name="robots"' not in text:
        text = text.replace('</head>', '  <meta name="robots" content="index, follow">\n</head>', 1)

    # remove any existing canonical and add one
    text = re.sub(r'\n\s*<link\s+rel=["\']canonical["\'][^>]*>\s*', '\n', text, count=1, flags=re.I)
    text = text.replace('</head>', f'  <link rel="canonical" href="{site}{canonical_path}">\n</head>', 1)

    if file in {'alat-pijat-wanita.html','black-blue-mmc.html','daun-tiga-jari.html','japan-tengsu.html','minyak-lintah.html','minyak-wamena.html','pil-biru-cina.html','super-stud-007.html','titan-gel-gold.html','titan-gel-red.html','viagra-mmc-blue.html','vigamax.html'}:
        text = re.sub(r'<div class="product-title">(.*?)</div>', r'<h1 class="product-title">\1</h1>', text, count=1, flags=re.S)

    if file == 'index.html' and 'application/ld+json' not in text:
        schema = '''  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Makting Marknad",
    "url": "https://maktingmarknad.netlify.app/",
    "logo": "https://maktingmarknad.netlify.app/img/favicon.png"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Makting Marknad",
    "url": "https://maktingmarknad.netlify.app/"
  }
  </script>
'''
        text = text.replace('</head>', schema + '</head>', 1)

    path.write_text(text, encoding='utf-8')

# 404 noindex
path_404 = root / '404.html'
if path_404.exists():
    text = path_404.read_text(encoding='utf-8')
    text = re.sub(r'<meta\s+name=["\']robots["\'][^>]*>', '<meta name="robots" content="noindex, follow">', text, count=1, flags=re.I)
    path_404.write_text(text, encoding='utf-8')

(root / 'sitemap.xml').write_text('''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://maktingmarknad.netlify.app/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/produk.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/about.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/contact.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/blog.html</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/official-store.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/promo.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/alat-pijat-wanita.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/black-blue-mmc.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/daun-tiga-jari.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/japan-tengsu.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/minyak-lintah.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/minyak-wamena.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/pil-biru-cina.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/super-stud-007.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/titan-gel-gold.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/titan-gel-red.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/viagra-mmc-blue.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://maktingmarknad.netlify.app/vigamax.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
''', encoding='utf-8')

(root / 'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: https://maktingmarknad.netlify.app/sitemap.xml\n', encoding='utf-8')
print('SEO update complete')
