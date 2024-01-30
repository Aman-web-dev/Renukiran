'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import dannutsavLogo from '../../public/assets/images/dann-utsav.png'


function Circle(url) {

  useEffect(() => {

    document.title = "Renukiran-Daanutsav "


  }, [])


  return (
    <div className='h-[14vw] w-[14vw] m-auto  bg-blue-300 rounded-full'

      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        height: "",
        backgroundSize: "cover",
        width: "",
        backgroundPosition: "center",

      }}

    >
      .
    </div>

  )
}

function Pages() {
  return (
    <div className='flex flex-col w-[100vw]  ' style={{
      backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fwatercolour-4761786.jpg?alt=media&token=eb62becc-28ad-4799-8068-ffdf3edb4dd8&_gl=1*bvl7w2*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ4NTg2MC4xOS4xLjE2OTY0ODcxMjUuMjQuMC4w')`,
      backgroundRepeat: "no-repeat",
      height: "",
      backgroundSize: "cover",
      width: "100vw",
      backgroundPosition: "center",

    }}>

      <Image height={25} width={90} className='absolute h-20 w-25  right-2 ' src={dannutsavLogo} alt='daanUtsavLogo' ></Image>

      <section className='w-[80vw] m-auto text-xl my-4 '>

        <h1 className='text-6xl font-bold text-orange-400' style={{
          fontFamily: "Lucida Handwriting",
          color: ""

        }}>Daan Utsav...</h1>

        <h1 className='text-2xl font-bold text- mx-5 text-' style={{
          fontFamily: "Lucida Handwriting",
          color: ""

        }}>Celebrate The Festival Of Giving</h1>

        <p className='text-xl text-black bg-orange-100 border-4 rounded my-3 border-dotted border-l-0 p-2 border-orange-400 font-serif backdrop-blur-lg bg-opacity-50'>Celebrated every year from October 2 to 8, #DaanUtsav is India’s biggest festival of giving during which people come together and perform acts of kindness by giving their time, material or money in interesting ways to any cause(s) of their choice.</p>


      </section>

      <div className=' flex  flex-col w-full items-center justify-center'>


        <h1 className='w-[80vw]  text-xl text-black bg-orange-100 border-4 rounded  border-dotted border-r-0 p-2 border-black font-serif backdrop-blur-lg bg-opacity-50'>

          <h1 className='text-blue-800 text-5xl' id='title '>ABOUT THE FESTIVAL</h1>

          <p>#DaanUtsav (earlier called the Joy of Giving Week) is India’s ‘festival of giving’. Launched in 2009, the festival is celebrated every year – commencing on Gandhi Jayanti – from October 2 to 8.</p>

          <br></br>

          <p>From auto rickshaw drivers to CEOs, school children to celebrities, homemakers to opinion leaders and media personnel, millions of people from all walks of life come together during this week to give their time, money, resources, or skills back to society. They do this by creating or participating in events of their choice.</p>

          <br></br>
          <p>A giving event could be as simple as a family taking out their maid’s children for an ice cream party, or as large as a ‘Gift Compassion’. The latter is an event that has over 10,000 schoolchildren across India making and exchanging gifts with their peers from different socio-economic backgrounds every year.</p>

          <br></br>
          <p>In 2016, millions of people participated in more than 1,500 events across 200 cities across the country by raising several tens of crores in money and material donations and by giving countless volunteer hours.</p>
        </h1>



        <h1 className='w-[80vw] my-10 text-xl text-black bg-orange-100 border-4 rounded  border-dotted border-l-0 p-2 border-orange-400 font-serif backdrop-blur-lg bg-opacity-50'>

          <h1 className='text-blue-800 text-4xl' id='title '>HOW WAS #DAANUTSAV CONCEIVED?</h1>

          <p>Several people around the world have, time and again, come together on the idea of giving back to society. It is impossible to attribute ownership to anyone for these, or likewise for #DaanUtsav!</p>
          <br></br>

          <p>Between November 2008 and February 2009, several individuals and NGO leaders got together and decided to launch an ‘India Giving Week’. Riverside School in Gujarat came up with a ‘Design for Change’ contest. Goonj, an NGO based in Delhi, launched the ‘Vastrasamman Campaign’. Toofles, a cause-agnostic fundraising platform, organised a ‘Style for Smiles CEO Ramp Walk’. In Chennai, a Battle of the Buffet was run. These were just some of the events; there were many more organised in the year.</p>

          <br></br>

          <p>The advertising agency, EuroRSCG India created the ‘Joy of Giving Week’ brand identity in March 2009. Between 2009 and 2013, as the festival grew in scale and reached all socio-economic strata and geographies of India, it became apparent that the festival needed a name that was easily understood by people across the length and breadth of the country. Thus, in February 2014, volunteers renamed the festival ‘#DaanUtsav’, based on feedback received from several people living in various parts of India.</p>
        </h1>

        <a href="https://rzp.io/l/renukiran">
        <button  className="my-5 w-[60vw] h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Provide a Donation</button>
        </a>
      </div>

      <div className='flex flex-row gap-2 w-[80vw] m-auto flex-wrap my-2'>
        {Circle("https://images.unsplash.com/photo-1542818426-ee51fdb348d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80")}
        {Circle("https://images.unsplash.com/photo-1441307811206-a12c74889338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")}
        {Circle("https://images.unsplash.com/photo-1567001766755-3a3775614445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")}
        {Circle("https://images.unsplash.com/photo-1607921352305-333fec381a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2147&q=80")}
        {Circle("https://images.unsplash.com/photo-1590312626710-857f2c32d888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80")}

      </div>



    </div>
  );
}

export default Pages;
