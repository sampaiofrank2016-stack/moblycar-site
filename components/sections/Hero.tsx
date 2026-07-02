import HeroContent from "../hero/HeroContent";
import HeroPhone from "../hero/HeroPhone";

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A]">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_35%)]" />

      <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroPhone />

      </div>

    </section>
  );
}