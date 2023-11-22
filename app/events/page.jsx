'use client'

import React,{useEffect} from 'react'
import eventData from '@/eventData'
import Link from 'next/link'

function events() {
  useEffect(()=>{

    document.title = "Renukiran-Events"
  },[])

  return (
    <section className='w-full flex-wrap flex items-center justify-center my-auto px-6 md:px-4 gap-12 py-8'>
      {eventData.map(data => {
        return <>
          <div key={data.id}
  className="flex flex-col rounded-lg bg-white shadow-md md:max-w-md md:flex-row ">
    <div className=''>
      <img
        loading='lazy'
        className="md:max-w-[16rem] h-80 w-full object-cover md:h-72"
        src={data.src}
        alt="" />
    </div>
  <div className="relative flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
        {data.title.length > 40 ? (data.title.slice(0, 40)) + '...' : data.title}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {data.Introduction.length > 50  ? (data.Introduction.slice(0 , 50) + '...')  : data.Introduction}
    </p>
    <p className="text-xs text-neutral-500 dark:text-neutral-300">
      {data.Date}
    </p>

    <p className="text-xs text-neutral-500 dark:text-neutral-300">
      {data.Location}
    </p>

    <Link href={`/event-details/${data.id}`} className='bg-[#205893] md:absolute mt-4 bottom-10 px-2 text-white w-28'>View Details</Link>

  </div>
</div>
        </>
      })}
      
    </section> 
  )
}

export default events
