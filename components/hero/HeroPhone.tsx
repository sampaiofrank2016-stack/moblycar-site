import Image from "next/image";

export default function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow Principal */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-green-500/20 blur-[120px]" />

      {/* Glow Azul */}
      <div className="absolute right-4 top-10 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />

      {/* Glow Inferior */}
      <div className="absolute bottom-0 left-6 h-44 w-44 rounded-full bg-green-400/15 blur-3xl" />

      {/* Telefone */}
      <div className="relative animate-float rotate-[-8deg]">

        {/* Sombra */}
        <div className="absolute inset-0 translate-y-8 scale-95 rounded-[56px] bg-black/50 blur-3xl" />

        {/* Corpo */}
        <div className="rounded-[54px] bg-gradient-to-b from-[#6d6d70] via-[#2b2b2d] to-[#111111] p-[4px] shadow-[0_40px_100px_rgba(0,0,0,.65)]">

          <div className="relative overflow-hidden rounded-[50px] bg-black">

            {/* Dynamic Island */}

            <div className="absolute left-1/2 top-3 z-30 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />

            {/* Reflexo lateral */}

            <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-white/20 to-transparent" />

            {/* Print */}

            <Image
              src="/app-home.jpeg"
              alt="Aplicativo MoblyCar"
              width={285}
              height={620}
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