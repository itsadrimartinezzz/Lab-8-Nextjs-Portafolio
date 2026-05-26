import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Diego Rivas</h3>
            <p className="text-gray-400">
              Desarrollador Full Stack apasionado por la ciberseguridad y las tecnologías web.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Inicio</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">Sobre Mí</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition">Proyectos</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/itsadrimartinezzz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a 
                href="mailto:drivas@inforumsol.com"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Diego Rivas. Portafolio desarrollado con Next.js</p>
        </div>
      </div>
    </footer>
  );
}
