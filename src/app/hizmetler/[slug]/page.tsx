import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, siteConfig, regions } from "@/data/site";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return { title: "Hizmet Bulunamadı" };
  }

  const title = `${service.title} | ${regions.cities.join(", ")}`;
  const description = `${service.description} ${siteConfig.experience} yıllık tecrübe ile ${regions.cities.join(", ")} ve çevre ilçelerde hizmet.`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: {
      canonical: `${siteConfig.url}/hizmetler/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | İzoleci İzolasyon`,
      description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: [...regions.cities, ...regions.districts].map((area) => ({
      "@type": "City",
      name: area,
    })),
  };

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-gradient-to-br from-brand-700 to-brand-600 py-16 text-white md:py-20">
        <div className="container-custom">
          <nav className="mb-4 text-sm text-brand-200" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#hizmetler" className="hover:text-white">
                  Hizmetler
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{service.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{service.description}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">{service.title} Hizmeti</h2>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>{service.description}</p>
                <p>
                  İzoleci İzolasyon olarak {siteConfig.experience} yıllık tecrübemizle {service.title.toLowerCase()} alanında
                  profesyonel sıvı izolasyon uygulamaları gerçekleştiriyoruz. Kaliteli malzeme kullanımı ve uzman ekibimizle
                  projelerinize değer katıyoruz.
                </p>
                <p>
                  {regions.cities.join(", ")} ve {regions.districts.join(", ")} başta olmak üzere Ege bölgesinin her noktasında
                  hizmet vermekteyiz. Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçebilirsiniz.
                </p>
              </div>

              <h3 className="mt-10 text-xl font-semibold text-gray-900">Hizmet Avantajları</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Sıvı izolasyon teknolojisi",
                  "Uzun ömürlü koruma",
                  "Esnek ve dayanıklı uygulama",
                  "Profesyonel ekip",
                  "Garantili işçilik",
                  "Ücretsiz keşif",
                ].map((advantage) => (
                  <li key={advantage} className="flex items-center gap-2 text-gray-700">
                    <svg className="h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="sticky top-24 rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Hizmet Bölgeleri</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...regions.cities, ...regions.districts].map((area) => (
                    <span key={area} className="rounded-full bg-white px-3 py-1 text-sm text-brand-800 shadow-sm">
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-brand-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Teklif Alın</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Projeniz için ücretsiz keşif ve fiyat teklifi almak için bizi arayın.
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="btn-primary mt-4 w-full text-center"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Diğer Hizmetlerimiz</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.slice(0, 6).map((s) => (
              <Link
                key={s.id}
                href={`/hizmetler/${s.id}`}
                className="rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="font-semibold text-brand-800">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
