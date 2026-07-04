import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moblycar.com.br"),

  title: {
    default: "MoblyCar | Mobilidade Inteligente",
    template: "%s | MoblyCar",
  },

  description:
    "A MoblyCar é um aplicativo brasileiro de mobilidade urbana que conecta passageiros e motoristas com economia, segurança e praticidade.",

  keywords: [
    "MoblyCar",
    "Aplicativo de transporte",
    "Aplicativo de mobilidade",
    "Transporte urbano",
    "Motorista de aplicativo",
    "Corridas por aplicativo",
    "Itumbiara",
    "Goiás",
    "Mobilidade urbana",
    "App de transporte",
  ],

  authors: [
    {
      name: "MoblyCar",
    },
  ],

  creator: "MoblyCar",

  publisher: "MoblyCar",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://moblycar.com.br",
    title: "MoblyCar | Mobilidade Inteligente",
    description:
      "Baixe o aplicativo da MoblyCar e aproveite uma nova experiência em mobilidade urbana.",
    siteName: "MoblyCar",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MoblyCar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MoblyCar",
    description:
      "Aplicativo brasileiro de mobilidade urbana.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://moblycar.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",

  name: "MoblyCar",

  url: "https://moblycar.com.br",

  logo: "https://moblycar.com.br/logo.png",

  image: "https://moblycar.com.br/og-image.jpg",

  description:
    "Aplicativo brasileiro de mobilidade urbana conectando passageiros e motoristas com tecnologia, economia e segurança.",

  telephone: "+55 64 99319-8868",

  email: "mobcariub@gmail.com",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Itumbiara",
    addressRegion: "GO",
    addressCountry: "BR",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Itumbiara",
    },
    {
      "@type": "City",
      name: "Araporã",
    },
    {
      "@type": "City",
      name: "Campina Verde",
    },
  ],

  sameAs: [
    "https://instagram.com/moblycar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}