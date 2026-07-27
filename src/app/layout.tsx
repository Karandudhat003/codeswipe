import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const baseUrl = 'https://codeswipeitsolutions.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CodeSwipe IT Solutions | Best IT Company in India | Web & App Development',
    template: '%s | CodeSwipe IT Solutions',
  },
  description:
    'CodeSwipe IT Solutions — Top-rated IT company in India offering custom web development, mobile app development, AI solutions, UI/UX design, SaaS development and digital transformation services. Trusted by 50+ global clients.',
  keywords: [
    'IT company India',
    'web development company',
    'mobile app development India',
    'software development company',
    'best IT company',
    'React development',
    'Next.js development',
    'Flutter app development',
    'AI development company',
    'SaaS development',
    'UI UX design company',
    'CodeSwipe IT Solutions',
    'digital transformation',
    'custom software development',
    'ecommerce development',
    'hire developers India',
    'IT agency India',
    'full stack development',
  ],
  authors: [{ name: 'CodeSwipe IT Solutions', url: baseUrl }],
  creator: 'CodeSwipe IT Solutions',
  publisher: 'CodeSwipe IT Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'CodeSwipe IT Solutions',
    title: 'CodeSwipe IT Solutions | Best IT Company in India',
    description:
      'Top-rated IT company in India. We build world-class web apps, mobile apps, AI solutions, SaaS platforms and custom software for businesses worldwide.',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CodeSwipe IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeSwipe IT Solutions | Best IT Company in India',
    description:
      'Top-rated IT company in India. Web apps, mobile apps, AI, SaaS & custom software.',
    images: [`${baseUrl}/og-image.png`],
    creator: '@codeswipe',
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'technology',
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeSwipe IT Solutions',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'Top-rated IT company in India offering web development, mobile app development, AI solutions and SaaS development.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-90545-12976',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://twitter.com/codeswipe',
      'https://linkedin.com/company/codeswipe',
      'https://instagram.com/codeswipe',
    ],
    foundingDate: '2022',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '48',
    },
    serviceArea: { '@type': 'GeoShape', name: 'Worldwide' },
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
