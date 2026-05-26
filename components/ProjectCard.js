import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 overflow-hidden hover:shadow-md hover:border-wine-600/50 transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-br from-wine-800 to-wine-600">
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-wine-100 text-wine-800 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.highlights && (
          <ul className="mb-4 space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-wine-600 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-4 pt-2 border-t border-wine-100">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-wine-800 transition text-sm font-medium"
          >
            <Github className="w-4 h-4 mr-1" />
            Repositorio
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-wine-800 transition text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
