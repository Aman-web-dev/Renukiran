'use client'

import React from "react";
import RazorpayButton from "./razorpayPaymnetButton";
import { useState } from "react";
import { Heart } from "lucide-react";



function DonationCard({ imageLink, title, description, paymentId, cardId }) {
    const [expanded, setExpanded] = useState(false);
    
    const handleReadMore = () => {
      setExpanded(prev => !prev);
    };
  
    return (
      <div className="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700 max-w-2xl mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 relative overflow-hidden">
            <img
              className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
              src={imageLink}
              alt={title}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Donation</span>
            </div>
          </div>
          
          <div className="md:w-3/5 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
              <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                <p>
                  {expanded ? description : `${description.slice(0, 120)}${description.length > 120 ? '...' : ''}`}
                </p>
                {description.length > 120 && (
                  <button 
                    onClick={handleReadMore} 
                    className="mt-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
            
            <div className="mt-6">
              {/* <div className="flex items-center mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">67%</span>
              </div> */}
{/*               
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">$8,940</span> raised of $12,000
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">23</span> donors
                </div>
              </div> */}
              
              <div className="flex space-x-3">
                <RazorpayButton PaymentId={paymentId} cardId={cardId}/>
                {/* <button 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex-1 flex justify-center items-center"
                  onClick={() => RazorpayButton({ PaymentId: paymentId, cardId })}
                >
                  Donate Now
                </button> */}
                {/* <button className="p-3 border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default DonationCard;

// <div class=" bg-white border mx-auto border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center">
{
  /* <a href="#">
      <img
        class="rounded-t-lg"
        src={imageLink}
        alt=""
      />
    </a> */
}
{
  /* <div class="p-5">
      <RazorpayButton PaymentId={paymentId} cardId={cardId}/>
      <a href="#" >
        <h5 class=" my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {description}
      </p>
    </div> */
}

//   </div>
