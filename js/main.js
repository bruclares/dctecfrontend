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
});
