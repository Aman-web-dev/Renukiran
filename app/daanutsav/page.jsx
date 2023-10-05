import React from 'react';

function Pages() {
  return (
    <div className='w-[100vw] h-[150vh] ' style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fwatercolour-4761786.jpg?alt=media&token=eb62becc-28ad-4799-8068-ffdf3edb4dd8&_gl=1*bvl7w2*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQ4NTg2MC4xOS4xLjE2OTY0ODcxMjUuMjQuMC4w')`,
        backgroundRepeat: "no-repeat",
            height:"",
            backgroundSize: "cover",
            width:"100vw",
            backgroundPosition:"center"
    }}>

<img className='absolute h-20 w-25  right-2 ' src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fdaan-utsav-logo.png?alt=media&token=ffa9f8c3-84e6-42f6-94d4-88a355bc4f0e&_gl=1*bs69f9*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQwODM0Ni4xNy4xLjE2OTY0MDg0NTUuNDQuMC4w" alt='daanUtsavLogo' ></img>




<section className='w-[80vw] m-auto text-xl my-4 '>

  <h1 className='text-6xl font-bold text-orange-400' style={{
    fontFamily:"Lucida Handwriting",
    color: ""

  }}>Daan Utsav...</h1>

<h1 className='text-2xl font-bold text- mx-5' style={{
    fontFamily:"Lucida Handwriting",
    color: ""

  }}>Celebrate The Festival Of Giving</h1>

      <p className='text-xl border-4 rounded my-3 border-dotted border-l-0 p-2 border-orange-400 font-serif'>Celebrated every year from October 2 to 8, #DaanUtsav is India’s biggest festival of giving during which people come together and perform acts of kindness by giving their time, material or money in interesting ways to any cause(s) of their choice.</p>


</section>     

<div className='relative flex  w-full items-center justify-center'>

<button className="absolute  text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
  Large
</button>


</div>
    </div>
  );
}

export default Pages;
