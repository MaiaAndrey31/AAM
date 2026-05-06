import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Calendar, User, Phone, FileText, Gift, CheckCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdogdrj';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = {
      nome: formData.nome,
      whatsapp: formData.whatsapp,
      tipo: productTypes.find(p => p.value === formData.tipo)?.label || formData.tipo,
      data: formData.data || 'Não informada',
      observacoes: formData.observacoes || 'Nenhuma',
      _subject: 'Nova Encomenda - Ateliê Amanda Maia',
      _replyto: formData.whatsapp,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          whatsapp: '',
          tipo: '',
          data: '',
          observacoes: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="encomendar" className="py-24 bg-gradient-to-b from-secondary via-cream to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-luxury mb-4 inline-block">Vamos Criar Juntos</div>
            <h2 className="font-serif text-4xl sm:text-5xl text-gradient-luxury mt-4 mb-6">
              Faça sua Encomenda
            </h2>
            <div className="line-luxury w-24 mb-6" />
            <p className="text-text-light text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado e envie sua solicitação diretamente pelo WhatsApp.
              Respondemos em poucas horas com seu orçamento personalizado!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/40 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                  <CheckCircle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-text">Orçamento Gratuito</h4>
                  <p className="text-sm text-text-light">Sem compromisso</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/40 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-text">Prazo de Produção</h4>
                  <p className="text-sm text-text-light">De 15 a 30 dias úteis</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/40 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                  <Gift className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-text">Embalagem Especial</h4>
                  <p className="text-sm text-text-light">Presente incluído</p>
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
            <form onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="card-luxury rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <h3 className="font-serif text-xl sm:text-2xl text-gradient-luxury mb-4 sm:mb-6 text-center">
                Solicitar Orçamento
              </h3>

              {/* Name */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text mb-2">
                  <User className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="truncate">Nome Completo</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-primary focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream text-sm sm:text-base shadow-inner-light"
                  placeholder="Seu nome"
                />
              </div>

              {/* WhatsApp */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text mb-2">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-primary focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream text-sm sm:text-base shadow-inner-light"
                  placeholder="(11) 97557-8672"
                />
              </div>

              {/* Product Type */}
              <div className="mb-4 sm:mb-5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text mb-2">
                  <Gift className="w-4 h-4 text-gold flex-shrink-0" />
                  Tipo de Produto
                </label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-primary focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream text-sm sm:text-base shadow-inner-light"
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
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text mb-2">
                  <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                  Data do Evento
                </label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-primary focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream text-sm sm:text-base shadow-inner-light"
                />
              </div>

              {/* Observations */}
              <div className="mb-5 sm:mb-6">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text mb-2">
                  <FileText className="w-4 h-4 text-gold flex-shrink-0" />
                  Observações / Detalhes
                </label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-primary focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream resize-none text-sm sm:text-base shadow-inner-light"
                  placeholder="Descreva o tema, cores, personagens..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-accent to-accent-hover disabled:from-accent/50 disabled:to-accent-hover/50 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-accent hover:shadow-accent-hover flex items-center justify-center gap-2 tracking-wide"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Enviado com sucesso!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="truncate">Fazer minha encomenda</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-center text-xs text-green-600 mt-3 sm:mt-4">
                  Obrigada! Sua encomenda foi enviada. Entraremos em contato em breve.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-xs text-red-500 mt-3 sm:mt-4">
                  Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                </p>
              )}
              {!submitStatus && (
                <p className="text-center text-xs text-text-light mt-3 sm:mt-4">
                  Sua encomenda será enviada diretamente para nosso email
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
