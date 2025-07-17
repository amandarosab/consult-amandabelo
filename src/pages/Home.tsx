import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Target,
      title: "Estratégia Personalizada",
      description: "Cada cliente recebe um plano único baseado em seus objetivos e perfil profissional."
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Mais de 500 profissionais atendidos com sucesso em diversas áreas e níveis hierárquicos."
    },
    {
      icon: Award,
      title: "Resultados Garantidos",
      description: "95% dos nossos clientes conseguem melhores posições ou aumentos salariais em até 6 meses."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Contínuo",
      description: "Acompanhamento e suporte contínuo para garantir seu desenvolvimento profissional."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Mission Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Missão</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Acreditamos que cada profissional tem um potencial único. Nossa missão é desbloquear esse potencial, 
              oferecendo as ferramentas, estratégias e confiança necessárias para conquistar objetivos de carreira 
              ambiciosos e criar um impacto positivo no mundo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;