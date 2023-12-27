import React from 'react'
import Image from 'next/image'
import fb from '../public/assets/icons/facebook.svg'
import ig from '../public/assets/icons/ig.svg'
import x from '../public/assets/icons/twitter.svg'
import linkedin from '../public/assets/icons/linkedinrenukiran.svg'
import Link from 'next/link'
import logo from '../public/assets/images/official-logo.png'


const Footer = () => {
  return (

    
    <footer class="relative bg-white pb-6 text-black my-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <Image src={logo} className='w-40'/>  
            <h4 class="text-4xl fonat-semibold text-blueGray-700 font-bold ">Renukiran Welfare Foundation</h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600 font-bold">
            Renukiran is a Civil Society Organisation that promotes programmes through Quality Education, Digital literacy, Medical facilitation services, Skill trainings and Women empowerment to underprivileged communities, transforming lives with compassion and dedication. These impactful initiatives have empowered thousands and fostered a brighter future for those in real need across various parts in India.
            </h5>
          


<div className="gap-4 flex items-center">
          <a href="https://twitter.com/RenukiranW">
            <Image src={x} width={30} height={30} viewBox='0 0 45 36' className='fill-current' />
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
          </div>
          <div class="w-full lg:w-6/12 px-4 my-auto">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-2xl font-semibold mb-2">Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/about">About Us</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="h/donate">Donate</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/contact">Contact</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/careers">Join Us</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-2xl font-semibold mb-2">Quick Links</span>
                <ul class="list-unstyled text-3xl">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/refund-cancellation-policy">Refund Policy</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="/terms-conditions">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg" href="contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <hr class="my-6 border-blueGray-300"/> */}
        <div class="flex flex-wrap items-center md:justify-between ">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
         <div class="text-lg text-blueGray-500 font-semibold py-1 text-center">
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