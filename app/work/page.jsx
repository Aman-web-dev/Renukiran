import React from 'react'
// import Carousel from '@/components/Carousel'
import EventCards from '@/components/eventCards'
import Background from '@/public/assets/background.svg'

function page() {

  const divStyle = {
    'backgroundImage': `${Background}`,
    'backgroundSize': 'cover', // You can adjust these properties as needed
    'backgroundRepeat': 'no-repeat',
    'width': '100vw',
    'height':'' // Set the desired height
  };



  return (
    <div className='text-black m-auto ' style={divStyle}>
      <div style={divStyle}>

        <h1 className='flex font-serif text-6xl font-bold align-center justify-center my-4'>Gallery</h1>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
              </div>

            </div>
          </div>
        </div>
      </div>

<div className='w-[90vw] m-auto text-center text-xl font-serif  align-center justify-center my-4'>
<h1 className='flex font-serif text-6xl font-bold align-center justify-center my-4'>Vision</h1>

<p>Renukiran Welfare Foundation, located in Delhi, India, is a remarkable NGO that goes beyond education. In addition to providing basic education to underprivileged children and supporting small schools through collaborations with big firms, they are also dedicated to empowering houseworking women. This organization offers valuable skills like stitching and basic training to these women, enabling them to gain independence and contribute to their households. Through their multifaceted approach, Renukiran Welfare Foundation continues to make a meaningful impact on the lives of people in slums, uneducated women, and disadvantaged children, fostering education, skill development, and self-sufficiency within the community.</p>
</div>

<div className='flex flex-col w-[90vw] m-auto'>
<h1 className='flex font-serif text-6xl font-bold align-center justify-center my-4'>Events</h1>

<div className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 m-auto'>
<EventCards/>
<EventCards/>
<EventCards/>
<EventCards/>
<EventCards/>
<EventCards/>

</div>

</div>

    </div>
  )
}

export default page
