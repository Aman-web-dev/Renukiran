import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Carousel from '@/components/Carousel'
import {register} from 'swiper/element/bundle';
register();
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>
    <Nav />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel/>
      <Partners />
    </main>
    <Footer />
    </>
  )
}
