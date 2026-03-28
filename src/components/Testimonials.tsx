import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      name: "Shaymon Alvarez",
      role: "Desenvolvedor de software embarcado",
      company: "Stellantis",
      content: "Profissional focada e assertiva sempre em busca da excelência em seus trabalhos. Recomendo fortemente seus serviços!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEkBqiM4yROwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727722100798?e=1776297600&v=beta&t=eCRvZkiYIOeJs2-nty6zR7msYJ5Igruzg0nkzIvZXFg"
    },
     {
      name: "Julis Araujo",
      role: "Engenheiro de software",
      company: "Bcodex",
      content: "O trabalho da Amanda me deu resultado imediato. No dia seguinte aos ajustes dela em meu LinkedIn já comecei a receber novas propostas (inclusive internacionais). Valeu a pena demais!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGH34NrzHxpPw/profile-displayphoto-scale_400_400/B4DZi_h73bH0Ag-/0/1755560001560?e=1776297600&v=beta&t=R2uSuxFmhorf7u53ymheY-6ypm158hHcVG457yd_Bro"
    },
    {
      name: "Gabriely Rodrigues",
      role: "Advogada",
      company: "Ibiaçu Loteamentos",
      content: "A Amanda demonstra expertise em sua área de atuação, além de ser extremamente simpática e profissional. O trabalho que ela fez com o meu Linkedin foi incrível. Super recomendo!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEjD2gGw4rWrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718255222931?e=1776297600&v=beta&t=10YlF7v0Dww9xCB59JUVWrpsDzLcow5-oR-fdGfZCpU"
    },
    {
      name: "Monik Rangel",
      role: "Product manager",
      company: "Digix",
      content: "Amanda foi incrível, trouxe uma análise completa que me ajudou a desenvolver meu case e ir para entrevista muito mais preparada! Já indiquei pra várias amigas",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFL6DcqSrVt6w/profile-displayphoto-shrink_400_400/B4DZVi8I1HGcAg-/0/1741121688023?e=1776297600&v=beta&t=lbtRCY4uNGk1RmfcwxWP38JpKHp3jH0qPrPPXnTv5mg"
    },
    {
      name: "Jackson Miranda",
      role: "Especialista em infraestrutura e TI",
      company: "Sonda",
      content: "As sugestões fizeram total sentido, melhorias práticas para deixar meu perfil mais estratégico e atrativo. Agradeço pelo cuidado e pela qualidade do seu trabalho!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHa1inZ3PYi9g/profile-displayphoto-scale_400_400/B4DZnqO8TBGQAg-/0/1760571410249?e=1776297600&v=beta&t=X9Ll3mSNCbdFUjYFC5q4_h7AVNenCiGMLhHrmQDGu1I"
    },
    {
      name: "Gilcllys Costa",
      role: "Engenheiro de software",
      company: "John Deere",
      content: "Responde rapidamente e sempre preocupada com o cliente perguntando se ele quer mais alguma alteração. Entregou tudo o que prometeu. Super indico o serviço dela, me entregou hoje tudo o que foi acordado no serviço!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQESaVVHVwQI-Q/profile-displayphoto-shrink_400_400/B4DZUbHJn6HIAg-/0/1739916614776?e=1776297600&v=beta&t=w-jZAv0arq2hUgPq-DH5GtcFCT5unFtwk24-4WRFx8s"
    },
    {
      name: "Yasmin Bueno",
      role: "Executiva de vendas",
      company: "GL Events",
      content: "Estou grata por toda a atenção durante a prestação de serviços da Amanda, ela demonstrou muito conhecimento e domínio no assunto, e, ainda mais importante, seus serviços já mostraram resultados positivos!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHlUsKdULyyyA/profile-displayphoto-scale_400_400/B4DZld37K2JQAg-/0/1758216567134?e=1776297600&v=beta&t=SaUqU0URTx3oZPy7bLw5Zm_z59ky9JFGTIsjpcoE27M"
    },
    {
      name: "Pedro Brantis",
      role: "Engenheiro QA",
      company: "FPFtech",
      content: "O trabalho dela é ágil e eficaz, tive retornos muito rápido com seus serviços",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGSOxYo4GoLhQ/profile-displayphoto-shrink_400_400/B4DZcU2HwUHMAg-/0/1748401421872?e=1776297600&v=beta&t=toIiohfuq4yiGdcRrqj7yUIvtK51sBH_gOFklro9mGk"
    },
    {
      name: "Carlos Eduardo Fiuza",
      role: "Engenheiro de software",
      company: "Bcodex",
      content: "Atendimento profissional e dedicado, após aplicação das dicas o resultado foi quase imediato!",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG_h2-r2IyZcQ/profile-displayphoto-scale_400_400/B4DZzzavkmIkAg-/0/1773610401886?e=1776297600&v=beta&t=xKXq4nNirBOnkbbTEn7nM96xxj-MbrIY0uC1OUqTij0"
    },
     {
      name: "Samuel Silva",
      role: "Engenheiro de dados",
      company: "INDT - Instituto de Desenvolvimento Tecnológico ",
      content: "500 carácter são difíceis de dizer o quanto o que ela fez no meu perfil me ajudou a encontrar minha vaga, muito profissional e competente.",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEW2Vm3zh-qnA/profile-displayphoto-scale_400_400/B4DZh7Lr5gH8Ag-/0/1754413318349?e=1776297600&v=beta&t=R6ylGlnfvLT_am9vn5vOkpCOSlLTuqNc8-KDN678X5w"
    },
    {
      name: "Cauet Delfim",
      role: "Técnico em manutenção de máquinas",
      company: "SWM International",
      content: "Foi excelente ótimo trabalho que ela fez no meu perfil",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFVgUNVMsMeJg/profile-displayphoto-scale_400_400/B4DZgoc5eBHsAg-/0/1753025321577?e=1776297600&v=beta&t=m3K3f551berdebRvNzMdsIq9yP4Bj0gHoWltDbj1Mbo"
    },
  ];

  const itemsPerPage = 3;
  const numPages = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <section 
      id="testimonials"
      ref={ref} 
      className="py-20 bg-purple-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-white">
            Histórias reais de transformação e sucesso
          </h2>
        </motion.div>

        {/* Visualização para Telemóvel (Carrossel de Arrastar) */}
        <div className="md:hidden flex overflow-x-auto space-x-6 pb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-4/5 bg-white bg-opacity-95 text-gray-800 rounded-2xl p-8 shadow-xl flex flex-col"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-purple-500 opacity-50" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visualização para Computador (Grelha Paginada) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {testimonials.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage).map((testimonial, index) => (
            <motion.div
              key={currentPage * itemsPerPage + index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white bg-opacity-95 text-gray-800 rounded-2xl p-8 shadow-xl flex flex-col"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-purple-500 opacity-50" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navegação por pontos (visível apenas no computador) */}
        <div className="hidden md:flex justify-center mt-12 space-x-3">
          {Array.from({ length: numPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === pageIndex ? 'bg-white' : 'bg-white bg-opacity-40'
              }`}
              aria-label={`Ir para a página de depoimentos ${pageIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;