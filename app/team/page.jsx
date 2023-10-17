import React from 'react'
import TeamCards from '@/components/teamCards'

function Team() {
  return (

  <section className="w-[90vw] mx-auto overflow-hidden">
    <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-2 block md:px-0 px-5"> 
    <TeamCards name={"Raj Kushwaha"} designation={"Project Coordinator"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/rajProfile.png"}/>
      <TeamCards name={"Bibhav Kumar"} designation={"Executive – Corporate Social Responsibility"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/bibhavProfile.png"}/>
      <TeamCards name={"Shrey Gupta"} designation={"Executive Administration & Billings"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/shreyProfile.png"}/>
      <TeamCards name={"Kankana"} designation={"MANAGER - Fundraising & Corporate Social Responsibility"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/kanakanaProfile.png"}/>
      <TeamCards name={"Sandhya"} designation={"Trainer – Skill Development"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/sandhyaProfile.png"}/>
      <TeamCards name={"Deepak"} designation={"Project Co-ordinator"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/DeeepakProfile.png"}/>
      <TeamCards name={"Akshita Chabra"} designation={"Teacher & Event Coordination"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/168291-woman-vector-png-download-free.png"}/>
      <TeamCards name={"Aman Kumar"} designation={"Web - Developer & Event Volunteer"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/man-avatar-image-for-profile-png%20(1).png"}/>
      <TeamCards name={"Rajnikant"} designation={"Web - Developer & Event Volunteer"} pic={"https://renukiran.b-cdn.net/employeesRenukiran/man-avatar-image-for-profile-png%20(1).png"}/>
    
          </div>
  </section>

  )
}

export default Team
