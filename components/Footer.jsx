import React from 'react'
import logo from '../public/assets/images/official-logo.png'
import Image from 'next/image'
import fb from '../public/assets/icons/facebook.svg'
import ig from '../public/assets/icons/ig.svg'
import x from '../public/assets/icons/twitter.svg'

const Footer = () => {
  return (

    <footer className="footer bg-gray-900 p-10  text-neutral-content">
      <aside>
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <Image width={100} height={50} src={logo} alt="Renukiran" />
        </a>
        <p>Renukiran<br />Here to empower</p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
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
        </div>
      </nav>
    </footer>
  )
}

export default Footer