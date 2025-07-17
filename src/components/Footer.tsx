import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Carreira Plus</h3>
            <p className="text-gray-300 mb-6">
              Transformando carreiras e conectando talentos com oportunidades excepcionais.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contato@carreiraplus.com" className="text-gray-300 hover:text-green-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Otimização de LinkedIn</li>
              <li>Otimização de Currículo</li>
              <li>Preparação para Entrevistas</li>
              <li>Mentoria de Carreira</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@carreiraplus.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Carreira Plus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;