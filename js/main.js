window.addEventListener("DOMContentLoaded", (event) => {
  const header = document.querySelector(".header");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.classList.add("header--hidden");
    } else if (currentScrollY < lastScrollY) {
      header.classList.remove("header--hidden");
    }

    //Atualiza a "última posição" para a próxima checagem
    lastScrollY = currentScrollY;
  });

  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const allNavLinks = document.querySelectorAll(".header__list a");

  function toggleMenu() {
    header.classList.toggle("header--mobile-open");

    document.body.classList.toggle("body--lock-scroll");

    const isExpanded = header.classList.contains("header--mobile-open");
    mobileToggle.setAttribute("aria-expanded", isExpanded);
  }

  mobileToggle.addEventListener("click", toggleMenu);

  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("header--mobile-open")) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          toggleMenu();
        }
      }
    });
  });
});
