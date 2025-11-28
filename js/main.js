window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const navList = document.querySelector(".header__list");
  const allNavLinks = document.querySelectorAll(".header__list a");

  let lastScrollY = 0;

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

  window.addEventListener("scroll", handleScroll);

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
});
