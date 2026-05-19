import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SparkleButton from './SparkleButton.jsx';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-surface/80 backdrop-blur-md w-full top-0 sticky z-50 shadow-sm border-b border-outline-variant/30">
        <div className="flex justify-between items-center w-full px-margin-edge py-4 max-w-container-max mx-auto">
          <div className="font-headline-lg text-xl sm:text-2xl md:text-headline-lg font-bold text-primary whitespace-nowrap">Ateliê Amanda Maia</div>
          <nav className="hidden md:flex items-center gap-stack-lg">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`${index === 0
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
                  } font-label-caps text-label-caps`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <SparkleButton
            onClick={() => scrollToSection('#orcamento')}
            variant="primary"
            size="sm"
            className="hidden md:block"
          >
            Orçamento
          </SparkleButton>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-on-surface"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-4 right-4 bg-surface rounded-2xl shadow-xl p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className={`${index === 0
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary transition-colors'
                      } py-2 text-lg font-medium border-b border-outline-variant/30 last:border-0`}
                  >
                    {item.label}
                  </a>
                ))}
                <SparkleButton
                  onClick={() => scrollToSection('#orcamento')}
                  variant="primary"
                  size="md"
                  className="mt-2"
                >
                  Orçamento
                </SparkleButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
