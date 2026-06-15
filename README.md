# ADN Titres-Services — Site institucional

Landing page da **ADN Titres-Services**, empresa belga de serviços domésticos (titres-services).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (utilitários base + CSS custom com variáveis)
- **Google Fonts** via `next/font` — Poppins, Inter, Dancing Script

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Root layout com fonts e metadata
│   ├── globals.css         # Todos os design tokens, base e estilos
│   ├── page.tsx            # Home page (/)
│   └── trabalhar/
│       └── page.tsx        # Página Quero Trabalhar (/trabalhar)
├── components/
│   ├── Icon.tsx            # Set de ícones SVG inline
│   ├── Button.tsx          # Botão reutilizável (primary/gold/ghost/outline/text)
│   ├── Chip.tsx            # Chip de badge/tag
│   ├── Photo.tsx           # Placeholder de foto (stripe pattern)
│   ├── SectionHead.tsx     # Cabeçalho de seção (eyebrow + título + subtitle)
│   ├── FormKit.tsx         # Field, TextInput, Textarea, Select, ChoiceGroup, Upload, FormSuccess
│   ├── Header.tsx          # Header fixo com menu mobile
│   ├── Footer.tsx          # Rodapé verde com contatos
│   ├── Hero.tsx            # Seção hero (home)
│   ├── QuemSomos.tsx       # Seção "Quem somos"
│   ├── Servicos.tsx        # Seção "Nossos serviços"
│   ├── PorQue.tsx          # Seção "Por que nós" (capítulo verde)
│   ├── Contratar.tsx       # Seção "Quero Contratar" com formulário
│   ├── TrabalharConvite.tsx# Seção convite para trabalhar
│   ├── WorkHero.tsx        # Hero da página /trabalhar
│   ├── WorkForm.tsx        # Formulário de candidatura
│   └── WorkAside.tsx       # Sidebar da página /trabalhar
└── lib/
    └── useReveal.ts        # Hook IntersectionObserver para animações de scroll
public/
└── images/
    └── logo.png            # Logo da ADN Titres-Services
```

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse em [http://localhost:3000](http://localhost:3000).

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Hero, Quem somos, Serviços, Por que nós, Formulário de contrato, Convite para trabalhar |
| `/trabalhar` | Formulário de candidatura para colaboradoras |

## Imagens

As imagens reais dos placeholders devem ser colocadas em `public/images/` e referenciadas nos componentes `Photo.tsx` (que exibe um stripe de placeholder) ou diretamente como `<Image>` do Next.js.

## Personalização

- **Cores e tokens**: edite as variáveis CSS em `src/app/globals.css` (bloco `:root`)
- **Textos e conteúdo**: cada componente é autocontido e fácil de editar
- **Ícones**: adicione novos paths em `src/components/Icon.tsx` no objeto `PATHS`
- **Fontes**: configuradas em `src/app/layout.tsx` via `next/font/google`
