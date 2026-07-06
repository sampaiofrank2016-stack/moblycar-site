import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo-moblycar.png"
            alt="MoblyCar"
            width={190}
            height={55}
            priority
          />
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/passageiros"
            className="text-sm font-medium text-gray-300 transition hover:text-green-400"
          >
            Passageiros
          </Link>

          <Link
            href="/motoristas"
            className="text-sm font-medium text-gray-300 transition hover:text-green-400"
          >
            Motoristas
          </Link>

          <Link
            href="/empresas"
            className="text-sm font-medium text-gray-300 transition hover:text-green-400"
          >
            Empresas
          </Link>

          <Link
            href="/sobre"
            className="text-sm font-medium text-gray-300 transition hover:text-green-400"
          >
            Sobre
          </Link>

          {/* Blog ainda será desenvolvido */}
          <span className="cursor-default text-sm font-medium text-gray-500">
            Blog
          </span>

          <Link
            href="/baixar"
            className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-500"
          >
            Baixar App
          </Link>
        </nav>

        {/* Mobile */}

        <Link
          href="/baixar"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white md:hidden"
        >
          Baixar
        </Link>
      </div>
    </header>
  );
}