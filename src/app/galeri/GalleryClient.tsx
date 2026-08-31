"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/data/gallery";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredImages =
    activeCategory === "Tümü"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 py-16 text-white md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Proje Galerisi</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            Tamamladığımız izolasyon projelerinden örnekler. Sıvı izolasyon uygulamalarımızın kalitesini keşfedin.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-brand-600 text-white shadow-md"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredImages.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              <p>Bu kategoride henüz görsel bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((image) => (
                <article
                  key={image.src}
                  className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
                      {image.category}
                    </span>
                    <h2 className="mt-1 text-lg font-semibold text-gray-900">{image.title}</h2>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-brand-800">Galeriye Görsel Nasıl Eklenir?</h2>
            <ol className="mt-4 list-inside list-decimal space-y-2 text-gray-700">
              <li>
                Görselinizi <code className="rounded bg-white px-2 py-0.5 text-sm">public/galeri/</code> klasörüne SEO uyumlu isimle yükleyin.
                <br />
                <span className="text-sm text-gray-500">
                  Örnek: <code>cati-izolasyonu-izmir-proje-02.jpg</code>
                </span>
              </li>
              <li>
                <code className="rounded bg-white px-2 py-0.5 text-sm">src/data/gallery.ts</code> dosyasına yeni bir kayıt ekleyin.
              </li>
              <li>
                <code className="rounded bg-white px-2 py-0.5 text-sm">alt</code> ve <code className="rounded bg-white px-2 py-0.5 text-sm">title</code> alanlarını SEO için doldurun.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
