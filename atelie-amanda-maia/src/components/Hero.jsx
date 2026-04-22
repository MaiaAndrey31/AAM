import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-atelie-secondary/50 via-atelie-cream to-atelie-cream">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-atelie-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-10 w-48 h-48 bg-atelie-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-atelie-secondary/50 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-atelie-gold/20"
        >
          <Sparkles className="w-4 h-4 text-atelie-gold" />
          <span className="text-sm font-medium text-atelie-text">
            Biscuit Artesanal Personalizado
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-atelie-marrom leading-tight mb-6 px-2 sm:px-0"
        >
          <span className="block">Transformando</span>
          <span className="text-gradient block">momentos</span>
          <span className="block">em lembranças</span>
          <span className="block">eternas</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-atelie-text-light text-base sm:text-lg max-w-2xl mx-auto mb-4 italic"
        >
          "Modelando com amor, uma lembrança da sua vida"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-atelie-text-light/80 max-w-xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base"
        >
          Cada peça conta uma história. Topo de bolo, noivinhos e lembrancinhas que eternizam seus momentos mais especiais.
        </motion.p>

        {/* CTA Buttons - Frases emocionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#encomendar')}
            className="bg-atelie-accent hover:bg-atelie-accent-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-lg"
            style={{ boxShadow: '0 10px 30px rgba(217, 140, 154, 0.35)' }}
          >
            ✨ Quero minha peça personalizada
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#portfolio')}
            className="bg-white hover:bg-atelie-secondary text-atelie-text px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border border-atelie-gold/30"
          >
            Ver histórias criadas
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-atelie-gold/20"
        >
          <div className="text-center px-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-atelie-accent font-semibold">500+</div>
            <div className="text-xs sm:text-sm text-atelie-text-light mt-1 leading-tight">Lembranças<br className="sm:hidden" /> Criadas</div>
          </div>
          <div className="text-center px-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-atelie-accent font-semibold">5+</div>
            <div className="text-xs sm:text-sm text-atelie-text-light mt-1 leading-tight">Anos de<br className="sm:hidden" /> Amor</div>
          </div>
          <div className="text-center px-1">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-atelie-accent font-semibold">100%</div>
            <div className="text-xs sm:text-sm text-atelie-text-light mt-1 leading-tight">Exclusivo</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-atelie-marrom-light cursor-pointer"
            onClick={() => scrollToSection('#sobre')}
          >
            <span className="text-xs mb-2">Conheça mais</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
