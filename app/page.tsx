const heroSlides = [
  {
    brand: 'ReLens',
    title: 'KEEP YOUR FAVOURITE FRAME',
    subtitle: 'Replace only the lenses.',
    price: 'Starting from ₹499',
    cta: 'Replace My Lens',
    image:
      'https://images.unsplash.com/photo-1577803947579-9f4e7a10d4d0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    brand: 'Valuevis',
    title: 'VALUEVIS LENS COLLECTION',
    subtitle: 'Explore Valuevis lens options.',
    price: 'Premium clarity',
    cta: 'View Valuevis',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    brand: 'Bausch + Lomb',
    title: 'BAUSCH + LOMB',
    subtitle: 'Explore contact lens and eye-care products.',
    price: 'Comfort & clarity',
    cta: 'Shop Bausch + Lomb',
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
  },
  {
    brand: 'Essilor',
    title: 'ESSILOR LENS SOLUTIONS',
    subtitle: 'Explore lens technologies for different vision needs.',
    price: 'Driven by precision',
    cta: 'Explore Essilor',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    brand: 'Doorstep Service',
    title: 'OPTICAL SERVICE AT YOUR DOORSTEP',
    subtitle: 'Pickup • Lens Replacement • Delivery',
    price: 'Convenient & trusted',
    cta: 'Book Home Service',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
  },
]

const quickActions = [
  'Book Appointment',
  'Replace Lens',
  'Shop Lenses',
  'Track Order',
  'Frame Repair',
  'WhatsApp Support',
]

const popularServices = [
  {
    name: 'Lens Replacement',
    price: '₹499',
    description: 'Upgrade your existing frame with premium lenses.',
    image:
      'https://images.unsplash.com/photo-1577803947579-9f4e7a10d4d0?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Progressive Lens',
    price: '₹1,999',
    description: 'Smooth focus for all distances in one lens.',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Blue Cut Lens',
    price: '₹799',
    description: 'Reduce eye strain from digital screens.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Anti-Glare Lens',
    price: '₹999',
    description: 'Sharper vision with reduced reflections.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Photochromic Lens',
    price: '₹1,499',
    description: 'Adaptive lenses that darken outdoors.',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Frame Repair',
    price: '₹99',
    description: 'Restore your frame with trusted optical care.',
    image:
      'https://images.unsplash.com/photo-1525909092-889d4f0a5b7d?auto=format&fit=crop&w=700&q=80',
  },
]

const brandHighlights = [
  {
    name: 'Valuevis',
    title: 'Explore Valuevis Lenses',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Bausch + Lomb',
    title: 'Explore Contact Lenses',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Essilor',
    title: 'Explore Essilor Lens Solutions',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-relens-navy text-sm font-bold text-relens-gold">
              R
            </div>
            <div>
              <div className="text-lg font-black tracking-wide text-relens-navy">RELENS</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Give Your Frame a Second Life</div>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <input
              placeholder="Search lenses, brands, products..."
              className="w-80 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none ring-0 transition focus:border-relens-gold"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 p-2 text-lg">🔔</button>
            <button className="rounded-full border border-slate-200 p-2 text-lg">🛒</button>
            <button className="rounded-full bg-relens-navy p-2 text-lg text-white">👤</button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-slate-100 shadow-sm">
            <div className="grid min-h-[360px] md:grid-cols-2">
              <div className="flex flex-col justify-center bg-gradient-to-br from-[#1a3a52] via-[#203f5f] to-[#1a3a52] p-8 text-white">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-relens-gold">
                  {heroSlides[0].brand}
                </div>
                <h1 className="max-w-md text-3xl font-black uppercase leading-tight md:text-5xl">
                  {heroSlides[0].title}
                </h1>
                <p className="mt-4 max-w-md text-base text-slate-200">{heroSlides[0].subtitle}</p>
                <div className="mt-5 text-lg font-semibold text-relens-gold">{heroSlides[0].price}</div>
                <button className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-relens-gold px-5 py-3 text-sm font-bold text-relens-navy">
                  {heroSlides[0].cta}
                </button>
              </div>

              <div className="relative min-h-[260px]">
                <img
                  src={heroSlides[0].image}
                  alt={heroSlides[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {brandHighlights.map((brand) => (
              <div key={brand.name} className="relative overflow-hidden rounded-[24px]">
                <img src={brand.image} alt={brand.name} className="h-40 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="text-xs uppercase tracking-[0.2em] text-relens-gold">{brand.name}</div>
                  <div className="mt-1 text-lg font-bold">{brand.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black uppercase tracking-wide text-relens-navy">Quick Actions</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {quickActions.map((action, index) => (
            <button
              key={action}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-relens-light-gray text-xl">
                {['📅', '🧿', '🛍️', '📦', '🛠️', '💬'][index]}
              </div>
              <div className="font-semibold text-relens-navy">{action}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black uppercase tracking-wide text-relens-navy">Popular Services</h2>
          <a href="/shop" className="text-sm font-semibold text-relens-navy">View all</a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {popularServices.map((service) => (
            <article key={service.name} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <img src={service.image} alt={service.name} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-relens-navy">{service.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                  </div>
                  <div className="rounded-full bg-relens-light-gray px-2 py-1 text-sm font-bold text-relens-navy">
                    {service.price}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <button className="text-sm font-semibold text-relens-navy">View Details</button>
                  <button className="rounded-full bg-relens-gold px-4 py-2 text-sm font-bold text-relens-navy">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="rounded-[28px] bg-relens-light-gray p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-relens-gold">ReLens Offers</div>
              <h2 className="mt-2 text-3xl font-black text-relens-navy">Premium lenses, smart pricing.</h2>
            </div>
            <button className="rounded-full bg-relens-navy px-5 py-3 text-sm font-bold text-white">Explore Offers</button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              ['Lens Replacement', 'from ₹499'],
              ['Blue Cut Lens', '₹799'],
              ['Photochromic Lens', '₹999'],
              ['Progressive Lens', '₹1,999'],
              ['Frame Repair', '₹99'],
            ].map(([name, value]) => (
              <div key={name} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">ReLens Offer</div>
                <div className="mt-2 text-lg font-bold text-relens-navy">{name}</div>
                <div className="mt-3 text-xl font-black text-relens-gold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="sticky bottom-0 z-30 border-t border-slate-200 bg-white py-3 shadow-[0_-6px_20px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-around px-4 text-xs font-medium text-slate-600 md:text-sm">
          {['Home', 'Shop', 'Bookings', 'Orders', 'Profile'].map((item, index) => (
            <div key={item} className="flex flex-col items-center gap-1">
              <div className="text-lg">{['🏠', '🛍️', '📅', '📦', '👤'][index]}</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </nav>
    </main>
  )
}
