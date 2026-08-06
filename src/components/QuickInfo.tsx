import { Clock3, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";

export function QuickInfo() {
  return (
    <section
      className="border-b border-sand bg-white"
      aria-label="Salon contact and hours"
    >
      <div className="container-site section-pad grid gap-8 py-8 md:grid-cols-3 md:gap-6 md:py-10">
        <div className="flex gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
          <div>
            <h2 className="font-display text-lg text-burgundy">Call Us</h2>
            <a
              href={business.phoneTel}
              className="mt-1 block text-base font-medium text-brown hover:text-plum"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
          <div>
            <h2 className="font-display text-lg text-burgundy">Visit Us</h2>
            <a
              href={business.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base leading-relaxed text-brown hover:text-plum"
            >
              {business.address.street}
              <br />
              {business.address.city}, {business.address.state}{" "}
              {business.address.zip}
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
          <div>
            <h2 className="font-display text-lg text-burgundy">Opening Hours</h2>
            <p className="mt-1 text-base leading-relaxed text-brown">
              {business.hoursSummary.weekday}
              <br />
              {business.hoursSummary.sunday}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
