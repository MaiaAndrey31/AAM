import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Hand, Award, Clock } from 'lucide-react';

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
    <section id="sobre" className="py-24 bg-atelie-creme" ref={ref}>
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
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-atelie-rose rounded-full opacity-60" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-atelie-dourado/20 rounded-full" />

              {/* Main Image Placeholder */}
              <div className="relative bg-atelie-bege rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-atelie-rose/30 to-atelie-bege">
                  <div className="text-center p-8">
                    <Heart className="w-16 h-16 text-atelie-dourado mx-auto mb-4" />
                    <p className="font-serif text-2xl text-atelie-marrom">Amanda Maia</p>
                    <p className="text-atelie-marrom-light mt-2">Artesã especializada em biscuit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl max-w-[160px] sm:max-w-[200px]"
            >
              <p className="font-serif text-2xl sm:text-3xl text-atelie-dourado mb-1">12+</p>
              <p className="text-xs sm:text-sm text-atelie-marrom-light">Anos criando sonhos em biscuit</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-atelie-dourado font-medium text-sm tracking-wider uppercase">
              Conheça a Artesã
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-atelie-marrom mt-4 mb-6">
              Quem está por trás de cada peça especial
            </h2>

            <p className="text-atelie-marrom-light text-lg leading-relaxed mb-6">
              Olá! Sou Amanda Maia, apaixonada por transformar sentimentos em peças únicas de biscuit.
              Há mais de 5 anos, venho ajudando pessoas a eternizar seus momentos mais especiais através
              da arte manual.
            </p>

            <p className="text-atelie-marrom-light leading-relaxed mb-8">
              Cada topo de bolo, cada noivinho, cada lembrancinha carrega uma história.
              Trabalho exclusivamente com encomendas personalizadas, porque acredito que
              seu momento único merece uma peça igualmente exclusiva. Não uso moldes prontos
              — tudo é modelado à mão, com paciência e amor.
            </p>

            <p className="text-atelie-marrom font-medium italic mb-10">
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
                  className="bg-white rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow"
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-atelie-dourado mb-2 sm:mb-3" />
                  <h3 className="font-medium text-atelie-marrom text-xs sm:text-sm mb-1">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs text-atelie-marrom-light leading-snug">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
