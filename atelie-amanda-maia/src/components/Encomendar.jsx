import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Calendar, User, Phone, FileText, Gift, CheckCircle } from 'lucide-react';

const productTypes = [
  { value: '', label: 'Selecione o tipo de produto' },
  { value: 'topo-bolo', label: 'Topo de Bolo' },
  { value: 'noivinhos', label: 'Noivinhos' },
  { value: 'lembrancinhas', label: 'Lembrancinhas' },
  { value: 'personagens', label: 'Personagens' },
  { value: 'bebe', label: 'Decoração Bebê' },
  { value: 'outro', label: 'Outro (especificar)' },
];

export default function Encomendar() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    tipo: '',
    data: '',
    observacoes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*Nova Encomenda - Ateliê Amanda Maia*

*Nome:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Tipo de Produto:* ${productTypes.find(p => p.value === formData.tipo)?.label || formData.tipo}
*Data do Evento:* ${formData.data || 'Não informada'}
*Observações:* ${formData.observacoes || 'Nenhuma'}

_Oi, vim pelo site e quero fazer uma encomenda 😊_`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/5514999999999?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    );

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="encomendar" className="py-24 bg-atelie-bege" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-atelie-dourado font-medium text-sm tracking-wider uppercase">
              Vamos Criar Juntos
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-atelie-marrom mt-4 mb-6">
              Faça sua Encomenda
            </h2>
            <p className="text-atelie-marrom-light text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado e envie sua solicitação diretamente pelo WhatsApp.
              Respondemos em poucas horas com seu orçamento personalizado!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-atelie-dourado/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-atelie-dourado" />
                </div>
                <div>
                  <h4 className="font-medium text-atelie-marrom">Orçamento Gratuito</h4>
                  <p className="text-sm text-atelie-marrom-light">Sem compromisso</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-atelie-dourado/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-atelie-dourado" />
                </div>
                <div>
                  <h4 className="font-medium text-atelie-marrom">Prazo de Produção</h4>
                  <p className="text-sm text-atelie-marrom-light">De 15 a 30 dias úteis</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-atelie-dourado/20 rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-atelie-dourado" />
                </div>
                <div>
                  <h4 className="font-medium text-atelie-marrom">Embalagem Especial</h4>
                  <p className="text-sm text-atelie-marrom-light">Presente incluído</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
              <h3 className="font-serif text-xl sm:text-2xl text-atelie-marrom mb-4 sm:mb-6 text-center">
                Solicitar Orçamento
              </h3>

              {/* Name */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-atelie-marrom mb-2">
                  <User className="w-4 h-4 text-atelie-dourado flex-shrink-0" />
                  <span className="truncate">Nome Completo</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-atelie-bege-dark focus:border-atelie-dourado focus:ring-2 focus:ring-atelie-dourado/20 outline-none transition-all bg-atelie-creme text-sm sm:text-base"
                  placeholder="Seu nome"
                />
              </div>

              {/* WhatsApp */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-atelie-marrom mb-2">
                  <Phone className="w-4 h-4 text-atelie-dourado flex-shrink-0" />
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-atelie-bege-dark focus:border-atelie-dourado focus:ring-2 focus:ring-atelie-dourado/20 outline-none transition-all bg-atelie-creme text-sm sm:text-base"
                  placeholder="(14) 99999-9999"
                />
              </div>

              {/* Product Type */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-atelie-marrom mb-2">
                  <Gift className="w-4 h-4 text-atelie-dourado flex-shrink-0" />
                  Tipo de Produto
                </label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-atelie-bege-dark focus:border-atelie-dourado focus:ring-2 focus:ring-atelie-dourado/20 outline-none transition-all bg-atelie-creme text-sm sm:text-base"
                >
                  {productTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Date */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-atelie-marrom mb-2">
                  <Calendar className="w-4 h-4 text-atelie-dourado flex-shrink-0" />
                  Data do Evento
                </label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-atelie-bege-dark focus:border-atelie-dourado focus:ring-2 focus:ring-atelie-dourado/20 outline-none transition-all bg-atelie-creme text-sm sm:text-base"
                />
              </div>

              {/* Observations */}
              <div className="mb-5 sm:mb-6">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-atelie-marrom mb-2">
                  <FileText className="w-4 h-4 text-atelie-dourado flex-shrink-0" />
                  Observações / Detalhes
                </label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-atelie-bege-dark focus:border-atelie-dourado focus:ring-2 focus:ring-atelie-dourado/20 outline-none transition-all bg-atelie-creme resize-none text-sm sm:text-base"
                  placeholder="Descreva o tema, cores, personagens..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-atelie-dourado hover:bg-atelie-dourado-light text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 shadow-lg shadow-atelie-dourado/30 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="truncate">Enviar pelo WhatsApp</span>
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-atelie-marrom-light mt-3 sm:mt-4">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
