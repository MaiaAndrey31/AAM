import { motion } from 'framer-motion';
import { ArrowDown, Sparkles as SparklesIcon } from 'lucide-react';
import bannerImg from '../assets/Banner.png';
import SparkleButton from './SparkleButton.jsx';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-white to-primary/10">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/50 to-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-10 w-56 h-56 bg-gradient-to-br from-gold/40 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-secondary/70 to-cream/50 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-accent/20 to-gold/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/80" />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

        {/* LEFT — Text Content */}
        <div className="flex-[0.9] flex flex-col items-start text-left">
          {/* Badge Luxo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-premium px-5 py-2.5 rounded-full mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-gold-dark" />
            <span className="text-xs font-medium text-gold-dark tracking-wider uppercase">
              Biscuit Artesanal Personalizado
            </span>
          </motion.div>

          {/* Linha decorativa de luxo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="line-luxury w-24 mb-6"
          />

          {/* Logo / Signature Luxo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-4"
          >
            <p className="font-serif text-gradient-luxury text-2xl italic tracking-widest">AM ♡ Amanda Maia</p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text leading-tight mb-5"
          >
            <span className="block">Transformando</span>
            <span className="text-gradient block drop-shadow-soft">momentos</span>
            <span className="block">em lembranças</span>
            <span className="text-gradient-gold block drop-shadow-soft">eternas</span>
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

          {/* CTA Buttons Luxo com Sparkle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <SparkleButton
              variant="primary"
              size="md"
              onClick={() => scrollToSection('#encomendar')}
            >
              <SparklesIcon className="w-4 h-4" />
              Quero minha peça personalizada
            </SparkleButton>
            <SparkleButton
              variant="secondary"
              size="md"
              onClick={() => scrollToSection('#portfolio')}
            >
              Ver histórias criadas
            </SparkleButton>
          </motion.div>

          {/* Linha decorativa inferior */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="line-luxury w-full mt-10"
          />

          {/* Stats Luxo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mt-8 w-full"
          >
            <div className="text-center px-2 sm:px-4 py-2">
              <div className="font-serif text-xl sm:text-3xl text-gradient-luxury font-bold">1000+</div>
              <div className="text-[10px] sm:text-sm text-text-light mt-1 leading-tight font-medium tracking-wider uppercase">Lembranças</div>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden sm:block" />
            <div className="text-center px-2 sm:px-4 py-2">
              <div className="font-serif text-xl sm:text-3xl text-gradient-luxury font-bold">12+</div>
              <div className="text-[10px] sm:text-sm text-text-light mt-1 leading-tight font-medium tracking-wider uppercase">Anos</div>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden sm:block" />
            <div className="text-center px-2 sm:px-4 py-2">
              <div className="font-serif text-xl sm:text-3xl text-gradient-luxury font-bold">100%</div>
              <div className="text-[10px] sm:text-sm text-text-light mt-1 leading-tight font-medium tracking-wider uppercase">Exclusivo</div>
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
            className="w-full h-auto max-w-full lg:max-w-[700px] object-contain drop-shadow-strong"
            style={{ filter: 'drop-shadow(0 25px 60px rgba(74, 63, 63, 0.35))' }}
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
