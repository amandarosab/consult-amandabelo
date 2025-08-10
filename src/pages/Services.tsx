import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle } from 'lucide-react';

interface ServicesProps {
  isPage?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isPage = false }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const whatsappNumber = "5511973483811";

  const services = [
    {
      id: "otimizacao-linkedin",
      title: "Otimização Estratégica de LinkedIn",
      price: "R$ 80,00",
      description: "Aumente sua visibilidade para recrutadores e transforme seu perfil em uma poderosa ferramenta de marketing pessoal.",
      highlights: [
        "Título com palavras-chave",
        "Reescrita do 'Sobre' com foco na sua narrativa profissional",
        "Otimização das suas experiências com foco em resultados",
        "Configuração estratégica do seu perfil"
      ],
      duration: "2-3 dias úteis",
      includes: "Análise completa + Reescrita + Revisão",
      popular: true
    },
    {
      id: "otimizacao-curriculo",
      title: "Otimização de Currículo (Foco em ATS)",
      price: "R$ 60,00",
      description: "Garanta que seu currículo passe pelos filtros automáticos (ATS) e chegue às mãos dos recrutadores.",
      highlights: [
        "Formato otimizado para softwares e humanos",
        "Inserção de palavras-chave estratégicas",
        "Reestruturação das experiências para focar em impacto",
        "Foco em resultados mensuráveis"
      ],
      duration: "1-2 dias úteis",
      includes: "Reformulação completa + Template profissional",
      popular: true
    },
    {
      id: "preparacao-entrevistas",
      title: "Preparação para Entrevista Comportamental",
      price: "R$ 90,00",
      description: "Desenvolva confiança e aprenda a responder de forma estratégica, comunicando seu valor de forma clara.",
      highlights: [
        "Simulação individual online",
        "Aplicação de técnicas de storytelling",
        "Feedback direcionado para performance",
        "Estratégias de comunicação eficaz"
      ],
      duration: "1 sessão de 90min",
      includes: "Simulação + Feedback + Material de apoio",
      popular: false
    },
    {
      id: "preparacao-entrevista-tecnica",
      title: "Preparação para Entrevista Técnica",
      price: "R$ 95,00",
      description: "Demonstre sua expertise com segurança e articule seu raciocínio técnico de forma eficaz.",
      highlights: [
          "Sessão focada em temas da sua área",
          "Simulação de desafios reais do mercado",
          "Estratégias para comunicar conhecimento",
          "Preparação para live coding"
      ],
      duration: "1 sessão de 120min",
      includes: "Simulação + Desafios práticos + Feedback técnico",
      popular: false
    },
    {
      id: "mentoria-carreira",
      title: "Mentoria de Carreira Personalizada",
      price: "R$ 120,00",
      description: "Um programa individual para mapear seus objetivos e criar um plano de ação claro para acelerar sua carreira.",
      highlights: [
        "Processo estruturado com diagnóstico de carreira",
        "Análise SWOT personalizada",
        "Desenvolvimento de plano de ação",
        "Metas SMART para crescimento"
      ],
      duration: "2 sessões de 90min",
      includes: "Diagnóstico + Plano de ação + Acompanhamento",
      popular: false
    }
  ];

  return (
    <div className={isPage ? "pt-20" : ""}>
      
      {isPage && (
        <section className="py-20 bg-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossos serviços
              </h1>
              <p className="text-xl md:text-1xl text-purple-200 max-w-2xl mx-auto">
                Quero te ajudar a conquistar melhores oportunidades de carreira!
              </p>
            </motion.div>
          </div>
        </section>
      )}

      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => {
              const isPopular = service.popular;
              const ringColor = isPopular ? 'ring-brand-green' : 'ring-gray-200';
              const textColor = isPopular ? 'text-brand-green' : 'text-purple-700';
              const buttonBgColor = isPopular ? 'bg-brand-green' : 'bg-purple-700';
              
              const whatsappMessage = `Olá! Quero saber como contratar o serviço: ${service.title}`;
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

              return (
                <motion.div
                  id={service.id}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl ring-1 ${ringColor} shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2`}
                >
                  <div className="p-8">
                    {/* MUDANÇA: 'items-stretch' força as colunas a terem a mesma altura */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                      
                      {/* Coluna 1: Título e Descrição */}
                      <div className="md:col-span-1">
                        {isPopular && (
                          <span className="inline-block bg-brand-green text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            Popular
                          </span>
                        )}
                        <h3 className={`text-2xl font-bold ${textColor}`}>
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                          {service.description}
                        </p>
                      </div>

                      {/* Coluna 2: Destaques */}
                      <div className="md:col-span-1">
                        <h4 className="font-semibold text-gray-800 mb-3">Destaques:</h4>
                        <ul className="space-y-2">
                          {service.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0 mr-2" />
                              <span className="text-gray-700 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Coluna 3: Preço e Botão */}
                      {/* MUDANÇA: Adicionamos flexbox para controlar o alinhamento interno */}
                      <div className="md:col-span-1 text-center md:text-right flex flex-col justify-between">
                        <div>
                            <p className={`text-4xl font-bold ${textColor} mb-4`}>{service.price}</p>
                            <div className="text-sm text-gray-500 mb-4">
                            <p>{service.duration}</p>
                            <p>{service.includes}</p>
                            </div>
                        </div>
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block w-full ${buttonBgColor} text-center text-white py-3 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105`}
                        >
                          Contratar serviço
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* ... */}
    </div>
  );
};

export default Services;