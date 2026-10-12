export const siteConfig = {
  name: "İzoleci İzolasyon",
  domain: "izoleciizolasyon.com",
  url: "https://izoleciizolasyon.com",
  description:
    "20 yıllık tecrübe ile İzmir, Çeşme, Aydın, Manisa ve çevre ilçelerde sıvı izolasyonu, çatı izolasyonu, havuz izolasyonu, teras izolasyonu ve temel izolasyonu hizmetleri.",
  phone: "+90 541 484 87 55",
  whatsapp: "+90 541 484 87 55",
  whatsappLink: "https://wa.me/905414848755",
  email: "info@izoleciizolasyon.com",
  experience: 20,
  completedProjects: "1320+",
  address: "İzmir, Türkiye",
};

export const services = [
  {
    id: "cati-izolasyonu",
    title: "Çatı İzolasyonu",
    shortTitle: "Çatı",
    description:
      "Sıvı izolasyon teknolojisi ile çatılarınızı su ve nem geçirmez hale getiriyoruz. Uzun ömürlü, esnek ve dayanıklı çözümler sunuyoruz.",
    icon: "roof",
    keywords: ["çatı izolasyonu", "çatı su yalıtımı", "sıvı izolasyon çatı"],
  },
  {
    id: "havuz-izolasyonu",
    title: "Havuz İzolasyonu",
    shortTitle: "Havuz",
    description:
      "Havuzlarınız için profesyonel sıvı izolasyon uygulamaları. Su kaçağına karşı kalıcı ve güvenilir koruma sağlıyoruz.",
    icon: "pool",
    keywords: ["havuz izolasyonu", "havuz su yalıtımı", "havuz sıvı izolasyon"],
  },
  {
    id: "zemin-izolasyonu",
    title: "Zemin İzolasyonu",
    shortTitle: "Zemin",
    description:
      "Zemin ve döşeme alanlarında nem ve su geçişini engelleyen etkili izolasyon çözümleri uyguluyoruz.",
    icon: "floor",
    keywords: ["zemin izolasyonu", "döşeme izolasyonu", "zemin su yalıtımı"],
  },
  {
    id: "asansor-boslugu-izolasyonu",
    title: "Asansör Boşluğu İzolasyonu",
    shortTitle: "Asansör Boşluğu",
    description:
      "Asansör boşluklarında su sızıntısı ve nem problemlerine karşı özel sıvı izolasyon uygulamaları gerçekleştiriyoruz.",
    icon: "elevator",
    keywords: ["asansör boşluğu izolasyonu", "asansör kuyusu izolasyon"],
  },
  {
    id: "otopark-izolasyonu",
    title: "Otopark İzolasyonu",
    shortTitle: "Otopark",
    description:
      "Kapalı ve açık otoparklarda su yalıtımı ve zemin koruma uygulamaları ile yapınızı güvence altına alıyoruz.",
    icon: "parking",
    keywords: ["otopark izolasyonu", "otopark su yalıtımı"],
  },
  {
    id: "teras-izolasyonu",
    title: "Teras İzolasyonu",
    shortTitle: "Teras",
    description:
      "Teras ve balkon alanlarında sıvı izolasyon ile su sızıntısını önlüyor, yaşam alanlarınızı koruyoruz.",
    icon: "terrace",
    keywords: ["teras izolasyonu", "balkon izolasyonu", "teras su yalıtımı"],
  },
  {
    id: "temel-izolasyonu",
    title: "Temel İzolasyonu",
    shortTitle: "Temel",
    description:
      "Bina temellerinde yeraltı suyu ve nem kaynaklı hasarlara karşı güçlü ve kalıcı izolasyon çözümleri sunuyoruz.",
    icon: "foundation",
    keywords: ["temel izolasyonu", "temel su yalıtımı", "perde beton izolasyon"],
  },
] as const;

export const regions = {
  cities: ["Çeşme", "İzmir", "Aydın", "Manisa"],
  districts: ["Alaçatı", "Çiğli", "Menemen", "Kuşadası", "Urla", "Foça"],
};

export const references = [
  { id: "folkart", name: "Folkart", logo: "/referanslar/folkart-logo.png" },
  { id: "oyak-insaat", name: "Oyak İnşaat", logo: "/referanslar/oyak-insaat-logo.png" },
] as const;

export type Service = (typeof services)[number];
