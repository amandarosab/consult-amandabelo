import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle, ArrowRight, Star, Clock, Users } from 'lucide-react';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Otimização Estratégica de LinkedIn",
      price: "R$ 80,00",
      description: "Aumente sua visibilidade para recrutadores e transforme seu perfil em uma poderosa ferramenta de marketing pessoal. Otimização completa para você atrair as melhores oportunidades.",
      highlights: [
        "Título com palavras-chave",
        "Reescrita do 'Sobre' com foco em narrativa",
        "Otimização das experiências com foco em resultados",
        "Configuração estratégica do perfil"
      ],
      duration: "2-3 dias úteis",
      includes: "Análise completa + Reescrita + Revisão",
      color: "from-purple-500 to-purple-600",
      popular: false
    },
    {
      title: "Otimização de Currículo (Foco em ATS)",
      price: "R$ 50,00",
      description: "Garanta que seu currículo passe pelos filtros automáticos (ATS) e chegue às mãos dos recrutadores. Um CV preparado para gerar mais entrevistas.",
      highlights: [
        "Formato otimizado para softwares e humanos",
        "Inserção de palavras-chave estratégicas",
        "Reestruturação das experiências para focar em impacto",
        "Foco em resultados mensuráveis"
      ],
      duration: "1-2 dias úteis",
      includes: "Reformulação completa + Template profissional",
      color: "from-green-500 to-green-600",
      popular: true
    },
    {
      title: "Preparação para Entrevista Comportamental",
      price: "R$ 70,00",
      description: "Desenvolva confiança e aprenda a responder de forma estratégica, comunicando seu valor de forma clara e convincente em uma sessão de simulação prática.",
      highlights: [
        "Simulação individual online",
        "Aplicação de técnicas de storytelling",
        "Feedback direcionado para performance",
        "Estratégias de comunicação eficaz"
      ],
      duration: "1 sessão de 90min",
      includes: "Simulação + Feedback + Material de apoio",
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      title: "Preparação para Entrevista Técnica",
      price: "R$ 85,00",
      description: "Demonstre sua expertise com segurança e articule seu raciocínio técnico de forma eficaz. Prepare-se para desafios práticos, estudos de caso e live coding.",
      highlights: [
        "Sessão focada em temas da sua área",
        "Simulação de desafios reais do mercado",
        "Estratégias para comunicar conhecimento",
        "Preparação para live coding"
      ],
      duration: "1 sessão de 120min",
      includes: "Simulação + Desafios práticos + Feedback técnico",
      color: "from-indigo-500 to-indigo-600",
      popular: false
    },
    {
      title: "Mentoria de Carreira Personalizada",
      price: "R$ 120,00",
      description: "Um programa individual para mapear seus objetivos e criar um plano de ação claro para acelerar sua carreira. Ideal para quem busca clareza, transição de área ou superar a estagnação.",
      highlights: [
        "Processo estruturado com diagnóstico de carreira",
        "Análise SWOT personalizada",
        "Desenvolvimento de plano de ação",
        "Metas SMART para crescimento"
      ],
      duration: "2 sessões de 90min",
      includes: "Diagnóstico + Plano de ação + Acompanhamento",
      color: "from-purple-500 to-pink-500",
      popular: true
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análise Inicial",
      description: "Avaliamos seu perfil atual e identificamos oportunidades de melhoria."
    },
    {
      step: "02",
      title: "Estratégia Personalizada",
      description: "Desenvolvemos um plano específico para seus objetivos e área de atuação."
    },
    {
      step: "03",
      title: "Implementação",
      description: "Aplicamos as melhorias e otimizações com foco em resultados."
    },
    {
      step: "04",
      title: "Acompanhamento",
      description: "Monitoramos os resultados e fazemos ajustes quando necessário."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Soluções personalizadas para impulsionar sua carreira e conquistar as melhores oportunidades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group relative ${
                  service.popular ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors pr-4">
                      {service.title}
                    </h3>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent whitespace-nowrap`}>
                      {service.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Destaques:</h4>
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-8 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Prazo: {service.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Inclui: {service.includes}</span>
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2`}>
                    <span>Contratar Serviço</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como <span className="text-purple-600">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado e eficiente para garantir os melhores resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;