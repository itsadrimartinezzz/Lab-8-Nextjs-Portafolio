import { projects } from '@/data/personal-info';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Mis Proyectos
        </h1>
        <p className="text-wine-600 text-center mb-4">Trabajos realizados durante el curso</p>
        <p className="text-lg text-gray-500 mb-12 text-center max-w-2xl mx-auto">
          Algunos trabajos realizados durante la clase de Sistemas y Tecnologías Web
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
