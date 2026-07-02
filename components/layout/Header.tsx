import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center">
          <Image
            src="/logo-moblycar.png"
            alt="MoblyCar"
            width={190}
            height={55}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-300 transition hover:text-green-400">
            Passageiros
          </a>

          <a href="#" className="text-sm font-medium text-gray-300 transition hover:text-green-400">
            Motoristas
          </a>

          <a href="#" className="text-sm font-medium text-gray-300 transition hover:text-green-400">
            Empresas
          </a>

          <a href="#" className="text-sm font-medium text-gray-300 transition hover:text-green-400">
            Expansão
          </a>

          <a href="#" className="text-sm font-medium text-gray-300 transition hover:text-green-400">
            Blog
          </a>

          <a
            href="#"
            className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-500"
          >
            Baixar App
          </a>
        </nav>

        <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}