"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

/**
 * Photo gallery for the activity.
 *
 * Each thumbnail opens a full-screen lightbox (modal) when clicked. The modal
 * can be closed by:
 *   - Clicking the close (X) button
 *   - Clicking anywhere on the backdrop (outside the image)
 *   - Pressing the Escape key
 *
 * Body scroll is locked while the modal is open.
 */
export default function ImpactPartnerGallery({ gallery }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const open = useCallback((index) => setActiveIndex(index), []);

  // Manage keyboard, body scroll and Escape-to-close while the lightbox is open.
  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close]);

  if (!gallery?.length) return null;

  const activeImage = activeIndex !== null ? gallery[activeIndex] : null;
  const isOpen = activeImage !== null;

  return (
    <>
      <div className="ip-gallery">
        {gallery.map((image, index) => (
          <button
            type="button"
            key={`${image.src}-${index}`}
            className="ip-gallery__item ip-gallery__button"
            onClick={() => open(index)}
            aria-label={`Open image: ${image.alt || "Activity photograph"}`}
          >
            <Image
              src={image.src}
              alt={image.alt || "Activity photograph"}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 600px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
              unoptimized
            />
            {image.caption ? (
              <span className="ip-gallery__caption">{image.caption}</span>
            ) : null}
          </button>
        ))}
      </div>

      {isOpen ? (
        <div
          className="ip-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt || "Activity photograph"}
          onClick={close}
        >
          <button
            type="button"
            className="ip-lightbox__close"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            aria-label="Close image"
          >
            <X size={26} strokeWidth={2.4} />
          </button>
          <figure
            className="ip-lightbox__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="ip-lightbox__image-wrap">
              <Image
                src={activeImage.src}
                alt={activeImage.alt || "Activity photograph"}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                unoptimized
                priority
              />
            </div>
            {activeImage.caption ? (
              <figcaption className="ip-lightbox__caption">
                {activeImage.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
