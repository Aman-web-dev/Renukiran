import React from 'react'
import Image from 'next/image'
import linkedinlogo from '../public/assets/icons/linkedin.svg'
import about from '../public/assets/icons/about.svg'
import './component.css'

function teamCards({name,designation,pic,desc,linkedin}) {
  return (
    <section class="bg-white dark:bg-gray-900  lg:w-[20vw] w-[70vw] mx-auto h-[50vh] lg:h-[60vh] shadow-md my-8">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 about-team">
     
      <div>
          
          <div class="text-center text-gray-500 dark:text-gray-400">
            
              <img loading='lazy' class="mx-auto mb-4 w-36 h-36 rounded-full" src={pic} alt="Neil Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="">{name}</a>
              </h3>
              <p className='text-sm'>{designation}</p>
              <ul class="flex justify-center items-center mt-4 space-x-4">
              <li> 
                      <a href={linkedin} target='_blank'>
                          <Image src={linkedinlogo} width={20} height={50}/>
                      </a>
                  </li>

                  <li>
                    <div>
                      <div id='about'>
                          <Image src={about} width={25} height={50} />
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

