import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter.jsx';
import bannerImg from '../assets/Banner.png';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-stack-lg md:py-section-gap px-margin-edge bg-surface-container-low">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div className="order-2 md:order-1 space-y-stack-md">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-widest"
          >
            Biscuit Artesanal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display-lg text-display-lg text-primary leading-tight md:text-display-lg text-headline-lg-mobile"
          >
            Transformando <span className="italic text-secondary">momentos</span> em lembranças eternas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-lg"
          >
            Modelando com amor, a lembrança da sua vida. Cada peça conta uma história única através da arte manual meticulosa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-stack-md pt-stack-sm"
          >
            <button
              onClick={() => scrollToSection('#orcamento')}
              className="bg-primary text-on-primary px-5 sm:px-8 py-3 sm:py-4 rounded-full font-label-caps text-[10px] sm:text-label-caps hover:bg-primary-container transition-all shadow-lg flex items-center gap-2"
            >
              Quero minha peça personalizada
              <Heart className="text-[18px]" />
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="border border-secondary text-secondary px-5 sm:px-8 py-3 sm:py-4 rounded-full font-label-caps text-[10px] sm:text-label-caps hover:bg-secondary-container transition-all"
            >
              Ver histórias criadas
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-6 sm:gap-stack-lg pt-8 sm:pt-12 border-t border-outline-variant/30 mt-8 sm:mt-12"
          >
            <div>
              <div className="text-headline-md font-bold text-primary">
                <AnimatedCounter end={1000} suffix="+" duration={2} />
              </div>
              <div className="text-label-caps font-label-caps uppercase text-on-surface-variant">Lembranças</div>
            </div>
            <div>
              <div className="text-headline-md font-bold text-primary">
                <AnimatedCounter end={12} suffix="+" duration={1.5} />
              </div>
              <div className="text-label-caps font-label-caps uppercase text-on-surface-variant">Anos de Arte</div>
            </div>
            <div>
              <div className="text-headline-md font-bold text-primary">
                <AnimatedCounter end={100} suffix="%" duration={1.5} />
              </div>
              <div className="text-label-caps font-label-caps uppercase text-on-surface-variant">Exclusivo</div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:order-2 relative"
        >
          <div className="aspect-[1.56] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              alt="Destaque Hero"
              className="w-full h-full object-cover"
              src={bannerImg}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 tonal-glass p-6 rounded-2xl shadow-xl hidden md:block border border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary"></span>
              </div>
              <div>
                <div className="font-bold text-on-surface">Arte Manual</div>
                <div className="text-sm text-on-surface-variant">Modelado à mão</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
