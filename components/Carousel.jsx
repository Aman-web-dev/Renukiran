"use client"
import React, { useEffect } from 'react'
import './component.css'
import Button from '@mui/material/Button';
import Image from 'next/image';


const Carousel = () => {
    useEffect(() => {
        console.log("carousel mounting...")
    })
    return (

        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative overflow-hidden md:h-[95vh] h-[50vh]">
                <div className="hidden ease-in-out duration-1000" style={{ width: '100%', height: '100%', position: 'relative' }} data-carousel-item priority>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Child <br />Education</h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fcarouselbg_l3ol6o_c_scale%2Cw_1280.webp?alt=media&token=17c037b0-cf18-40c2-9feb-2d04216337ca" fill sizes="(max-width: 1280px) 100vw, 1280px"
                 className="absolute grayscale-[100%] block object-cover" alt="child education image" priority/>
                </div>

                <div className="hidden ease-in-out duration-1000 " data-carousel-item>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Women <br />Empowerment</h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} sizes="(max-width: 1400px) 100vw, 1400px"
                        src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fcarousel2Bg_hyinot_c_scale%2Cw_1400.webp?alt=media&token=bcd3b242-2711-447f-b4a1-ff1c533724d8" fill  className="absolute grayscale-[100%] block object-cover" alt="Women empowerment image"  priority/>


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
                        src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fcarousel3Bg_dsqnuh_c_scale%2Cw_1152.webp?alt=media&token=01230571-0ee7-4bab-b746-09ef6d5e9303" fill  priority/>
                </div>

                <div className="hidden ease-in-out duration-1000 " data-carousel-item>
                    <div className=' first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20'>
                        <h1 className='md:absolute hidden md:block'>Health <br />Campaign <br /></h1>
                        <Button href='/donate' className='donation-button' variant="contained" style={{ padding: '10px 30px' }}>Donate now</Button>
                    </div>
                    <Image quality={70} sizes="(max-width: 1280px) 100vw, 1280px"
                        src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fcarousel4Bg_nclumo_c_scale%2Cw_1280.webp?alt=media&token=3d4308e7-8e2a-4903-a4a8-d171f95d36dc" fill  className="absolute bottom-0 grayscale-[100%] block object-cover" alt="4" priority/>
                </div>

            </div>

        </div>

    )
}

export default Carousel