import React from 'react'
import Image from 'next/image'
import linkedinlogo from '../public/assets/icons/linkedin.svg'
import about from '../public/assets/icons/about.svg'
import './component.css'



function teamCards({name,designation,pic,desc,linkedin}) {
  return (
    <section className="bg-white dark:bg-gray-900  lg:w-[20vw] w-[70vw] mx-auto h-[80vh] lg:h-[60vh] shadow-md my-8">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 about-team">
     
      <div>
          
          <div className="text-center text-gray-500 dark:text-gray-400">
            
              <img loading='lazy' className="mx-auto mb-4 w-36 h-36 rounded-full" src={pic} alt="Neil Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="">{name}</a>
              </h3>
              <p className='text-sm'>{designation}</p>
              <ul className="flex justify-center items-center mt-4 space-x-4">
              <li> 
                      <a href={linkedin} target='_blank' className='cursor'>
                          <Image src={linkedinlogo} width={20} height={50} alt='LinkedInLogo'/>
                      </a>
                  </li>

                  <li>
                    <div>
                      <div id='about' className='cursor-pointer'>
                          <Image src={about} width={25} height={50} alt="about"/>
                          <div className='description'>{desc}</div>
                      </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>  
  </div>
</section>
  )
}

export default teamCards

