# İzoleci İzolasyon Web Sitesi

izoleciizolasyon.com için SEO uyumlu kurumsal web sitesi.

## Özellikler

- SEO optimizasyonu (meta etiketler, sitemap, robots.txt, JSON-LD)
- 7 hizmet sayfası (çatı, havuz, zemin, asansör boşluğu, otopark, teras, temel izolasyonu)
- Kolay yönetilebilir galeri sistemi
- Referanslar bölümü
- Mavi-beyaz-turkuaz renk teması
- Mobil uyumlu tasarım
- Favicon ve Open Graph görselleri

## Kurulum

```bash
cd ~/izoleciizolasyon
npm install
npm run dev
```

Site `http://localhost:3000` adresinde çalışacaktır.

## Galeriye Görsel Ekleme

1. Görselinizi `public/galeri/` klasörüne SEO uyumlu isimle yükleyin:
   - `cati-izolasyonu-izmir-proje-02.jpg`
   - `havuz-izolasyonu-cesme-villa-01.webp`

2. `src/data/gallery.ts` dosyasına yeni kayıt ekleyin:

```typescript
{
  src: "/galeri/cati-izolasyonu-izmir-proje-02.jpg",
  alt: "İzmir çatı izolasyonu villa projesi sıvı izolasyon uygulaması",
  title: "Villa Çatı İzolasyonu - İzmir",
  category: "Çatı İzolasyonu",
}
```

## Referans Logoları

Gerçek logoları `public/referanslar/` klasöründeki placeholder SVG dosyalarının üzerine yazın. Dosya isimleri:

- `folkart-logo.png`
- `avcilar-insaat-logo.png`
- `oyak-insaat-logo.png`
- `uniteks-logo.png`
- `metro-izmir-logo.webp`

Yeni referans eklemek için `src/data/site.ts` içindeki `references` dizisine kayıt ekleyin.

## İletişim Bilgileri

Telefon ve e-posta bilgilerini `src/data/site.ts` dosyasından güncelleyin.

## Production Build

```bash
npm run build
npm start
```

## Deploy

Vercel, Netlify veya herhangi bir Node.js hosting platformuna deploy edilebilir.
