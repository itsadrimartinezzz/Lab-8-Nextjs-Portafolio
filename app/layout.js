import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adriana Martinez Fuentes - Portafolio',
  description: 'Portafolio personal de Adriana Martinez Fuentes - Estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de Información en la Universidad del Valle de Guatemala con un gran interés en ciberseguridad y analisis de datos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
