export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

/**
 * Galeri görsellerini buradan yönetebilirsiniz.
 *
 * Yeni görsel eklemek için:
 * 1. Görseli `public/galeri/` klasörüne SEO uyumlu isimle yükleyin
 *    Örnek: cati-izolasyonu-izmir-proje-01.jpg
 * 2. Aşağıdaki listeye yeni bir kayıt ekleyin
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/galeri/cati-izolasyonu-izmir-proje-01.svg",
    alt: "İzmir çatı izolasyonu sıvı izolasyon uygulaması",
    title: "Çatı İzolasyonu - İzmir",
    category: "Çatı İzolasyonu",
  },
  {
    src: "/galeri/havuz-izolasyonu-cesme-proje-01.svg",
    alt: "Çeşme havuz izolasyonu sıvı izolasyon uygulaması",
    title: "Havuz İzolasyonu - Çeşme",
    category: "Havuz İzolasyonu",
  },
  {
    src: "/galeri/teras-izolasyonu-urla-proje-01.svg",
    alt: "Urla teras izolasyonu su yalıtım uygulaması",
    title: "Teras İzolasyonu - Urla",
    category: "Teras İzolasyonu",
  },
  {
    src: "/galeri/temel-izolasyonu-izmir-proje-01.svg",
    alt: "İzmir temel izolasyonu perde beton uygulaması",
    title: "Temel İzolasyonu - İzmir",
    category: "Temel İzolasyonu",
  },
  {
    src: "/galeri/otopark-izolasyonu-manisa-proje-01.svg",
    alt: "Manisa otopark izolasyonu zemin su yalıtımı",
    title: "Otopark İzolasyonu - Manisa",
    category: "Otopark İzolasyonu",
  },
  {
    src: "/galeri/zemin-izolasyonu-aydin-proje-01.svg",
    alt: "Aydın zemin izolasyonu döşeme su yalıtımı",
    title: "Zemin İzolasyonu - Aydın",
    category: "Zemin İzolasyonu",
  },
];

export const galleryCategories = [
  "Tümü",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];
