import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReLens | Give Your Frame a Second Life',
  description:
    'ReLens provides lens replacement, progressive lenses, blue cut lenses, photochromic lenses, frame repair and doorstep optical services in Puducherry.',
  keywords: ['ReLens', 'optical service', 'lens replacement', 'progressive lens', 'blue cut lens'],
  openGraph: {
    title: 'ReLens | Give Your Frame a Second Life',
    description: 'Premium optical services, lens replacement and expert support.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
