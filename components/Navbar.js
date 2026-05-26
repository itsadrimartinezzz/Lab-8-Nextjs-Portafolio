import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-wine-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-wine-800 hover:text-wine-600 transition">
              AM
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
