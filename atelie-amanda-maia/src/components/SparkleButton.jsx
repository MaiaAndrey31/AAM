import { motion } from 'framer-motion';

/**
 * SparkleButton - Componente de botão com efeito de brilho/glitter elegante
 * 
 * Props:
 * - children: Conteúdo do botão
 * - onClick: Função de clique
 * - className: Classes adicionais
 * - variant: 'primary' | 'secondary' | 'gold' (padrão: 'primary')
 * - disabled: Desabilitar botão
 * - type: Tipo do botão (button, submit, reset)
 * - size: 'sm' | 'md' | 'lg' (padrão: 'md')
 */

export default function SparkleButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button',
  size = 'md',
  ...props
}) {
  // Configurações de estilo por variante
  const variants = {
    primary: {
      base: 'bg-gradient-to-r from-accent to-accent-hover text-white',
      shadow: 'shadow-accent hover:shadow-accent-hover',
      sparkleColor: 'rgba(255, 255, 255, 0.9)',
      bgGlow: 'rgba(200, 90, 110, 0.4)',
    },
    secondary: {
      base: 'bg-gradient-to-r from-white to-champagne text-text border border-gold/30',
      shadow: 'shadow-soft hover:shadow-gold-lux',
      sparkleColor: 'rgba(184, 150, 74, 0.9)',
      bgGlow: 'rgba(184, 150, 74, 0.3)',
    },
    gold: {
      base: 'bg-gradient-to-r from-gold to-gold-dark text-white',
      shadow: 'shadow-gold hover:shadow-gold-lux',
      sparkleColor: 'rgba(253, 249, 245, 0.95)',
      bgGlow: 'rgba(184, 150, 74, 0.5)',
    },
  };

  // Configurações de tamanho
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base',
    lg: 'px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg',
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative overflow-hidden
        ${currentVariant.base}
        ${currentVariant.shadow}
        ${currentSize}
        rounded-full font-semibold
        transition-all duration-300
        tracking-wide
        disabled:opacity-50 disabled:cursor-not-allowed
        group
        ${className}
      `}
      style={{
        '--sparkle-color': currentVariant.sparkleColor,
        '--bg-glow': currentVariant.bgGlow,
      }}
      {...props}
    >
      {/* Efeito de brilho no fundo */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--bg-glow) 0%, transparent 70%)`,
        }}
      />

      {/* Sparkle 1 - Top left */}
      <span
        className="sparkle sparkle-1 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 2 - Top right */}
      <span
        className="sparkle sparkle-2 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 3 - Bottom left */}
      <span
        className="sparkle sparkle-3 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 4 - Bottom right */}
      <span
        className="sparkle sparkle-4 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 5 - Center (mais sutil) */}
      <span
        className="sparkle sparkle-5 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 6 - Extra top */}
      <span
        className="sparkle sparkle-6 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 7 - Extra right */}
      <span
        className="sparkle sparkle-7 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 8 - Extra bottom */}
      <span
        className="sparkle sparkle-8 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 9 - Extra left */}
      <span
        className="sparkle sparkle-9 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Sparkle 10 - Random center */}
      <span
        className="sparkle sparkle-10 pointer-events-none"
        style={{
          '--sparkle-color': currentVariant.sparkleColor,
        }}
      />

      {/* Efeito de explosão de sparkles */}
      <div className="sparkle-burst pointer-events-none" />

      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
