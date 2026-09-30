import Link from 'next/link'

const catalogData: Record<string, any[]> = {
  valuevis: [
    {
      name: 'Valuevis Progressive Lens',
      category: 'Progressive',
      price: 1999,
      brand: 'Valuevis',
      featured: true,
      source_url: 'https://www.valuevis.com',
    },
    {
      name: 'Valuevis Blue Cut Lens',
      category: 'Blue Cut',
      price: 799,
      brand: 'Valuevis',
      featured: false,
      source_url: 'https://www.valuevis.com',
    },
    {
      name: 'Valuevis Anti-Glare Lens',
      category: 'Anti-Glare',
      price: 999,
      brand: 'Valuevis',
      featured: false,
      source_url: 'https://www.valuevis.com',
    },
  ],
  'bausch-lomb': [
    {
      name: 'Biotrue ONEday',
      category: 'Daily Disposable',
      price: 1299,
      brand: 'Bausch + Lomb',
      featured: true,
      source_url: 'https://www.bausch.com/products/contact-lenses/',
    },
    {
      name: 'ULTRA',
      category: 'Monthly',
      price: 1599,
      brand: 'Bausch + Lomb',
      featured: false,
      source_url: 'https://www.bausch.com/products/contact-lenses/',
    },
    {
      name: 'SofLens Toric',
      category: 'Toric / Astigmatism',
      price: 1799,
      brand: 'Bausch + Lomb',
      featured: false,
      source_url: 'https://www.bausch.com/products/contact-lenses/',
    },
  ],
  essilor: [
    {
      name: 'Essilor Single Vision',
      category: 'Single Vision',
      price: 2499,
      brand: 'Essilor',
      featured: true,
      source_url: 'https://www.essilor.com/in-en/products/',
    },
    {
      name: 'Varilux Progressive',
      category: 'Progressive',
      price: 3999,
      brand: 'Essilor',
      featured: true,
      source_url: 'https://www.essilor.com/in-en/products/',
    },
    {
      name: 'Transitions Light Adaptive',
      category: 'Light Adaptive',
      price: 3499,
      brand: 'Essilor',
      featured: false,
      source_url: 'https://www.essilor.com/in-en/products/',
    },
  ],
}

const brandMeta: Record<string, { label: string; description: string; route: string }> = {
  valuevis: {
    label: 'Valuevis',
    description: 'Premium lifestyle and specialist lens options.',
    route: '/catalog/valuevis',
  },
  'bausch-lomb': {
    label: 'Bausch + Lomb',
    description: 'Daily, monthly and specialty contact lenses.',
    route: '/catalog/bausch-lomb',
  },
  essilor: {
    label: 'Essilor',
    description: 'Single vision, progressive and premium lens technologies.',
    route: '/catalog/essilor',
  },
}

export default function CatalogLandingPage({ params }: { params: { brand: string } }) {
  const safeBrand = params.brand || 'valuevis'
  const brandInfo = brandMeta[safeBrand] || brandMeta.valuevis
  const products = catalogData[safeBrand] || catalogData.valuevis

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-relens-gold">Brand Catalogue</div>
            <h1 className="mt-2 text-3xl font-black uppercase text-relens-navy">{brandInfo.label}</h1>
          </div>
          <Link href="/shop" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-relens-navy">
            Back to Shop
          </Link>
        </div>

        <div className="mb-8 rounded-[28px] bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h2 className="text-2xl font-black text-relens-navy">{brandInfo.label} Collection</h2>
              <p className="mt-2 max-w-2xl text-slate-600">{brandInfo.description}</p>
            </div>
            <button className="rounded-full bg-relens-gold px-5 py-3 text-sm font-bold text-relens-navy">
              Request Recommendation
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {['All', 'Single Vision', 'Progressive', 'Blue Cut', 'Anti-Glare', 'Photochromic', 'Contact Lenses'].map((filter) => (
            <button key={filter} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-52 bg-gradient-to-br from-slate-100 to-slate-200 p-4">
                <div className="flex h-full items-center justify-center rounded-2xl bg-white/75 text-center text-lg font-bold text-relens-navy">
                  {product.brand}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-relens-gold">{product.category}</div>
                    <h3 className="mt-2 text-xl font-bold text-relens-navy">{product.name}</h3>
                  </div>
                  {product.featured && (
                    <span className="rounded-full bg-relens-light-gray px-2 py-1 text-[10px] font-bold uppercase text-relens-navy">
                      Featured
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-sm text-slate-500">ReLens Price</div>
                    <div className="text-2xl font-black text-relens-navy">₹{product.price.toLocaleString('en-IN')}</div>
                  </div>
                  <button className="rounded-full bg-relens-gold px-4 py-2 text-sm font-bold text-relens-navy">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-xs text-slate-500">Source: {product.source_url}</span>
                  <Link href={brandInfo.route} className="text-sm font-semibold text-relens-navy">
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ brand: 'valuevis' }, { brand: 'bausch-lomb' }, { brand: 'essilor' }]
}
