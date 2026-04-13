# 🏠 Clécio Rosa - Landing Page

Landing page profissional para corretor de imóveis, desenvolvida com React + Vite e baseada no design system da OpenDoor.

## ✨ Características

- 🎨 Design System completo baseado na OpenDoor
- 📱 Totalmente responsivo (Mobile First)
- ⚡ Desenvolvido com React + Vite
- 🎯 Focado em conversão de leads
- ♿ Acessibilidade (WCAG AA compliant)
- 🔍 SEO otimizado

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para building UIs
- **Vite** - Build tool e dev server extremamente rápido
- **CSS Variables** - Design tokens para consistência visual
- **CSS Modules** - Estilos encapsulados por componente

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/clecio-rosa-landing.git

# Entre no diretório
cd clecio-rosa-landing

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🛠️ Scripts Disponíveis

```bash
# Development
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Cria a versão de produção
npm run preview      # Preview da versão de produção localmente
```

## 📁 Estrutura do Projeto

```
clecio-rosa-landing/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar/       # Barra de navegação
│   │   ├── Hero/         # Seção hero principal
│   │   ├── Features/     # Features/diferenciais
│   │   ├── Benefits/     # Benefícios do serviço
│   │   ├── Contact/      # Formulário de contato
│   │   └── Footer/       # Rodapé
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   ├── main.jsx          # Entry point
│   └── index.css         # Design system & variáveis CSS
├── index.html            # Template HTML
└── package.json          # Dependências e scripts
```

## 🎨 Design System

O projeto utiliza o design system da OpenDoor, com as seguintes características:

### Cores
- **Brand**: #0042e6 (azul principal)
- **Background**: #ffffff (branco), #f9f8f8 (cinza claro)
- **Content**: #23201d (preto suave), #5e564e (cinza médio)
- **Border**: #dfdbd8 (cinza claro)

### Tipografia
- **Font**: Graphik, system-ui, sans-serif
- **Sizes**: Display (92px), Header (45-36px), Body (18-14px), Label (18-14px)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Espaçamento
Sistema baseado em múltiplos de 2px: 2px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px

### Border Radius
- sm: 4px, md: 8px, lg: 14px, xl: 16px, full: 1998px

## 📱 Componentes

### Navbar
- Fixed position com scroll effect
- Links de navegação
- CTA button
- Mobile responsive

### Hero
- Título impactante
- Descrição persuasiva
- CTAs múltiplos
- Estatísticas sociais
- Imagem de destaque

### Features
- Grid de features
- Cards com hover effects
- Ícones e descrições

### Benefits
- Lista de benefícios
- Numerada
- Imagem ilustrativa

### Contact
- Formulário funcional
- Informações de contato
- Validação HTML5

### Footer
- Informações da marca
- Links rápidos
- Informações de contato
- Redes sociais

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=your-api-url
VITE_CONTACT_EMAIL=contato@clecliorosa.com.br
VITE_WHATSAPP_NUMBER=5511999999999
```

### Personalização

Para personalizar as cores e fontes, edite `src/index.css`:

```css
:root {
  --color-background-accent-brand: #0042e6;
  --f-family: 'Graphik', system-ui, sans-serif;
  /* ... */
}
```

## 📦 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta 'dist' para o Netlify
```

### GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Clécio Rosa**
- Website: [clecliorosa.com.br](https://www.clecliorosa.com.br)
- WhatsApp: (11) 99999-9999
- Email: contato@clecliorosa.com.br

## 🙏 Agradecimentos

- Design System baseado na OpenDoor
- Ícones de [Unsplash](https://unsplash.com)
- Build com [Vite](https://vitejs.dev)

---

Desenvolvido com ❤️ usando React + Vite
