import React from 'react'
import companyLogo from './companylogodata'
import Image from 'next/image'
import Carousel from './CompanyCarousel';

const navOptions = {
  items: 2,
  loop: true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  nav: true,
  dots: true,
  margin: 2,
  responsive: {
    0: {
      items: 1,
    },
    425: {
      items: 2,
    },
    550: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
};

const CompanysLogo = () => {
  return (
    <>
      <section className="bg-white w-full">
        <div className="mx-auto max-w-screen-xl md:my-12 my-6 text-center">
          <h1 className="text-3xl header-text text-black header-sub-text md:text-5xl lg:text-6xl">
            Our Allies
          </h1>
          <Carousel rows={companyLogo} options={navOptions} />
        </div>
      </section>
    </>
  );
}

export default CompanysLogo