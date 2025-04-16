"use client"
import React from 'react'
import Carousel from "@/components/Carousel"
import Homeabout from "@/components/Homeabout"
import AvinashInfo from "@/components/AvinashInfo"
import WhatWeProvide from "@/components/WhatWeProvide"
import Campaign from "@/components/Campaign"
import SDGgoals from "@/components/SDGgoals"
import Loader from "@/components/Loader"
import LastSection from "@/components/LastSection"
import CompanysLogo from "@/components/CompanysLogo"
import Reviews from "@/components/Reviews"
import { register } from "swiper/element/bundle";
register();
import "react-responsive-modal/styles.css";
import SubscribePopup from './SubscribePopup'
import { useEffect } from 'react'
import SubscribeLetter from './SubscribeLetter'
import TestimonialCarousel from './TestimonialCarousel'
import SDGGoals from './SDG-Goals'

const App = () => {
  // const isModalShowed = !(localStorage.getItem("isModalShowed")) ? JSON.stringify(localStorage.setItem("isModalShowed" , false)) : JSON.parse(localStorage.getItem("isModalShowed"))

  // const onOpenModal = () => document.getElementById("my_modal_5").showModal();
  // useEffect(() => {
  //     !isModalShowed && onOpenModal();
  //     JSON.stringify(localStorage.setItem("isModalShowed", true))
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SubscribePopup />
      <Carousel />
      {/* <Homeabout /> */}
      <AvinashInfo />
      <WhatWeProvide />
      {/* <Campaign /> */}
      <SDGgoals />
      {/* <SDGGoals/> */}
      <CompanysLogo />
      <TestimonialCarousel/>
      {/* <Reviews /> */}
      <Loader />
      {/* <LastSection /> */}
    </main>
  );
}

export default App;