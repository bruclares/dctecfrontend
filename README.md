# 💻 DCTec - Soluções em Tecnologia (Frontend)

Landing Page institucional moderna, responsiva e de alta performance desenvolvida para a **DCTec**.
O projeto foca em **User Experience (UX)**, acessibilidade e uma arquitetura de CSS modular e escalável.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível e otimizada para SEO.
- **CSS3 Modular**:
  - Arquitetura organizada em pastas (`components`, `layout`) para fácil manutenção.
  - Uso de **Flexbox** e **Grid Layout** para responsividade.
  - Variáveis CSS (`var(--cor-destaque)`) para consistência visual.
- **JavaScript (ES6+)**:
  - Manipulação de DOM para interatividade (Menu Mobile).
  - Integração assíncrona (`async/await`) com API Backend.

---

## ✨ Funcionalidades

- **📱 Design Totalmente Responsivo**: Adapta-se perfeitamente a celulares, tablets e desktops (Mobile First).
- **✉️ Formulário de Contato Inteligente**:
  - Validação no frontend.
  - Integração via `fetch` com microsserviço Backend (FastAPI + Resend).
  - Feedback visual imediato para o usuário (Estados de _Loading_, _Sucesso_ e _Erro_).
- **💬 Botão Flutuante WhatsApp**: Acesso rápido para contato direto.
- **✨ Micro-interações**: Efeitos de _hover_, transições suaves e menu mobile animado.

---

## 📂 Estrutura do Projeto

O código foi organizado para separar responsabilidades e facilitar a escalabilidade:

```text
📂 dctecfrontend
    ├── index.html          # Estrutura principal
    ├── 📁 css/
    │   ├── base.css        # Reset e variáveis globais
    │   ├── style.css       # Arquivo principal que importa os módulos
    │   ├── 📁 layout/      # Estrutura (header, footer, containers)
    │   └── 📁 components/  # Blocos reutilizáveis (botões, cards, formulários)
    ├── 📁 js/
    │   └── main.js         # Lógica do menu e envio de formulário
    └── 📁 static/
        ├── 📁 images/      # Ativos visuais
        └── 📁 icons/       # Ícones SVG
```

## 🔌 Integração com Backend

Este frontend consome uma API externa para o envio de e-mails. A lógica de envio encontra-se em js/main.js:

```text
// Exemplo da chamada à API
const response = await fetch("[https://api-de-contato.onrender.com/api/send](https://api-de-contato.onrender.com/api/send)", {
  method: "POST",
  body: JSON.stringify(data),
  // ...
});
```

Obs: O Backend está hospedado no Render e protegido por CORS, aceitando requisições apenas deste domínio.

## 🛠️ Como Rodar Localmente

1. Clone o repositório

```text
git clone [https://github.com/bruclares/dctecfrontend.git](https://github.com/bruclares/dctecfrontend.git)
```

2. Abra com VS Code

```text
cd dctecfrontend
code .
```

3. Inicie um Servidor Local Recomendado usar a extensão Live Server do VS Code.

- Clique em "Go Live" na barra inferior do editor.

- O site abrirá em http://127.0.0.1:5500.

## ☁️ Deploy

O projeto está otimizado para deploy estático em plataformas como:

- Vercel (Recomendado)

- Netlify

- GitHub Pages

### Desenvolvido por Bruna Clares
