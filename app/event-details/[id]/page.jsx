'use client'
import eventData from '@/eventData';
import Image from 'next/image';

const EventDetails = ({params}) => {
  const event = eventData.filter((data) => data.id == params.id);
  const pageData = event[0];

  return (
    <section className='w-full h-auto my-16 px-8'>
        <div className='md:w-[45vw] md:h-[55vh] h-[56.25vw] w-[85vw] mx-auto mb-12' style={{position:'relative'}}>
            <Image loading='lazy' src={pageData.src} fill='true' alt={pageData.title} quality={55} decoding='async' />
        </div>

        <div className='mb-4'>
          <div className='text-center'><h1 className='md:text-3xl text-black font-bold mb-6'>{pageData.title}</h1></div>
          <h3 className=' text-black'><span className='md:text-xl font-extrabold'>Introduction:</span> {pageData.Introduction}</h3>
        </div>

        <hr className='mb-4'/>

        <div className='text-black mb-4'>
        <h3><span className='font-extrabold md:text-xl'>Objectives:</span> {pageData.Objectives.map((obj) => {
            return <li>{obj}</li>
          })}</h3>
        </div>

        <div>
          {pageData.Activites.map((activity) => {
            return <div className='text-black my-8'>
              <h2 className='md:text-xl font-extrabold'>{activity.title}</h2>
              <h2>
                {activity.pointArr.map((points) => {
                  return <li>{points}</li>
                })}
              </h2>
            </div>
          })}
        </div>
        <hr/>
        <div>
          {pageData.Impact.map((impact) => {
            return <div className='text-black my-4'>
              <h2 className='md:text-xl font-extrabold'>{impact.title}</h2>
              <h2>
                {impact.pointArr.map((points) => {
                  return <li>{points}</li>
                })}
              </h2>
            </div>
          })}
        </div>
        <hr/>

        <div className='my-4'>
          <h2 className='md:text-xl font-extrabold text-black mt-4'>Feedback:</h2> 
          {pageData.Feedback.map((feedback) => {
            return <div>
              <li className='text-black'>
                {feedback}
              </li>
            </div>
          })}
        </div>

        <hr/>

        <div className='mt-4'>
          <h2 className='md:text-xl font-extrabold text-black'>Conclusion:</h2>
          <h4 className='text-black'>{pageData.Conclusion}</h4> 
        </div>

    </section>
  )
}

export default EventDetails