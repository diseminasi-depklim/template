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
