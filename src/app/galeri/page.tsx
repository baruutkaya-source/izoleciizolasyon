import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Proje Galerisi",
  description:
    "İzoleci İzolasyon tamamlanan projeler galerisi. Çatı, havuz, teras, temel ve zemin izolasyonu uygulama örnekleri.",
  alternates: {
    canonical: "https://izoleciizolasyon.com/galeri",
  },
  openGraph: {
    title: "Proje Galerisi | İzoleci İzolasyon",
    description: "Tamamladığımız sıvı izolasyon projelerinden örnekler.",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
