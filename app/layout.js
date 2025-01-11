
import './globals.css'
import Nav from '@/components/Nav'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import WhatsappButton from '@/components/WhatsappButton'
import BuyMeal from '@/components/buyMealButton'
import Loader from '@/components/Loader'
import { SpeedInsights } from '@vercel/speed-insights/next';

const mulish = Mulish({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Renukiran Welfare Foundation',
  description: 'A NGO that works for the underprivlieged',
  script: ''
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">

        <Head>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        </Head>

        <body className={mulish.className}>
          <>
            <Nav />
            {children}
            <BuyMeal />
            <WhatsappButton />
            <Analytics />
            <Footer />
            <script defer src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
            <SpeedInsights/>
          </>
        </body>
      </html>


    </>
  )
} 