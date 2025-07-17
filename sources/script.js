// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2, // default untuk mobile
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

document.querySelectorAll(".dropdown").forEach(function (dropdown) {
  dropdown.addEventListener("show.bs.dropdown", function (e) {
    const menu = this.querySelector(".dropdown-menu");
    if (window.innerWidth >= 768) {
      setTimeout(() => menu.classList.add("show"), 10);
    }
  });

  dropdown.addEventListener("hide.bs.dropdown", function (e) {
    const menu = this.querySelector(".dropdown-menu");
    if (window.innerWidth >= 768) {
      menu.classList.remove("show");
    }
  });
});
