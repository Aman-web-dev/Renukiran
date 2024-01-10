import React from 'react'

function page() {
  return (

    <div className='bg-gradient-to-t from-green-500 py-8'>


      <div className='text-center my-2 '>

        <h1 className="mb-4 text-4xl font-sans font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Help us in <span className="text-blue-600 dark:text-blue-500">0 Hunger</span> Mission.</h1>
        <p className="text-lg font-bold text-black lg:text-xl dark:text-black"> <span className='bg-blue-600 font-bold text-white p-1 rounded-xg'>Join the Fight Against Hunger:</span> Renukiran Welfare Foundation Launches '0 Hunger' Program, Urgently Seeking Your Support through Donations</p>

      </div>




      <div className='flex md:flex-row flex-col'>


        <div id='rightSection' className='flex flex-col sm:w-[70vw] w-[90vw] my-4 rounded-xl align-center jutify-center py-4 lg:w-[40vw] md:m-auto bg-transparent m-auto' >



          <div className="w-[100%] relative flex flex-col text-black bg-transparent shadow-none rounded-xl bg-clip-border my-auto justify-center align-center  px-4  my-2  backdrop-blur-xl border-4 ">


            <h4 className="block font-sans text-4xl font-extrabold antialiased  leading-snug tracking-normal text-black">
              DONATE IN KIND
            </h4>
            <p className="block mt-1 font-sans text-base antialiased font-bold leading-relaxed text-black">
              Thankyou For Donating Your Valuables
            </p>
            <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
              <div className="flex flex-col gap-6 mb-1">
                <h6
                  className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Your Name
                </h6>
                <div className="relative h-11 w-full min-w-[200px] mx-auto">
                  <input for="name" id="name" placeholder="John Doe"
                    className="peer bg-white h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                  <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>



                <h6
                  className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Your Address
                </h6>
                <textarea id="Address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <h6
                  className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Donation List
                </h6>
                <textarea id="DonationList" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Books,Clothes,shoes..."></textarea>




                <h6
                  className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Your Email
                </h6>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input placeholder="name@mail.com"
                    className="peer bg-white h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                  <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <h6
                  className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Phone Number
                </h6>



                <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </div>
                  <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                </div>



              </div>

              <div className=' py-2 px-2   rounded-xl'>

                <p className='text-lg italic'>
                  <label className='font-bold text-xl '>Note: </label>
                  If Donatable Item's Weight is Less than 20kgs Please Deliver it to Renukiran's Head Office between 11 Am to 6 Pm </p>
                  <p className='my-4 italic'> <label className='font-bold text-xl'>Address:</label>
                    282, Basement,Sant Nagar, East Of Kailash, New Delhi-110065</p> 

              </div>

              <button
                type="button"
                className="inline-block  rounded-full  mx-auto bg-blue-700 my-4 px-6  text-lg font-bold py-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                CONFIRM DONATION
              </button>

            </form>
          </div>
        </div>

        <div id='leftSection' className='flex flex-col h-screen lg:w-1/2 my-auto border-black rounded-xl align-center justify-center   m-auto bg-gray-500 ' style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/money-calculation-economy_23-2148568054.jpg?w=900&t=st=1704868007~exp=1704868607~hmac=23cec2360897f331cfad879e2a82b6b665623f48d89c4a415114f65838287b5c")', backgroundSize: 'cover', backgroundPosition: 'center' }}>





          <div className='w-[50%] flex flex-col align-center justify-center mx-2  text-center'>


            <h1 class="mb-4 text-4xl font-sans font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Donate Cash From Here </h1>



            <a href="/buyabledonation">
              <button

                type="button"
                className="inline-block  rounded-full my-2 mx-auto bg-blue-700 px-6  text-lg font-bold py-2 uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-blue-700  focus:bg-blue-600  focus:outline-none focus:ring-0 active:bg-blue-900  dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                Donate For a Cause
              </button>
            </a>

            <p className='text-4xl text-black font-bold font-sans'> OR</p>

            <a href="https://rzp.io/l/renukiran" target='_blank'>
              <button

                type="button"
                className="inline-block  rounded-full my-2 mx-auto bg-blue-700 px-6  text-lg font-bold py-2 uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-blue-700  focus:bg-blue-600  focus:outline-none focus:ring-0 active:bg-blue-900  dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                Donate Directly
              </button>
            </a>


          </div>



        </div>

      </div>

    </div>
  )
}

export default page
