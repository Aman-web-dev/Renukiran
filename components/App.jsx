
import React from 'react'
import Carousel from "@/components/Carousel"
import Homeabout from "@/components/Homeabout"
import AvinashInfo from "@/components/AvinashInfo"
import WhatWeProvide from "@/components/WhatWeProvide"
import Campaign from "@/components/Campaign"
import SDGgoals from "@/components/SDGgoals"
import Loader from "@/components/Loader"
import CompanysLogo from "@/components/CompanysLogo"
import { register } from "swiper/element/bundle";
register();
import SubscribePopup from './SubscribePopup'
import SubscribeLetter from './SubscribeLetter'
import TestimonialCarousel from './TestimonialCarousel'
import SDGGoals from './SDG-Goals'

const App = () => {
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
    </main>
  );
}

export default App;