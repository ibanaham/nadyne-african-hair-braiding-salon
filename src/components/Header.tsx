"use client";

import { useEffect, useId, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "@/data/business";
import { navLinks } from "@/data/navigation";

export function AnnouncementBar() {
  return (
    <div className="bg-burgundy text-cream">
      <div className="container-site section-pad flex items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
        <Phone className="hidden h-3.5 w-3.5 shrink-0 text-gold sm:block" aria-hidden />
        <p>
          {business.announcement}{" "}
          <a
            href={business.phoneTel}
            className="font-semibold underline underline-offset-2 hover:text-white"
          >
            {business.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-cream">
      <AnnouncementBar />
      <div className="container-site section-pad flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <a href="#home" className="min-w-0 shrink">
          <span className="font-display block text-xl font-semibold leading-none text-burgundy md:text-2xl">
            {business.shortName}
          </span>
          <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-plum sm:text-xs">
            {business.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown hover:text-burgundy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={business.phoneTel}
            className="hidden h-11 items-center justify-center bg-burgundy px-4 text-sm font-semibold text-cream hover:bg-plum md:inline-flex"
          >
            Book an Appointment
          </a>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center border border-sand bg-white text-burgundy hover:bg-sand lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu
              className={`h-5 w-5 ${open ? "invisible" : ""}`}
              aria-hidden
            />
            <X
              className={`absolute h-5 w-5 ${open ? "" : "invisible"}`}
              aria-hidden
            />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-sand bg-cream lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="container-site section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-11 px-2 py-3 text-base font-medium text-brown hover:bg-sand hover:text-burgundy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.phoneTel}
              className="mt-2 inline-flex min-h-11 items-center justify-center bg-burgundy px-4 py-3 text-sm font-semibold text-cream hover:bg-plum"
              onClick={() => setOpen(false)}
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
