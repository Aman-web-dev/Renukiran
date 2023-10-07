import React from 'react'

function events() {
  return (
    <div>
      <section>
    <div className=" text-black py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-blue-700 uppercase tracking-loose">Calendar</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Calendars And Important Dates</p>
        <p className="text-sm md:text-base text-black mb-4">
        Stay informed and be part of something bigger. Explore our calendar of important dates, where you'll discover the upcoming events and campaigns that will shape our journey towards positive change
        </p>
        <a href="#"
        className="bg-transparent mr-auto hover:bg-blue-700 text-blue-700 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-700 hover:border-transparent">
        Explore Now</a> 
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-blue-555 absolute h-full border"
              style={{right: "50%", border : "2px solid blue", borderRadius : "1%"}} ></div>
            <div className="border-2-2 border-blue-555 absolute h-full border"
              style={{left: "50%", border: "2px solid blue", borderRadius: "1%"}}></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-blue-700">1-6 May, 2021</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Event</h4>
                <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nulla quidem, debitis reiciendis voluptas quia voluptate a molestias sunt adipisci?
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-blue-700">6-9 May, 2021</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Event 1</h4>
                <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident architecto sequi eum saepe voluptatem, ducimus obcaecati culpa corporis praesentium.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-blue-700"> 10 May, 2021</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Event 2</h4>
                <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum distinctio aut fuga quia. Quod ipsam esse eum blanditiis eveniet?
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-blue-700">12 May, 2021</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Event 3</h4>
                <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptas voluptates eius magni maiores minima iusto nulla. Recusandae, maiores aliquam?
                </p>
              </div>
            </div>
          </div>
          <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default events
