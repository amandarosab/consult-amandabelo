import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  // MUDANÇA: A lista de depoimentos foi preenchida com todos os itens.
  const testimonials = [
    {
      name: "Gabriely Rodrigues",
      role: "Advogada",
      company: "Ibiaçu Loteamentos",
      content: "A Amanda demonstra expertise em sua área de atuação, além de ser extremamente simpática e profissional. O trabalho que ela fez com o meu Linkedin foi incrível. Super recomendo!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEjD2gGw4rWrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718255222931?e=1755734400&v=beta&t=CXlT_0vmAXm4SBsheLgBjh7-e7xxNFTBlZ8ynisvdoA"
    },
    {
      name: "Ingrid Moraes",
      role: "Analista administrativa e financeira",
      company: "Elo Editora",
      content: "A Amanda é muito atenciosa e rápida. Super recomendo",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEN9gv6WlW2mw/profile-displayphoto-shrink_400_400/B4EZcU7SsiHsAg-/0/1748402777455?e=1755734400&v=beta&t=Hm8W7ShQ6CQRCaZyjxWDpK5Oxs2TLZ3d96bKFENASWg"
    },
    {
      name: "Mario Santos",
      role: "Engenheiro de dados",
      company: "FPFtech",
      content: "Simplesmente sensacional, direta ao ponto, sabe se comunicar bem e realmente agregou muito, recomendo demais o trabalho dela.",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/C5603AQGLNoclVrsylw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1600044857459?e=1755734400&v=beta&t=FOdgqrdmJbH6lYBgy2Kls7R-o7QmYovWhCVJFHBQVGM"
    },
    {
      name: "Shaymon Alvarez",
      role: "Desenvolvedor de software embarcado",
      company: "Stellantis",
      content: "Profissional focada e assertiva sempre em busca da excelência em seus trabalhos. Recomendo fortemente seus serviços!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEkBqiM4yROwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727722100798?e=1755734400&v=beta&t=Xa0_anBmFpIpI77ZLYLdxWnXNrWhodDRckFTVUorxGU"
    },
    {
      name: "Gilcllys Costa",
      role: "Engenheiro de software",
      company: "John Deere",
      content: "Responde rapidamente e sempre preocupada com o cliente perguntando se ele quer mais alguma alteração. Entregou tudo o que prometeu. Super indico o serviço dela, me entregou hoje tudo o que foi acordado no serviço!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQESaVVHVwQI-Q/profile-displayphoto-shrink_400_400/B4DZUbHJn6HIAg-/0/1739916614776?e=1755734400&v=beta&t=6U_C1HrsPTtBz5Q2dCSrjAecXfgLzEUcXUmFTxz6Gqg"
    },
    {
      name: "Jeano Belo Dourado",
      role: "Instrutor de Power BI",
      company: "BI Solução",
      content: "Estou extremamente satisfeito com o excelente trabalho que a Amanda realizou para mim. Com sua dedicação, habilidade e compromisso, ela transformou completamente meu LinkedIn e currículo.",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEQjU5gFqezHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718997683669?e=1755734400&v=beta&t=tgC_ibY2GO_8GTdnxWpqHDcaBfauE85QfNgRaqy9NkI"
    },
    {
      name: "Alanna Gabriele da Silva",
      role: "Engenheira",
      company: "Autônoma",
      content: "Adorei a Amanda, super atenciosa e tive um retorno do meu currículo quase que imediato, em apenas dois dias fui chamada para uma entrevista na área que eu quero. Adorei, recomendo!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGXm445p5MWmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719944484277?e=1755734400&v=beta&t=V3SPN1SBcJg3jHaMYBamv3UvY4VTErXbBxBtGosKIi4"
    },
    {
      name: "Carlos Eduardo Fiuza",
      role: "Engenheiro de software",
      company: "Bcodex",
      content: "Atendimento profissional e dedicado, após aplicação das dicas o resultado foi quase imediato!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFOb3zWc-ZwJw/profile-displayphoto-shrink_400_400/B4DZXawBMqHwAg-/0/1743131776560?e=1755734400&v=beta&t=G2yDfTy7M3s_iEnl5PPlkpPCA2gL1GP7MM-MLZEtvhU"
    },
    {
      name: "Pedro Brantis",
      role: "Engenheiro QA",
      company: "FPFtech",
      content: "O trabalho dela é ágil e eficaz, tive retornos muito rápido com seus serviços",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGSOxYo4GoLhQ/profile-displayphoto-shrink_400_400/B4DZcU2HwUHMAg-/0/1748401421872?e=1755734400&v=beta&t=d09rK45hooOJGgv85SjEi7oKd2hL31FzwQH7iTWeRaU"
    },
  ];

  // MUDANÇA: Adicionamos as funções de navegação
  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const showPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials"
      ref={ref} 
      className="py-20 bg-purple-700"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Histórias reais de transformação e sucesso
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center max-w-lg mx-auto">
          <div className="w-full h-[450px] relative"> 
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white bg-opacity-95 text-gray-800 rounded-2xl p-8 shadow-xl flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-purple-500 opacity-50" />
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4 italic flex-grow">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                      <p className="text-gray-500 text-xs">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-white' : 'bg-white bg-opacity-40'
              }`}
              aria-label={`Ir para o depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;