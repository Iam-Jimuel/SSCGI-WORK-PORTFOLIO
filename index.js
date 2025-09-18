const menu = document.querySelector(".navbar .menu");
const menuBtn = document.querySelector(".menu-btn i");

document.querySelector(".menu-btn").addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".navbar .menu li a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});
