/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#E8B4B8',      // Rosé suave - cor principal
        'secondary': '#F5E6DA',    // Bege claro - fundos
        'accent': '#D98C9A',       // CTA botões - rosé mais intenso
        'accent-hover': '#E8B4B8', // Hover dos botões
        'gold': '#C8A96A',         // Detalhes premium
        'gold-light': '#D4B97A',   // Dourado claro
        'text': '#6B5E5E',         // Texto principal - cinza quente
        'text-light': '#8B7E7E',   // Texto secundário
        'detail': '#A67C52',       // Elementos artesanais
        'white': '#FFFFFF',
        'cream': '#FDF9F5',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
