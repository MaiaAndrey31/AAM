import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mariana e Carlos',
    role: 'Casamento',
    image: null,
    text: 'O topo de bolo ficou perfeito! Amanda capturou exatamente o que queríamos. Todos os convidados elogiaram e foi a peça mais fotografada do casamento. Superou todas as expectativas!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fernanda Silva',
    role: 'Aniversário Infantil',
    image: null,
    text: 'Encomendei os personagens da Peppa para o aniversário de 3 anos da minha filha. A qualidade é impressionante, parecem de verdade! A Amanda é muito talentosa e atenciosa.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juliana Mendes',
    role: 'Chá de Bebê',
    image: null,
    text: 'As lembrancinhas do chá de bebê foram um sucesso! Cada detalhe foi pensado com carinho. Entrega no prazo, embalagem perfeita. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Roberta e André',
    role: 'Bodas de Ouro',
    image: null,
    text: 'Encomendei uma réplica dos meus pais para as bodas de ouro. Foi um presente inesquecível! Eles choraram de emoção. A Amanda tem um dom especial nas mãos.',
    rating: 5,
  },
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-24 bg-atelie-rose/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-atelie-dourado font-medium text-sm tracking-wider uppercase">
            Clientes Felizes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-atelie-marrom mt-4 mb-6">
            Depoimentos
          </h2>
          <p className="text-atelie-marrom-light max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre suas experiências e peças personalizadas.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <Quote className="w-12 h-12 text-atelie-dourado/30 mb-6" />

              <p className="text-base sm:text-lg md:text-xl text-atelie-marrom leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-atelie-bege rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg sm:text-xl text-atelie-marrom">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-atelie-marrom text-sm sm:text-base truncate">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-atelie-marrom-light">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 flex-shrink-0">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-atelie-dourado fill-atelie-dourado" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-atelie-marrom flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center max-w-[120px] sm:max-w-none">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-atelie-dourado' : 'bg-atelie-bege-dark'
                    }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-atelie-marrom flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '500+', label: 'Clientes Satisfeitos' },
            { value: '100%', label: 'Avaliações Positivas' },
            { value: '4.9', label: 'Nota Média' },
            { value: '0', label: 'Reclamações' },
          ].map((stat, index) => (
            <div className="text-center px-1">
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-atelie-dourado font-semibold">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-atelie-marrom-light mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
