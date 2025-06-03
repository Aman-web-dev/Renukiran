"use client";
import "./component.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="embla w-full" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide ease-in-out duration-1000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0061.jpg?alt=media&token=60704e65-b0e0-4577-862c-9e3f4d64bdaa"
            className="w-full h-full  object-cover"
            alt="child education"
          />
        </div>
        <div className="embla__slide ease-in-out duration-1000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0276.jpg?alt=media&token=d267b81d-efd7-40f0-a603-7396d54c6832"
            className="w-full h-full  object-cover"
            alt="kids doing morning prayer"
          />
        </div>
        <div className="embla__slide ease-in-out duration-1000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0299.jpg?alt=media&token=6a345883-e222-41a6-85ca-cbd7b7349946"
            alt="child education"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="embla__slide  ease-in-out duration-1000"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0196.jpg?alt=media&token=3330f008-6bd4-47fa-8fa3-c5a0d1205153"
            className="w-full h-full object-cover"
            alt="School"
          />
        </div>
      </div>
    </div>
  );
};

 // <div
    //   id="default-carousel"
    //   className="relative w-full"
    //   data-carousel="slide"
    // >
    //   {
    //     <div className="relative overflow-hidden md:h-[95vh] h-[50vh]">
    //       <div
    //         className="embla__slide ease-in-out duration-1000"
    //         style={{ width: "100%", height: "100%", position: "relative" }}
    //         data-carousel-item
    //         priority
    //       >
    //         <Image
    //           quality={70}
    //           src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0061.jpg?alt=media&token=60704e65-b0e0-4577-862c-9e3f4d64bdaa"
    //           fill
    //           sizes="(max-width: 1280px) 100vw, 1280px"
    //           className="absolute block object-cover"
    //           alt="child education image"
    //           priority
    //         />
    //       </div>

    //       <div className="hidden ease-in-out duration-1000 " data-carousel-item>
    //         <Image
    //           quality={70}
    //           sizes="(max-width: 1400px) 100vw, 1400px"
    //           src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0196.jpg?alt=media&token=3330f008-6bd4-47fa-8fa3-c5a0d1205153"
    //           fill
    //           className="absolute block object-cover"
    //           alt="Women empowerment image"
    //           priority
    //         />

    //         <div className="h-screen w-screen bg-black"></div>
    //       </div>

    //       <div className="hidden ease-in-out duration-1000 " data-carousel-item>
    //         <Image
    //           quality={70}
    //           sizes="(max-width: 1152px) 100vw, 1152px"
    //           className="absolute block object-cover"
    //           src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0299.jpg?alt=media&token=6a345883-e222-41a6-85ca-cbd7b7349946"
    //           fill
    //           priority
    //         />
    //       </div>

    //       <div className="hidden ease-in-out duration-1000 " data-carousel-item>
    //         <Image
    //           quality={70}
    //           sizes="(max-width: 1280px) 100vw, 1280px"
    //           src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0276.jpg?alt=media&token=d267b81d-efd7-40f0-a603-7396d54c6832"
    //           fill
    //           className="absolute block object-cover"
    //           alt="4"
    //           priority
    //         />
    //       </div>
    //     </div>
    //   }
    // </div>

{
  /* <div className=" first-letter:md:text-white md:z-10 md:bg-[#2e5893]/91 hero-section z-20">
                <h1 className="md:absolute hidden md:block">
                  Health <br />
                  Campaign <br />
                </h1>
                <Button
                  href="/donate"
                  className="donation-button"
                  variant="contained"
                  style={{ padding: "10px 30px" }}
                >
                  Donate now
                </Button>
              </div> */
}

export default Carousel;
