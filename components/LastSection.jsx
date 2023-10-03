import React from 'react'
import lastSectionImage from '../public/assets/images/last-section-img.avif'
import Image from 'next/image'

const LastSection = () => {
  return (
    <section  className='w-full md:h-[100vh] h-[50vh] my-24'>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
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