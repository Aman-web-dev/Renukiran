"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PlantationPartnerGallery({ gallery }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + gallery.length) % gallery.length,
    );
  }, [gallery.length]);
  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % gallery.length,
    );
  }, [gallery.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeIndex, close, showNext, showPrevious]);

  if (!gallery?.length) return null;

  const activeImage = activeIndex === null ? null : gallery[activeIndex];

  return (
    <>
      <div className="pp-gallery">
        {gallery.map((image, index) => (
          <button
            type="button"
            key={`${image.src}-${index}`}
            className="pp-gallery__item"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-label={`Open photograph ${index + 1}: ${image.alt || "Plantation activity"}`}
          >
            <Image
              src={image.src}
              alt={image.alt || "Plantation activity"}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              style={{ objectFit: "cover", objectPosition: image.position || "center" }}
              unoptimized
            />
            {image.caption ? (
              <span className="pp-gallery__caption">{image.caption}</span>
            ) : null}
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="pp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt || "Plantation photograph"}
          onClick={close}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="pp-lightbox__close"
            onClick={close}
            aria-label="Close photograph"
          >
            <X size={26} />
          </button>

          {gallery.length > 1 ? (
            <>
              <button
                type="button"
                className="pp-lightbox__nav pp-lightbox__nav--previous"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous photograph"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                type="button"
                className="pp-lightbox__nav pp-lightbox__nav--next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next photograph"
              >
                <ChevronRight size={30} />
              </button>
            </>
          ) : null}

          <figure
            className="pp-lightbox__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pp-lightbox__image-wrap">
              <Image
                src={activeImage.src}
                alt={activeImage.alt || "Plantation activity"}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                unoptimized
                priority
              />
            </div>
            <figcaption className="pp-lightbox__caption">
              {activeImage.caption ? <span>{activeImage.caption}</span> : null}
              <small>
                Photograph {activeIndex + 1} of {gallery.length}
              </small>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
