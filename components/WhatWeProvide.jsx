import React from 'react';
import Image from 'next/image';

const WhatWeProvide = () => {
  return (
    <section className='overflow-hidden md:flex block w-full m-auto gap-20 justify-center py-7 text-black md:space-y-0 space-y-10 mx-12 my-24 max-w-[1300px] flex-wrap'>
    
      <a className="cursor item" href='/programs#education'>
        <div className="circle">
          <div className=' border-r-8 rounded-full border-blue-600' style={{ width: '170px', height: '170px' }}>
            <Image quality={20} loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FANXB4051.JPG?alt=media&token=a341ea6d-247c-4a40-b4be-649159e5f7ef&_gl=1*gwxrl1*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODU5Ni4yMS4wLjA."} alt="child education" height={170} width={170} className='w-full h-full object-cover rounded-full ' />
          </div>
        </div>
        <h2 className='uppercase'>Quality education <br/> for all</h2>
      </a>

      <a className="item cursor" href='/programs#skill'>
        <div className="circle">
          <div className=' border-r-8 rounded-full border-blue-600' style={{ width: '170px', height: '170px' }}>
            <Image quality={20} loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FLYAV0887.JPG?alt=media&token=b3d14a53-9e19-4cde-84dd-a95c269df43e&_gl=1*ebkn70*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODQ1Ni40OC4wLjA."} alt="women empowerment" height={170} width={170} className='w-full h-full object-cover rounded-full' />
          </div>
        </div>
        <h2 className='uppercase'>Skiling of communities & <br/>livelihood - generation</h2>
      </a>

      <a className='cursor item' href='/programs#women-empowerment'>
        <div className="circle">
          <div className=' border-r-8 rounded-full border-blue-600' style={{ width: '170px', height: '170px' }}>
            <Image quality={20} loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fwomen-empowerment.JPG?alt=media&token=6fa15536-b797-4ae0-9501-b535c3a5cb37&_gl=1*1kvhhxz*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NzAxODEyNi4yNS4xLjE2OTcwMTgzMzguNjAuMC4w"} alt="Health Campaign" height={170} width={170} className='w-full h-full object-cover rounded-full ' />
          </div>
        </div>
        <h2 className='uppercase'>women<br/> empowerment</h2>
      </a>


      <a href='/programs#foodandhygine' className="item cursor">
        <div className="circle">
          <div className=' border-r-8 rounded-full border-blue-600' style={{ width: '170px', height: '170px' }}>
            <Image quality={20} loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FHCBL8132.JPG?alt=media&token=3d5c8c3c-3d22-4812-9f6c-ed4a18d43f25&_gl=1*1y50vbc*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODU1Ny42MC4wLjA."} alt="Health Campaign" height={170} width={170} className='w-full h-full object-cover rounded-full ' />
          </div>
        </div>
        <h2 className='uppercase'>Nutritive food, <br/> health & hygiene</h2>
      </a>
    </section>
  );
}

export default WhatWeProvide;

