import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'INÍCIO', href: '/' },
    { name: 'SOBRE', href: '/sobre' },
    { name: 'SERVIÇOS', href: '/servicos' },
    { name: 'FEEDBACKS', href: '/#testimonials' },
    { name: 'CONTATO', href: '/contato' },
  ];

  return (
    <>
      <header className="fixed w-full z-50 bg-white shadow-md h-20">
        <div className="max-w-7xl mx-auto pl-2 pr-4 sm:px-4 lg:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            
            <Link to="/">
              <img src={logoImg} alt="Logo Amanda Belo Consultoria" className="h-12 w-auto" />
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  // MUDANÇA: A lógica para determinar o link ativo foi corrigida
                  className={`font-semibold transition-colors text-sm tracking-wider ${
                    location.pathname + location.hash === item.href
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Botão do Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800 z-50"
            >
              {isMenuOpen ? <X className="h-7 w-7 text-white" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay para Mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-purple-700 bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl font-bold tracking-wider"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;