/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Secção para adicionar personalizações ao tema
      colors: {
        // Aqui definimos as suas cores personalizadas
        'brand-green': '#0cdb45',
        'purple-700': '#6b21a8',
      },
      keyframes: {
        // Aqui definimos os passos da animação "whatsappChat"
        whatsappChat: {
          '0%': { opacity: '0', transform: 'translate(-50%, 60%)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -10%)' },
          '75%': { opacity: '1', transform: 'translate(-50%, -20%)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%)' },
        }
      },
      animation: {
        // Aqui damos um nome à nossa animação para podermos usá-la com uma classe
        'whatsapp-chat': 'whatsappChat 3s infinite',
      }
    },
  },
  plugins: [],
};