import { Heart, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-on-surface py-16 px-margin-edge">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg max-w-container-max mx-auto">
        {/* Brand */}
        <div className="md:col-span-1 space-y-stack-md">
          <div className="font-headline-md text-headline-md text-primary-fixed">Ateliê Amanda Maia</div>
          <p className="text-surface-variant/80 text-sm leading-relaxed">
            Transformando momentos em lembranças eternas. Especialista em biscuit personalizado para momentos únicos. "Modelando com amor, uma lembrança da sua vida"
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/atelie_amandamaia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-fixed hover:bg-primary transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5511975578672"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-fixed hover:bg-primary transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-widest">Serviços</h4>
          <ul className="space-y-stack-sm">
            <li><a href="#portfolio" className="text-surface-variant/80 hover:text-surface transition-all text-sm">Casamento</a></li>
            <li><a href="#portfolio" className="text-surface-variant/80 hover:text-surface transition-all text-sm">Infantil</a></li>
            <li><a href="#portfolio" className="text-surface-variant/80 hover:text-surface transition-all text-sm">Personalizados</a></li>
            <li><a href="#orcamento" className="text-surface-variant/80 hover:text-surface transition-all text-sm">Contato</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-widest">Contato</h4>
          <div className="space-y-stack-sm text-sm text-surface-variant/80">
            <p className="flex items-center gap-2">
              <Phone className="w-[18px]" /> (11) 97557-8672
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-[18px]" /> contato@atelieamandamaia.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-[18px]" /> Adamantina, SP - Brasil
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-surface-variant/80">Acompanhe nosso trabalho e inspire-se para sua próxima peça especial.</p>
          <div className="flex">
            <input
              className="bg-surface/10 border-none rounded-l-lg px-4 py-2 text-surface w-full outline-none"
              placeholder="E-mail"
              type="email"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-r-lg hover:bg-primary-container transition-all">OK</button>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto pt-16 mt-16 border-t border-surface-variant/10 text-center text-[12px] text-surface-variant/50">
        © {currentYear} Ateliê Amanda Maia. Todos os direitos reservados. Feito com <Heart className="w-3 h-3 inline fill-current" /> por Andrey Maia | Brasil
      </div>
    </footer>
  );
}
