import React from 'react'

function payment() {
  return (

    <div className='relative  bg-blue-300 h-[90vh] w-[100vw] m-auto '
    style={{
      backgroundImage:
        'linear-gradient(180deg, rgba(225, 237, 236, 0.31), rgba(46, 88, 247, 0.35)), url("https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FimageForDonation.png?alt=media&token=c76391fa-3ae4-4e37-9595-1ecfda50c827&_gl=1*1dolo8q*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQxNTE2Ni4xOC4xLjE2OTY0MTkyMTMuNjAuMC4w")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '',
      width: '',
      backgroundAttachment:'fixed'
    }}
    >

    <div id='qr-container' className='rounded-xl absolute bg-white  top-[20%] w-[25vw]   my-auto m-4'><img className='h-[100%] w-[100%]' src='https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Fqr-enhanced.png?alt=media&token=c0f15acf-fe40-4548-b8a0-6f67f4c363e3&_gl=1*17pbcc4*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NjQxNTE2Ni4xOC4xLjE2OTY0MTk1MTAuNDMuMC4w'></img></div>

    </div>
  )
}


export default payment