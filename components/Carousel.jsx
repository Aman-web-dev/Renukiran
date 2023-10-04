import React from 'react'
import './component.css'
import Button from '@mui/material/Button';
import Carousel1 from '../public/assets/images/carousel-1.JPG'

const Carousel = () => {
  return (
    
<div id="default-carousel" className="relative w-full mb-24" data-carousel="slide">



    
    <div className="relative overflow-hidden md:h-[90vh] h-[50vh]">
    
        <div className="hidden ease-in-out duration-1000" data-carousel-item>
            <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>for a <br/>child</h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1OYIximpNn0y0ogzlFoHRCtZ-UlI2Znby" className=" grayscale-[100%] absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="..." />
        </div>
  
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>for Women <br/>Empowerment</h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1jwLuB2C3tDnoEVoltg_eKbpy7D9zLphE

" className="grayscale-[100%] absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />

        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>for a <br/>welfare</h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=12975LG7kaB3CR3XCm2f2K8XJk_Z6z3Ow
" className="grayscale-[100%] absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>us <br/></h1>
                <Button className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1oAUw4mxx2VzspGOok1AHHo-O6r9jhP4t" className="grayscale-[100%] absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>

  </div>


  )
}

export default Carousel