import React from 'react'
import Image from 'next/image'
import fb from '../public/assets/icons/facebook.svg'
import ig from '../public/assets/icons/ig.svg'
import x from '../public/assets/icons/twitter.svg'
import linkedin from '../public/assets/icons/linkedinrenukiran.svg'
import Link from 'next/link'
import youtube from '../public/assets/icons/youtube.svg'
import logo from '../public/assets/images/official-logo.png'

const Footer = () => {
  return (
    <footer className="relative p-10 text-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12">
            <div className="flex items-start">
              <Image
                src={logo}
                className="pl-10 w-60 absolute -top-12 left-0"
                alt="Logo"
              />
              {/* <h4 className="text-4xl fonat-semibold text-blueGray-700 font-bold ">Renukiran Welfare Foundation</h4> */}
              <p className="text-content mt-4">
                Renukiran is a Civil Society Organisation that promotes
                programmes through Quality Education, Digital literacy, Medical
                facilitation services, Skill trainings and Women empowerment to
                underprivileged communities, transforming lives with compassion
                and dedication. These impactful initiatives have empowered
                thousands and fostered a brighter future for those in real need
                across various parts in India.
              </p>
            </div>
            {/* <div className="gap-4 flex items-center">
          <Link href="https://twitter.com/RenukiranW" target="_blank">
            <Image src={x} width={30} height={30} viewBox='0 0 45 36' className='fill-current' alt="Social Media Icons"  />
          </Link>
          <Link href="https://www.facebook.com/renukiranorg/" target="_blank">
            <Image src={fb} width={30} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </Link>
          <Link href="https://www.instagram.com/renukiran_foundation/?hl=en" target="_blank">
            <Image src={ig} width={35} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </Link>
          <Link href="https://in.linkedin.com/company/renukiran-welfare-foundation" target="_blank">
            <Image src={linkedin} width={30} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </Link>

          <Link href="https://youtube.com/@renukiranwelfarefoundation3066?si=7PXcYS4IRIH4PI-u"  target="_blank">
            <Image src={youtube} width={30} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </Link>
        </div> */}
          </div>
          <div className="w-full lg:w-6/12 px-4 my-auto">
            <div className="flex flex-wrap items-top mb-6">
              <nav className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="header-text-400 text-lg">Useful Links</span>
                <ul className="list-unstyled">
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text"
                      href="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="sub-text hover:text-blueGray-800 sub-text"
                      href="h/donate"
                    >
                      Donate
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text"
                      href="/careers"
                    >
                      Join Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="w-full lg:w-4/12 px-4">
                <span className="header-text-400 text-lg">Quick Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="link link-hover hover:text-blueGray-800 sub-text"
                      href="/refund-cancellation-policy"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text"
                      href="/terms-conditions"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text"
                      href="privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text"
                      href="contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-center md:justify-between">
          <div className="w-full mx-auto text-center">
              <span>Verified By</span>
          <div className="flex items-center justify-center">
              <div className='flex w-1/2 flex-wrap justify-center gap-2'>
              <Image width={130} height={130} src='https://nasscom.in/themes/custom/nasscomtheme/logo.svg' className=''/>
              <Image width={130} height={10} src='/assets/icons/niitfoundatinLogonew.png' className=''/>
              <Image width={80} height={10} src='/assets/icons/nitiAayog.svg' className=''/>
              <Image width={70} height={70} src='/assets/icons/ISO.svg'/>
              </div>
            </div>
          </div> 
        </div> */}
      </div>
    </footer>
  );
}

export default Footer