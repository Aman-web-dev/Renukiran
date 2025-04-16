import React from 'react'
import Image from 'next/image'
import fb from '../public/assets/icons/facebook.svg'
import ig from '../public/assets/icons/ig.svg'
import x from '../public/assets/icons/twitter.svg'
import linkedin from '../public/assets/icons/linkedinrenukiran.svg'
import Link from 'next/link'
import youtube from '../public/assets/icons/youtube.svg'
import logo from '../public/assets/images/official-logo.png'

const Footer = () => {
  return (
    <footer className="relative md:px-10 px-5 md:py-8 py-6 text-white background-color-light-blue">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12">
            {/* <div className="flex items-start mb-8">
              <Image
                src={logo}
                className="pl-10 w-52 absolute -top-8 left-0"
                alt="Logo"
              />
              <h4 className="text-4xl fonat-semibold text-blueGray-700 font-bold ">Renukiran Welfare Foundation</h4>
              <p className="text-content mt-4">
                Renukiran is a Civil Society Organisation that promotes
                programmes through Quality Education, Digital literacy, Medical
                facilitation services, Skill trainings and Women empowerment to
                underprivileged communities, transforming lives with compassion
                and dedication. These impactful initiatives have empowered
                thousands and fostered a brighter future for those in real need
                across various parts in India.
              </p>
            </div> */}

            <div className="flex justify-between">
              <div>
                <h3 className="text-white text-lg font-bold mb-2">
                  Join Our Community! Get the latest news on our projects,
                  <br />
                  stories, and impact.
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
                  <button className="btn renukiran-bg-green-color text-white border-0 rounded-none self-start">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 my-auto">
            <div className="flex flex-wrap items-top mb-6">
              <nav className="w-full lg:w-4/12 px-4 ml-auto">
                {/* <span className="header-text-400 text-lg">Useful Links</span> */}
                <ul className="list-unstyled">
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text-white"
                      href="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="sub-text-white hover:text-blueGray-800 sub-text-white"
                      href="h/donate"
                    >
                      Child Policy
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text-white"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="w-full lg:w-4/12 px-4">
                {/* <span className="header-text-400 text-lg">Quick Links</span> */}
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="link link-hover hover:text-blueGray-800 sub-text-white"
                      href="/refund-cancellation-policy"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text-white"
                      href="/terms-conditions"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="link link-hover">
                    <Link
                      className="hover:text-blueGray-800 sub-text-white"
                      href="privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gap-4 flex justify-end md:absolute bottom-5 right-20">
              <ul className="flex items-center md:gap-4 gap-4">
                <li>
                  <Link
                    href="https://in.linkedin.com/company/renukiran-welfare-foundation"
                    target="_blank"
                  >
                    {/* <Image
                      src={linkedin}
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      className="fill-current"
                      alt="Social Media Icons"
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-10"
                      viewBox="0 0 24 24"
                      fill="#81C421"
                    >
                      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/renukiran_foundation/?hl=en"
                    target="_blank"
                  >
                    {/* <Image
                      src={ig}
                      width={35}
                      height={30}
                      viewBox="0 0 24 24"
                      className="fill-current"
                      alt="Social Media Icons"
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-10"
                      viewBox="0 0 24 24"
                      fill="#81C421"
                    >
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/renukiranorg/"
                    target="_blank"
                  >
                    {/* <Image
                      src={fb}
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      className="fill-current"
                      alt="Social Media Icons"
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-10"
                      viewBox="0 0 24 24"
                      fill="#81C421"
                    >
                      <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/@renukiranwelfarefoundation3066?si=7PXcYS4IRIH4PI-u"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      // width="40"
                      // height="40"
                      className="w-10"
                      viewBox="0 0 24 24"
                      fill="#81C421"
                    >
                      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:mt-6 mt-4">
          <h5>
            <span className="block sub-text-400" style={{ color: "white" }}>
              Renukiran
            </span>
            <span className="sub-text-white text-sm">
              B-122, Upper Ground Floor, Gali Number 13, Amritpuri, Garhi, New
              Delhi, Delhi 110065
            </span>
          </h5>
          <h5>
            <span className="block sub-text-400" style={{ color: "white" }}>
              Contact Us
            </span>
            <span className="sub-text-white text-sm">
              Tel: +91 9625881835 | Email: info@renukiran.org | Landline:
              011-44764379
            </span>
          </h5>
        </div>
      </div>
    </footer>
  );
}
{
  /* <div className="flex flex-wrap items-center md:justify-between">
          <div className="w-full mx-auto text-center">
              <span>Verified By</span>
          <div className="flex items-center justify-center">
              <div className='flex w-1/2 flex-wrap justify-center gap-2'>
              <Image width={130} height={130} src='https://nasscom.in/themes/custom/nasscomtheme/logo.svg' className=''/>
              <Image width={130} height={10} src='/assets/icons/niitfoundatinLogonew.png' className=''/>
              <Image width={80} height={10} src='/assets/icons/nitiAayog.svg' className=''/>
              <Image width={70} height={70} src='/assets/icons/ISO.svg'/>
              </div>
            </div>
          </div> 
        </div> */
}
export default Footer