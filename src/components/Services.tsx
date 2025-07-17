import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle, ArrowRight } from 'lucide-react';

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
      color: "from-purple-500 to-purple-600"
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
      color: "from-green-500 to-green-600"
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
      color: "from-blue-500 to-blue-600"
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
      color: "from-indigo-500 to-indigo-600"
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
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: "500+", label: "Profissionais atendidos" },
            { number: "95%", label: "Taxa de sucesso" },
            { number: "5★", label: "Avaliação média" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções personalizadas para impulsionar sua carreira e conquistar as melhores oportunidades do mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900">Destaques:</h4>
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
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
  );
};

export default Services;