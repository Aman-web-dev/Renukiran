import Carousel from '@/components/Carousel'
import {register} from 'swiper/element/bundle';
register();
import Partners from '@/components/Partners';
import Analytics from '@/components/analytics';
import Homeabout from '@/components/Homeabout';
import AvinashInfo from '@/components/AvinashInfo';
import WhatWeProvide from '@/components/WhatWeProvide';
import LastSection from '@/components/LastSection';
import Campaign from '../components/Campaign';
import CompanysLogo from '@/components/CompanysLogo';

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel/>
      <Homeabout />
      <AvinashInfo />
      <WhatWeProvide />
      <Campaign/>
      {/* <Partners /> */}
      <CompanysLogo />
      <Analytics/>
      <LastSection />
      {/* <NewCarousel/> */}
    </main>
    </>
  )
}
