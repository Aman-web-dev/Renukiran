'use client'

import React, { useEffect, useState } from 'react'
import './contact.css'
import Link from 'next/link'
import { copyText } from '../utils/copyFunction'

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [buttonText, setButtonText] = useState("Send Message")
  const [buttonState, setButtonState] = useState(false)

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
      <section className="bg-white dark:bg-gray-900" >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Renukiran Welfare Foundation</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a Reason To Contact Renukiran Welfare Foundation please fill this Form and Let us Know Your Idea, Suggestion, FeedBack etc.</p>
          <form action="#" className="space-y-8" onSubmit={handleFormSubmit} >

            <div>
              <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Joe XYZ.." required onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className=''>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <select className='border border-grey-300 bg-gray-50 rounded-lg' name="Subject" onChange={(e) => setSubject(e.target.value)} value={subject}>
                <option value="">Subject</option>
                <option value="suggestion">Suggestion</option>
                <option value="feedback">FeedBack</option>
                <option value="professional">Professional</option>
                <option value="help"></option>

              </select>
            </div>


            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>


            <button type="submit" className="focus:outline-none text-white bg-[#205893]   focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" disblaed={buttonState} >{buttonText}</button>

          </form>


        </div>
      </section>

      <div>
  <div className='md:flex block justify-center bg-[#F3F2F3] py-20 gap-8'>

    <div className='h-[250px] max-h-[300px] shadow-md p-8 w-full max-w-[300px] relative border border-gray-200 flex items-center justify-center'>
  <svg
    onClick={(e) => copyText("phone", e)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#2e5893"
    className="absolute w-8 h-8 right-5 cursor-pointer top-5"
  >
    <path fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0 1 14.75 19h-9.5A2.25 2.25 0 0 1 3 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 0 1 9 1h2c1.373 0 2.531.923 2.887 2.182ZM7.5 4A1.5 1.5 0 0 1 9 2.5h2A1.5 1.5 0 0 1 12.5 4v.5h-5V4Z" clipRule="evenodd" />
  </svg>
  <div className='w-full flex flex-col items-center justify-between h-full'>
    <div className='flex-1 w-full flex justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2e5893" className="w-16 mb-8">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>
    </div>
    <div className='flex-1 w-full flex justify-center items-center flex-col'>
      <h3 className='truncate header-text-400 text-black text-lg'>Phone</h3>
      <span id='phone' className='truncate sub-text-400'>+91 9625881835</span>
    </div>
  </div>
</div>

    <div className='h-[250px] max-h-[300px] shadow-md p-8 w-full max-w-[300px] relative border border-gray-200 flex items-center justify-center'>
  <svg
    onClick={(e) => copyText("email", e)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#2e5893"
    className="absolute w-8 h-8 right-5 cursor-pointer top-5"
  >
    <path fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0 1 14.75 19h-9.5A2.25 2.25 0 0 1 3 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 0 1 9 1h2c1.373 0 2.531.923 2.887 2.182ZM7.5 4A1.5 1.5 0 0 1 9 2.5h2A1.5 1.5 0 0 1 12.5 4v.5h-5V4Z" clipRule="evenodd" />
  </svg>
  <div className='w-full flex flex-col items-center justify-between h-full'>
    <div className='flex-1 w-full flex justify-center items-center'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#205893"
        className="w-16 mb-8"
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    </div>
    <div className='flex-1 w-full flex justify-center items-center flex-col'>
      <h3 className='truncate header-text-400 text-black text-lg'>Email</h3>
      <span id='email' className='truncate sub-text-400'>info@renukiran.org</span>
    </div>
  </div>
</div>


    <Link href='https://maps.app.goo.gl/X9uNp1FJREzWwsxF8' target='_blank'>
  <div className='shadow-md p-8 w-full max-w-[300px] relative border border-gray-200 flex items-center justify-center h-[250px] max-h-[300px]'>
    <svg
      onClick={(e) => copyText("address", e)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#2e5893"
      className="absolute w-8 h-8 right-5 cursor-pointer top-5"
    >
      <path fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0 1 14.75 19h-9.5A2.25 2.25 0 0 1 3 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 0 1 9 1h2c1.373 0 2.531.923 2.887 2.182ZM7.5 4A1.5 1.5 0 0 1 9 2.5h2A1.5 1.5 0 0 1 12.5 4v.5h-5V4Z" clipRule="evenodd" />
    </svg>
    <div className='w-full flex flex-col items-center justify-between h-full'>
      <div className='flex-1 w-full flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#205893" className="w-16 mb-8">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className='flex-1 w-full flex justify-center items-center flex-col'>
        <h3 className='truncate header-text-400 text-black text-lg'>Address</h3>
        <span id='address' className='text-center sub-text-400 w-full'>
          B-122, Upper Ground Floor, Gali Number 13, Amritpuri, Garhi, New Delhi, Delhi 110065
        </span>
      </div>
    </div>
  </div>
</Link>


  </div>
</div>
    </>
  )
}

export default ContactUs
{/* <h2 className='truncate header-text-400 text-black text-lg'>Head Office</h2>
        <p className='line-clamp-2 sub-text-400'>282, Basement, Sant Nagar, East OF Kailash, New Delhi-110065</p> */}