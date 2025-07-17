import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      title: "Como Otimizar seu LinkedIn para Atrair Recrutadores",
      excerpt: "Descubra as estratégias mais eficazes para transformar seu perfil do LinkedIn em uma poderosa ferramenta de atração de oportunidades profissionais.",
      date: "15 de Janeiro, 2025",
      readTime: "5 min",
      category: "LinkedIn",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: true
    },
    {
      title: "5 Erros Comuns em Entrevistas de Emprego",
      excerpt: "Evite os erros mais frequentes que podem comprometer sua performance em entrevistas e aprenda como se destacar positivamente.",
      date: "12 de Janeiro, 2025",
      readTime: "7 min",
      category: "Entrevistas",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "O Futuro do Trabalho: Tendências para 2025",
      excerpt: "Explore as principais tendências que estão moldando o mercado de trabalho e como se preparar para as oportunidades futuras.",
      date: "10 de Janeiro, 2025",
      readTime: "6 min",
      category: "Tendências",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Transição de Carreira: Guia Completo",
      excerpt: "Um guia abrangente sobre como fazer uma transição de carreira bem-sucedida, com estratégias práticas e dicas essenciais.",
      date: "8 de Janeiro, 2025",
      readTime: "10 min",
      category: "Carreira",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Networking Digital: Construindo Relacionamentos Online",
      excerpt: "Aprenda como construir uma rede de contatos sólida no ambiente digital e potencializar suas oportunidades profissionais.",
      date: "5 de Janeiro, 2025",
      readTime: "8 min",
      category: "Networking",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Salário vs. Propósito: Encontrando o Equilíbrio",
      excerpt: "Como balancear objetivos financeiros com realização pessoal na construção de uma carreira sustentável e satisfatória.",
      date: "3 de Janeiro, 2025",
      readTime: "9 min",
      category: "Desenvolvimento",
      image: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    }
  ];

  const categories = ["Todos", "LinkedIn", "Entrevistas", "Carreira", "Tendências", "Networking", "Desenvolvimento"];

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
              Nosso <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Insights, dicas e estratégias para acelerar sua carreira e desenvolvimento profissional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section ref={ref} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Destaque
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{blogPosts[0].date}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 self-start">
                  <span>Ler Artigo</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Artigos <span className="text-purple-600">Recentes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center space-x-1 text-sm">
                    <span>Ler mais</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Receba Conteúdo Exclusivo
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba dicas semanais sobre carreira e desenvolvimento profissional
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Inscrever-se
                </button>
              </div>
              <p className="text-purple-200 text-sm mt-3">
                Sem spam. Cancele quando quiser.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;