import React from 'react'
import Image from 'next/image'

const LastSection = () => {
  return (
    <section className='w-full md:h-[100vh] h-[50vh]'>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div className='hidden md:block first-letter:md:text-white md:bg-[#2e5893]/91' id='last-section'>
          <h4 className='md:absolute hidden md:block z-10 header-text-400 text-white'>Renukiran empower communities <br /> for a brighter<br /> future.</h4>
        </div>
        <Image
          alt='Kids picture'
          sizes="(max-width: 1400px) 100vw, 1400px"
          loading='lazy'
          src="/assets/carousel-images/last-element_l0ylrd_c_scale,w_1400.webp"
          fill
          className='grayscale-100 object-cover'
        />
      </div>
    </section>
  )
}

export default LastSection