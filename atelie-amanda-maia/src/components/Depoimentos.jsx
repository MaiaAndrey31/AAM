import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mariana e Carlos',
    role: 'Casamento',
    image: new URL('../assets/profileDepo001.jpg', import.meta.url).href,
    text: 'O topo de bolo ficou perfeito! Amanda capturou exatamente o que queríamos. Todos os convidados elogiaram e foi a peça mais fotografada do casamento. Superou todas as expectativas!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fernanda Silva',
    role: 'Aniversário Infantil',
    image: new URL('../assets/profileDepo002.png', import.meta.url).href,
    text: 'Encomendei os personagens da Peppa para o aniversário de 3 anos da minha filha. A qualidade é impressionante, parecem de verdade! A Amanda é muito talentosa e atenciosa.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juliana Mendes',
    role: 'Chá de Bebê',
    image: new URL('../assets/profileDepo003.png', import.meta.url).href,
    text: 'As lembrancinhas do chá de bebê foram um sucesso! Cada detalhe foi pensado com carinho. Entrega no prazo, embalagem perfeita. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Roberta e André',
    role: 'Bodas de Ouro',
    image: new URL('../assets/profileDepo004.png', import.meta.url).href,
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
    <section id="depoimentos" className="py-24 bg-gradient-to-br from-primary/30 via-cream to-secondary/40" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Luxo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-luxury mb-4 inline-block">Clientes Felizes</div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-gradient-luxury mt-4 mb-4 lg:mb-6">
            Depoimentos
          </h2>
          <div className="line-luxury max-w-md mx-auto mb-6" />
          <p className="text-text-light text-sm lg:text-base max-w-2xl mx-auto">
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
              className="card-luxury rounded-3xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-gold/40 mb-6" />

              <p className="text-base sm:text-lg md:text-xl text-text leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-secondary">
                    {testimonials[currentIndex].image ? (
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-serif text-lg sm:text-xl text-text">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-text text-sm sm:text-base truncate">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-light">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 flex-shrink-0">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Luxo */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-champagne rounded-full flex items-center justify-center shadow-soft hover:shadow-gold-lux transition-all duration-300 text-gold-dark flex-shrink-0 border border-gold/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Luxo */}
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center max-w-[120px] sm:max-w-none px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gradient-to-r from-gold to-gold-dark shadow-gold scale-125' : 'bg-champagne-dark hover:bg-gold/40'
                    }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-champagne rounded-full flex items-center justify-center shadow-soft hover:shadow-gold-lux transition-all duration-300 text-gold-dark flex-shrink-0 border border-gold/20"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges Luxo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16"
        >
          {[/* eslint-disable @typescript-eslint/no-unused-vars */
            { value: '500+', label: 'Clientes Satisfeitos' },
            { value: '100%', label: 'Avaliações Positivas' },
            { value: '4.9', label: 'Nota Média' },
            { value: '0', label: 'Reclamações' },
          ].map((stat, index) => (
            <div key={index} className="card-luxury text-center px-2 py-5">
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-gradient-luxury font-bold mb-1">
                {stat.value}
              </div>
              <div className="line-luxury w-12 mx-auto mb-2" />
              <div className="text-xs sm:text-sm text-text-light font-medium tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
