import './globals.css'
import Nav from '@/components/Nav'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { Mulish } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import WhatsappButton from '@/components/WhatsappButton'
import BuyMeal from '@/components/buyMealButton'

const mulish = Mulish({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Renukiran',
  description: 'A NGO who works for the underprivlieged',
  script: ''
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>


        
      </Head>
      <body className={mulish.className}>
      <Nav/>
        
        {children}
        <BuyMeal/>
        <WhatsappButton/>
        <Analytics/>
      <Footer/>  
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script></body>
    </html>
  )
} 