'use client'
import React from 'react'
import { useEffect } from 'react'
import Swiper from 'swiper'
import TestimonialsCard from "./TestimonialsCard"

const TestimonialCarousel = () => {
    useEffect(() => {
        const swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 32,
          loop: true,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 16, // smaller gap for very small screens
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          },
        });

        return () => {
          swiper.destroy(true, true);
        };
    }, [])
  return (
    <section className="md:py-12 py-6 renukiran-bg-green-color main-swiper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:px-40 md:mb-12 mb-6">
          <h1 className="header-text-400 md:text-5xl text-3xl lg:text-6xl uppercase text-white">
            Testimonials
          </h1>
          <p style={{ color: "white" }} className="lg:text-lg sub-text">
            Discover the Impact: Testimonials from our Valued Collaborators and
            Dedicated Volunteers. Unveil the True Potential of Renukiran Welfare
            Foundation through Their Experiences and Insights gained along our
            Journey.
          </p>
        </div>

        <div className="swiper mySwiper">
          <div className="swiper-wrapper flex items-center justify-center">
            <TestimonialsCard
              review="I had wonderful experience working with RWF as volunteer. Team is very supportive, special thanks to Avinash sir and Pooja ma'am. Working with RWF is a process of continuous self improvement and learning. The dedication and involvement of RWF to bring peace and smile on faces of underprivileged people, is something worth, everyone needs to implement in their lives."
              user="Rishabh Choudhary"
              imgURL="https://lh3.googleusercontent.com/a-/ALV-UjVzghuGrYCWGjZ7nd6fvgithePpkTcyyjbKhZDsvTCYU3PO=w66-h66-p-rp-mo-br100"
              ratings="4.4"
            />
            <TestimonialsCard
              review="I feel grateful to be a part of Renukiran welfare foundation. They are doing amazing work by uplifting the underprivileged children of the society and empowering women."
              user="Priyanshi Narang"
              imgURL="https://lh3.googleusercontent.com/a/ACg8ocK18Ycze2uKEcoBvTD7Kt17niOKZHQNvU0wQyErdKYR=w66-h66-p-rp-mo-br100"
              ratings="4.0"
            />
            <TestimonialsCard
              review="I'm associated with Renukiran welfare foundation for over one and half month as a HR intern. I'm proud of this foundation they work selflessly for the development of needy people moreover they're providing quality education to underprivileged childrens. They need little support to give their best to this society"
              user="Nenavath Ravinder"
              imgURL="https://lh3.googleusercontent.com/a-/ALV-UjUiYrf-w8dmyGOkVE34ox6wxJfMBV4X3TVH_UJ_gEEMuz4=w66-h66-p-rp-mo-br100"
              ratings="3.5"
            />
            <TestimonialsCard
              review="This NGO does excellent work when it comes to taking care of unprivileged children. I'm very impressed by their ethics and morals to help people in need. They have some definite goal reaching priorities and I think they're succeeding in what they do."
              user="Varsha"
              imgURL="https://lh3.googleusercontent.com/a-/ALV-UjWFlrjvPGBTY3YjSfy-WElW9KAPTmZTKo3GdmPJZg2r8pP-=w66-h66-p-rp-mo-br100"
              ratings="4.8"
            />
            <TestimonialsCard
              review="Based on what I know about the program of Renukiran welfare foundation support the education  of underprivileged children and promote women's sense of self worth.
            They also organize medical camps for acute disease and celebrates festives with all of them.There efforts are admirable."
              user="Raj Kushwaha"
              imgURL="https://lh3.googleusercontent.com/a-/ALV-UjVARXjHeqNHzKmAus4O1kXx4K1YL0BGYNt7bWKnRa2h0BH1=w66-h66-p-rp-mo-br100"
              ratings="4.2"
            />
            <TestimonialsCard
              review="The NGO is doing such a great job. Very organized and very focused to reach their goal. The work and effort they have put is seen ... Good Job .. keep up the good work"
              user="Samarth Koppala"
              imgURL="https://lh3.googleusercontent.com/a-/ALV-UjUjR_OlYV1qFLOBhIoSGJPqvH5lnp3pdYDgzBTTfdWkm9W_=w66-h66-p-rp-mo-br100"
              ratings="4.0"
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel