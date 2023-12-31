import React from 'react';
import Image from 'next/image';
import daanUtsav from '../public/assets/images/dann-utsav.webp'

function Campaign() {
  return (
    <div
      className="relative bg-gradient-to-t from-transparent to-green-500 w-full"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(225, 237, 236, 0.31), rgba(46, 88, 247, 0.35)), url("https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/assests%2Fimage_DaanUtsavBg%20(1).webp?alt=media&token=6289ce94-1200-45a2-95c6-e18414fd5440&_gl=1*1vsw0xy*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5NzQ0NTk2MS43LjEuMTY5NzQ0NjAwOC4xMy4wLjA.")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '',
        backgroundAttachment: 'fixed'
      }}
    >
      <Image height={80} width={98} className='absolute top-2 right-2 ' loading='lazy' src={daanUtsav} alt='daanUtsavLogo' />
      <div className='xl:w-[40vw] w-[90vw] m-3 flex flex-col items-center justify-center'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl drop-shadow-xl"><span className="text-yellow-400"><span className='text-green-400'>Give</span>  a Little </span><p className='text-yellow-400'><span className='text-green-400'>Change</span> a Lot</p></h1>
        <p className="xl:text-lg  text-lg p-2 font-bold text-white lg:text-xl dark:text-gray-400 text-center text-wrap">Generosity is the key to unlocking the doors of compassion and kindness. Your donation, no matter how big or small, can create ripples of positive change that touch countless lives. Join us in making a difference today.</p>

        <a href="/daanutsav" className="self-auto  my-5 relative inline-flex items-center justify-center p-4 px-7 py-5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-2xl font-bold">Donate</span>
        </a>
      </div>
    </div>
  );
}

export default Campaign;
