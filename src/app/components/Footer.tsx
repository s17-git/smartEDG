import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-nb.png"
                alt="Guinea Smart Electricity Logo"
                width={40}
                height={40}
                className="object-contain bg-white"
              />
            </div>

            <p className="text-sm text-gray-600">
              L'innovation IA au service de la relation client EDG en Guinée
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.66 10.66 0 01-10 10z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16.5 7.5a2 2 0 11-4 0 2 2 0 014 0z"
                    fill="white"
                  ></path>
                  <path
                    d="M6.5 12a5.5 5.5 0 1011 0 5.5 5.5 0 01-11 0z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Liens rapides</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-900 transition"
                  href="/client"
                >
                  Espace Citoyen
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-900 transition"
                  href="/manager"
                >
                  Espace Manager
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-900 transition"
                  href="/technician"
                >
                  Espace Technicien
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-900 transition"
                  href="/support"
                >
                  Support Client EDG
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-900 transition"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-lg">🏢</span>
                <span className="text-gray-600">Conakry, Guinée</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">✉️</span>
                <a
                  href="mailto:contact@guineasm.gn"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  contact@guineasm.gn
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">📞</span>
                <a
                  href="tel:+224"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  +224 XX XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <div className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Guinea Smart Electricity - Électricité
            Intelligente de Guinée
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm">
            <Link
              className="text-gray-600 hover:text-gray-900 transition"
              href="/privacy"
            >
              Politique de confidentialité
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 transition"
              href="/terms"
            >
              Conditions d'utilisation
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 transition"
              href="/legal"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
