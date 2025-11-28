window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const navList = document.querySelector(".header__list");
  const allNavLinks = document.querySelectorAll(".header__list a");

  let lastScrolly = 0;
  const scrollLimite = 100;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }

    if (window.innerWidth >= 768) {
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrolly && currentScrollY > scrollLimite) {
          header.classList.add("header--hidden");
        } else if (currentScrollY < lastScrolly) {
          header.classList.remove("header--hidden");
        }
      } else {
        header.classList.remove("header--hidden");
      }
    }
  }
});
