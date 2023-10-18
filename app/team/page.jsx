'use client'

import React, { useEffect } from 'react'
import TeamCards from '@/components/teamCards'

function Team() {


  useEffect(() => {

    document.title = "Renukiran-Team"


  }, [])
  return (

    <section className="flex flex-col items-center w-[90vw] m-auto ">

      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Our Resilient<span className='text-blue-700' >  Renukiran Team</span> </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Renukiran Welfare Foundation values its employees, nourishing their internal strength and treating them with respect by actively listening to their ideas and offering support in every way.</p>


      <div className="flex flex-wrap gap-4 w-[90vw] m-auto ">
        <TeamCards name={"Kankana"} designation={"MANAGER - Fundraising & Corporate Social Responsibility"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/kanakanaProfile.png"} />
        <TeamCards name={"Raj Kushwaha"} designation={"Project Coordinator"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/rajProfile.png"} />
        <TeamCards name={"Bibhav Kumar"} designation={"Executive – Corporate Social Responsibility"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/bibhavProfile.png"} />
        <TeamCards name={"Shrey Gupta"} designation={"Executive Administration & Billings"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/shreyProfile.png"} />
        <TeamCards name={"Sandhya Kumari"} designation={"Trainer – Skill Development"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/sandhyaProfile.png"} />
        <TeamCards name={"Deepak"} designation={"Project Co-ordinator"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/DeeepakProfile.png"} />
        <TeamCards name={"Akshita Chabra"} designation={"Teacher & Event Coordination"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/WhatsApp%20Image%202023-10-16%20at%2022.25.40.jpeg"} />
        <TeamCards name={"Aman Kumar"} designation={"Web - Developer & Event Volunteer"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/man-avatar-image-for-profile-png%20(1).png"} />
        <TeamCards name={"Rajnikant"} designation={"Web - Developer & Event Volunteer"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/man-avatar-image-for-profile-png%20(1).png"} />

      </div>
    </section>

  )
}

export default Team
