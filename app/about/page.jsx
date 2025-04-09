"use client";

import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Renukiran-About";
  }, []);

  return (
    <div className="flex flex-col items-center md:text-justify text-start my-4 px-4">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="text-green-600"></span>{" "}
        <span className="text-[#205893]"> Renukiran - Kiran Umeed Ki</span>
      </h1>
      <p className="mb-6 text-lg font-normal  text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {" "}
        Renukiran Welfare Foundation is a rooted non-profit organization
        committed towards making a positive and lasting impact on communities
        inhabited across varying regions of India. Since our inception, we have
        worked tirelessly to address pressing humanitarian challenges. Our
        mission is to create a more equitable and sustainable world by providing
        essential support, resources, and advocacy for those in need. The
        organisation is registered under Section 8 of the Companies Act,
        2013.The core focus of this initiative aligns with United Nations (UN)
        Sustainable Development Goals 2, 3, 4, 5, 8, and 13. These objectives
        aim to uplift communities by addressing Zero Hunger, Gender Equality,
        Climate Action, Good Health and Well-Being, Quality Education, and
        Decent Work and Economic Growth.
      </p>

      <p className="mb-6 text-lg font-normal  text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Our organisational vision and Mission initiated through shared dream of
        Avinash Kumar (our founder and the inquisitive little boy of Renu Ji)
        and his mother. The dream was to inculcate through teaching & training,
        educating, and help develop life skills that are much essential in
        bringing a 360-degree shift in the lives of people who have inadequate,
        insufficient, access and availability to the basic aids in living a
        dignified life. At Renukiran, we believe in shaping visions and help
        spread others develop their wings to fly higher in this beautiful
        journey of Life. The ideation from an aspiration to establishing a full-
        fledged organisational sculpture was happening since 2013 with the
        coherence efforts of Avinash Kumar and Pooja Gupta, as a humbled
        Initiative to fulfil Renu Ji’s unfulfilled dream post her death due to
        cancer.
      </p>

      <p className="mb-6 text-lg font-normal  text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        In those days’ teaching the children belonging from the farmer
        communities and daily wage workers living at the riverbanks of Yamuna in
        Delhi after the office hours and weekends has been a day-to-day activity
        of these two changemakers. Driving unto this path they also started with
        food distribution drives, healthcare camps, and WASH campaigns. Bringing
        together all these efforts and collaboration RENUKIRAN WELFARE
        FOUNDATION was officially established in the year 2018. With a
        never-ending enthusiasm and passion to nurture lives of the many
        underprivileged children, woman, and communities became the
        organization’s foundational element. Our projects are spreaded across 4
        Programme verticals. Details Of those can Be read in
        <a href="/programs" className="text-blue-500">
          {" "}
          Programs{" "}
        </a>
      </p>
    </div>
  );
}

export default About;
