import { Heart, Instagram, MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-dark via-dark to-text text-white relative overflow-hidden">
      {/* Elementos decorativos de luxo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">


        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand - Coluna 1 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gold/40 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                <Heart className="w-5 h-5 text-gold fill-primary" />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold tracking-wide text-white block">
                  Ateliê Amanda Maia
                </span>
                <span className="text-xs text-gold font-medium tracking-wider">BISCUIT ARTESANAL</span>
              </div>
            </div>
            <div className="line-luxury w-16 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Transformando momentos em lembranças eternas. Especialista em biscuit personalizado para momentos únicos.
            </p>
            <p className="text-gold-light font-serif italic text-sm">
              "Modelando com amor, uma lembrança da sua vida"
            </p>
          </div>

          {/* Contato - Coluna 2 */}
          <div>
            <h4 className="font-serif text-lg text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-gold"></span>
              Contato
            </h4>
            <div className="space-y-4">
              <a href="https://wa.me/5511975578672" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-8 h-8 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center group-hover:from-gold group-hover:to-gold-dark transition-all">
                  <Phone className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-white/50">WhatsApp</p>
                  <p className="text-sm text-white group-hover:text-gold transition-colors">(11) 97557-8672</p>
                </div>
              </a>
              <a href="mailto:contato@atelieamandamaia.com" className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="w-8 h-8 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center group-hover:from-gold group-hover:to-gold-dark transition-all">
                  <Mail className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-white/50">E-mail</p>
                  <p className="text-sm text-white group-hover:text-gold transition-colors">contato@atelieamandamaia.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Localização</p>
                  <p className="text-sm text-white">Adamantina, SP</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Atendimento</p>
                  <p className="text-sm text-white">Seg - Sex: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos - Coluna 3 */}
          <div>
            <h4 className="font-serif text-lg text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-gold"></span>
              Navegue
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Faça sua Encomenda', href: '#encomendar' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-sm text-white/70 hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full group-hover:bg-gold-light transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter - Coluna 4 */}
          <div>
            <h4 className="font-serif text-lg text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-gold"></span>
              Siga-nos
            </h4>
            <p className="text-sm text-white/70 mb-5">
              Acompanhe nosso trabalho e inspire-se para sua próxima peça especial.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/atelie_amandamaia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-gold/30 to-gold/10 rounded-xl flex items-center justify-center hover:from-gold hover:to-gold-dark transition-all duration-300 hover:scale-110 hover:shadow-gold-lux border border-gold/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gold hover:text-white" />
              </a>
              <a
                href="https://wa.me/5511975578672"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-gold/30 to-gold/10 rounded-xl flex items-center justify-center hover:from-[#25D366] hover:to-[#128C7E] transition-all duration-300 hover:scale-110 hover:shadow-soft border border-gold/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-gold" />
              </a>
              <a
                href="mailto:contato@atelieamandamaia.com"
                className="w-11 h-11 bg-gradient-to-br from-gold/30 to-gold/10 rounded-xl flex items-center justify-center hover:from-gold hover:to-gold-dark transition-all duration-300 hover:scale-110 hover:shadow-gold-lux border border-gold/20"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gold" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-4 border border-gold/20">
              <p className="text-xs text-white/50 mb-1">Atendimento Premium</p>
              <p className="text-sm text-gold font-semibold">Orçamento em 24h</p>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="line-luxury w-full mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50">© {currentYear}</span>
            <span className="text-sm text-white font-medium">Ateliê Amanda Maia</span>
            <span className="text-xs text-white/50">— Todos os direitos reservados</span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-white/70 flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-gold fill-gold animate-pulse" /> por{' '}
              <a
                href="https://www.instagram.com/oandreymaia.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light font-medium transition-colors"
              >
                Andrey Maia
              </a>
            </p>
            <span className="hidden md:block w-px h-4 bg-gold"></span>
            <span className="text-xs text-gold font-medium tracking-wider uppercase">Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
