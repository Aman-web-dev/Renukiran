'use client'

import React, { useEffect } from 'react'
import TeamCards from '@/components/teamCards'

function Team() {


  useEffect(() => {

    document.title = "Renukiran-Team"


  }, [])
  return (

    <section className="flex flex-col items-center w-[90vw] m-auto text-center">

      <h1 class="my-4 font-extrabold leading-none tracking-tight text-gray-900 text-3xl md:text-5xl lg:text-6xl dark:text-white">Our Resilient <span className='text-[#205893]' >Renukiran Team</span> </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Renukiran Welfare Foundation values its employees, nourishing their internal strength and treating them with respect by actively listening to their ideas and offering support in every way.</p>


      <div className="flex flex-wrap gap-4 w-[90vw] m-auto ">
  



{/* 
        <TeamCards linkedin={"https://www.linkedin.com/in/kankana-b4b00712a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} name={"Kankana"} designation={"MANAGER - Corporate Social Responsibility & Fundraising"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FkanakanaProfile.webp?alt=media&token=0d78598b-c8f5-4504-a8b5-c7f39eace2ad&_gl=1*1g160ha*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5Nzc3NS42MC4wLjA."} desc={"Kankana is a Public Policy Specialist and Philanthropist. Born and brought up in in a Bengali family in the city of KOLKATA, She has completed and earned Bachelors’ degree in Political Science Hons. from Delhi University (DU), 1st  Masters’ degree in Sociology with specilization in IT Law & Public Health from Ambedkar University Delhi (AUD). Recently she has completed her 2nd Masters’ degree in Public Policy with specialisation in European Public Policy & Circular Economy Entrepreneurship from Willy Brandt School of Public Policy under UNIVERSITAT ERFURT based in Germany. Her enriched experience of above 5 years is involves learning and practicing varying elements of Bilateral sponsored projects into National and International projects, at various capacities. She has worked with institutions and companies like German parliamentEY, JICA, GIZ, Aspen Institute Berlin, Transparency International, FXB India Suraksha, GAIN, MoWCD-Govt. of India, NHRC, MoHFW India, Ministry of IT-Govt. of India. With her enriched experience in 16 states of India at Panchayati Raj Level among the communities, and in European countries she joined Renukiran as for CSR & BD, Designing Projects, look into Project Monitoring & Implementation."} /> */}

        <TeamCards name={"Raj Kushwaha"} designation={"Project Coordinator"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FrajProfile.webp?alt=media&token=465f3063-e5b5-4d7f-848f-141debdb1165&_gl=1*tw5xvh*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzY0OC41My4wLjA."} desc={"I'm Raj, pursuing B. A Hons in French from Delhi University, who is engage in the pursuit of knowledge & Skills to enhance my journey as a student, researcher, educator and coordination of events/ Campaigner. I'm volunteering with Renukiran Welfare Foundation for to be a  activator for positive change towards social causes. I believe in, channeling my skills and knowledge insight into practical Solutions."}/>

        <TeamCards name={"Deepak"} linkedin={"https://www.linkedin.com/in/deepak-1688b8287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} designation={"Project Coordinator"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FDeeepakProfile.webp?alt=media&token=303a89b0-fa34-4ec1-9fbc-bbac6788737f&_gl=1*29wi69*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzY4Mi4xOS4wLjA."} desc={"I am Deepak, I am passionate about the finance, Accounting and  Entrepreneurship. I am pursuing Bcom Specialization in Business Process Management from Delhi Skill and Entrepreneurship University. I have completed Diploma in E-Accounting with GST.A dedicated volunteer at the Renukiran Welfare Foundation. My role extends beyond volunteering, as I am also a Event Coordinator.With a wealth of experience, I 've had the privilege of organizing successful events in collaboration with organizations like Renukiran Welfare Foundation, HDFC ERGO etc.I have been a part of several events like School Transformation, Book Donation Drive, Food Donation Drive, Bird Feeder, Science Mesuem and BOOK of Joy. Together, we're making a positive impact on our community and beyond."} />

        <TeamCards name={"Bibhav Kumar"}  linkedin={"https://www.linkedin.com/in/bibhav-kumar-b539b5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}  designation={"Executive – Corporate Social Responsibility"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FbibhavProfile.webp?alt=media&token=e108abd1-ba0b-491f-9bef-c9aca2cdf1b8&_gl=1*rh6zb3*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5Nzc0NS4zMC4wLjA."} desc={"Bibhav is from Delhi. He has completed his bachelors degree from Delhi University in B.A. Programme. He has specialised in Portuguese Language course. He is engaged with Renukiran Welfare Foundation as a CSR Executive, contributing towards effective coordination and implementation of projects, writing blogs, assist in end-to end event coordination, etc."}/>


        <TeamCards name={"Shrey Gupta"} linkedin={"https://www.linkedin.com/in/shrey-kumar-655763296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} designation={"Executive Administration & Billings"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FshreyProfile.webp?alt=media&token=2f1985c0-5f51-4c1b-b1fa-42ae9ab6a269&_gl=1*t8xrr5*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzgzNy42MC4wLjA."} desc={"My name is Shrey. I am born and brought up in Delhi. At present, I’m pursuing bachelors degree in B.A. Programme from Delhi University. With Renukiran I am engaged and responsible for administrative tasks.I have been part of several Event so far Performed by Renukiran Welfare Foundation such as School Transformation,Science Museum and Book of Joy."}/>

        <TeamCards name={"Sandhya Kumari"} designation={"Trainer – Skill Development"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FsandhyaProfile.webp?alt=media&token=cc6c8c91-6923-44d0-9398-35364200e3ff&_gl=1*o8n2bm*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzgwMy4zMi4wLjA."} desc={"I am Sandhya. I am from Delhi. Currently, I am pursuing my bachelors degree in  B.A. Programme from Delhi University. Besides my academic journey, I am working as Skill Trainer with Renukiran Welfare Foundation, in the Women Empowerment Program. Here I provide vocational skills classes in Stitching and, tailoring. At Renukiran, since my joining I’ve participated in several CSR events organized by the organization. This events included- School Transformation, Science Museum Visit, and Book of Joy."}/>

  
        <TeamCards name={"Akshita Chabra"} designation={"Teacher & Event Coordination"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FAkshita.webp?alt=media&token=12e8a185-413b-4cf1-9558-fc5e681addc0&_gl=1*bykhx1*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5ODA0OS40Ni4wLjA."} desc={"My Name is Akshita Chhabra. I have been a part of this NGO from the past 4 years. I have done events for students in school , in the slum area teach them how to speak and to grow in their life. Plan the activity for them done fun activities, mind games , ques give gifts done events on Diwali, x-mas , Independence day many more. I am glad to be a part of Renukiran Foundation. I love to spend time with kids and help them in their life."} />

        <TeamCards linkedin={"http://www.linkedin.com/in/aman-kumar-41a335203"} name={"Aman Kumar"} designation={"Web - Developer & Event Volunteer"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Faman.jpg.webp?alt=media&token=a96ad33b-f1f6-4747-9b4f-570d0f74bd99&_gl=1*1168dh8*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzcxNS42MC4wLjA."} desc={" I'm Aman, a web developer based in Delhi, India. Currently, I'm in my second year at Maharishi Dayanand University, where I'm diving deep into the world of web development. I'm also gaining hands-on experience as a web developer during my internship at Renukiran Welfare Foundation. I'm not just into coding; I'm all about teamwork and collaboration. I believe that great things happen when people work together and share their ideas. Learning and sharing knowledge with others is something I'm passionate about. When I'm not coding, you'll find me exploring the vibrant city of Delhi and enjoying life's adventures."}/>

        <TeamCards name={"Rajnikant"} designation={"Web  Developer & Event Volunteer"} pic={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Frajni%20about.webp?alt=media&token=47d543d2-61d4-42fb-ad03-dde3aa37c458&_gl=1*8m215w*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5ODEwMC42MC4wLjA."} desc={"I'm Rajnikant, your web developer hailing from the bustling streets of Delhi, India. I'm currently in my second year at Maharishi Dayanand University, passionately immersing myself in the world of web development. In parallel, I'm fueling my skills as a web developer during my internship at Renukiran Welfare Foundation. Much like the legendary Rajnikant's invincible presence, I bring unwavering dedication to every project I undertake. I believe in the power of teamwork and the magic of collaboration. Sharing knowledge and working collectively are values I hold dear."} />

      </div>
    </section>

  )
}

export default Team
