"use client";
import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Benefits } from "@/components/Benefits";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Gallery />
        <Services />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <FAQ />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
