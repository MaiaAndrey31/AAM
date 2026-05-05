import { Heart, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-gold fill-primary" />
              <span className="font-serif text-xl font-semibold">
                Ateliê Amanda Maia
              </span>
            </div>
            <p className="text-primary text-sm leading-relaxed max-w-md mb-4">
              Transformando momentos em lembranças eternas.
              Especialista em biscuit personalizado para casamentos,
              aniversários e eventos especiais. 100% artesanal e feito com amor.
            </p>
            <p className="text-gold font-serif italic">
              "Modelando com amor, uma lembrança da sua vida"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/atelieamandamaia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-text-light/30 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511975578672"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-text-light/30 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@atelieamandamaia.com"
                className="w-10 h-10 bg-text-light/30 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-text-light/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary">
            © {currentYear} Ateliê Amanda Maia. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary">
            Desenvolvido com <Heart className="w-4 h-4 inline text-primary fill-primary" /> em Adamantina, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
