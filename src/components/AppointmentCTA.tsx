import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";

export function AppointmentCTA() {
  return (
    <section
      className="bg-plum py-14 text-cream md:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="container-site section-pad text-center">
        <h2
          id="cta-heading"
          className="font-display text-3xl md:text-4xl"
        >
          Ready for Your Next Braided Style?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream/90 md:text-lg">
          Call Nadyne African Hair Braiding Salon today to discuss your preferred
          style and reserve your appointment.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={business.phoneTel}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-cream px-6 py-3 text-sm font-semibold text-burgundy hover:bg-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {business.phoneDisplay}
          </a>
          <a
            href={business.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-cream px-6 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-plum"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
