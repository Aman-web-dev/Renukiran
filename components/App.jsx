
import React from 'react'
import Carousel from "@/components/Carousel"
import AvinashInfo from "@/components/AvinashInfo"
import WhatWeProvide from "@/components/WhatWeProvide"
import SDGgoals from "@/components/SDGgoals"
import Loader from "@/components/Loader"
import CompanysLogo from "@/components/CompanysLogo"
import { register } from "swiper/element/bundle";
register();
import SubscribePopup from './SubscribePopup'
import TestimonialCarousel from "@/components/TestimonialCarousel"

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SubscribePopup />
      <Carousel />
      <AvinashInfo />
      <WhatWeProvide />
      <SDGgoals />
      <CompanysLogo />
      <TestimonialCarousel/>
      <Loader />
    </main>
  );
}

export default App;