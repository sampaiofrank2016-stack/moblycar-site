import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Passengers from "@/components/sections/Passengers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Passengers />
    </>
  );
}