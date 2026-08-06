import { Clock, HeartHandshake, Sparkles, Wind } from "lucide-react";
import { whyChoosePoints } from "@/data/whyChoose";

const icons = {
  neat: Sparkles,
  gentle: HeartHandshake,
  clean: Wind,
  efficient: Clock,
} as const;

export function WhyChoose() {
  return (
    <section
      className="bg-burgundy py-14 text-cream md:py-20"
      aria-labelledby="why-heading"
    >
      <div className="container-site section-pad">
        <h2
          id="why-heading"
          className="font-display mx-auto max-w-3xl text-center text-3xl md:text-4xl"
        >
          A Braiding Experience You Can Look Forward To
        </h2>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoosePoints.map((point) => {
            const Icon = icons[point.id as keyof typeof icons];
            return (
              <li key={point.id}>
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} aria-hidden />
                <h3 className="font-display mt-4 text-xl">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/90">
                  {point.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
