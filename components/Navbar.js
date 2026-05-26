import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-wine-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-wine-800 hover:text-wine-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
              </svg>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-wine-600 transition font-medium">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-wine-600 transition font-medium">
              Sobre Mí
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-wine-600 transition font-medium">
              Proyectos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-wine-600 transition font-medium">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
