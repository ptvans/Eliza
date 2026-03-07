import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'
import Header from './components/Header'
import LogoBanner from './components/LogoBanner'
import Footer from './components/Footer'
import './globals.css'
import './layout.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Eliza Pedder, LMFT | Holistic Therapy for Sensitive Souls | California',
    template: '%s | Eliza Pedder, LMFT',
  },
  description: 'Licensed Marriage & Family Therapist specializing in EMDR, ERP for OCD, somatic therapy, and mindfulness. Serving highly sensitive women, deep feelers, and overthinkers throughout California via telehealth.',
  keywords: ['EMDR therapist', 'OCD therapy', 'ERP therapy', 'somatic therapy', 'PMDD therapist', 'codependency therapy', 'grief therapist', 'couples therapy', 'holistic therapist California', 'therapist Bay Area', 'telehealth therapy California'],
  authors: [{ name: 'Eliza Pedder, LMFT' }],
  robots: 'index, follow',
  metadataBase: new URL('https://ptvans.github.io/Eliza'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Eliza Pedder, LMFT | Holistic Therapy for Sensitive Souls',
    description: 'Licensed Marriage & Family Therapist specializing in EMDR, ERP for OCD, somatic therapy, and mindfulness. Serving highly sensitive women and deep feelers throughout California.',
    siteName: 'Eliza Pedder, LMFT',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eliza Pedder, LMFT | Holistic Therapy for Sensitive Souls',
    description: 'Licensed Marriage & Family Therapist specializing in EMDR, ERP for OCD, somatic therapy, and mindfulness. Serving highly sensitive women and deep feelers throughout California.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://elizapedder.com/#business',
      name: 'Eliza Pedder Therapy',
      description: 'Licensed Marriage and Family Therapist specializing in EMDR, ERP for OCD, somatic therapy, and mindfulness. Holistic therapy for highly sensitive women, deep feelers, and overthinkers throughout California.',
      url: 'https://elizapedder.com/',
      telephone: '+19252555081',
      priceRange: '$245 per session',
      medicalSpecialty: [
        'OCD Therapy (ERP)',
        'EMDR',
        'Somatic Therapy',
        'PMDD Support',
        'Couples Therapy',
        'Grief Therapy',
      ],
      areaServed: [
        { '@type': 'State', name: 'California' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Therapy Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Individual Therapy',
              description: 'Holistic therapy for OCD, anxiety, trauma, PMDD, codependency, and grief using EMDR, ERP, somatic healing, and mindfulness.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Couples Therapy',
              description: 'Couples therapy to deepen intimacy, improve communication, reduce conflict, and foster genuine connection.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'EMDR Therapy',
              description: 'Attachment-focused EMDR for trauma, anxiety, and deeply held negative beliefs. Full-day EMDR intensives available.',
            },
          },
        ],
      },
      sameAs: ['https://elizapedder.com/blog'],
    },
    {
      '@type': 'Person',
      '@id': 'https://elizapedder.com/#therapist',
      name: 'Eliza Pedder',
      jobTitle: 'Licensed Marriage and Family Therapist',
      honorificSuffix: 'LMFT',
      worksFor: { '@id': 'https://elizapedder.com/#business' },
      knowsAbout: [
        'EMDR',
        'ERP for OCD',
        'Somatic Therapy',
        'PMDD',
        'Codependency',
        'Grief Therapy',
        'Couples Therapy',
        'Mindfulness',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://elizapedder.com/#website',
      url: 'https://elizapedder.com/',
      name: 'Eliza Pedder, LMFT',
      description: 'Holistic therapy for sensitive souls — EMDR, ERP, somatic healing, and mindfulness',
      publisher: { '@id': 'https://elizapedder.com/#business' },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${nunitoSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/Eliza/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="app">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header />
          <main className="main-content" id="main-content">
            {children}
          </main>
          <LogoBanner />
          <Footer />
        </div>
      </body>
    </html>
  )
}
