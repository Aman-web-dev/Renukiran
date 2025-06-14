"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navRoutes = [
  {
    heading: "About Us",
    href: "/about",
    disabled: true,
    subRoutes: [
      { label: "About Us", href: "/about", disabled: true },
      {
        label: "Our People",
        href: "#",
        disabled: false,
        nestedRoutes: [
          { label: "Leadership", href: "/leadership", disabled: false },
          { label: "Team", href: "/team", disabled: false },
        ],
      },
      { label: "Our Focus", href: "/mission", disabled: false },
      { label: "Reach and Presence", href: "/presence", disabled: false },
      { label: "Sustainable Development Goals", href: "/sdg", disabled: false },
    ],
  },
  {
    heading: "Our Work",
    href: "/work",
    disabled: false,
    subRoutes: [
      { label: "Education", href: "/work#education", disabled: false },
      { label: "Health & Hygiene", href: "/work#health", disabled: false },
      { label: "Livelihood", href: "/work#livelihood", disabled: false },
      {
        label: "Women Empowerment",
        href: "/work#women-empowerment",
        disabled: false,
      },
      {
        label: "Climate Change",
        href: "/work#climate-change",
        disabled: false,
      },
    ],
  },
  {
    heading: "Media Centre",
    href: "/media",
    disabled: false,
    subRoutes: [
      { label: "Press Releases", href: "/media#press", disabled: false },
      {
        label: "Workshops & Events",
        href: "/media#workshops",
        disabled: false,
      },
      { label: "Awards & Recognition", href: "/media#awards", disabled: false },
      { label: "The RWF Blog", href: "/media#awards", disabled: false },
      { label: "Newsletter", href: "/media#awards", disabled: false },
      { label: "Annual Reports", href: "/media#awards", disabled: false },
      { label: "Story of Change", href: "/media#awards", disabled: false },
    ],
  },
  {
    heading: "Get Involved",
    href: "/get-involved",
    disabled: false,
    subRoutes: [
      { label: "Individual Support", href: "/about", disabled: false },
      { label: "Be a Fundraiser", href: "/founders", disabled: false },
      { label: "Corporate Partnership", href: "/team", disabled: false },
      { label: "School Partnership", href: "/programs", disabled: false },
      {
        label: "Volunteer & Internship",
        href: "/announcements",
        disabled: false,
      },
      { label: "Work with Us", href: "/announcements", disabled: false },
    ],
  },

  {
    heading: "Contact Us",
    href: "/contact",
    disabled: false,
    subRoutes: [
      { label: "Get in Touch", href: "/contact", disabled: false },
      { label: "FAQs", href: "/faqs", disabled: false },
    ],
  },
];

const Nav = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <nav className="bg-white border-b border-gray-400 shadow-md sticky top-0 w-full z-40 backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="flex flex-wrap items-center justify-between mx-auto p-1 md:px-8">
          <Link href="/" className="flex items-center h-50">
            <Image
              src="/assets/renukiran-logo-png.png"
              width={150}
              height={40}
              alt="Renukiran"
              priority={true}
            />
          </Link>
          <div className="flex items-center">
            <li className="md:hidden block">
              <Link
                href="/donate"
                className="bg-[#205893] px-2 py-2 text-white rounded md:hover:border-blue-800 md:hover:text-[#205893] md:hover:border uppercase"
              >
                Support us
              </Link>
            </li>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-black rounded-lg md:hidden hover:text-[#2e5893] focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 md:items-center mt-4 border md:flex-row md:mt-0 md:border-0 gap-4">
              {
                navRoutes.map((route, index) => (
                  <Link href={route.href} key={index}>
                    <li className="navigation-level-1 nav-bar-heading-text">
                      <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-black nav-bar-text hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto uppercase">
                        {route.heading}
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id={`dropdown`}
                        className="hidden bg font-normal bg-white relative divide-y divide-gray-100 rounded-lg shadow w-44"
                      >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                          {isClient &&
                            route.subRoutes.map((subRoute, subIndex) => (
                              <div
                                key={subIndex}
                              >
                                {subRoute.nestedRoutes ? (
                                  <li className="flex justify-between navigation-level-2">
                                    <button
                                      className="flex w-full px-4 py-2 font-bold text-black hover:bg-gray-100 dark:hover:text-white group-hover:bg-gray-100"
                                      // disabled={subRoute.disabled}
                                    >
                                      {subRoute.label}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="w-4"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                        />
                                      </svg>
                                    </button>
                                    {subRoute.nestedRoutes && (
                                      <div
                                        id="dropdown-2"
                                        className="font-normal hidden rounded-lg shadow"
                                      >
                                        <ul className="text-sm text-gray-700">
                                          {subRoute.nestedRoutes.map(
                                            (nestedRoute, nestedIndex) => (
                                              <Link
                                                key={nestedIndex}
                                                href={nestedRoute.href}
                                                className="block px-4 py-2 font-bold text-black bg-white hover:bg-gray-100"
                                                disabled={nestedRoute.disabled}
                                              >
                                                {nestedRoute.label}
                                              </Link>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </li>
                                ) : (
                                  <Link
                                    href={subRoute.href}
                                    className="block px-4 py-2 font-bold text-black hover:bg-gray-100  group-hover:bg-gray-100"
                                    // disabled={subRoute.disabled}
                                  >
                                    {subRoute.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                        </ul>
                      </div>
                    </li>
                  </Link>
                ))}
              <Link
                href="/general-donations"
                className="bg-[#205893] block py-2 pl-3 pr-4 text-white rounded md:hover:border-blue-800 md:border-0 md:px-2 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:text-[#205893]"
              >
                Support Us
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
