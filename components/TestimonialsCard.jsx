"use client"
import React, { useState } from "react";
import { useRef } from "react";

const TestimonialsCard = (props) => {
  const [isReadMore, setIsReadMore] = useState(true)
  const reviewsRef = useRef(null)
  const handleReadMore = () => {
    reviewsRef.current.classList.remove("line-clamp-4-css");
    setIsReadMore(false)
  }
  const handleReadLess = () => {
    reviewsRef.current.classList.add("line-clamp-4-css")
    setIsReadMore(true)
  }
  return (
    <div className="swiper-slide">
      <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full sm:max-w-sm mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
        <div>
          <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
            <svg
              className="w-5 h-5"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-base font-semibold text-indigo-600">
              {props.ratings}
            </span>
          </div>

          {/* REVIEW TEXT — trimmed after 4 lines */}
          <p
            ref={reviewsRef}
            className="sub-text leading-6 transition-all duration-500 line-clamp-4-css"
          >
            {props.review}
          </p>
          <span
            className="cursor-pointer text-sm text-blue-500"
            onClick={isReadMore ? handleReadMore : handleReadLess}
          >
            {isReadMore ? "Read more" : "Read less"}
          </span>
        </div>

        <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
          <img
            className="rounded-full h-10 w-10 object-cover"
            src={props.imgURL}
            alt="avatar"
            onError={(e) =>
              (e.target.src =
                "https://cdn-icons-png.flaticon.com/512/266/266033.png")
            }
          />
          <div className="block">
            <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
              {props.user}
            </h5>
            <span className="text-sm leading-4 text-gray-500">
              {props.reviewPlatform}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
