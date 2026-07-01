export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-black">Mobly</span>
          <span className="text-green-600">Car</span>
        </a>

        {/* Navegação */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-gray-700 transition hover:text-black">
            Passageiros
          </a>

          <a href="#" className="text-sm text-gray-700 transition hover:text-black">
            Motoristas
          </a>

          <a href="#" className="text-sm text-gray-700 transition hover:text-black">
            Empresas
          </a>

          <a href="#" className="text-sm text-gray-700 transition hover:text-black">
            Expansão
          </a>

          <a href="#" className="text-sm text-gray-700 transition hover:text-black">
            Blog
          </a>

          <a href="#" className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700">
            Baixar App
          </a>
        </nav>
      </div>
    </header>
  );
}