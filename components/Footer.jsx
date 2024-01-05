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

    
    <footer className="relative bg-white pb-6 text-black  border-t-2  border-hray-500 p-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <Image src={logo} className='w-40' alt='Logo'/>  
            <h4 className="text-4xl fonat-semibold text-blueGray-700 font-bold ">Renukiran Welfare Foundation</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600 font-bold">
            Renukiran is a Civil Society Organisation that promotes programmes through Quality Education, Digital literacy, Medical facilitation services, Skill trainings and Women empowerment to underprivileged communities, transforming lives with compassion and dedication. These impactful initiatives have empowered thousands and fostered a brighter future for those in real need across various parts in India.
            </h5>
          


<div className="gap-4 flex items-center">
          <a href="https://twitter.com/RenukiranW" target="_blank">
            <Image src={x} width={30} height={30} viewBox='0 0 45 36' className='fill-current' alt="Social Media Icons"  />
          </a>
          <a href="https://www.facebook.com/renukiranorg/" target="_blank">
            <Image src={fb} width={30} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </a>
          <a href="https://www.instagram.com/renukiran_foundation/?hl=en" target="_blank">
            <Image src={ig} width={35} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </a>
          <a href="https://in.linkedin.com/company/renukiran-welfare-foundation" target="_blank">
            <Image src={linkedin} width={30} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </a>

          <a href="https://youtube.com/@renukiranwelfarefoundation3066?si=7PXcYS4IRIH4PI-u"  target="_blank">
            <Image src={youtube} width={30} height={30} viewBox='0 0 24 24' className='fill-current' alt="Social Media Icons"  />
          </a>
        </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 my-auto">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-2xl font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/about">About Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="h/donate">Donate</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/contact">Contact</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/careers">Join Us</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-2xl font-semibold mb-2">Quick Links</span>
                <ul className="list-unstyled text-3xl">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/refund-cancellation-policy">Refund Policy</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/terms-conditions">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-blueGray-300"/> */}
        <div className="flex flex-wrap items-center md:justify-between ">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
         <div className="text-lg text-blueGray-500 font-semibold py-1 text-center">
              Verified By
              <div className='flex xl:flex-row  flex-wrap gap-4 m-auto text-center xl:w-[40vw]'>
              <img src='https://nasscom.in/themes/custom/nasscomtheme/logo.svg' className='w-40 m-auto'/>
              <img src='https://niitfoundation.org/wp-content/uploads/2023/10/niitfoundatinLogonew.png' className='w-40 m-auto'/>
              <img src='https://niti.gov.in/sites/default/files/2023-01/NITI-Aayog-logo.png' className='w-20 h-10  m-auto'/>
              <img src='https://www.arenasolutions.com/wp-content/uploads/what-is-iso.png' className='w-20 m-auto'/>


              </div>
            </div>
          </div> 
        </div>
      </div>
    </footer>
  )
}

export default Footer