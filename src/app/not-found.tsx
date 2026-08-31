import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-brand-50">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-brand-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Aradığınız sayfa bulunamadı.</p>
        <Link href="/" className="btn-primary mt-8">
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}
