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
        'accent': '#C85A6E',       // CTA botões - rosé mais intenso e vibrante
        'accent-hover': '#B84A5E', // Hover dos botões - tom mais escuro
        'gold': '#B8964A',         // Detalhes premium - dourado mais saturado
        'gold-light': '#D4B97A',   // Dourado claro
        'gold-dark': '#9A7B3D',    // Dourado escuro para luxo
        'champagne': '#F7E7CE',    // Champanhe elegante
        'champagne-dark': '#E8D4B8', // Champanhe mais intenso
        'bronze': '#B87D4B',       // Bronze premium
        'pearl': '#F8F6F0',        // Pérola sofisticada
        'rose-gold': '#E6B8A5',    // Rose gold metálico
        'text': '#4A3F3F',         // Texto principal - cinza quente mais escuro para contraste
        'text-light': '#6B5E5E',   // Texto secundário
        'detail': '#8B6B42',       // Elementos artesanais
        'white': '#FFFFFF',
        'cream': '#FDF9F5',
        'dark': '#2D2424',         // Cor escura para alto contraste
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'xl': '0 20px 60px rgba(0, 0, 0, 0.18)',
        '2xl': '0 25px 80px rgba(0, 0, 0, 0.22)',
        'inner-light': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'accent': '0 10px 40px rgba(200, 90, 110, 0.35)',
        'accent-hover': '0 15px 50px rgba(200, 90, 110, 0.45)',
        'gold': '0 8px 30px rgba(184, 150, 74, 0.3)',
        'gold-lux': '0 12px 40px rgba(184, 150, 74, 0.4), 0 4px 12px rgba(184, 150, 74, 0.2)',
        'card': '0 4px 20px rgba(74, 63, 63, 0.08), 0 1px 3px rgba(74, 63, 63, 0.05)',
        'card-hover': '0 12px 40px rgba(74, 63, 63, 0.15), 0 4px 12px rgba(74, 63, 63, 0.1)',
        'float': '0 20px 50px rgba(74, 63, 63, 0.2)',
        'nav': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'luxury': '0 20px 60px rgba(74, 63, 63, 0.15), 0 0 0 1px rgba(184, 150, 74, 0.1)',
        'premium': '0 25px 80px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.2)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.25)',
        'accent': '0 10px 30px rgba(200, 90, 110, 0.4)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
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
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
