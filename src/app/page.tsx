import { siteConfig, services, regions, references } from "@/data/site";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import SeoContent from "@/components/SeoContent";

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    roof: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    pool: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
    floor: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
    elevator: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    ),
    parking: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    ),
    terrace: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    foundation: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  };

  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      {icons[icon] || icons.roof}
    </svg>
  );
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressRegion: "Ege",
      addressCountry: "TR",
    },
    areaServed: [...regions.cities, ...regions.districts].map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "İzolasyon Hizmetleri",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    foundingDate: `${new Date().getFullYear() - siteConfig.experience}`,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
    },
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-turquoise-dark">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container-custom relative px-4 py-12 sm:section-padding sm:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
              {siteConfig.experience} Yıllık Tecrübe
            </span>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Profesyonel Sıvı İzolasyon Hizmetleri
            </h1>
            <p className="mt-4 text-base text-brand-100 sm:mt-6 sm:text-lg md:text-xl">
              İzmir, Çeşme, Aydın, Manisa ve çevre ilçelerde çatı, havuz, teras, temel ve zemin izolasyonu alanlarında güvenilir çözümler sunuyoruz.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a href="#iletisim" className="btn-primary bg-white text-brand-700 hover:bg-brand-50">
                Ücretsiz Keşif Talep Et
              </a>
              <a href="#hizmetler" className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
                Hizmetlerimiz
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {[
              { value: `${siteConfig.experience}+`, label: "Yıl Tecrübe" },
              { value: siteConfig.completedProjects, label: "Tamamlanan Proje" },
              { value: "10+", label: "Hizmet Bölgesi" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-600 sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600 sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="section-padding bg-brand-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">İzolasyon Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Sıvı izolasyon teknolojisi ile her türlü yapıda su ve nem geçirmez koruma sağlıyoruz.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.id}`}
                className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-100 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700">
                  Detaylı Bilgi
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="bolgeler" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-title">Hizmet Verdiğimiz Bölgeler</h2>
              <p className="section-subtitle">
                Ege bölgesinin dört bir yanında profesyonel izolasyon ekiplerimizle hizmetinizdeyiz.
              </p>
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">İller</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.cities.map((city) => (
                    <span key={city} className="rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-800">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">İlçeler</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.districts.map((district) => (
                    <span key={district} className="rounded-full bg-turquoise/20 px-4 py-2 text-sm font-medium text-brand-800">
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-500 to-turquoise p-6 text-white shadow-xl sm:p-8">
              <h3 className="text-2xl font-bold">Neden İzoleci İzolasyon?</h3>
              <ul className="mt-6 space-y-4">
                {[
                  `${siteConfig.experience} yıllık sektör tecrübesi`,
                  "Sıvı izolasyon teknolojisinde uzman ekip",
                  "Kaliteli malzeme ve garantili uygulama",
                  "Ücretsiz keşif ve fiyat teklifi",
                  "Zamanında teslimat ve profesyonel hizmet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section id="referanslar" className="section-padding bg-brand-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Referanslarımız</h2>
            <p className="section-subtitle">
              Türkiye&apos;nin önde gelen inşaat firmalarıyla çalışma onuruna sahibiz.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 md:max-w-xl md:mx-auto">
            {references.map((ref) => (
              <div
                key={ref.id}
                className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:h-28"
              >
                <Image
                  src={ref.logo}
                  alt={`${ref.name} referans logosu`}
                  width={180}
                  height={72}
                  className="max-h-14 w-auto object-contain sm:max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="iletisim" className="section-padding bg-gradient-to-r from-brand-700 to-brand-600">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">Ücretsiz Keşif ve Teklif Alın</h2>
            <p className="mt-4 text-lg text-brand-100">
              Projeniz için en uygun izolasyon çözümünü birlikte belirleyelim. Hemen bize ulaşın.
            </p>
            <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-all hover:bg-brand-50 sm:px-8 sm:py-4 sm:text-lg"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#20bd5a] sm:px-8 sm:py-4 sm:text-lg"
              >
                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      <SeoContent />
    </>
  );
}
