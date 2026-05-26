import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              DR
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              Sobre Mí
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
              Proyectos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
