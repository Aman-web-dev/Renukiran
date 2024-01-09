import React from 'react'
import companyLogo from './companylogodata'
import Image from 'next/image'

const CompanysLogo = () => {
  return (
    <section className="bg-white w-full">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 text-center">
      
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Allies</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Long-Standing Collaborations: Companies Partnered with Renukiran Welfare Foundation Since Inception</p>


        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
            {companyLogo.map((logo) => {
                return <div className='flex w-auto h-auto items-center justify-center'><Image quality={30} loading='lazy' src={logo.icon}  width={100} height={100} alt='company logo'  /></div>
            })}
        </div>
    </div>
</section>
  )
}

export default CompanysLogo