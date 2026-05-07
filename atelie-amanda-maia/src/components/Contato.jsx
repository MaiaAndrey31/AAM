import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, Mail, Heart } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Localização',
    content: 'Adamantina, SP',
    subtext: 'Atendimento online para todo Brasil',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    content: '(11) 97557-8672',
    subtext: 'Resposta em até 2h',
    href: 'https://wa.me/5511975578672',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    content: '@atelieamandamaia',
    subtext: 'Siga nosso trabalho',
    href: 'https://www.instagram.com/atelie_amandamaia',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'contato@atelieamandamaia.com',
    subtext: 'Para orçamentos detalhados',
    href: 'mailto:contato@atelieamandamaia.com',
  },
];

export default function Contato() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white via-cream to-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Luxo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-luxury mb-4 inline-block">Fale Conosco</div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-gradient-luxury mt-4 mb-4 lg:mb-6">
            Entre em Contato
          </h2>
          <div className="line-luxury max-w-md mx-auto mb-6" />
          <p className="text-text-light text-sm lg:text-base max-w-2xl mx-auto">
            Estamos aqui para transformar suas ideias em realidade. Entre em contato
            e vamos criar algo especial juntos.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-luxury p-4 sm:p-6 h-full group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/40 to-gold/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:from-gold group-hover:to-gold-dark transition-all flex-shrink-0 shadow-soft group-hover:shadow-gold-lux">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                  <h3 className="font-medium text-text mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-text font-medium text-sm sm:text-base break-all sm:break-normal">{item.content}</p>
                  <p className="text-xs sm:text-sm text-text-light mt-1">{item.subtext}</p>
                </a>
              ) : (
                <div className="card-luxury p-4 sm:p-6 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/40 to-gold/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0 shadow-soft">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <h3 className="font-medium text-text mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-text font-medium text-sm sm:text-base">{item.content}</p>
                  <p className="text-xs sm:text-sm text-text-light mt-1">{item.subtext}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0" />
                <h3 className="font-serif text-xl sm:text-2xl text-text">Horário de Atendimento</h3>
              </div>
              <p className="text-text-light text-sm sm:text-base mb-4 sm:mb-6">
                Estamos disponíveis para atender você nos seguintes horários.
                Respostas fora do horário comercial serão respondidas no próximo dia útil.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-secondary">
                  <span className="text-text text-sm sm:text-base">Segunda a Sexta</span>
                  <span className="font-medium text-text text-sm sm:text-base">9h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-secondary">
                  <span className="text-text text-sm sm:text-base">Sábado</span>
                  <span className="font-medium text-text text-sm sm:text-base">9h às 14h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text text-sm sm:text-base">Domingo</span>
                  <span className="font-medium text-accent text-sm sm:text-base">Fechado</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/30 to-secondary rounded-2xl p-6 sm:p-8 text-center">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3 sm:mb-4" />
              <h4 className="font-serif text-lg sm:text-xl text-text mb-2">
                Atendimento Online
              </h4>
              <p className="text-text-light text-xs sm:text-sm mb-3 sm:mb-4">
                Enviamos para todo o Brasil com seguro e rastreamento.
              </p>
              <p className="text-text font-medium text-sm sm:text-base">
                Prazo de entrega mínimo: 5 a 10 dias úteis ou de acordo com a data do seu evento
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
