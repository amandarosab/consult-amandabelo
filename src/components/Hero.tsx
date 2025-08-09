import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const { displayText } = useTypewriter("Impulsionando pessoas desde 2021!", 100);

  return (
    // MUDANÇA: Removemos a altura fixa (h-[70vh]) e controlamos o tamanho com padding (pt- e pb-)
    <section className="bg-purple-700 flex items-center justify-center text-white text-center pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-2xl text-white mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            Consultoria de RH e Gestão de Carreira
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;