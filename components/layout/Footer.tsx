import {
  Car,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Marca */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <Car className="h-9 w-9 text-green-500" />

              <span className="text-3xl font-bold">
                Mobly<span className="text-green-500">Car</span>
              </span>

            </div>

            <p className="leading-8 text-gray-400">
              Plataforma brasileira de mobilidade urbana conectando passageiros,
              motoristas e empresas com tecnologia, segurança e praticidade.
            </p>

          </div>

          {/* Empresa */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Empresa
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="cursor-pointer transition hover:text-green-500">
                Passageiros
              </li>

              <li className="cursor-pointer transition hover:text-green-500">
                Motoristas
              </li>

              <li className="cursor-pointer transition hover:text-green-500">
                Empresas
              </li>

              <li className="cursor-pointer transition hover:text-green-500">
                Segurança
              </li>

            </ul>

          </div>

          {/* Contato */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contato
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-green-500" />
                Itumbiara • GO
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-green-500" />
                (64) XXXX-XXXX
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-green-500" />
                contato@moblycar.com.br
              </div>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Redes Sociais
            </h3>

            <div className="space-y-4">

              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 transition hover:text-green-500"
              >
                <ExternalLink size={18} />
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 transition hover:text-green-500"
              >
                <ExternalLink size={18} />
                Facebook
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 transition hover:text-green-500"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

            <span>
              © 2026 MoblyCar. Todos os direitos reservados.
            </span>

            <span>
              Desenvolvido com ❤️ no Brasil.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}