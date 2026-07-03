import Image from "next/image";

export default function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow Principal */}
      <div className="absolute h-[360px] w-[360px] rounded-full bg-green-500/20 blur-[110px]" />

      {/* Glow Azul */}
      <div className="absolute right-4 top-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />

      {/* Glow Inferior */}
      <div className="absolute bottom-2 left-8 h-36 w-36 rounded-full bg-green-400/15 blur-3xl" />

      {/* Telefone */}
      <div className="relative translate-y-4 rotate-[-8deg] animate-float">

        {/* Sombra */}
        <div className="absolute inset-0 translate-y-6 scale-95 rounded-[52px] bg-black/50 blur-3xl" />

        {/* Corpo */}
        <div className="rounded-[50px] bg-gradient-to-b from-[#6d6d70] via-[#2b2b2d] to-[#111111] p-[4px] shadow-[0_35px_80px_rgba(0,0,0,.60)]">

          <div className="relative overflow-hidden rounded-[46px] bg-black">

            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-3 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

            {/* Reflexo lateral */}
            <div className="absolute left-0 top-0 z-20 h-full w-8 bg-gradient-to-r from-white/20 to-transparent" />

            <Image
              src="/app-home.jpeg"
              alt="Aplicativo MoblyCar"
              width={255}
              height={555}
              priority
              className="block"
            />

            {/* Reflexo Superior */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

          </div>

        </div>

      </div>

    </div>
  );
}