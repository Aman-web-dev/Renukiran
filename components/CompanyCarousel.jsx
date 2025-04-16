"use client";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const Carousel = ({ rows, options }) => {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);

  useEffect(() => {
    const loadJQuery = () => {
      if (typeof window !== "undefined" && !window.jQuery) {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.crossOrigin = "anonymous";

        script.onload = () => setJQueryLoaded(true);
        document.head.appendChild(script);
      } else {
        setJQueryLoaded(true);
      }
    };
    loadJQuery();
  }, []);

  return (
    jQueryLoaded && (
      <div className="flex items-center justify-center">
        <OwlCarousel className="owl-theme" id="home-brands" {...options}>
          {rows &&
            rows.map((item, index) => (
              <div className="item" key={index}>
                <div className="flex items-center justify-center h-full">
                  <div
                    className="brand-image-sec flex items-center justify-center"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <div className="brand-image">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="object-contain w-full h-full"
                        />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </OwlCarousel>
      </div>
    )
  );
};

export default Carousel;