'use client'

import React from 'react'
import './contact.css'
import Image from 'next/image'
import callingIcon from '../../public/assets/icons/calling.svg'
import emailIcon from '../../public/assets/icons/email.svg'
import addressIcon from '../../public/assets/icons/address.svg'

const ContactUs = () => {


  function makeCall() {
  
    window.location.href = 'tel:9625881835';
  }
  return (
    <>
    <section className='w-full md:h-[90vh]'>
  <div className='first-image-container'>
    <div className='text-container absolute z-20 md:ml-40 ml-6'>
        <h2 className='uppercase text-white md:font-extrabold md:text-4xl'>Contact Now</h2>
        <p className='text-slate-400 md:text-sm text-xs'>Donations can provide access to education, healthcare,< br className='md:hidden block'/> and basic necessities, empowering <br className='hidden md:block'/>individuals to break<br className='md:hidden block'/> the cycle of poverty and build a brighter future.</p>
        <button className='uppercase md:py-3 md:px-8 py-1 px-4 mt-4 text-white hover:bg-[#223752] bg-[#2e5893]'>Call now</button>
    </div>
    <img src="https://pixabay.com/get/g479418b809192732a3bd723ee83716eaa38991142ce41c512dd5367cbcd91e546b01606e53b87f831236f205c55ca11b21000a7b8efc5851b9ff197da4c49c37_1280.jpg" alt="image" className='w-full' />
    
  </div>
</section>
<section>
      <div className='contact-page-main-content md:flex block justify-center md:my-24 my-14 md:gap-20 md:mx-6'>
        <div className='md:text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={callingIcon} width={50} height={50} alt='call' /> <h2>Phone</h2> <p>+91 99999999</p></div>
        <div className='md:text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={emailIcon} width={50} height={50} alt='email' /> <h2>Email</h2> <p>renukiran@info.org</p></div>
        <div className='md:text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={addressIcon} width={50} height={50} alt='address' /> <h2>Address</h2> <p>temporary location</p></div>
      </div>
    </section>
</>
  )
}

export default ContactUs