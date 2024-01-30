import React from 'react'

function BuyingCard(props) {
    return (



            <div className="lg:max-w-[20vw] shadow-xl  sm:w-[40vw] mx-4 px-auto bg-white  -gray-200 rounded-lg shadow dark:bg-gray-800 dark:-gray-700  my-4 overflow-hidden transform-gpu transition-transform ease-in-out duration-300 sm:hover:scale-110 hover:scale-100">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[15rem] object-cover "  src={props.pictureLink}alt=""/>
                </a>
                <div className="flex flex-col p-5 my-auto justify-between">
                  
                        <h5 className="mb-2 text-2xl   font-bold tracking-tight text-gray-900 dark:text-white">{props.DonationTitle}</h5>
                    
                    <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">{props.DonationDetails}</p>



                    <div className='flex  lg:flex-row sm:flex-col  mx-auto '>

                    
                    <a href={props.DonationLink}  target="_blank" className="mx-2 my-2 inline-flex items-center px-3 py-1 text-sm font-bold text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Donate ₹{props.DonationAmount}

                    </a>

                    <a href={props.FormLink} className="mx-2 my-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Donate In Kind

                    </a>



                    </div>
                </div>
            </div>

    )
}

export default BuyingCard
