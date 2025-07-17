import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from '../components/ContactForm';
import { Mail, Linkedin, MapPin, Clock, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@carreiraplus.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(11) 99999-9999",
      description: "Atendimento de seg. à sex."
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "/in/carreiraplus",
      description: "Conecte-se conosco"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, Brasil",
      description: "Atendimento online"
    }
  ];

  const workingHours = [
    { day: "Segunda à Sexta", hours: "9:00 - 18:00" },
    { day: "Sábado", hours: "9:00 - 14:00" },
    { day: "Domingo", hours: "Fechado" }
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
              Entre em <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Vamos conversar sobre seus objetivos de carreira e como podemos ajudar você a alcançá-los
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua <span className="text-purple-600">Mensagem</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Preencha o formulário abaixo e entraremos em contato em breve. 
                Estamos aqui para ajudar você a transformar sua carreira.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de <span className="text-purple-600">Contato</span>
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-purple-600 font-medium">{info.content}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-600" />
                  Horário de Atendimento
                </h4>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-2">Precisa de uma resposta rápida?</h4>
                <p className="text-purple-100 mb-4">
                  Entre em contato via WhatsApp para atendimento imediato durante o horário comercial.
                </p>
                <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Chamar no WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas <span className="text-purple-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo leva para ver resultados?",
                answer: "Os resultados variam conforme o serviço, mas geralmente nossos clientes começam a ver melhorias em suas buscas por emprego dentro de 2-4 semanas após a otimização de perfil."
              },
              {
                question: "Os serviços são personalizados para minha área?",
                answer: "Sim! Todos os nossos serviços são 100% personalizados para sua área de atuação, nível de experiência e objetivos profissionais específicos."
              },
              {
                question: "Posso contratar mais de um serviço?",
                answer: "Claro! Oferecemos pacotes combinados com desconto. Entre em contato para conhecer nossas opções e encontrar a melhor combinação para suas necessidades."
              },
              {
                question: "Oferecem garantia de resultados?",
                answer: "Garantimos a qualidade do nosso trabalho. Se não ficar satisfeito com o resultado, oferecemos revisões gratuitas até que atenda suas expectativas."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;