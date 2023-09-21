import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Renukiran',
  description: 'Rejukiran is a Foundation ran by us ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<Head>
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />

</Head>
      <body className={inter.className}>{children}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script></body>
    </html>
  )
}
