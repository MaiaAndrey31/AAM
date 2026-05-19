import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star } from 'lucide-react';
import amandaImg from '../assets/Amanda.png';

export default function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section-gap px-margin-edge bg-surface" id="sobre" ref={ref}>
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 relative"
        >
          <div className="aspect-[0.75] sm:aspect-[0.56] max-h-[450px] sm:max-h-[600px] rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl relative z-10">
            <img
              alt="Artesã Amanda Maia"
              className="w-full h-full object-cover"
              src={amandaImg}
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed rounded-full opacity-30 -z-0"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg z-20"
          >
            <div className="text-xl sm:text-headline-md font-bold text-secondary">12+</div>
            <div className="text-label-caps font-label-caps">Anos criando sonhos em biscuit</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 space-y-stack-md"
        >
          <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">Conheça a Artesã</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">Quem está por trás de cada peça especial</h2>
          <p className="text-body-lg text-on-surface-variant italic">"Modelando com amor, uma lembrança da sua vida"</p>
          <div className="space-y-stack-md text-body-md text-on-surface-variant leading-relaxed">
            <p>Olá! Sou Amanda Maia, apaixonada por transformar sentimentos em peças únicas de biscuit. Há mais de 12 anos, venho ajudando pessoas a eternizar seus momentos mais especiais através da arte manual.</p>
            <p>Cada topo de bolo, cada noivinho, cada lembrancinha carrega uma história. Trabalho exclusivamente com encomendas personalizadas, porque acredito que seu momento único merece uma peça igualmente exclusiva. Tudo à mão, com paciência e amor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md pt-8">
            <div className="flex gap-4 items-start">
              <Heart className="text-primary" fill="currentColor" />
              <div>
                <h4 className="font-bold text-on-surface">Feito com Amor</h4>
                <p className="text-sm text-on-surface-variant">Dedicamos carinho pensando nos seus momentos especiais.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Star className="text-primary" fill="currentColor" />
              <div>
                <h4 className="font-bold text-on-surface">100% Artesanal</h4>
                <p className="text-sm text-on-surface-variant">Processo manual do início ao fim, garantindo exclusividade.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
