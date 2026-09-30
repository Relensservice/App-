import Link from 'next/link'

const brandCards = [
  {
    name: 'Valuevis',
    slug: 'valuevis',
    description: 'Premium lens solutions for everyday clarity and comfort.',
    accent: 'from-[#1a3a52] to-[#204767]',
  },
  {
    name: 'Bausch + Lomb',
    slug: 'bausch-lomb',
    description: 'Contact lenses, daily, monthly and specialty solutions.',
    accent: 'from-[#234c6d] to-[#6787a3]',
  },
  {
    name: 'Essilor',
    slug: 'essilor',
    description: 'Progressive, digital and premium lens technology collections.',
    accent: 'from-[#8b6a3f] to-[#c9a961]',
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-relens-gold">Shop</div>
            <h1 className="mt-2 text-3xl font-black uppercase text-relens-navy">Find the right lens</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-relens-navy">
            Back to Home
          </Link>
        </div>

        <div className="mb-8 rounded-[28px] bg-white p-4 shadow-sm md:p-6">
          <input
            placeholder="Search lenses, brands, categories or services"
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm outline-none transition focus:border-relens-gold"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {brandCards.map((brand) => (
            <Link
              key={brand.name}
              href={`/catalog/${brand.slug}`}
              className={`block overflow-hidden rounded-[28px] bg-gradient-to-br ${brand.accent} p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="mb-16 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Brand</div>
              <h2 className="text-3xl font-black">{brand.name}</h2>
              <p className="mt-3 max-w-xs text-sm text-white/85">{brand.description}</p>
              <div className="mt-8 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                Explore catalog →
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            'All Lenses',
            'Progressive',
            'Blue Cut',
            'Anti-Glare',
            'Photochromic',
            'Single Vision',
            'Contact Lenses',
            'Offers',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-relens-navy shadow-sm">
              {item}
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
