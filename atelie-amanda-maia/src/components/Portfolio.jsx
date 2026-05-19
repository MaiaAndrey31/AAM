import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// Casamento images
import casamento001 from '../assets/casamento001.jpeg';
import casamento002 from '../assets/casamento002.jpg';
import casamento003 from '../assets/casamento003.jpeg';
import casamento004 from '../assets/casamento004.jpeg';
import casamento005 from '../assets/casamento005.jpg';

// Infantil images
import topoInf001 from '../assets/TopoInf001.jpg';
import topoInf002 from '../assets/TopoInf002.jpg';
import topoInf003 from '../assets/TopoInf003.jpg';

// Lembrancinhas
import lembca001 from '../assets/lembca001.jpg';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'casamento', label: 'Casamento' },
  { id: 'infantil', label: 'Infantil' },
  { id: 'personalizados', label: 'Personalizados' },
];

const portfolioItems = [
  {
    id: 1,
    category: 'casamento',
    title: 'Topo de Bolo Romântico',
    images: [casamento001, casamento002, casamento003, casamento004, casamento005],
  },
  {
    id: 2,
    category: 'infantil',
    title: 'Tema Personalizado Festa',
    images: [topoInf001, topoInf002, topoInf003],
  },
  {
    id: 3,
    category: 'personalizados',
    title: 'Mini Noivinhos para Convidados',
    images: [lembca001],
  },
];

/* ── Mini carousel for each portfolio card ── */
function CardCarousel({ images, alt }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const total = images.length;

  const next = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setCurrent((prev) => (prev + 1) % total);
    },
    [total]
  );

  const prev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setCurrent((prev) => (prev - 1 + total) % total);
    },
    [total]
  );

  // Auto-advance every 4s on hover
  useEffect(() => {
    if (isHovered && total > 1) {
      intervalRef.current = setInterval(() => next(), 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, next, total]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Navigation arrows – only when multiple images */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-on-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-on-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-white w-5 shadow-sm'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = activeCategory === 'todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-section-gap px-margin-edge bg-surface-container-low" id="portfolio" ref={ref}>
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-stack-sm"
        >
          <span className="text-label-caps font-label-caps uppercase text-primary tracking-widest">Nosso Trabalho</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Galeria de Sonhos</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Cada peça conta uma história única. Conheça alguns dos trabalhos que já tivemos o prazer de criar para momentos especiais.</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-stack-md mt-12 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`${activeCategory === cat.id
                  ? 'bg-secondary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps shadow-sm'
                  : 'bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 py-2 rounded-full font-label-caps text-label-caps hover:bg-secondary-fixed transition-all'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-outline-variant/20 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 relative">
                <CardCarousel images={item.images} alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none z-[5]">
                  <span className="text-white font-label-caps text-label-caps">
                    {item.images.length > 1 ? `${item.images.length} fotos` : 'Ver Detalhes'}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <span className="text-label-caps font-label-caps text-secondary uppercase">
                  {categories.find(c => c.id === item.category)?.label || item.category}
                </span>
                <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/atelie_amandamaia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-soft border border-outline text-on-surface px-8 py-3 rounded-full font-label-caps text-label-caps hover:bg-surface transition-all inline-flex items-center gap-2 mx-auto"
          >
            <Instagram className="w-[18px] h-[18px]" />
            Ver Mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
