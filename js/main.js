window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const navList = document.querySelector(".header__list");
  const allNavLinks = document.querySelectorAll(".header__list a");

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll);

  function toggleMenu() {
    const isOpening = !mobileToggle.classList.contains("is-active");

    mobileToggle.classList.toggle("is-active");
    navList.classList.toggle("is-active");
    document.body.classList.toggle("body--lock-scroll");

    mobileToggle.setAttribute("aria-expanded", isOpening);
  }

  mobileToggle.addEventListener("click", toggleMenu);

  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("is-active")) {
        toggleMenu();
      }
    });
  });
});
