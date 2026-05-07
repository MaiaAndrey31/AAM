import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5511975578672';
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
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#20BD5C] hover:to-[#0E8C6E] text-white p-3 sm:p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] whatsapp-pulse transition-all duration-300 flex items-center gap-2 group overflow-visible"
      aria-label="Falar no WhatsApp"
    >
      {/* Sparkles do WhatsApp */}
      <span className="whatsapp-sparkle whatsapp-sparkle-1 pointer-events-none" />
      <span className="whatsapp-sparkle whatsapp-sparkle-2 pointer-events-none" />
      <span className="whatsapp-sparkle whatsapp-sparkle-3 pointer-events-none" />
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-medium hidden sm:inline">
        Fazer Encomenda
      </span>
    </motion.button>
  );
}
