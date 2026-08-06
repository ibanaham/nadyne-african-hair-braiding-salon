"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const baseId = useId();

  return (
    <section id="faq" className="bg-white py-14 md:py-20" aria-labelledby="faq-heading">
      <div className="container-site section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="font-display text-3xl text-burgundy md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-brown/90">
            Helpful answers to common questions. When details need confirming,
            please call the salon directly.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-sand border border-sand">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={faq.id} className="bg-cream/40">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-burgundy hover:bg-sand/50 md:px-5"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 pb-5 text-sm leading-relaxed text-brown/90 md:px-5 md:text-base"
                  >
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
