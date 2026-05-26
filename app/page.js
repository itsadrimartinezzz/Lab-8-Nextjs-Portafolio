import { Github, Mail, Code2, Shield, Database } from 'lucide-react';
import { personalInfo } from '@/data/personal-info';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hola, soy <span className="text-blue-600">Diego Rivas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            {personalInfo.career}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {personalInfo.description}
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Mail className="w-5 h-5" />
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Áreas de Interés
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ciberseguridad</h3>
              <p className="text-gray-600">
                Apasionado por la seguridad informática y la protección de sistemas
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
              <Code2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Desarrollo Full Stack</h3>
              <p className="text-gray-600">
                Construcción de aplicaciones web modernas y escalables
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition">
              <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bases de Datos</h3>
              <p className="text-gray-600">
                Diseño y optimización de sistemas de almacenamiento de datos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tecnologías que Manejo
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {personalInfo.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition text-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
