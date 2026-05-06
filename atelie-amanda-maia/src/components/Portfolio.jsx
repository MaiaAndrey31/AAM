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
    images: [
      new URL('../assets/casamento001.jpeg', import.meta.url).href,
      new URL('../assets/casamento002.jpg', import.meta.url).href,
      new URL('../assets/casamento003.jpeg', import.meta.url).href,
      new URL('../assets/casamento004.jpeg', import.meta.url).href,

    ],
  },
  {
    id: 2,
    category: 'casamento',
    title: 'Lembrancinhas de Casamento',
    description: 'Mini noivinhos para presentear convidados',
    images: [
      new URL('../assets/lembca001.jpg', import.meta.url).href,
    ],
  },
  {
    id: 3,
    category: 'infantil',
    title: 'Topo de Bolo Personalizado',
    description: 'Personalizamos no tema da sua festa!',
    images: [
      new URL('../assets/TopoInf001.jpg', import.meta.url).href,
      new URL('../assets/TopoInf002.jpg', import.meta.url).href,
      new URL('../assets/TopoInf003.jpg', import.meta.url).href,
    ],
  },
  {
    id: 4,
    category: 'infantil',
    title: 'Personagens',
    description: 'Os mais diversos e queridos personagens',
    images: [null, null],
  },
  {
    id: 5,
    category: 'personalizados',
    title: 'Boneco Personalizado',
    description: 'Réplica de pessoa em biscuit',
    images: [null, null, null],
  },
  {
    id: 6,
    category: 'personalizados',
    title: 'Lembrancinha Corporativa',
    description: 'Peças sob encomenda para eventos',
    images: [null, null],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCurrentImageIndex = (itemId) => currentImageIndexes[itemId] || 0;

  const nextImage = (e, itemId) => {
    e.stopPropagation();
    const item = portfolioItems.find(i => i.id === itemId);
    const currentIndex = getCurrentImageIndex(itemId);
    const nextIndex = (currentIndex + 1) % item.images.length;
    setCurrentImageIndexes(prev => ({ ...prev, [itemId]: nextIndex }));
  };

  const prevImage = (e, itemId) => {
    e.stopPropagation();
    const item = portfolioItems.find(i => i.id === itemId);
    const currentIndex = getCurrentImageIndex(itemId);
    const prevIndex = (currentIndex - 1 + item.images.length) % item.images.length;
    setCurrentImageIndexes(prev => ({ ...prev, [itemId]: prevIndex }));
  };

  const filteredItems = activeCategory === 'todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-secondary via-cream to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Luxo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="badge-luxury mb-4 inline-block">Nosso Trabalho</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gradient-luxury mt-4 mb-6">
            Portfólio
          </h2>
          <div className="line-luxury max-w-md mx-auto mb-6" />
          <p className="text-text-light max-w-2xl mx-auto">
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
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-gradient-to-r from-gold to-gold/80 text-white shadow-gold hover:shadow-lg hover:scale-105'
                : 'bg-gradient-to-r from-white to-cream text-text hover:bg-primary shadow-soft hover:shadow-medium hover:-translate-y-0.5'
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
                <div className="card-luxury overflow-hidden">
                  {/* Image Carousel */}
                  <div className="aspect-square bg-gradient-to-br from-primary/40 to-secondary flex items-center justify-center relative overflow-hidden">
                    {/* Current Image */}
                    <div className="w-full h-full flex items-center justify-center">
                      {item.images[getCurrentImageIndex(item.id)] ? (
                        <img
                          src={item.images[getCurrentImageIndex(item.id)]}
                          alt={`${item.title} - Imagem ${getCurrentImageIndex(item.id) + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-6 w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/50 to-secondary/80">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold/40 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                            <span className="font-serif text-3xl bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent font-bold">
                              {item.title.charAt(0)}{getCurrentImageIndex(item.id) + 1}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Navigation Arrows */}
                    {item.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => prevImage(e, item.id)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/95 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-soft hover:shadow-medium hover:scale-110 z-10"
                        >
                          <ChevronLeft className="w-5 h-5 text-text" />
                        </button>
                        <button
                          onClick={(e) => nextImage(e, item.id)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/95 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-soft hover:shadow-medium hover:scale-110 z-10"
                        >
                          <ChevronRight className="w-5 h-5 text-text" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {item.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {item.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndexes(prev => ({ ...prev, [item.id]: idx }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === getCurrentImageIndex(item.id) ? 'bg-gold shadow-gold scale-125' : 'bg-white/70 hover:bg-white'
                              }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gold/90 via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 pointer-events-none">
                      <span className="text-white font-medium px-4 py-2 bg-gold/80 rounded-full text-sm">Ver Detalhes</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs text-gold uppercase tracking-wider font-medium">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="font-serif text-xl text-text mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-light">
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
          <button className="bg-gradient-to-r from-white to-champagne hover:from-champagne hover:to-champagne-dark text-text px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-gold/30 shadow-soft hover:shadow-gold-lux hover:-translate-y-1">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-text/80 backdrop-blur-sm"
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
                className="absolute top-3 right-3 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Carousel */}
              <div className="aspect-square sm:aspect-[4/3] bg-gradient-to-br from-primary/40 to-secondary flex items-center justify-center relative overflow-hidden">
                {/* Current Image */}
                {selectedItem.images[getCurrentImageIndex(selectedItem.id)] ? (
                  <img
                    src={selectedItem.images[getCurrentImageIndex(selectedItem.id)]}
                    alt={`${selectedItem.title} - Imagem ${getCurrentImageIndex(selectedItem.id) + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-4xl sm:text-6xl text-gold">
                    {selectedItem.title.charAt(0)}{getCurrentImageIndex(selectedItem.id) + 1}
                  </span>
                )}

                {/* Navigation Arrows */}
                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => prevImage(e, selectedItem.id)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md z-10"
                    >
                      <ChevronLeft className="w-6 h-6 text-text" />
                    </button>
                    <button
                      onClick={(e) => nextImage(e, selectedItem.id)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md z-10"
                    >
                      <ChevronRight className="w-6 h-6 text-text" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {selectedItem.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {selectedItem.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndexes(prev => ({ ...prev, [selectedItem.id]: idx }));
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === getCurrentImageIndex(selectedItem.id) ? 'bg-gold' : 'bg-white/60'
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-gold text-xs sm:text-sm uppercase tracking-wider font-medium">
                  {categories.find(c => c.id === selectedItem.category)?.label}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-text mt-2 mb-2 sm:mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-text-light">
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
