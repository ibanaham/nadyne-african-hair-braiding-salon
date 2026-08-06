import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-14 md:py-20" aria-labelledby="contact-heading">
      <div className="container-site section-pad grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2
            id="contact-heading"
            className="font-display text-3xl text-burgundy md:text-4xl"
          >
            Visit & Contact
          </h2>
          <p className="mt-2 font-display text-xl text-plum">{business.name}</p>

          <dl className="mt-8 space-y-6 text-brown">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-plum">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={business.phoneTel}
                  className="text-lg font-medium hover:text-burgundy"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-plum">
                Address
              </dt>
              <dd className="mt-1 leading-relaxed">
                <a
                  href={business.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burgundy"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                  <br />
                  {business.address.country}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-plum">
                Opening Hours
              </dt>
              <dd className="mt-2 space-y-1.5">
                {business.hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between gap-4 border-b border-sand/80 py-1.5 text-sm"
                  >
                    <span>{row.day}</span>
                    <span className="font-medium">{row.hours}</span>
                  </div>
                ))}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-brown/80">
            Appointment availability and service times may vary. Please call the
            salon directly to confirm your appointment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneTel}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-burgundy px-5 py-3 text-sm font-semibold text-cream hover:bg-plum"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call to Book
            </a>
            <a
              href={business.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-burgundy px-5 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-cream"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
          </div>
        </div>

        <div className="min-h-[20rem] overflow-hidden border border-sand bg-sand lg:min-h-full">
          <iframe
            title="Map showing Nadyne African Hair Braiding Salon at 739 W Wheatland Road, Duncanville, TX"
            src={business.mapsEmbedUrl}
            className="h-full min-h-[20rem] w-full border-0 lg:min-h-[32rem]"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
