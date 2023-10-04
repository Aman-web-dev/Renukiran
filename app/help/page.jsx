import React from 'react'
import './donatePage.css'

const DonateNow = () => {
  return (
    <>
     <section className='w-full md:h-[90vh]'>
  <div className='first-image-container'>
    <div className='text-container absolute z-20 md:ml-40 ml-6'>
        <h2 className='uppercase text-white md:font-extrabold md:text-4xl'>Donate for the betterment<br/> of the society</h2>
        <p className='text-slate-400 md:text-sm text-xs'>Donations can provide access to education, healthcare,< br className='md:hidden block'/> and basic necessities, empowering <br className='hidden md:block'/>individuals to break<br className='md:hidden block'/> the cycle of poverty and build a brighter future.</p>
        <button className='uppercase md:py-3 md:px-8 py-1 px-4 mt-4 text-white hover:bg-[#223752] bg-[#2e5893]'>Donate</button>
    </div>
    <img src="https://pixabay.com/get/g5f338a717ef36cfe684707f21832ea57e0abe43d92c8f35d967dbc7bc38f9329b3589aa7cee8510b566780a342ef210a.jpg" alt="image" className='w-full' />
    
  </div>
</section>

    <section className='bg-[#2e5893]'>
      <div className='text-white text-center md:my-24 my-12  z-10'>
          <h1 className='md:text-6xl text-4xl md:mb-8 mb-3 md:font-bold'>Donate</h1>
            <p className='px-3 text-slate-400'>Donating helps save lives, uplifts communities, and fosters a better future for all. Your contribution matters. <br className='hidden md:block'/>
        Your generous contribution empowers us to continue our vital work, touching countless lives with hope and opportunity.
            </p>
      </div>

      <div className='md:h-[100vh] h-[60vh] w-full' id='image-container'>
        <div id='img-sub-container' className='w-full h-full grayscale-100'>
        <div className='absolute z-10 text-center py-3 px-3 donate-div bg-white text-black rounded-lg shadow-md sm:mr-3' style={{opacity:".7"}}>
          <h3 className='md:text-2xl text-base md:font-bold font-semibold md:mb-4 mb-2'>Give where the need is greatest</h3>
          <p className='md:text-base text-sm md:mb-4 mb-4 text-slate-500'>Your donation makes a big impact! It helps provide education, healthcare, and relief to those less fortunate. Your kindness sparks positive change and brings smiles to faces in need.</p>
          <button className='text-white bg-black md:px-16 md:mb-10 mb-4 px-8 py-2' >DONATE</button>
        </div>
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default DonateNow