import React from 'react'
import logo from '../public/assets/images/official-logo.png'
import Image from 'next/image'
import fb from '../public/assets/icons/facebook.svg'
import ig from '../public/assets/icons/ig.svg'
import x from '../public/assets/icons/twitter.svg'
import linkedin from '../public/assets/icons/linkedinrenukiran.svg'
import Link from 'next/link'

const Footer = () => {
  return (

    <footer className="footer bg-gray-900 p-10  text-neutral-content">
      <aside>
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <Image width={100} height={50} src={logo} alt="Renukiran" />
        </a>
        <p>Renukiran<br />Here to empower</p>
      </aside>
      <nav className='block space-y-12'>
        <div className="gap-4 flex items-center">
          <a href="https://twitter.com/RenukiranW">
            <Image src={x} width={30} height={30} viewBox='0 0 24 24' className='fill-current' />
          </a>
          <a href="https://www.facebook.com/renukiranorg/">
            <Image src={fb} width={30} height={30} viewBox='0 0 24 24' className='fill-current' />
          </a>
          <a href="https://www.instagram.com/renukiran_foundation/?hl=en">
            <Image src={ig} width={35} height={30} viewBox='0 0 24 24' className='fill-current' />
          </a>
          <a href="https://in.linkedin.com/company/renukiran-welfare-foundation">
            <Image src={linkedin} width={30} height={30} viewBox='0 0 24 24' className='fill-current' />
          </a>
        </div>
        <div className='md:flex block md:space-x-0 '>
          <Link href="/terms-conditions" className='md:border-r pr-2 md:hover:underline border-[#9CA3B0]'>Terms & Conditions</Link>
          <Link href="/privacy-policy" className='md:border-r px-2 md:hover:underline border-[#9CA3B0]'>Privacy Policy</Link>
          <Link href="/refund-cancellation-policy" className='md:border-r px-2 md:hover:underline border-[#9CA3B0]'>Refund Policy</Link>
          <Link href="/contact" className='md:border-r px-2 md:hover:underline border-[#9CA3B0]'>Contact Us</Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer