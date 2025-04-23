"use client";

import React, { useState } from "react";
import RazorpayButton from "./razorpayPaymnetButton";
import Image from "next/image";

function DonationCard({ imageLink, title, description, paymentId, cardId }) {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700 w-full max-w-sm mx-auto mb-6">
      {/* Image Container with overlay gradient */}
      <div className="relative overflow-hidden h-64">
        <div className="relative w-full h-full">
          <Image
            src={imageLink}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
        </div> */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Donation
          </span>
        </div>
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>
      

      {/* Content section */}
      <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800">
        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
          <p>
            {expanded
              ? description
              : `${description.slice(0, 120)}${
                  description.length > 120 ? "..." : ""
                }`}
          </p>
          {description.length > 120 && (
            <button
              onClick={handleReadMore}
              className="mt-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
            >
              {expanded ? "Read Less" : "Read More"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {expanded ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Payment button */}
        <div className="mt-2">
          <RazorpayButton PaymentId={paymentId} cardId={cardId} />
        </div>
      </div>
    </div>
  );
}

export default DonationCard;