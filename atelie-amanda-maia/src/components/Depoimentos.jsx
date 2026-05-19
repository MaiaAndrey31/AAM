import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mariana e Carlos',
    role: 'Noivos de Setembro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbubD0RL4lkCEEnHTidMHxoELKB_2A8BRGQEIL56mrruPcI3fLaLIUp-PlJ_SoPemHmERCQZl1alxfuyA27gsVptyr6ehUWwol9GcPb3pn6ENcv4IB0DDsbyQ_yPH9PVSOG2NoNn4u-szMeSFLBH9H7V6BZqM0IwelJqEguFygAb3KFK_KKZgmcBe59mPEX3USdg92wrcE8ZAriPjA8cREGrH7xX9wFtPjPD2c898AfUXZZZCqhZyTQGEXCHyzdlGy8DyU1K3Gt4uX',
    text: 'O topo de bolo ficou perfeito! Amanda capturou exatamente o que queríamos. Todos os convidados elogiaram e foi a peça mais fotografada do casamento. Superou todas as expectativas!',
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
    <section className="py-section-gap px-margin-edge bg-surface-container-low overflow-hidden" id="depoimentos" ref={ref}>
      <div className="max-w-container-max mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="text-label-caps font-label-caps uppercase text-primary tracking-widest">Clientes Felizes</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Depoimentos</h2>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Large Quote Mark Decor */}
          <div className="absolute -top-8 sm:-top-16 -left-4 sm:-left-16 text-[100px] sm:text-[180px] font-testimonial-quote text-dusty-rose-light opacity-20 -z-10 leading-none">"</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 sm:p-12 md:p-20 rounded-[24px] sm:rounded-[40px] shadow-xl border border-white relative"
            >
              <div className="flex gap-1 mb-4 sm:mb-8 text-secondary">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
                ))}
              </div>

              <blockquote className="font-testimonial-quote text-base sm:text-testimonial-quote text-on-surface mb-6 sm:mb-10 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-fixed overflow-hidden">
                  <img
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    src={testimonials[currentIndex].image}
                  />
                </div>
                <div>
                  <div className="font-bold text-on-surface">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-on-surface-variant font-label-caps">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary-fixed transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary-fixed transition-all"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
