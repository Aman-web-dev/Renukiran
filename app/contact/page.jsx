'use client'

import React from 'react'
import './contact.css'
import Image from 'next/image'
import callingIcon from '../../public/assets/icons/calling.svg'
import emailIcon from '../../public/assets/icons/email.svg'
import addressIcon from '../../public/assets/icons/address.svg'

const ContactUs = () => {


  function makeCall() {
    // Replace '1234567890' with the phone number you want to call
    window.location.href = 'tel:9625881835';
  }
  return (
    <>
    <section className='about-section'>
      <div className='contactSlider'>
        <div>
          <div id='contactSliderDiv'>
            <div id='firstImageContainer' className='main-image'>
              <div id='contact-page-overlay'>
                <div id='contact-now-text'>
                  <h1 className='ip'>CONTACT NOW</h1>
                  <hr/>
                  <p>Contact renukiran now or later as you like <br/>but don't contact other NGOs</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
    <section>
      <div className='contact-page-main-content md:flex block justify-center md:my-24 my-14 md:gap-20 md:mx-6' >
        <div  className='md:text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4' onClick={makeCall}><Image src={callingIcon} width={50} height={50} alt='call' /> <h2>Phone</h2> <p>+91 9625881835</p></div>
        <a href="mailto:renukiran@info.org">
        <div  className='md:text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={emailIcon} width={50} height={50} alt='email' /> <h2>Email</h2> <p>renukiran@info.org</p></div>

        </a>
        <div className='md:text-center flex flex-col items-center md:border md:border-solid border-black md:py-8 md:px-12 rounded-lg md:mx-0 mx-4 py-4 my-4'><Image src={addressIcon} width={50} height={50} alt='address' /> <h2>Address</h2> <p>temporary location</p></div>
      </div>
    </section>
    </>
  )
}

export default ContactUs