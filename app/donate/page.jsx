'use client'

import React, { useState } from 'react'
import './donatePage.css'
import Image from 'next/image'
import Form from '@/components/form'
import Modal from '@/components/modal'

const DonateNow = () => {

  const [clicked,setClicked]=useState(false)

  const handleClick=()=>{

    console.log('clicked')

    if(clicked==true){
      setClicked(false)
    }

    else{
      setClicked(true)
    }

  }
  return (
    <>
     <section className='w-full md:h-[90vh] h-[50vh]'>
  <div id='first-image-container'>
    <div className='text-container absolute z-20 md:ml-40 ml-6'>
        <h2 className='uppercase text-white md:font-extrabold md:text-4xl'>Donate</h2>
        <p className='text-slate-400 md:text-sm text-xs'>Donations can provide access to education, healthcare,< br className='md:hidden block'/> and basic necessities, empowering <br className='hidden md:block'/>individuals to break<br className='md:hidden block'/> the cycle of poverty and build a brighter future.</p>
        <button className='uppercase md:py-3 md:px-8 py-1 px-4 mt-4 text-white hover:bg-[#223752] bg-[#2e5893]'>Donate now</button>
    </div>
    <div id='gradient-overlay' className='text-black text-4xl'>
    </div>
    <Image src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FdonationPageBg.jpg?alt=media&token=8f5c78d8-f6f4-4864-b569-3c80f881847a&_gl=1*1szz4lf*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk3OTYuNjAuMC4w" fill loading='lazy' alt="contact now" className='w-full object-cover' id='img' />
  </div>
</section>





    <section className='bg-[#2e5893]'>
      <div className='text-white text-center md:my-24 my-12  z-10'>
          <h1 className='md:text-6xl text-4xl md:mb-8 mb-3 md:font-bold'>Donate</h1>
            <p className='px-3 text-slate-400'>Donating helps save lives, uplifts communities, and fosters a better future for all. Your contribution matters. <br className='hidden md:block'/>
        Your generous contribution empowers us to continue our vital work, touching countless lives with hope and opportunity.
            </p>
      </div>

      <div className='md:h-[100vh] h-[60vh] z-10 w-full' id='image-container' >
        <div id='img-sub-container' className='w-full h-full grayscale-100'>
        <div className='absolute z-10 text-center py-3 px-3 donate-div bg-white text-black rounded-lg shadow-md sm:mr-3 donation-box' style={{opacity:".7"}}>
          <h3 className='md:text-2xl text-base md:font-bold font-semibold md:mb-4 mb-2'>Give where the need is greatest</h3>


          <p className='md:text-base text-sm md:mb-4 mb-4 text-slate-500'>Your donation makes a big impact! It helps provide education, healthcare, and relief to those less fortunate. Your kindness sparks positive change and brings smiles to faces in need.</p>
          <button className='uppercase md:py-3 md:px-8 py-1 px-4 mt-4 text-white hover:bg-[#223752] bg-[#2e5893]'>Donate now</button>
        </div>
        
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default DonateNow