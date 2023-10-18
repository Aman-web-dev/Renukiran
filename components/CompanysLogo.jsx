import React from 'react'
import companyLogo from './companylogodata'
import Image from 'next/image'

const CompanysLogo = () => {
  return (
    <section class="bg-white w-full">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">Our Partners</h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
            {companyLogo.map((logo) => {
                return <div className='flex w-auto h-auto items-center justify-center'><Image quality={30} loading='lazy' src={logo.icon}  width={100} height={100} alt='company logo'  /></div>
            })}
        </div>
    </div>
</section>
  )
}

export default CompanysLogo