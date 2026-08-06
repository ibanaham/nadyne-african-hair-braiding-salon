import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";

export function MobileBookingBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-sand bg-cream p-2 md:hidden"
      role="region"
      aria-label="Quick booking actions"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={business.phoneTel}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-burgundy px-3 text-sm font-semibold text-cream hover:bg-plum"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
        <a
          href={business.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-burgundy px-3 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-cream"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          Directions
        </a>
      </div>
    </div>
  );
}
