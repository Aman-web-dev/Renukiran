import Carousel from '@/components/Carousel'
import {register} from 'swiper/element/bundle';
register();
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel/>
      <Partners />
    </main>
    </>
  )
}
