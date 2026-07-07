"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./component.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/New%20Carousel%2FIMG-20250530-WA0061.jpg?alt=media&token=60704e65-b0e0-4577-862c-9e3f4d64bdaa",
    alt: "Children engaged in education programs",
    eyebrow: "Education for All",
    title: "Nurturing Tomorrow's Leaders",
    description:
      "Empowering underprivileged children with access to quality education, holistic development, and a brighter future.",
    cta: "Support a Child",
    link: "/donate",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fwomen%20with%20pads.JPG?alt=media&token=8f578ff4-0df8-407c-8dca-7bf3cdd4811b",
    alt: "Children performing morning prayers at school",
    eyebrow: "Values & Culture",
    title: "Building Character From Childhood",
    description:
      "Instilling values of discipline, unity, and respect through daily practices that shape well-rounded individuals.",
    cta: "Get Involved",
    link: "/get-involved",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Frenukiran%20on%20wall.JPG?alt=media&token=2ad6c5a6-ad14-488e-8c91-3d520928a7e4",
    alt: "Children learning together in a classroom setting",
    eyebrow: "Community Impact",
    title: "Together We Rise",
    description:
      "Working hand-in-hand with communities to drive sustainable change and create opportunities for every child.",
    cta: "Join Our Mission",
    link: "/about/rwfStory",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fcarousel2Bg_hyinot_c_scale%2Cw_1400.webp?alt=media&token=bcd3b242-2711-447f-b4a1-ff1c533724d8",
    alt: "Students at Renukiran supported school",
    eyebrow: "Our Reach",
    title: "A Movement of Hope",
    description:
      "Transforming lives across regions through dedicated programs in education, environment, and women empowerment.",
    cta: "See Our Work",
    link: "/work",
  },
];

const Carousel = () => {
  // Stable autoplay instance across renders
  const autoplayRef = useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 35 },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  // Initialize carousel listeners and explicitly start autoplay
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Explicitly start autoplay once embla is ready (covers cases where
    // playOnInit is ignored during hydration / visibility delays).
    const autoplay = emblaApi.plugins()?.autoplay;
    if (autoplay) {
      try {
        autoplay.play();
      } catch (_) {
        /* no-op */
      }
    }

    // If the page is hidden when carousel mounts, wait until visible
    // then start autoplay.
    const onVisibilityChange = () => {
      if (!emblaApi) return;
      const a = emblaApi.plugins()?.autoplay;
      if (!a) return;
      if (document.visibilityState === "visible") {
        a.play();
      } else {
        a.stop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [emblaApi, onSelect]);

// Note: the Ken Burns animation restart hack has been removed.
// Each slide image starts at the same default scale in CSS and animates
// to a slightly larger scale when its parent slide becomes active. The
// CSS now uses the SAME `from` value as the default transform, so there
// is no visible "snap" when a slide leaves or becomes active on mount.

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section
      className="embla-wrapper relative w-full overflow-hidden group"
      aria-roledescription="carousel"
      aria-label="Renukiran featured highlights"
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`embla__slide relative ${
                index === selectedIndex ? "embla__slide--active" : ""
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="embla__img"
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
              />

              {/* Gradient overlays for readable text */}
              <div className="embla__overlay embla__overlay--bottom" />
              <div className="embla__overlay embla__overlay--left" />

              {/* Caption */}
              <div className="embla__caption-wrap">
                <div className="embla__caption">
                  <span className="embla__eyebrow">{slide.eyebrow}</span>
                  <h2 className="embla__title">{slide.title}</h2>
                  <p className="embla__description">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="embla__cta"
                    aria-label={`${slide.cta} - ${slide.title}`}
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="embla__cta-icon" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="embla__counter" aria-live="polite" aria-atomic="true">
        <span className="embla__counter-current">
          {String(selectedIndex + 1).padStart(2, "0")}
        </span>
        <span className="embla__counter-sep" aria-hidden="true" />
        <span className="embla__counter-total">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        className="embla__arrow embla__arrow--prev"
        aria-label="Previous slide"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="embla__arrow embla__arrow--next"
        aria-label="Next slide"
      >
        <ChevronRight aria-hidden="true" />
      </button>

      {/* Dot Indicators */}
      <div className="embla__dots" role="tablist" aria-label="Choose a slide">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`embla__dot ${
              i === selectedIndex ? "embla__dot--active" : ""
            }`}
          >
            <span className="embla__dot-inner" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
