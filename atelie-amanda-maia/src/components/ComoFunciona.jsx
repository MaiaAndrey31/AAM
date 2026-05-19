import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Entre em Contato',
    description: 'Mande uma mensagem pelo WhatsApp contando o que você deseja.',
  },
  {
    number: '02',
    title: 'Envie Referências',
    description: 'Compartilhe fotos de inspiração, cores e temas do evento.',
  },
  {
    number: '03',
    title: 'Produção Artesanal',
    description: 'Começo a modelar sua peça com todo carinho e precisão técnica.',
  },
  {
    number: '04',
    title: 'Entrega Especial',
    description: 'Sua peça é embalada com cuidado e enviada para qualquer lugar do Brasil.',
  },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section-gap px-margin-edge bg-surface" id="processo" ref={ref}>
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">Processo Simples</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Como Funciona sua Encomenda</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto text-primary font-bold text-xl relative">
                {step.number}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block text-outline-variant">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
              <h4 className="font-bold text-on-surface">{step.title}</h4>
              <p className="text-sm text-on-surface-variant">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-12 bg-surface-container-high/50 p-8 rounded-3xl"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="text-secondary" fill="currentColor" />
            <span className="font-label-caps text-label-caps">Orçamento Gratuito</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-secondary" fill="currentColor" />
            <span className="font-label-caps text-label-caps">Pagamento Facilitado</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-secondary" fill="currentColor" />
            <span className="font-label-caps text-label-caps">Envio para Todo o Brasil</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
