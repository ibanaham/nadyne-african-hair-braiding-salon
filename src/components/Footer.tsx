import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { navLinks } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown text-cream">
      <div className="container-site section-pad grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl text-cream">{business.shortName}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-sand">
            {business.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/80">
            Neat, long-lasting African braiding in a clean, peaceful and
            welcoming Duncanville salon.
          </p>
          <a
            href={business.phoneTel}
            className="mt-5 inline-flex min-h-11 items-center justify-center bg-burgundy px-4 py-2.5 text-sm font-semibold text-cream hover:bg-plum"
          >
            Book an Appointment
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li>
              <a
                href={business.phoneTel}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Hours
          </h2>
          <ul className="mt-4 space-y-1.5 text-sm text-cream/85">
            <li>Mon–Sat: 8:00 AM–9:00 PM</li>
            <li>Sunday: 10:00 AM–6:00 PM</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Explore
          </h2>
          <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/85 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site section-pad flex flex-col gap-2 py-5 text-sm text-cream/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            Website designed by{" "}
            <a
              href={business.designer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-2 hover:text-cream"
            >
              {business.designer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
