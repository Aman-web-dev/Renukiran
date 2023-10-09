import React from 'react'

function vision() {
  return (
    <div className='w-[90vw]  border-2  rounded-lg p-2  m-auto text-center text-xl font-serif  align-center justify-center my-4'
     style={{
        backgroundImage:
          ' url("https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        minHeight: '80vh',
        width: '',
        backgroundAttachment:'fixed',
      }}>
  

  <div className='flex w-[80vw] m-auto flex-col font-serif text-6xl font-bold align-center justify-center my-4'>
        
        
        <h1 className="mb-4 text-4xl m-auto font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xl dark:text-blue-300"><span  className='text-green-400'>We will achieve</span> What Could Be </h1>
        <p className="mb-6 w-[90%] m-auto text-center text-xl backdrop-filter backdrop-blur-sm bg-opacity-50 font-bold  text-black-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">Our NGO passionately works for child education, women's empowerment, and community cleanliness—dedicated to holistic societal welfare</p>
        <a href="#" className="inline-flex w-[80vw] m-auto xl:w-[20vw] md:w-[20vw] items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Learn more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        
                
                
                </div>
        
      </div>
  )
}

export default vision
