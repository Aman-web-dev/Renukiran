'use client'

import React, { Fragment, useEffect,useState } from 'react'
import './contact.css'
import Image from 'next/image'
import callingIcon from '../../public/assets/icons/calling.svg'
import emailIcon from '../../public/assets/icons/email.svg'
import addressIcon from '../../public/assets/icons/address.svg'

const ContactUs = () => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [buttonText,setButtonText] =useState("Send Message")
  const [buttonState,setButtonState] =useState(false)



  useEffect(() => {
    document.title = "Renukiran-Contact"
  }, [])





  const handleFormSubmit = async (e) => {
    setButtonState(true);
    setButtonText("Sending")

    e.preventDefault();

    const contactDetails = { name, email, subject, message, date };

    console.log(contactDetails)

    const response = await fetch('https://renukiran-server.onrender.com/api/contact', {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })


    if (!response.ok) {
      const result = await response.json();
      console.log(result)
    }


    if (response.ok) {
      const result = await response.json();
      console.log("Contact made Successfully")
      setDate("");
      setEmail('')
      setMessage("")
      setName("")
      setSubject("")
      setButtonState(false);
      setButtonText("Send Message")
      console.log(result)
    }
  }


  function makeCall() {
    window.location.href = 'tel:9625881835';
  }
  return (
    <>
      {/* <section className='w-full md:h-[90vh] h-[50vh]'>
        <div id='realtive w-[100%] h-[100%] overflow-hidden first-image-container'>
          <div className='text-container absolute z-20 md:ml-40 ml-6'>
            <h2 className='uppercase text-white md:font-extrabold md:text-4xl'>Contact Now</h2>
            <p className='text-slate-400 md:text-sm text-xs'>You can contact us at info@renukiran.org or connect with us on Linkedin. <br />We're always open for new opportunities and collaborations.< br className='md:hidden block' /> and basic necessities, empowering <br className='hidden md:block' />individuals to break<br className='md:hidden block' /> the cycle of poverty and build a brighter future.</p>
            <button onClick={makeCall} className='uppercase md:py-3 md:px-8 py-1 px-4 mt-4 text-white hover:bg-[#223752] bg-[#2e5893]'>Call now</button>
          </div>
          <div id='gradient-overlay' className='text-black text-4xl'>
      
    </div>
          <Image alt='contact-now' src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FcontactPageBg.jpg?alt=media&token=1048a4d3-2ebb-4091-a119-eb3730f2117b&_gl=1*1bea39e*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk2NzUuNjAuMC4w" fill objectFit='cover' loading='lazy' className='w-full' id='img' />

          <div className='h-[50vh] bg-gray-300'>hi</div>

        </div>
      </section> */}










      <section className="bg-white dark:bg-gray-900" >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Renukiran Welfare Foundation</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a Reason To Contact Renukiran Welfare Foundation please fill this Form and Let us Know Your Idea, Suggestion, FeedBack etc.</p>
          <form action="#" className="space-y-8" onSubmit={handleFormSubmit} >

            <div>
              <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Joe XYZ.." required onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>

            <div className=''>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <select className='border border-grey-300 bg-gray-50 rounded-lg' name="Subject" onChange={(e)=>setSubject(e.target.value)} value={subject}>
                <option value="">Subject</option>
                <option value="suggestion">Suggestion</option>
                <option value="feedback">FeedBack</option>
                <option value="professional">Professional</option>
                <option value="help"></option>

              </select>
            </div>


            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
            </div>


            <button type="submit" className="focus:outline-none text-white bg-[#205893]   focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" disblaed={buttonState} >{buttonText}</button>

          </form>


        </div>
      </section>





      <section>
        <div className='contact-page-main-content md:flex block justify-center md:my-24 my-14 md:gap-20 md:mx-6'>
          <div onClick={makeCall} className='cursor-pointer text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={callingIcon} width={50} height={50} alt='call' /> <h2>Phone</h2> <p>+91 9625881835</p></div>
          <div className='cursor-pointer text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={emailIcon} width={50} height={50} alt='email' /> <h2>Email</h2> <p>info@renukiran.org</p></div>

          <a href='https://maps.app.goo.gl/X9uNp1FJREzWwsxF8' target='_blank'>
            <div className='cursor-pointer text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={addressIcon} width={50} height={50} alt='address' /> <h2>Address</h2> <p className='text-wrap'>B-122, Upper Ground Floor, Gali Number 13, <br />Amritpuri, Garhi, New Delhi, Delhi 110065</p></div>
          </a>
        </div>
      </section>
    </>
  )
}

export default ContactUs