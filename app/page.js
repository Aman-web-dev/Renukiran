import Carousel from '@/components/Carousel'
import {register} from 'swiper/element/bundle';
register();
import Partners from '@/components/Partners';
import Analytics from '@/components/analytics';

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
      <Carousel/>
      <Partners />
      <Analytics/>
    </main>
    </>
  )
}
