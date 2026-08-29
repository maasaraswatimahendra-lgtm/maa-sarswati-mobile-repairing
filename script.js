document.addEventListener("DOMContentLoaded", function () {

  // Year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile Menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    // Menu link click hone par menu close
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

});
