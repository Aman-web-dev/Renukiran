'use client'

import React,{useEffect} from 'react'
import Image from 'next/image'

function Founders() {


      useEffect(()=>{

            document.title = "Renukiran-Founders"
          
          
          },[])
  return (
    <div className='flex flex-col items-center my-4 p-2 text-center'>
      <h1 className="flex items-center text-5xl text-blue-900 font-extrabold dark:text-blue-800 my-4">Founders<span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">RWF</span></h1>

      
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Learn About <span className="text-blue-600 dark:text-blue-500">Our Change Makers</span></h1>


<h3 className="text-3xl font-bold   text-blue-900 dark:text-black">Avinash Kumar<span> (Founder & Director)</span></h3>

      <div className='flex flex-col justify-center text-center text-lg my-4 p-2 md:mx-52 sm:mx-12 mx-0 text-black'>
      <div className='flex justify-center flex-col'>
            <div className='my-4'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Favinash_sir_pfp.JPG?alt=media&token=9b443e2b-0b7b-4e87-a2f6-21272ccc8278&_gl=1*1amastk*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NzAxODEyNi4yNS4xLjE2OTcwMTk1MTEuMjYuMC4w' loading='lazy' className='rounded-xl w-full'/>
            </div>
            <div>
      Avinash Kumar, the Founder & Director of Renukiran Welfare Foundation hails from the Jharkhand, commonly known as the ‘Land of Forests’. 
He holds over 11 years of professional work experience with Civil Society Organizations and MNCs based in India. With his ingrained leadership, communication and attention to detailed managerial skills he started the journey of Renukiran. Today, he is successfully driving the organization's vision ahead. Apart from looking all operations, Mr. Avinash directly handle multiple verticals of our work, like accounts department & volunteer body. He is a compassionate soul, who believe in exploring ideas through creativity and new ways towards helping more & more underprivileged children in transforming their lives by bringing collective efforts.</div>
<p className="text-base font-normal my-4 text-center text-gray-500 dark:text-gray-400">"Every day, I walk this path, running an NGO that my mother dreamt of. Her vision is my guiding light, and her love is the fuel that keeps me going. In her honor, we strive to make the world a better place, one act of kindness at a time." <span>~ Avinash Kumar</span></p>
 </div>



      </div>



<h3 className="text-3xl font-bold  text-blue-900 dark:text-black">Pooja Gupta<span> (Co-Founder & Director)</span></h3>
<div className='my-4 w-[80vw]'>
                  <img src='https://renukiran.b-cdn.net/backgroundImages/Driector.JPG' loading='lazy' className='rounded-xl w-full'/>
            </div>

<div className='flex flex-col items-center text-lg  p-2 text-center w-[80vw] text-black'>
Pooja Gupta, the Co-Founder and Director of Renukiran is born and brought up in the state of Uttar Pradesh, Agra. 
She holds work experience of above 11 years and currently associated with a reputed MNC in Bangalore, Karnataka as a Senior Analyst in Portuguese Language. She is a diploma holder in PGDHRM (Post graduation diploma in Human Resource Management) from Symbiosis Centre of Distance Learning (SCDL) in Pune. At Renukiran Welfare Foundation Pooja is actively involved in managing volunteer’s engagement with team & organizing events towards empowering women. She is involved in operational activities involving Data management.
</div>

    </div>
  )
}

export default Founders
