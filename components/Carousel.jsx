import React from 'react'

const Carousel = () => {
  return (
    
<div id="default-carousel" className="relative w-full mb-40" data-carousel="static">



    
    <div className="relative overflow-hidden md:h-96" style={{minHeight:'90vh'}}>
    
        <div className="hidden ease-in-out duration-1000" data-carousel-item>
            <div className='text-white text-6xl absolute font-bold z-10 '>
                Donate for a child
            </div>
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className=" grayscale-[100%] absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="..." />
        </div>
  
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
            <img src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

" className="grayscale-[100%] absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />

        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
            <img src="https://images.unsplash.com/photo-1496813146940-1601b02f81a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1449&q=80
" className="grayscale-[100%] absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      
        <div className="hidden ease-in-out duration-1000 " data-carousel-item>
            <img src="https://images.unsplash.com/photo-1441307811206-a12c74889338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="grayscale-[100%] absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>

  </div>


  )
}

export default Carousel