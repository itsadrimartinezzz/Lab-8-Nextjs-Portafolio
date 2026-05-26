'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/personal-info';
import { Mail, Github, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mensaje de ${formData.name}`);
    const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=adriana.mafu@gmail.com&su=${subject}&body=${body}`, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Contacto
        </h1>
        <p className="text-wine-600 text-center mb-4">Hablemos</p>
        <p className="text-lg text-gray-500 mb-12 text-center">
          ¿Tienes algún proyecto en mente? ¡Hablemos!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h2>

            <div className="space-y-5">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-wine-800 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email Universitario</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-wine-600 transition"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-wine-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email Personal</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.personalEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-wine-600 transition"
                  >
                    {personalInfo.personalEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Github className="w-6 h-6 text-gray-800 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-wine-600 transition"
                  >
                    {personalInfo.github.replace('https://github.com/', '@')}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-wine-50 rounded-xl border border-wine-300/40">
              <p className="text-sm text-gray-700">
                <strong>Universidad:</strong> {personalInfo.university}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Carrera:</strong> {personalInfo.career}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-wine-300/40 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíame un Mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-wine-300/50 rounded-xl focus:ring-2 focus:ring-wine-600 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-wine-300/50 rounded-xl focus:ring-2 focus:ring-wine-600 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-wine-300/50 rounded-xl focus:ring-2 focus:ring-wine-600 focus:border-transparent outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-wine-800 text-white rounded-full hover:bg-wine-950 transition shadow-md"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
