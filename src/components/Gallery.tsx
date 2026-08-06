"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const dialogTitleId = useId();
  const active = galleryImages.find((img) => img.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-white py-14 md:py-20" aria-labelledby="gallery-heading">
      <div className="container-site section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="gallery-heading"
            className="font-display text-3xl text-burgundy md:text-4xl"
          >
            Styles by Nadyne
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown/90 md:text-lg">
            Explore protective styles, everyday favourites and special-occasion
            looks.
          </p>
          {/* PLACEHOLDER: gallery images are temporary stock photos — replace with authentic salon photographs. */}
        </div>

        <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <li key={image.id} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveId(image.id)}
                className="relative block w-full overflow-hidden bg-sand text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`View larger image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-burgundy/85 px-3 py-2 text-xs font-medium text-cream">
                  {image.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brown/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl bg-cream p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 id={dialogTitleId} className="font-display text-lg text-burgundy">
                {active.category}
              </h3>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-sand bg-white text-burgundy hover:bg-sand"
                aria-label="Close image"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative mx-auto max-h-[75vh] w-full overflow-hidden bg-sand">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="mx-auto max-h-[75vh] w-auto object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
