import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Passengers from "@/components/sections/Passengers";
import Drivers from "@/components/sections/Drivers";
import WhyMoblyCar from "@/components/sections/WhyMoblyCar";
import Companies from "@/components/sections/Companies";
import MapPresence from "@/components/sections/MapPresence";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Passengers />
      <Drivers />
      <WhyMoblyCar />
      <Companies />
      <MapPresence />
    </>
  );
}