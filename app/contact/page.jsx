'use client'

import React,{Fragment, useEffect} from 'react'
import './contact.css'
import Image from 'next/image'
import callingIcon from '../../public/assets/icons/calling.svg'
import emailIcon from '../../public/assets/icons/email.svg'
import addressIcon from '../../public/assets/icons/address.svg'

const ContactUs = () => {


  useEffect(()=>{

    document.title = "Renukiran-Contact"
  
  
  },[])


  function makeCall() {
    window.location.href = 'tel:9625881835';
  }
  return (
    <>
    <section className='w-full md:h-[90vh] h-[50vh]'>
  <div id='first-image-container'>
    <div className='text-container absolute z-20 md:ml-40 ml-6'>
        <h2 className='uppercase text-white md:font-extrabold md:text-4xl'>Contact Now</h2>
        <p className='text-slate-400 md:text-sm text-xs'>You can contact us at info@renukiran.org or connect with us on Linkedin. <br/>We're always open for new opportunities and collaborations.< br className='md:hidden block'/> and basic necessities, empowering <br className='hidden md:block'/>individuals to break<br className='md:hidden block'/> the cycle of poverty and build a brighter future.</p>
        <button onClick={makeCall} className='uppercase md:py-3 md:px-8 py-1 px-4 mt-4 text-white hover:bg-[#223752] bg-[#2e5893]'>Call now</button>
    </div>
    <div id='gradient-overlay' className='text-black text-4xl'>
    </div>
    <Image alt='contact-now' src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FcontactPageBg.jpg?alt=media&token=1048a4d3-2ebb-4091-a119-eb3730f2117b&_gl=1*1bea39e*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk2NzUuNjAuMC4w" fill objectFit='cover' loading='lazy' className='w-full' id='img' />
  </div>
</section>
<section>
      <div className='contact-page-main-content md:flex block justify-center md:my-24 my-14 md:gap-20 md:mx-6'>
     <div onClick={makeCall} className='cursor-pointer text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={callingIcon} width={50} height={50} alt='call' /> <h2>Phone</h2> <p>+91 9625881835</p></div>
        <div className='cursor-pointer text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={emailIcon} width={50} height={50} alt='email' /> <h2>Email</h2> <p>info@renukiran.org</p></div>

        <a href='https://maps.app.goo.gl/X9uNp1FJREzWwsxF8' target='_blank'>
        <div  className='cursor-pointer text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={addressIcon} width={50} height={50} alt='address' /> <h2>Address</h2> <p className='text-wrap'>B-122, Upper Ground Floor, Gali Number 13, <br/>Amritpuri, Garhi, New Delhi, Delhi 110065</p></div>
        </a>
      </div>
    </section>
</>
  )
}

export default ContactUs