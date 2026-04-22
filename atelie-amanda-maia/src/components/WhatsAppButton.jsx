import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5514999999999'; // Substituir pelo número real
const WHATSAPP_MESSAGE = 'Oi, vim pelo site e quero fazer uma encomenda 😊';

export default function WhatsAppButton() {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 sm:p-4 rounded-full shadow-lg whatsapp-pulse transition-colors duration-300 flex items-center gap-2 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-medium hidden sm:inline">
        Fazer Encomenda
      </span>
    </motion.button>
  );
}
