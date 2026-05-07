# Ateliê Amanda Maia

[![Deploy na Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://aam-gotk-git-main-maiaandrey31s-projects.vercel.app)

Site profissional em React para ateliê de biscuit artesanal personalizado.

## 🎯 Sobre o Projeto

Site elegante e responsivo para o Ateliê Amanda Maia, especializado em:
- Topo de bolo personalizado
- Noivinhos
- Lembrancinhas
- Personagens especiais
- Decorações para eventos

**Posicionamento:** "Modelando com amor, uma lembrança da sua vida"

## 🚀 Tecnologias

- **React 18** - Biblioteca principal
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx          # Navegação fixa com scroll suave
│   ├── Hero.jsx            # Seção inicial com CTA
│   ├── Sobre.jsx           # História da Amanda
│   ├── Portfolio.jsx       # Galeria de trabalhos
│   ├── ComoFunciona.jsx    # Processo de encomenda
│   ├── Depoimentos.jsx     # Avaliações de clientes
│   ├── Encomendar.jsx      # Formulário de contato
│   ├── Contato.jsx         # Informações de contato
│   ├── Footer.jsx          # Rodapé
│   ├── WhatsAppButton.jsx  # Botão flutuante WhatsApp
│   └── index.js            # Exportações
├── index.css               # Estilos globais + Tailwind
├── App.jsx                 # Componente principal
└── main.jsx                # Entry point
```

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves com Framer Motion
- ✅ Navegação suave entre seções
- ✅ Filtro de categorias no portfólio
- ✅ Formulário de encomenda integrado ao WhatsApp
- ✅ Botão flutuante WhatsApp com mensagem automática
- ✅ SEO otimizado (meta tags, Open Graph)
- ✅ Paleta de cores personalizada (tons bege, rosé, dourado)
- ✅ Tipografia elegante (Playfair Display + Inter)

## 🎨 Identidade Visual

**Cores:**
- Bege: `#F5F0E8`
- Rosé: `#F8E8E0`
- Dourado: `#C9A962`
- Marrom: `#8B7355`
- Creme: `#FAF7F2`

**Fontes:**
- Títulos: Playfair Display
- Corpo: Inter

## 📝 Configurações Importantes

### WhatsApp
Editar o número no arquivo `src/components/WhatsAppButton.jsx`:
```javascript
const WHATSAPP_NUMBER = '5514999999999'; // Seu número
```

### Imagens
Substituir placeholders nas seções por imagens reais do trabalho:
- Hero: Adicionar imagem de destaque
- Sobre: Foto da Amanda
- Portfólio: Fotos dos trabalhos

## 🔧 Personalização

1. **Cores**: Editar `tailwind.config.js`
2. **Conteúdo**: Editar textos em cada componente
3. **Imagens**: Substituir placeholders
4. **Contato**: Atualizar links de WhatsApp/Instagram

## 📱 Responsividade

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

Recomendado: Vercel, Netlify ou similar

```bash
npm run build
```

## 📄 Licença

Projeto desenvolvido exclusivamente para Ateliê Amanda Maia.

---

**Desenvolvido com 💛 em Adamantina, SP**
