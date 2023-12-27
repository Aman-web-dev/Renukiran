import React from 'react'

function SDGCards(props) {
  return (

       <div className='relative bg-red-500 min-w-[20vw]   sm:w-[50vw] md:w-[15vw] w-[80vw]  min-h-[60vh] m-auto'>
        <div className={`absolute w-[70%] h-[40%]   left-0 bottom-0 z-10 m-2`}>

        <img src={props.pictureSRC} className='w-[100%] h-[100%] '/>
          {props.smallLogo}
        </div>

        <div className={`absolute top-0 bottom-0 w-full h-full ${props.bgColor} z-8 px-4 py-2`}>
         <div className='fllex flex-col'>
          <p className='text-4xl font-bold'>{props.SDGNumber}</p>
          <p className='font-bold text-white text-2xl'>{props.SDGTitle}</p>
          <p className='text-white my-1 border-b-2 pb-4'>{props.SDGText}</p>
         </div>
        </div>
          
           <div className='absolute w-full h-full top-0 bottom-0 z-9 hoverable'>
          <img
            src={props.secondImage}
            className='w-full h-full object-cover'
            alt="business meeting"
          />
        </div> 
      </div>

  )
}

export default SDGCards
