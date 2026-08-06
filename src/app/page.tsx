import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickInfo } from "@/components/QuickInfo";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickInfo />
        <Services />
        <WhyChoose />
        <Gallery />
        <About />
        <Reviews />
        <AppointmentCTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
