import { Quote } from "lucide-react";
import { business } from "@/data/business";
import { reviews } from "@/data/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="bg-sand/40 py-14 md:py-20" aria-labelledby="reviews-heading">
      <div className="container-site section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="reviews-heading"
            className="font-display text-3xl text-burgundy md:text-4xl"
          >
            Loved by Local Clients
          </h2>
          <p className="mt-3 text-sm text-brown/70">
            Client feedback themes from local visitors
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <li key={review.id} className="border border-sand bg-white p-6">
              <Quote className="h-5 w-5 text-gold" aria-hidden />
              <blockquote className="mt-3 text-base leading-relaxed text-brown">
                “{review.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-plum">
                — {review.attribution}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border-2 border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-cream"
          >
            Read More Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
