import React from 'react';
// MUDANÇA: Importamos os ícones de Instagram e Telefone (para o WhatsApp)
import { Mail, Linkedin, MapPin, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Consult Amanda Belo</h3>
            <p className="text-gray-300 mb-6">
              Transformando carreiras e conectando talentos com oportunidades excepcionais.
            </p>
            {/* MUDANÇA: Adicionamos o ícone e o link para o Instagram */}
            <div className="flex space-x-4">
              <a href="mailto:amandabelo.contato@outlook.com" className="text-gray-300 hover:text-green-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/amandarbelo-hrbp/" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/consult.amandabelo" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/servicos#otimizacao-linkedin" className="hover:text-green-400 transition-colors">Otimização de LinkedIn</Link>
              </li>
              <li>
                <Link to="/servicos#otimizacao-curriculo" className="hover:text-green-400 transition-colors">Otimização de Currículo</Link>
              </li>
              <li>
                <Link to="/servicos#preparacao-entrevistas" className="hover:text-green-400 transition-colors">Preparação para Entrevistas</Link>
              </li>
              <li>
                <Link to="/servicos#mentoria-carreira" className="hover:text-green-400 transition-colors">Mentoria de Carreira</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              {/* MUDANÇA: Adicionamos a linha de contato para o WhatsApp */}
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 97348-3811</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Itaquaquecetuba - SP, Brasil</span>
              </div>
               <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>amandabelo.contato@outlook.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Consult Amanda Belo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;