const mobileMenu = document.querySelector(".mobile-nav");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

//events
openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    closeMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    closeMenu.classList.remove("active");
  });