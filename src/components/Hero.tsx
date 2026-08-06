import Image from "next/image";
import { Check } from "lucide-react";
import { business } from "@/data/business";
import { trustItems } from "@/data/whyChoose";

/** PLACEHOLDER hero image — replace with authentic salon photography. */
const HERO_IMAGE = "/images/hero-braids.jpg";

export function Hero() {
  return (
    <section id="home" className="border-b border-sand bg-cream" aria-labelledby="hero-heading">
      <div className="container-site section-pad grid items-center gap-8 py-10 md:gap-10 md:py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-plum md:text-sm">
            African Hair Braiding in Duncanville, Texas
          </p>
          <h1
            id="hero-heading"
            className="font-display text-[1.85rem] leading-tight text-burgundy sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
          >
            Beautiful Braids. Gentle Hands. A Style Made for You.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brown/90 md:text-lg">
            Enjoy neat, long-lasting African braiding in a clean, peaceful and
            welcoming salon. From timeless protective styles to statement looks,
            Nadyne and her team are here to help you feel confident and beautiful.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={business.phoneTel}
              className="inline-flex min-h-12 items-center justify-center bg-burgundy px-6 py-3 text-sm font-semibold text-cream hover:bg-plum sm:min-w-[11rem]"
            >
              Book an Appointment
            </a>
            <a
              href="#gallery"
              className="inline-flex min-h-12 items-center justify-center border-2 border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-cream sm:min-w-[11rem]"
            >
              View Our Styles
            </a>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-brown">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden bg-sand sm:aspect-[5/6] lg:aspect-[4/5]">
          <Image
            src={HERO_IMAGE}
            alt="Black woman with professionally installed long braids"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
