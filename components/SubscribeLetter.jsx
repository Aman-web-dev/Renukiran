import React from 'react'

const SubscribeLetter = () => {
  return (
    <div className="bg-[#EFEFEF] w-full screen-padding relative">
      <div className='flex justify-between'>
        <div>
          <h3 className="text-black text-lg font-bold mb-2">
            Join Our Community! Get the latest news on our projects,
            <br />
            stories, and impact.
          </h3>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="input text-black bg-white focus:outline-none focus:ring-0 w-full max-w-xs rounded-none"
            />
            <input
              type="text"
              placeholder="Eamil address*"
              className="input text-black bg-white focus:outline-none focus:ring-0 w-full max-w-xs rounded-none"
            />
            <button className="btn renukiran-bg-green-color text-white border-0 rounded-none self-start">
              Subscribe
            </button>
          </div>
        </div>
        <div className='absolute top-0 right-0 bottom-0'>
          <img src="/assets/images/subscribe-pic.png" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
    </div>
  );
}

export default SubscribeLetter