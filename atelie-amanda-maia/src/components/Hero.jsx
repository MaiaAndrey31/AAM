import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import bannerImg from '../assets/Banner.png';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-secondary/50 via-cream to-cream">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-10 w-48 h-48 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/50 rounded-full blur-2xl"
        />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

        {/* LEFT — Text Content */}
        <div className="flex-[0.9] flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gold/20"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-text">
              Biscuit Artesanal Personalizado
            </span>
          </motion.div>

          {/* Logo / Signature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-4"
          >
            <p className="font-serif text-accent text-2xl italic tracking-wide">AM ♡ Amanda Maia</p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-text leading-tight mb-5"
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
            className="text-text-light text-base sm:text-lg mb-3 italic"
          >
            "Modelando com amor, uma lembrança da sua vida"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-text-light/80 max-w-md mb-8 text-sm sm:text-base"
          >
            Cada peça conta uma história. Topo de bolo, noivinhos e lembrancinhas que eternizam seus momentos mais especiais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('#encomendar')}
              className="bg-accent hover:bg-accent-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-lg"
              style={{ boxShadow: '0 10px 30px rgba(217, 140, 154, 0.35)' }}
            >
              ✨ Quero minha peça personalizada
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('#portfolio')}
              className="bg-white hover:bg-secondary text-text px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border border-gold/30"
            >
              Ver histórias criadas
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-8 mt-10 pt-6 border-t border-gold/20 w-full"
          >
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl text-accent font-semibold">1000+</div>
              <div className="text-xs sm:text-sm text-text-light mt-1 leading-tight">Lembranças Criadas</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl text-accent font-semibold">12+</div>
              <div className="text-xs sm:text-sm text-text-light mt-1 leading-tight">Anos de Amor</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl text-accent font-semibold">100%</div>
              <div className="text-xs sm:text-sm text-text-light mt-1 leading-tight">Exclusivo</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex-[1.5] flex items-center justify-center lg:justify-end"
        >
          <motion.img
            src={bannerImg}
            alt="Amanda Maia com biscuit artesanal personalizado"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full object-contain drop-shadow-2xl"
            style={{ minWidth: '800px', minHeight: '800px' }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-text-light cursor-pointer"
          onClick={() => scrollToSection('#sobre')}
        >
          <span className="text-xs mb-2">Conheça mais</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
