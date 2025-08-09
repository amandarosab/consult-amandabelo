import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    { icon: Users, number: "100+", label: "Profissionais atendidos" },
    { icon: Award, number: "95%", label: "Taxa de sucesso" },
    { icon: Clock, number: "6+", label: "Anos de experiência" },
    { icon: Heart, number: "100%", label: "Dedicação" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre mim 
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Uma jornada dedicada a transformar carreiras
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFVprX3ZRURVlH2vm1A4k5_i5iUpCIp2BRYzXefr-nxxc2Y-mKLUy-zsavhm6oXttIy2ATLYaMxN8GiL1Bm47-I0j1q30vv5BqxbXoyLenqDkO-F8arbfGGGR6StETQE1CMowRQr7Fd4GgkB1GBib0YsaDe1Jam38hpxjl-y4Uc-AjoDY_DlgsBEgFx8s/w604-h604/5.png"
                alt="Foto da CEO"
                className="rounded-4xl shadow-4xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Minha <span className="text-purple-600">história</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Há mais de 5 anos, descobri minha paixão por ajudar profissionais a alcançarem 
                  seu verdadeiro potencial. Tudo começou quando percebi que muitos talentos 
                  excepcionais estavam sendo negligenciados simplesmente por não saberem como 
                  se posicionar no mercado.
                </p>
                
                <p>
                  Com formação em Recursos Humanos e especialização em Gestão de Carreira, 
                  desenvolvi metodologias únicas que combinam estratégia, psicologia e 
                  marketing pessoal para criar perfis profissionais irresistíveis.
                </p>
                
                <p>
                  Cada cliente que atendo reforça minha convicção de que, com a orientação 
                  correta, qualquer pessoa pode transformar sua carreira e, consequentemente, 
                  sua vida. É isso que me motiva todos os dias.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
                <p className="text-purple-800 font-semibold italic">
                  "Acredito que cada pessoa tem um potencial único. Meu papel é ajudar 
                  você a descobrir, desenvolver e comunicar esse potencial ao mundo."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Resultados que <span className="text-purple-600">falam sozinhos...</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;