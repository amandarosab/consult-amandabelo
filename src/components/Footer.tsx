import React from 'react';
import { Mail, Linkedin, MapPin, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/5511973483811?text=${encodeURIComponent("Olá! Vi seu site e gostaria de mais informações.")}`;
  const emailUrl = "mailto:amandabelo.contato@outlook.com";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes sociais</h3>
            <p className="space-y-2 text-gray-300"></p>
            <div className="flex space-x-4">
              <a href={emailUrl} className="text-gray-300 hover:text-green-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/amandarbelo-hrbp/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/seu-usuario-aqui" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
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
              {/* WhatsApp clicável */}
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">(11) 97348-3811</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Itaquaquecetuba - SP</span>
              </div>
              {/* E-mail clicável */}
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href={emailUrl} className="hover:text-green-400 transition-colors break-all">amandabelo.contato@outlook.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Amanda Belo. Todos os direitos reservados. Desenvolvido por <a href="https://loscoders.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:underline">Los Coders</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;