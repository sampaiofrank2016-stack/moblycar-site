import Image from "next/image";

export default function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-[520px] w-[520px] rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative rotate-[-6deg] transition duration-500 hover:rotate-0">
        <div className="rounded-[55px] bg-black p-[7px] shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
          <div className="relative overflow-hidden rounded-[48px] bg-black">
            <div className="absolute left-1/2 top-3 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />

            <Image
              src="/app-home.jpeg"
              alt="Aplicativo MoblyCar"
              width={390}
              height={844}
              priority
              className="block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}