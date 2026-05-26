import { Github, Mail, Code2, Shield, Database } from 'lucide-react';
import { personalInfo } from '@/data/personal-info';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-wine-100 text-wine-800 rounded-full text-sm font-medium">
            Bienvenido a mi portafolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hola, soy <span className="text-wine-800">Adriana Martinez</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {personalInfo.career}
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
            {personalInfo.description}
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition shadow-md"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adriana.mafu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-wine-800 text-white rounded-full hover:bg-wine-950 transition shadow-md"
            >
              <Mail className="w-5 h-5" />
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="bg-white/60 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Áreas de Interés
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-wine-50 hover:bg-wine-100 transition border border-wine-300/40 shadow-sm">
              <Shield className="w-12 h-12 text-wine-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ciberseguridad</h3>
              <p className="text-gray-600">
                Apasionada por la seguridad y la protección de sistemas
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-wine-50 hover:bg-wine-100 transition border border-wine-300/40 shadow-sm">
              <Code2 className="w-12 h-12 text-wine-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Desarrollo Full Stack</h3>
              <p className="text-gray-600">
                Construcción de aplicaciones web modernas y escalables
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-wine-50 hover:bg-wine-100 transition border border-wine-300/40 shadow-sm">
              <Database className="w-12 h-12 text-wine-600 mx-auto mb-4" />
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

          <div className="flex flex-wrap justify-center gap-3">
            {personalInfo.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white text-gray-700 rounded-full shadow-sm border border-wine-300/50 hover:border-wine-600 hover:shadow-md transition text-base font-medium"
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
