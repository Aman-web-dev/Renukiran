import React from 'react'
import './donatePage.css'

const DonateNow = () => {
  return (
    <section >
      <div className='text-black text-center md:my-24 my-12  z-10'>
          <h1 className='md:text-6xl text-4xl md:mb-8 mb-3 md:font-bold'>Donate</h1>
            <p className='px-3'>Donating helps save lives, uplifts communities, and fosters a better future for all. Your contribution matters. <br className='hidden md:block'/>
        Your generous contribution empowers us to continue our vital work, touching countless lives with hope and opportunity.
            </p>
      </div>

      <div className='md:h-[100vh] h-[60vh] w-full' id='image-container'>
        <div id='img-sub-container' className='w-full h-full grayscale-100'>
        <div className='absolute z-10 text-center py-3 px-3 donate-div bg-white text-black rounded-lg shadow-md sm:mr-3' style={{opacity:".7"}}>
          <h3 className='md:text-2xl text-base md:font-bold font-semibold md:mb-4 mb-2'>Give where the need is greatest</h3>
          <p className='md:text-base text-sm md:mb-4 mb-4'>Your donation makes a big impact! It helps provide education, healthcare, and relief to those less fortunate. Your kindness sparks positive change and brings smiles to faces in need.</p>
          <button className='text-white bg-black md:px-16 md:mb-10 mb-4 px-8 py-2' >DONATE</button>
        </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default DonateNow