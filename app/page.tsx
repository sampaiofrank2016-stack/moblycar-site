import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Passengers from "@/components/sections/Passengers";
import Drivers from "@/components/sections/Drivers";
import Stats from "@/components/shared/Stats";
import WhyMoblyCar from "@/components/sections/WhyMoblyCar";
import Companies from "@/components/sections/Companies";
import MapPresence from "@/components/sections/MapPresence";
import Security from "@/components/sections/Security";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <HowItWorks />

      <Passengers />

      <Drivers />

      <Stats />

      <WhyMoblyCar />

      <Companies />

      <MapPresence />

      <Security />

      <DownloadCTA />

      <Footer />
    </>
  );
}