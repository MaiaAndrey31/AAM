import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, BadgeCheck, Clock, Gift } from 'lucide-react';
import SparkleButton from './SparkleButton.jsx';

const productTypes = [
  { value: '', label: 'Selecione o tipo de produto' },
  { value: 'topo-bolo-casamento', label: 'Topo de Bolo Casamento' },
  { value: 'topo-bolo-infantil', label: 'Topo de Bolo Infantil' },
  { value: 'lembrancinhas', label: 'Lembrancinhas' },
  { value: 'boneco-personalizado', label: 'Boneco Personalizado' },
];

export default function Encomendar() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    tipo: '',
    data: '',
    observacoes: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Olá! Gostaria de fazer uma encomenda.\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nTipo de Produto: ${productTypes.find(p => p.value === formData.tipo)?.label || formData.tipo}\nData do Evento: ${formData.data || 'Não informada'}\nObservações: ${formData.observacoes || 'Nenhuma'}`;

    const whatsappNumber = '5511975578672';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setSubmitStatus('success');
    setFormData({
      nome: '',
      whatsapp: '',
      tipo: '',
      data: '',
      observacoes: '',
    });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-section-gap px-margin-edge bg-surface" id="orcamento" ref={ref}>
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">Vamos Criar Juntos</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4 mb-8 leading-tight">Faça sua Encomenda</h2>
            <p className="text-body-lg text-on-surface-variant mb-8 sm:mb-12">Preencha o formulário ao lado e envie sua solicitação diretamente pelo WhatsApp. Respondemos em poucas horas com seu orçamento personalizado!</p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-soft flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Orçamento Gratuito</h4>
                  <p className="text-sm text-on-surface-variant">Sem compromisso e com consultoria criativa.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-soft flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Prazo de Produção</h4>
                  <p className="text-sm text-on-surface-variant">De 15 a 30 dias úteis (reserve sua data).</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-soft flex items-center justify-center flex-shrink-0">
                  <Gift className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Embalagem Especial</h4>
                  <p className="text-sm text-on-surface-variant">Presente pronto com toda a delicadeza que sua peça merece.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface-soft p-6 sm:p-8 md:p-12 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-outline-variant/30 relative mt-4"
          >
            <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-5 sm:px-8 py-1.5 sm:py-2 rounded-full font-label-caps text-[10px] sm:text-label-caps shadow-lg whitespace-nowrap">Solicitar Orçamento</div>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">Tipo de Produto</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  >
                    {productTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">Data do Evento</label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">Observações / Detalhes</label>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Conte-nos mais sobre o tema, cores e personagens..."
                  />
                </div>
              </div>
              <SparkleButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                className="w-full"
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
                    Fazer minha encomenda
                  </>
                )}
              </SparkleButton>
              <p className="text-[10px] text-center text-on-surface-variant italic">Sua solicitação será enviada diretamente para nosso WhatsApp.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
