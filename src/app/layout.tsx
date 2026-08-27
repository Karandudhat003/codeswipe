import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { LogoPreloader } from "@/components/site/LogoPreloader";
import { WelcomeModal } from "@/components/site/WelcomeModal";

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
    default: 'CodeSwipe IT Solutions | Best IT Company in India | Web, Mobile App & AI Development',
    template: '%s | CodeSwipe IT Solutions',
  },
  description:
    'CodeSwipe IT Solutions — Top-rated IT company & digital product agency in India. We offer custom web app development, mobile app development, AI solutions, UI/UX design, SaaS development, Shopify & WordPress solutions for startups and enterprises worldwide.',
  keywords: [
    'CodeSwipe IT Solutions',
    'IT company India',
    'best IT company in India',
    'web development company India',
    'mobile app development company',
    'React development agency',
    'Next.js development company',
    'Flutter app development India',
    'AI development company',
    'Shopify development agency',
    'WordPress development company',
    'SaaS development agency',
    'UI UX design agency',
    'custom software development India',
    'hire offshore developers India',
    'full stack development services',
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
    title: 'CodeSwipe IT Solutions | Top IT & Digital Solutions Agency',
    description:
      'Leading IT company in India specializing in Web Development, Mobile Apps, AI Solutions, SaaS, Shopify & WordPress. Transform your business with high-performance digital products.',
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
    title: 'CodeSwipe IT Solutions | Top IT & Digital Solutions Agency',
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
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CodeSwipe IT Solutions',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.png`,
    description:
      'Top-rated IT company in India offering custom web development, mobile app development, AI solutions, UI/UX design and SaaS development.',
    telephone: '+91-90545-12976',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-90545-12976',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-72650-25017',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    sameAs: [
      'https://twitter.com/codeswipe',
      'https://linkedin.com/company/codeswipe',
      'https://instagram.com/codeswipe',
    ],
    areaServed: ['US', 'IN', 'GB', 'AE', 'CA', 'AU'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT & Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development (React / Next.js)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development (Flutter / React Native)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Machine Learning Solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify & eCommerce Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress & Custom Web Solutions',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodeSwipe IT Solutions',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LogoPreloader />
        <WelcomeModal />
        {children}
      </body>
    </html>
  );
}
