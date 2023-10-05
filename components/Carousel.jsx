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
                <h1 className='md:absolute hidden md:block'>Donate <br/>for a <br/>child</h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src={"https://drive.google.com/uc?export=view&id=1OYIximpNn0y0ogzlFoHRCtZ-UlI2Znby"} layout='fill' fill priority={true} className="absolute grayscale-[100%] block object-cover" alt="1" />
        </div>
  
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate for <br/>Empowerment</h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src="https://drive.google.com/uc?export=view&id=1jwLuB2C3tDnoEVoltg_eKbpy7D9zLphE

" layout='fill' fill priority={true} className="absolute grayscale-[100%] block object-cover" alt="2" />

        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>for a <br/>welfare</h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src="https://drive.google.com/uc?export=view&id=12975LG7kaB3CR3XCm2f2K8XJk_Z6z3Ow
" layout='fill' fill priority={true} className="absolute bottom-0 grayscale-[100%] block object-cover" alt="3" />
        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>us <br/></h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image src="https://drive.google.com/uc?export=view&id=1oAUw4mxx2VzspGOok1AHHo-O6r9jhP4t" layout='fill' fill priority={true} className="absolute bottom-0 grayscale-[100%] block object-cover" alt="4" />
        </div>
    </div>

  </div>


  )
}

export default Carousel