import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(11) 97348-3811",
      link: `https://wa.me/5511973483811?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de carreira.")}`
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "in/amandarbelo-hrbp",
      link: "https://www.linkedin.com/in/amandarbelo-hrbp"
    },
    { icon: Mail,
      title: "E-mail",
      content: "amandabelo.contato@outlook.com",
      link: "mailto:amandabelo.contato@outlook.com"
    },
  ];

  const workingHours = [
    {day: "Segunda à sexta-feira", hours: "18:00 - 23:00" },
    {day: "Sábado", hours: "10:00 - 14:00" },
    {day: "Domingo", hours: "Fechado" }
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
              Entre em contato
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
              Vamos conversar sobre seus objetivos de carreira e como posso ajudar você a alcançá-los.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        {/* MUDANÇA: Aumentamos a largura máxima para acomodar as duas colunas */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* MUDANÇA: Criamos uma grelha para dividir o conteúdo em duas colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Coluna 1: Informações de Contato */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Informações de contato
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-purple-700 p-3 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-700 font-medium hover:underline break-all"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coluna 2: Horário de Atendimento */}
                <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Horário de atendimento
                  </h3>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    {/* MUDANÇA: Trocamos 'space-y-3' por 'grid' para um alinhamento perfeito */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {workingHours.map((schedule, index) => (
                        <React.Fragment key={index}>
                          <span className="text-gray-600 text-left">{schedule.day}</span>
                          <span className="font-medium text-gray-900 text-right">{schedule.hours}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;