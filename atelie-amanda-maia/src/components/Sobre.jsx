import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Hand, Award, Clock } from 'lucide-react';
import atelieImg from '../assets/atelie.jpg';

const features = [
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada peça é criada com dedicação e carinho, pensando nos seus momentos especiais'
  },
  {
    icon: Hand,
    title: '100% Artesanal',
    description: 'Processo manual do início ao fim, sem moldes industriais, garantindo exclusividade'
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Materiais selecionados e acabamento impecável para durar para sempre'
  },
  {
    icon: Clock,
    title: 'Prazo Respeitado',
    description: 'Compromisso com a entrega no prazo acordado para seu evento'
  }
];

export default function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-cream via-white to-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -left-8 w-60 h-60 bg-gradient-to-br from-primary to-accent/80 rounded-full opacity-80 shadow-soft" />
              <div className="absolute -top-6 -left-8 w-32 h-32 bg-gradient-to-tr from-gold/70 to-primary/30 rounded-full shadow-soft" />

              {/* Main Image Placeholder */}
              <div className="relative bg-gradient-to-br from-secondary to-cream rounded-3xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-strong transition-shadow duration-500">
                <img
                  src={atelieImg}
                  alt="Amanda Maia - Ateliê"
                  className="w-full  object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-white to-cream rounded-2xl p-4 sm:p-6 shadow-card-hover hover:shadow-strong transition-shadow duration-300 max-w-[160px] sm:max-w-[200px]"
            >
              <p className="font-serif text-2xl sm:text-3xl text-gold font-bold mb-1 drop-shadow-soft bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">12+</p>
              <p className="text-xs sm:text-sm text-text-light">Anos criando sonhos em biscuit</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="badge-luxury mb-4 inline-block">Conheça a Artesã</div>

            <h2 className="font-serif text-4xl sm:text-5xl text-gradient-luxury mt-4 mb-6">
              Quem está por trás de cada peça especial
            </h2>
            <div className="line-luxury w-24 mb-6" />

            <p className="text-text-light text-lg leading-relaxed mb-6">
              Olá! Sou Amanda Maia, apaixonada por transformar sentimentos em peças únicas de biscuit.
              Há mais de 12 anos, venho ajudando pessoas a eternizar seus momentos mais especiais através
              da arte manual.
            </p>

            <p className="text-text-light leading-relaxed mb-8">
              Cada topo de bolo, cada noivinho, cada lembrancinha carrega uma história.
              Trabalho exclusivamente com encomendas personalizadas, porque acredito que
              seu momento único merece uma peça igualmente exclusiva. Não uso moldes prontos
              — tudo é modelado à mão, com paciência e amor.
            </p>

            <p className="text-text font-medium italic mb-10 text-lg bg-gradient-to-r from-text via-gold-dark to-text bg-clip-text text-transparent">
              "Modelando com amor, uma lembrança da sua vida"
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-luxury p-3 sm:p-4"
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-2 sm:mb-3 drop-shadow-soft" />
                  <h3 className="font-medium text-text text-xs sm:text-sm mb-1">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs text-text-light leading-snug">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
