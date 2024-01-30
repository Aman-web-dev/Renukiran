import Carousel from '@/components/Carousel'
import { register } from 'swiper/element/bundle';
register();
import Homeabout from '@/components/Homeabout';
import AvinashInfo from '@/components/AvinashInfo';
import WhatWeProvide from '@/components/WhatWeProvide';
import LastSection from '@/components/LastSection';
import Campaign from '../components/Campaign';
import CompanysLogo from '@/components/CompanysLogo';
import SDGgoals from '@/components/SDGgoals';
import Loader from '@/components/Loader';
import Reviews from '@/components/Reviews';



export default function Home() {
  return (
    <>


      <main className="flex min-h-screen flex-col items-center justify-between">
        <Carousel />
        <Homeabout />
        <AvinashInfo />
        <WhatWeProvide />
        <Campaign />
        <CompanysLogo />
        <SDGgoals />
        <Reviews/>
        <Loader/>
        <LastSection />
      </main>

    </>
  )
}
