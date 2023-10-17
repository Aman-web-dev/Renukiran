'use client'

import EventCards from '@/components/eventCards'
import MiniCarousel from '@/components/miniCarousel';
import Vision from '@/components/vision';
import Collage from '@/components/collage';
import { useEffect } from 'react'

function work() {


  useEffect(()=>{

    document.title = "Renukiran-Work"
  
  
  },[])

  const divStyle = {
    'backgroundImage': `url(https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80)`,
    'backgroundSize': 'cover', 
    'backgroundRepeat': 'no-repeat',
    'width': '100vw',
    'height':'',
    'background-attachment': 'fixed'
  };

  return (
    <div className='text-black m-auto ' style={divStyle}>
      <div style={divStyle}>
        <div className='flex w-[80vw] m-auto flex-col font-serif text-6xl font-bold align-center justify-center my-4'>
        
        
<h1 className="mb-4 text-4xl m-auto font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xl dark:text-white">We Protect What Could Be </h1>
<p className="mb-6 text-center text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Our NGO passionately works for child education, women's empowerment, and community cleanliness—dedicated to holistic societal welfare</p>
<a href="#" className="inline-flex w-[80vw] m-auto xl:w-[20vw] md:w-[20vw] items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

        
        
        </div>
       <div className='w-[90vw] m-auto'>
        <Collage/>
       </div>
      </div>

<Vision/>

{/* events */}

<div id="events" className='flex flex-col w-[90vw] m-auto'>

<h1 className="mb-4 text-4xl xl:w-[60vw] w-[60vw] md:w-[70vw] sm:w-[90vw] m-auto font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-blue-600  dark:text-blue-500">the world's #1</span> CRM.</h1>
<p className="text-lg xl:w-[80vw] my-4 md:w-[60vw] w-[90vw]  text-center m-auto font-normal text-black lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

<div className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 m-auto'>
<EventCards/>
<EventCards/>
<EventCards/>
<EventCards/>
<EventCards/>
<EventCards/>
</div>
</div>



    </div>
  )
}

export default work
