import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
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
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.highlights && (
          <ul className="mb-4 space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex gap-4">
          <a 
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition"
          >
            <Github className="w-5 h-5 mr-2" />
            Repositorio
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
