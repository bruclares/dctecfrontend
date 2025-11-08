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
});
