"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  // Move the state initialization into a useEffect to avoid hydration mismatch
  const [copied, setCopied] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyToClipboard = async (text, addressType) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(addressType);
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const addresses = [
    {
      type: "Head Office",
      text: "282, Sant Nagar East of Kailash, Kailash Colony, New Delhi, Delhi 110065",
    },
    {
      type: "Registered Office",
      text: "B-122, Upper Ground Floor, Gali Number 13, Amritpuri, Garhi, New Delhi, Delhi 110065",
    },
  ];

  return (
    <footer className="relative md:px-10 px-5 md:py-6 py-4 text-white bg-blue-900">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Left Section: Subscription Form */}
          <div className="w-full lg:w-6/12">
            <div className="flex justify-between">
              <div>
                <h3 className="text-white text-lg font-bold mb-2">
                  Join Our Community! Get the latest news on our projects,
                  <br />
                  stories, and impact.
                </h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="input text-black bg-white focus:outline-none focus:ring-0 w-full max-w-xs rounded-none"
                  />
                  <input
                    type="text"
                    placeholder="Email address*"
                    className="input text-black bg-white focus:outline-none focus:ring-0 w-full max-w-xs rounded-none"
                  />
                  <button className="btn renukiran-bg-green-color text-white border-0 rounded-none self-start hover:bg-black hover:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation and Social Links */}
          <div className="w-full lg:w-6/12 px-4 my-auto">
            <div className="flex flex-wrap items-top mb-6">
              {/* Useful Links */}
              <nav className="w-full lg:w-4/12 px-4 ml-auto">
                <ul className="list-unstyled">
                  <li className="link link-hover">
                    <Link
                      className="text-white hover:text-gray-300"
                      href="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="text-white hover:text-gray-300"
                      href="/child-policy"
                    >
                      Child Policy
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="text-white hover:text-gray-300"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Quick Links */}
              <div className="w-full lg:w-4/12 px-4">
                <ul className="list-unstyled">
                  <li className="link link-hover">
                    <Link
                      className="text-white hover:text-gray-300"
                      href="/refund-cancellation-policy"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="text-white hover:text-gray-300"
                      href="/terms-conditions"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="text-white hover:text-gray-300"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="gap-4 flex justify-end md:absolute bottom-5 right-20">
              <ul className="flex items-center md:gap-4 gap-4">
                {[
                  {
                    href: "https://in.linkedin.com/company/renukiran-welfare-foundation",
                    svgPath:
                      "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z",
                  },
                  {
                    href: "https://www.instagram.com/renukiran_foundation/?hl=en",
                    svgPath:
                      "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
                  },
                  {
                    href: "https://www.facebook.com/renukiranorg/",
                    svgPath:
                      "M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z",
                  },
                  {
                    href: "https://youtube.com/@renukiranwelfarefoundation3066?si=7PXcYS4IRIH4PI-u",
                    svgPath:
                      "M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z",
                  },
                ].map(({ href, svgPath }, index) => (
                  <li key={index}>
                    <Link href={href} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                        fill="#81C421"
                      >
                        <path d={svgPath} />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Addresses and Contact */}
        <div className="flex flex-col space-y-4 md:mt-6 mt-4">
          <div>
            <span className="block text-white font-semibold">
              Renukiran Welfare Foundation
            </span>
            <div className="relative">
              {addresses.map(({ type, text }, index) => (
                <div
                  key={`${type}-${index}`}
                  className="flex items-center gap-2 text-white text-sm mb-1"
                >
                  <span>
                    <span className="underline">{type}:</span> {text}
                  </span>
                  {isMounted && ( // Only render on client-side
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors"
                        onClick={() => copyToClipboard(text, type)}
                        aria-label={`Copy ${type} address`}
                      >
                        <title>Copy {type} Address</title>
                        <path
                          fillRule="evenodd"
                          d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
              {isMounted && copied && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity">
                  {copied} address copied to clipboard!
                </div>
              )}
            </div>
          </div>
          <div>
            <span className="block text-white font-semibold">Contact Us</span>
            <span className="text-white text-sm">
              Tel: +91 9625881835 | Email: info@renukiran.org | Landline:
              011-44764379
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;