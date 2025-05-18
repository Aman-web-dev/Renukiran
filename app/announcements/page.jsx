import React from 'react'

import AnnouncementCards from '../../components/AnnouncementCards'


function page() {
  return (
    <div className=' '>


      <div className='flex flex-col text-center my-4 text-black'>


        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">Announcements</h1>
        <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 ">Stay Updated with Renukiran Annoucements and keep track of the Latest </p>
 

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
