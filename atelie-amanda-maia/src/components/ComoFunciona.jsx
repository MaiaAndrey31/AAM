import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Image, Palette, Truck, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Entre em Contato',
    description: 'Envie uma mensagem pelo WhatsApp ou formulário contando qual peça você deseja e para qual ocasião.',
    color: 'bg-primary',
  },
  {
    number: '02',
    icon: Image,
    title: 'Envie Referências',
    description: 'Compartilhe fotos de inspiração, cores preferidas, tema do evento e todas as características desejadas.',
    color: 'bg-primary',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Produção Artesanal',
    description: 'Começo a modelar sua peça à mão, de acordo com as características que você me enviou.',
    color: 'bg-gold/20',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Entrega',
    description: 'Após aprovação final, sua peça é embalada com cuidado e enviada para qualquer lugar do Brasil.',
    color: 'bg-primary',
  },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-cream via-white to-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Luxo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-luxury mb-4 inline-block">Processo Simples</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gradient-luxury mt-4 mb-6">
            Como Funciona
          </h2>
          <div className="line-luxury max-w-md mx-auto mb-6" />
          <p className="text-text-light max-w-2xl mx-auto">
            Fazer sua encomenda é fácil! Siga estes passos simples e receba uma peça única
            feita especialmente para você.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/50" />
              )}

              <div className="card-luxury p-6 h-full">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center font-serif text-xl text-white shadow-soft bg-gradient-to-br from-gold to-gold-dark">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-gold" />
                </div>

                <h3 className="font-serif text-xl text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 card-luxury rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-text text-sm sm:text-base mb-1">Orçamento Gratuito</h4>
                <p className="text-xs sm:text-sm text-text-light leading-relaxed">Receba uma proposta personalizada sem compromisso</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-text text-sm sm:text-base mb-1">Pagamento Facilitado</h4>
                <p className="text-xs sm:text-sm text-text-light leading-relaxed">Parcelamento e opções de pagamento disponíveis</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-text text-sm sm:text-base mb-1">Envios para todo o Brasil</h4>
                <p className="text-xs sm:text-sm text-text-light leading-relaxed">Todo nosso carinho e dedicação para todo o País</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#encomendar');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-accent to-accent-hover text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-accent hover:shadow-accent-hover tracking-wide"
          >
            Criar minha lembrança
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
