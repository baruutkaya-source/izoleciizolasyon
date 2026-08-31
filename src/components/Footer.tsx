import Link from "next/link";
import { siteConfig, services, regions } from "@/data/site";
import LogoIcon from "@/components/LogoIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-custom py-10 sm:py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-turquoise">
                <LogoIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold sm:text-xl">İzoleci İzolasyon</span>
            </div>
            <p className="text-sm leading-relaxed text-brand-200">
              {siteConfig.experience} yıllık tecrübemizle İzmir ve Ege bölgesinde profesyonel sıvı izolasyon hizmetleri sunuyoruz.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm text-brand-200">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/hizmetler/${service.id}`} className="transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">Hizmet Bölgeleri</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-brand-200 sm:grid-cols-1">
              {regions.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
              {regions.districts.map((district) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">İletişim</h3>
            <ul className="space-y-3 text-sm text-brand-200">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="break-all transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-700 pt-6 text-center text-xs text-brand-300 sm:mt-12 sm:pt-8 sm:text-sm">
          <p>
            &copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır. |{" "}
            <a href={siteConfig.url} className="hover:text-white">
              {siteConfig.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
