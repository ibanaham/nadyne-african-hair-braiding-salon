import Image from "next/image";

/** PLACEHOLDER about image — replace with authentic salon photography. */
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";

export function About() {
  return (
    <section id="about" className="bg-cream py-14 md:py-20" aria-labelledby="about-heading">
      <div className="container-site section-pad grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
          <Image
            src={ABOUT_IMAGE}
            alt="Close-up of beautifully finished braided hair in a salon setting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
          />
        </div>

        <div>
          <h2
            id="about-heading"
            className="font-display text-3xl text-burgundy md:text-4xl"
          >
            Braiding with Skill, Care and a Personal Touch
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-brown/90 md:text-lg">
            <p>
              Nadyne African Hair Braiding Salon serves clients in Duncanville
              and the surrounding Dallas–Fort Worth area. The salon is focused on
              creating beautiful braided styles in a clean, friendly and
              comfortable environment.
            </p>
            <p>
              Every client deserves to feel listened to, cared for and confident
              in their finished style. Whether you already know exactly what you
              want or need help selecting the right look, the team is ready to
              welcome you.
            </p>
          </div>
          <p className="mt-6 border-l-4 border-gold pl-4 text-base font-semibold text-burgundy md:text-lg">
            Proudly serving Duncanville and the surrounding DFW community.
          </p>
        </div>
      </div>
    </section>
  );
}
