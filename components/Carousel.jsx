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
            <Image src="/assets/carousel-images/carouselbg_l3ol6o_c_scale,w_1280.webp" fill sizes="(max-width: 1280px) 100vw, 1280px"
                srcset="
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_200.webp 200w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_430.webp 430w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_619.webp 619w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_759.webp 759w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_857.webp 857w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_1004.webp 1004w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_1152.webp 1152w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_1238.webp 1238w,
                            /assets/carousel-images/carouselbg_l3ol6o_c_scale,w_1280.webp 1280w"
                            priority={true} className="absolute grayscale-[100%] block object-cover" alt="child education image"/>
        </div>
  
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Women <br/>Empowerment</h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image sizes="(max-width: 1400px) 100vw, 1400px"
                srcset="
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_200.webp 200w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_447.webp 447w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_623.webp 623w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_749.webp 749w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_910.webp 910w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_1065.webp 1065w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_1237.webp 1237w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_1381.webp 1381w,
                /assets/carousel-images/carousel2Bg_hyinot_c_scale,w_1400.webp 1400w"
            src="/assets/carousel-images/carousel2Bg_hyinot_c_scale,w_1400.webp" fill priority={true} className="absolute grayscale-[100%] block object-cover" alt="Women empowerment image" />

        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Donate <br/>for a <br/>welfare</h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image sizes="(max-width: 1152px) 100vw, 1152px"
srcset="
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_200.webp 200w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_431.webp 431w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_592.webp 592w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_741.webp 741w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_800.webp 800w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_910.webp 910w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_1030.webp 1030w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_1133.webp 1133w,
/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_1152.webp 1152w"
src="/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_1152.webp" fill
 priority={true} className="absolute bottom-0 grayscale-[100%] block object-cover" alt="3" />
        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
        <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                <h1 className='md:absolute hidden md:block'>Health <br/>Campaign <br/></h1>
                <Button href='/donate' className='donation-button' variant="contained" style={{padding: '10px 30px'}}>Donate now</Button>
            </div>
            <Image sizes="(max-width: 1280px) 100vw, 1280px"
                    srcset="
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_200.webp 200w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_438.webp 438w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_652.webp 652w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_786.webp 786w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_866.webp 866w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_988.webp 988w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_1139.webp 1139w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_1250.webp 1250w,
                                /assets/carousel-images/carousel4Bg_nclumo_c_scale,w_1280.webp 1280w"
                    src="/assets/carousel-images/carousel4Bg_nclumo_c_scale,w_1280.webp" fill priority={true} className="absolute bottom-0 grayscale-[100%] block object-cover" alt="4" />
        </div>
    </div>

    

  </div>


  )
}

export default Carousel