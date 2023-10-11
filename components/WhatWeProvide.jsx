import React from 'react';
import Image from 'next/image';

const WhatWeProvide = () => {
  return (
    <section className='overflow-hidden md:flex block w-full m-auto gap-20 justify-center py-7 text-black md:space-y-0 space-y-10 mx-12 my-24 max-w-[1300px] flex-wrap'>
    
      <div className="item">
        <div className="circle">
          <a href='/programs#education' className='cursor'>
          <div style={{ width: '170px', height: '170px' }}>
            <Image loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FANXB4051.JPG?alt=media&token=a341ea6d-247c-4a40-b4be-649159e5f7ef&_gl=1*gwxrl1*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODU5Ni4yMS4wLjA."} alt="child education" height={170} width={170} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
          </a>
        </div>
        <h2 className='uppercase'>Quality education <br/> for all</h2>
      </div>

      <div className="item">
        <div className="circle">
          <a className='cursor' href='/programs#skill'>
          <div style={{ width: '170px', height: '170px' }}>
            <Image loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FLYAV0887.JPG?alt=media&token=b3d14a53-9e19-4cde-84dd-a95c269df43e&_gl=1*ebkn70*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODQ1Ni40OC4wLjA."} alt="women empowerment" height={170} width={170} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
          </a>
        </div>
        <h2 className='uppercase'>Skiling of communities & <br/>livelihood - generation</h2>
      </div>

      <div className="item">
        <div className="circle">
          <a className='cursor' href='/programs#women-empowerment'> 
          <div style={{ width: '170px', height: '170px' }}>
            <Image loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FHCBL8132.JPG?alt=media&token=3d5c8c3c-3d22-4812-9f6c-ed4a18d43f25&_gl=1*1y50vbc*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODU1Ny42MC4wLjA."} alt="Health Campaign" height={170} width={170} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
          </a>
        </div>
        <h2 className='uppercase'>women<br/> empowerment</h2>
      </div>


      <div className="item">
        <div className="circle">
          <a className='cursor' href='/programs#foodhygiene'>
          <div style={{ width: '170px', height: '170px' }}>
            <Image loading='lazy' src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FHCBL8132.JPG?alt=media&token=3d5c8c3c-3d22-4812-9f6c-ed4a18d43f25&_gl=1*1y50vbc*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NjU3NzkzMS4xLjEuMTY5NjU3ODU1Ny42MC4wLjA."} alt="Health Campaign" height={170} width={170} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
          </a>
        </div>
        <h2 className='uppercase'>Nutritive food, <br/> health & hygiene</h2>
      </div>
    </section>
  );
}

export default WhatWeProvide;

