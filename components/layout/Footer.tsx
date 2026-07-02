import {
  Car,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
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

              <li>Passageiros</li>

              <li>Motoristas</li>

              <li>Empresas</li>

              <li>Segurança</li>

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
                (64) xxxx-xxxx
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

            <div className="flex gap-5">

              <Facebook className="h-7 w-7 cursor-pointer text-gray-400 transition hover:text-green-500" />

              <Instagram className="h-7 w-7 cursor-pointer text-gray-400 transition hover:text-green-500" />

              <Linkedin className="h-7 w-7 cursor-pointer text-gray-400 transition hover:text-green-500" />

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">

          © 2026 MoblyCar. Todos os direitos reservados.

        </div>

      </div>
    </footer>
  );
}