import Image from "next/image";
import { business } from "@/data/business";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-cream py-14 md:py-20" aria-labelledby="services-heading">
      <div className="container-site section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-heading"
            className="font-display text-3xl text-burgundy md:text-4xl"
          >
            Braiding Styles for Every Occasion
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown/90 md:text-lg">
            Whether you are preparing for a special occasion, refreshing your
            everyday style or choosing a protective hairstyle, we will help you
            find a look that suits you.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="flex flex-col border border-sand bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                {/* PLACEHOLDER stock image — replace with authentic salon photo */}
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl text-burgundy">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brown/90">
                  {service.description}
                </p>
                <a
                  href={`${business.phoneSms}?body=${encodeURIComponent(
                    `Hi, I’d like to ask about ${service.name} at Nadyne African Hair Braiding Salon.`,
                  )}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center border border-burgundy px-4 py-2.5 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-cream"
                >
                  Ask About This Style
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 border border-gold/40 bg-sand/50 px-5 py-4 text-center text-base font-medium text-burgundy md:text-lg">
          Need help choosing a style? Call us and tell us the look you have in
          mind.{" "}
          <a href={business.phoneTel} className="underline underline-offset-2 hover:text-plum">
            {business.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
