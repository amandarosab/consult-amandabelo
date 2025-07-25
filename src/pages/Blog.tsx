import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  useEffect(() => {
    if (!SPACE_ID || !ACCESS_TOKEN) {
      setError("ERRO: As variáveis de ambiente do Contentful não foram encontradas.");
      setIsLoading(false); return;
    }
    
    // --- MUDANÇA PRINCIPAL AQUI ---
    // Adicionamos '&include=1' ao final do URL para incluir os dados das imagens.
    const apiUrl = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=post&include=1`;

    const fetchPosts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!response.ok || data.sys?.type === 'Error') { throw new Error(data.message || 'Falha ao buscar os posts.'); }
        
        const assets = data.includes?.Asset || [];
        const formattedPosts = data.items.map((item: any) => {
          const imageAsset = assets.find((asset: any) => asset.sys.id === item.fields.image?.sys?.id);
          return {
            title: item.fields.title || 'Post sem Título',
            excerpt: item.fields.excerpt || '',
            category: item.fields.category || 'Sem Categoria',
            date: item.fields.date || new Date().toISOString(),
            image: imageAsset?.fields?.file?.url ? `https:${imageAsset.fields.file.url}` : '',
          };
        });
        setBlogPosts(formattedPosts);
      } catch (err: any) {
        setError(`ERRO CAPTURADO: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [SPACE_ID, ACCESS_TOKEN]);

  if (isLoading) return <div className="text-center py-40">A carregar posts...</div>;
  if (error) return <div className="text-center py-40 text-red-500">Erro: {error}</div>;
  if (blogPosts.length === 0) return <div className="text-center py-40"><h2 className="text-2xl font-bold">Nenhum post encontrado.</h2></div>;

  const filteredPosts = activeCategory === "Todos"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);
  
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
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
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
      
      {/* Blog Posts Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Artigos <span className="text-purple-600">Recentes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title + index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {post.image && (
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
                )}
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
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
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
            {/* ... */}
        </div>
      </section>
    </div>
  );
};

export default Blog;