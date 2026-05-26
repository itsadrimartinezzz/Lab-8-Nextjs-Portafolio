import { personalInfo } from '@/data/personal-info';
import { Briefcase, Heart, Lightbulb, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Sobre Mí
        </h1>
        <p className="text-center text-wine-600 mb-10">Conóceme un poco más</p>

        {/* Who I Am */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8 mb-6">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-wine-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">¿Quién soy?</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Soy estudiante de {personalInfo.career} en la {personalInfo.university}.
            Me gusta mucho la tecnología y busco constantemente aprender nuevas herramientas y
            metodologías para mejorar como desarrolladora.
          </p>
          <p className="text-gray-700">
            {personalInfo.about.experience}
          </p>
        </section>

        {/* What I Learned */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8 mb-6">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-8 h-8 text-wine-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Aprendizajes del Curso</h2>
          </div>
          <p className="text-gray-700">
            {personalInfo.about.learning}
          </p>
        </section>

        {/* Professional Interests */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8 mb-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-wine-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Intereses Profesionales</h2>
          </div>
          <ul className="space-y-2">
            {personalInfo.about.interests.map((interest, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-wine-600 rounded-full mr-3"></span>
                {interest}
              </li>
            ))}
          </ul>
        </section>

        {/* Favorite Technologies */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8 mb-6">
          <div className="flex items-center mb-4">
            <Heart className="w-8 h-8 text-wine-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Tecnologías Favoritas</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {personalInfo.about.favoriteTechnologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-wine-100 text-wine-800 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Areas to Learn */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-wine-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Áreas en las que me gustaria aprender</h2>
          </div>
          <ul className="space-y-2">
            {personalInfo.about.areasToLearn.map((area, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-wine-300 rounded-full mr-3"></span>
                {area}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
