const thmbneilSwiper = new Swiper(".swiper-thmbneil", {
  spaceBetween: 10,
  slidesPerView: 5
});

const swiper = new Swiper(".swiper-main", {
  thumbs: {
    swiper: thmbneilSwiper
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
