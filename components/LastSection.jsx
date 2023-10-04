import React from 'react'
import lastSectionImage from '../public/assets/images/last-element.jpg'
import Image from 'next/image'

const LastSection = () => {
  return (
    <section className='w-full md:h-[100vh] h-[50vh] my-24'>
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div className='hidden md:block first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 z-20' id='last-section'>
          <h4 className='md:absolute hidden md:block z-10'>Renukiran empower communities <br /> for a brighter<br/> future.</h4>
        </div>
            <Image
                alt='Kids picture'
                src={lastSectionImage}
                layout='fill'
                objectFit='cover'
                className='grayscale-100'
            />
</div>
    </section>
  )
}

export default LastSection