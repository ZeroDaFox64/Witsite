document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
ScrollReveal().reveal(".header--container");
ScrollReveal().reveal(".content__main--container", { delay: 2000 });
ScrollReveal().reveal(".content__main--container2", { delay: 2000 });
ScrollReveal().reveal(".footer", { delay: 2000 });
ScrollReveal().reveal(".copyright", { delay: 2000 });
  