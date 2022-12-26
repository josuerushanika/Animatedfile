const mobileMenu = document.querySelector("nav .mobile-menu");
const mobileClose = document.querySelector("nav .mobile-close");
const mobileNavigation = document.querySelector("nav .mobile-navigation");

mobileMenu.addEventListener("click", () => {
    mobileNavigation.classList.add("active");
    mobileClose.classList.add("active");
})