import React from 'react'
import './component.css'
import Button from '@mui/material/Button';
import Image from 'next/image';

const Carousel = () => {
  return (
    
<div id="default-carousel" className="relative w-full mb-24" data-carousel="slide">



    
    <div className="relative overflow-hidden md:h-[90vh] h-[50vh]">
    
        <div className="hidden ease-in-out duration-1000" style={{width:'100%', height:'100%', position:'relative'}} data-carousel-item>
            <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Child <br/>Education</h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fcarouselbg.jpg?alt=media&token=f0040218-34a8-4996-a92e-d94cec29569f&_gl=1*10kkjh0*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk4NTAuNi4wLjA."} fill priority={true} className="absolute grayscale-[100%] block object-cover" alt="1" />
        </div>
  
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Women <br/>Empowerment</h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fcarousel2Bg.jpg?alt=media&token=3dc95b45-f521-43a1-9bed-546b76898566&_gl=1*140n880*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk4OTQuNjAuMC4w" fill priority={true} className="absolute grayscale-[100%] block object-cover" alt="2" />

        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>for a <br/>welfare</h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fcarousel3Bg.jpg?alt=media&token=332abf59-e101-4e16-88d7-3b299c4e3d7a&_gl=1*1buj431*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk5MzUuMTkuMC4w
" fill priority={true} className="absolute bottom-0 grayscale-[100%] block object-cover" alt="3" />
        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Health <br/>Campaign <br/></h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fcarousel4Bg.jpg?alt=media&token=22ac80a3-a264-4dad-8f4d-77fffa529470&_gl=1*1nw853d*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ5OTM1Ny4yMC4xLjE2OTY0OTk5NTIuMi4wLjA." fill priority={true} className="absolute bottom-0 grayscale-[100%] block object-cover" alt="4" />
        </div>
    </div>

  </div>


  )
}

export default Carousel