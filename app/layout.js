import "./globals.css";
import Nav from "@/components/Nav";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import WhatsappButton from "@/components/WhatsappButton";
import BuyMeal from "@/components/buyMealButton";
import Loader from "@/components/Loader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SubscribeLetter from "@/components/SubscribeLetter";

const mulish = Mulish({ subsets: ["latin-ext"] });

const SITE_URL = "https://www.renukiran.org";
const SITE_NAME = "Renukiran Welfare Foundation";

export const metadata = {
  // ----- Core -----
  title: {
    default: `${SITE_NAME} — Education, Environment & Community Development`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Renukiran Welfare Foundation is a registered non-profit in New Delhi working to uplift underprivileged communities through education, large-scale tree plantation, women empowerment, and sustainable rural development. Donate, volunteer or partner with us.",
  keywords: [
    "Renukiran Welfare Foundation",
    "Renukiran NGO",
    "NGO India",
    "NGO New Delhi",
    "Donate to NGO India",
    "Tree plantation India",
    "Children education NGO",
    "Women empowerment India",
    "Sustainable development NGO",
    "Volunteer India",
    "Charity India",
    "Rural development NGO",
    "Plant trees donate India",
    "Sponsor a child India",
    "80G donation receipt",
    "FCRA registered NGO",
    "Corporate social responsibility India",
    "ESG partnerships India",
    "CSR partner Delhi",
    "Plant a tree donation",
    "Donate books clothes India",
    "Zero hunger mission India",
    "Amritpuri Garhi New Delhi NGO",
    "Sant Nagar East of Kailash NGO",
    "Tree plantation drive Delhi NCR",
    "School supplies donation Delhi",
    "Green legacy India",
    "Climate action NGO India",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Non-Profit Organization",
  classification: "NGO, Charity, Non-Profit",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // ----- Canonical -----
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
    },
  },

  // ----- Indexing -----
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Verify your site at the URLs below and paste the codes here
  verification: {
    // google: "paste-your-google-site-verification-code",
    // yandex: "paste-your-yandex-verification-code",
    // bing: "paste-your-bing-webmaster-code",
  },

  // ----- Icons & manifest -----
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/renukiran-logo-png.png", type: "image/png" },
    ],
    apple: [{ url: "/assets/renukiran-logo-png.png" }],
    shortcut: ["/favicon.ico"],
  },

  // ----- Open Graph (Facebook / LinkedIn / WhatsApp) -----
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Building a Greener, Kinder Tomorrow`,
    description:
      "A registered Indian non-profit powering education, tree plantation, women empowerment and community development. Join us — donate, volunteer or partner.",
    images: [
      {
        url: "/assets/renukiran-logo-png.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
      },
    ],
    emails: ["info@renukiran.org"],
    phoneNumbers: ["+91 96258 81835"],
    countryName: "India",
  },

  // ----- Twitter / X -----
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Education, Environment & Community`,
    description:
      "Donate, volunteer or partner with Renukiran Welfare Foundation to support education, tree plantation and women empowerment across India.",
    images: ["/assets/renukiran-logo-png.png"],
    creator: "@renukiran",
    site: "@renukiran",
  },

  // ----- PWA / Mobile -----
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0E4198" },
    { media: "(prefers-color-scheme: dark)", color: "#0E4198" },
  ],
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#0E4198",
  },

  // ----- App-specific -----
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.5494;77.2454",
    ICBM: "28.5494, 77.2454",
    "msapplication-TileColor": "#0E4198",
    "organization": "Renukiran Welfare Foundation",
    "founding-year": "2017",
    "contact-email": "info@renukiran.org",
    "contact-phone": "+91-96258-81835",
  },
};

// ----- Structured data: NGO / Organization schema for rich Google results -----
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: "Renukiran Foundation",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/renukiran-logo-png.png`,
  description:
    "A non-profit organization in New Delhi, India working to uplift underprivileged communities through education, environmental sustainability, and women empowerment.",
  email: "info@renukiran.org",
  telephone: "+91-96258-81835",
  foundingDate: "2017",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "B-122, Upper Ground Floor, Gali Number 13, Amritpuri, Garhi",
    addressLocality: "New Delhi",
    postalCode: "110065",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/renukiran",
    "https://www.instagram.com/renukiran",
    "https://twitter.com/renukiran",
    "https://www.linkedin.com/company/renukiran",
    "https://www.youtube.com/@renukiran",
  ],
  knowsAbout: [
    "Education",
    "Tree Plantation",
    "Environmental Sustainability",
    "Women Empowerment",
    "Rural Development",
    "Climate Action",
    "Community Development",
    "Child Welfare",
  ],
  nonProfitStatus: "Registered Non-Profit",
  slogan: "A greener, kinder tomorrow for every child",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://unpkg.com/react@16/umd/react.development.js"
            crossorigin
          ></script>
          <script
            src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
            crossorigin
          ></script>
        </Head>

        <body className={mulish.className}>
          <>
            {/* Organization structured data for rich Google results */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            {/* Website + sitelinks search box structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: SITE_NAME,
                  url: SITE_URL,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${SITE_URL}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                }),
              }}
            />
            <Nav />
            {children}
            {/* <BuyMeal /> */}
            <WhatsappButton />
            <Analytics />
            {/* <SubscribeLetter/> */}
            <Footer />
            <script
              defer
              src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
            ></script>
            <SpeedInsights />
          </>
        </body>
      </html>
    </>
  );
}
