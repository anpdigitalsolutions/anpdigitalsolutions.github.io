// Mobile menu: open and close
const menuButton = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Close the menu after tapping a link
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

// Auto-update the footer year
document.getElementById("year").textContent = new Date().getFullYear();