import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    description: 'Noivinhos personalizados com trajes dos noivos',
    image: null, // Placeholder
  },
  {
    id: 2,
    category: 'casamento',
    title: 'Lembrancinhas de Casamento',
    description: 'Mini noivinhos para presentear convidados',
    image: null,
  },
  {
    id: 3,
    category: 'infantil',
    title: 'Topo de Bolo Safari',
    description: 'Tema safari para festa de 1 ano',
    image: null,
  },
  {
    id: 4,
    category: 'infantil',
    title: 'Personagens Disney',
    description: 'Mickey e Minnie personalizados',
    image: null,
  },
  {
    id: 5,
    category: 'personalizados',
    title: 'Boneco Personalizado',
    description: 'Réplica de pessoa em biscuit',
    image: null,
  },
  {
    id: 6,
    category: 'personalizados',
    title: 'Lembrancinha Corporativa',
    description: 'Peças sob encomenda para eventos',
    image: null,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedItem, setSelectedItem] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = activeCategory === 'todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-atelie-bege" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-atelie-dourado font-medium text-sm tracking-wider uppercase">
            Nosso Trabalho
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-atelie-marrom mt-4 mb-6">
            Portfólio
          </h2>
          <p className="text-atelie-marrom-light max-w-2xl mx-auto">
            Cada peça conta uma história única. Conheça alguns dos trabalhos que já tivemos
            o prazer de criar para momentos especiais.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                  ? 'bg-atelie-dourado text-white shadow-lg shadow-atelie-dourado/30'
                  : 'bg-white text-atelie-marrom hover:bg-atelie-rose'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-atelie-rose/40 to-atelie-bege flex items-center justify-center relative overflow-hidden">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-atelie-dourado/20 rounded-full flex items-center justify-center">
                        <span className="font-serif text-3xl text-atelie-dourado">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-atelie-dourado/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Ver Detalhes</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs text-atelie-dourado uppercase tracking-wider font-medium">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="font-serif text-xl text-atelie-marrom mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-atelie-marrom-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-white hover:bg-atelie-rose text-atelie-marrom px-8 py-3 rounded-full font-medium transition-all duration-300 border border-atelie-bege-dark">
            Ver Mais no Instagram
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative mx-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Posicionado corretamente para mobile */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video bg-gradient-to-br from-atelie-rose/40 to-atelie-bege flex items-center justify-center">
                <span className="font-serif text-4xl sm:text-6xl text-atelie-dourado">
                  {selectedItem.title.charAt(0)}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-atelie-dourado text-xs sm:text-sm uppercase tracking-wider font-medium">
                  {categories.find(c => c.id === selectedItem.category)?.label}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-atelie-marrom mt-2 mb-2 sm:mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-atelie-marrom-light">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
