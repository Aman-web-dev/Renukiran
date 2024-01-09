import React from 'react'

import AnnouncementCards from '../../components/AnnouncementCards'


function page() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-gray-700 to-green-900 '>


      <div className='flex flex-col text-center my-4'>


        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Announcements</h1>
        <p class="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Stay Updated with Renukiran Annoucements and keep track of the Latest </p>
 

      </div>





      <div className='flex  flex-wrap justify-center'>
        <AnnouncementCards />
        <AnnouncementCards />
        <AnnouncementCards />
        <AnnouncementCards />
        <AnnouncementCards />
        <AnnouncementCards />
        <AnnouncementCards />
        <AnnouncementCards />


      </div>

    </div>
  )
}

export default page
