import './globals.css'
import Nav from '@/components/Nav'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

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
      </Head>
      <body className={mulish.className}>
      <Nav/>
        
        {children}
        <Analytics />
      <Footer/>  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script></body>
    </html>
  )
} 