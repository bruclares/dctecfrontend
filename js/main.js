window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const navList = document.querySelector(".header__list");
  const allNavLinks = document.querySelectorAll(".header__list a");

  if (!header || !mobileToggle || !navList) {
    // Elementos essenciais não encontrados, não executa o restante
    return;
  }

  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 20) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
    if (window.innerWidth >= 768) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add("header--hidden");
      } else if (currentScrollY < lastScrollY) {
        header.classList.remove("header--hidden");
      }
    } else {
      header.classList.remove("header--hidden");
    }
    lastScrollY = currentScrollY;
  }

  // Throttle para melhorar performance
  function throttle(fn, wait) {
    let lastTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastTime >= wait) {
        lastTime = now;
        fn.apply(this, args);
      }
    };
  }

  window.addEventListener("scroll", throttle(handleScroll, 100));

  function toggleMenu() {
    header.classList.toggle("header--mobile-open");
    document.body.classList.toggle("body--lock-scroll");
  }

  mobileToggle.addEventListener("click", toggleMenu);

  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("header--mobile-open")) {
        toggleMenu();
      }
    });
  });

  // Acessibilidade: fechar menu com ESC
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      header.classList.contains("header--mobile-open")
    ) {
      toggleMenu();
    }
  });

  const contactForm = document.getElementById("formContato");

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // 1. Impede o recarregamento da página

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerText;

      // 2. UX: Feedback visual imediato e bloqueio contra duplo clique
      submitButton.innerText = "Enviando...";
      submitButton.disabled = true;
      submitButton.classList.add("botao--loading"); // Opcional: para estilizar via CSS

      // 3. Captura os dados com segurança
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      try {
        // 4. Envio para a API (Substitua pela URL do seu Render se mudar)
        const response = await fetch(
          "https://api-de-contato.onrender.com/api/send",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        // 5. Tratamento de Resposta
        if (response.ok) {
          alert(
            "✅ Mensagem enviada com sucesso! Em breve entraremos em contato."
          );
          contactForm.reset(); // Limpa os campos
        } else {
          // Captura erro 400/422/500
          const errorData = await response.json();
          console.warn("Erro na API:", errorData); // Log para nós (devs)

          // Mensagem amigável para o usuário (tratamento de erro 422 comum)
          let msgErro = "Ocorreu um erro ao enviar.";
          if (response.status === 422) {
            msgErro =
              "Verifique os dados preenchidos (e-mail inválido ou mensagem curta demais).";
          }
          alert(`❌ ${msgErro}`);
        }
      } catch (error) {
        // Erro de rede (internet caiu, servidor fora do ar)
        console.error("Erro de rede:", error);
        alert("❌ Erro de conexão. Verifique sua internet e tente novamente.");
      } finally {
        // 6. Restaura o botão independente do resultado
        submitButton.innerText = originalButtonText;
        submitButton.disabled = false;
        submitButton.classList.remove("botao--loading");
      }
    });
  }
});
