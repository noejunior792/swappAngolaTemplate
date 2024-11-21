
# 🌍 Template de Site para GlobalSwapAngola

Este documento descreve o template de um site desenvolvido para a empresa de importação **GlobalSwapAngola**, localizada em Angola. O site foi construído utilizando **Vite**, **React**, e **TypeScript**. É totalmente responsivo e otimizado para desempenho.

## ✨ Características do Site

- 📱 **Responsividade:** O layout se adapta a diferentes tamanhos de tela (desktop, tablets e dispositivos móveis).
- 💻 **Tecnologias Utilizadas:**
  - ⚡ Vite para build e desenvolvimento rápido.
  - ⚛️ React para criação de componentes reutilizáveis.
  - 🛠️ TypeScript para tipagem estática e maior confiabilidade no código.
- 🎨 **Design Moderno:** Interface limpa e intuitiva.
- 🚀 **Performance:** Carregamento rápido devido à otimização do Vite.
- ♿ **Acessibilidade:** Segue as melhores práticas de acessibilidade.

## 🗂️ Estrutura do Projeto

```plaintext
GlobalSwapAngola/
├── public/
│   ├── assets/          # 🖼️ Imagens e recursos públicos
│   └── favicon.ico      # 🌟 Ícone do site
├── src/
│   ├── components/      # 🧩 Componentes reutilizáveis
│   │   ├── Header.tsx   # 🔝 Cabeçalho do site
│   │   ├── Footer.tsx   # 🔚 Rodapé do site
│   │   ├── Hero.tsx     # 🎯 Seção inicial do site
│   │   └── Contact.tsx     # 🃏 Componentes de cartão para exibição de produtos
│   ├── App.tsx          # 🌳 Componente raiz
│   └── main.tsx         # 🚪 Ponto de entrada da aplicação
├── .eslintrc.cjs        # 🛡️ Configuração do ESLint
├── tsconfig.json        # 🛠️ Configuração do TypeScript
├── vite.config.ts       # ⚙️ Configuração do Vite
└── package.json         # 📦 Dependências e scripts do projeto
```

## 🔧 Scripts Disponíveis

### 🚀 Instalar Dependências
```bash
npm install
```

### ▶️ Executar o Servidor de Desenvolvimento
```bash
npm run dev
```

### 🏗️ Gerar a Versão de Produção
```bash
npm run build
```

### 🔍 Visualizar o Build
```bash
npm run preview
```

## 🧩 Componentes e Funcionalidades

- **Header:** Navegação principal do site com links para as páginas "Home", "Sobre" e "Contato".
- **Hero:** Seção inicial com uma mensagem de boas-vindas e chamada para ação.
- **Cards:** Exibição de produtos ou serviços oferecidos pela empresa.
- **Footer:** Informações de contato e links para redes sociais.

## 🎨 Estilização

O projeto utiliza **CSS Modules** para estilização dos componentes, garantindo escopo isolado. Além disso, variáveis globais foram definidas em `variables.css` para facilitar mudanças no tema.

## 📐 Responsividade

O site foi testado em diferentes dispositivos para garantir uma experiência consistente. O layout utiliza **Flexbox** e **Grid**, combinados com media queries para adaptação a diferentes tamanhos de tela.

## 🚧 Melhorias Futuras

- 🌎 Implementação de um sistema de gerenciamento de conteúdo (CMS).
- 🌐 Tradução para múltiplos idiomas (inglês e português).
- ✨ Adicionar animações interativas para melhorar a experiência do usuário.

---

Desenvolvido por [Noé Júnior](https://github.com/noejunior792).
