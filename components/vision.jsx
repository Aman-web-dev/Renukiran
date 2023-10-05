import React from 'react'

function vision() {
  return (
    <div className='w-[90vw]  border-2 border-black rounded-lg p-2  m-auto text-center text-xl font-serif  align-center justify-center my-4'
     style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(225, 237, 236, 0.31), rgba(46, 88, 247, 0.35)), url("https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '80vh',
        width: '',
        backgroundAttachment:'fixed',
      }}>
  

      <div className='xl:w-[50%] w-[100%]'>

      <h1 className='flex font-serif text-6xl text-white font-bold align-center justify-center my-4'>Vision</h1>
      
      <p className='text-white'>Renukiran Welfare Foundation, located in Delhi, India, is a remarkable NGO that goes beyond education. In addition to providing basic education to underprivileged children and supporting small schools through collaborations with big firms, they are also dedicated to empowering houseworking women. This organization offers valuable skills like stitching and basic training to these women, enabling them to gain independence and contribute to their households. Through their multifaceted approach, Renukiran Welfare Foundation continues to make a meaningful impact on the lives of people in slums, uneducated women, and disadvantaged children, fostering education, skill development, and self-sufficiency within the community.</p>
      </div>
      </div>
  )
}

export default vision
