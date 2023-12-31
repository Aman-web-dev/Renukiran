import React from 'react'
import './component.css'
import Button from '@mui/material/Button';
import Image from 'next/image';


const Carousel = () => {
    return (

        <div id="default-carousel" className="relative w-full mb-24" data-carousel="slide">

            <div className="relative overflow-hidden md:h-[95vh] h-[50vh]">

                <div className="hidden ease-in-out duration-1000" style={{ width: '100%', height: '100%', position: 'relative' }} data-carousel-item priority>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Child <br />Education</h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} src="/assets/carousel-images/carouselbg_l3ol6o_c_scale,w_1280.webp" fill sizes="(max-width: 1280px) 100vw, 1280px"
                 className="absolute grayscale-[100%] block object-cover" alt="child education image" priority/>


                 hii
                </div>

                <div className="hidden ease-in-out duration-1000 " data-carousel-item>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Women <br />Empowerment</h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} sizes="(max-width: 1400px) 100vw, 1400px"
                        src="/assets/carousel-images/carousel2Bg_hyinot_c_scale,w_1400.webp" fill  className="absolute grayscale-[100%] block object-cover" alt="Women empowerment image"  priority/>


                        <div className='h-screen w-screen bg-black'>

                        </div>

                </div>

                <div className="hidden ease-in-out duration-1000 " data-carousel-item>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Donate <br />for a <br />welfare</h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} sizes="(max-width: 1152px) 100vw, 1152px"
                        className="absolute grayscale-[100%] block object-cover"
                        src="/assets/carousel-images/carousel3Bg_dsqnuh_c_scale,w_1152.webp" fill  priority/>
                </div>

                <div className="hidden ease-in-out duration-1000 " data-carousel-item>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Health <br />Campaign <br /></h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} sizes="(max-width: 1280px) 100vw, 1280px"
                        src="/assets/carousel-images/carousel4Bg_nclumo_c_scale,w_1280.webp" fill  className="absolute bottom-0 grayscale-[100%] block object-cover" alt="4" priority/>
                </div>

            </div>

        </div>

    )
}

export default Carousel