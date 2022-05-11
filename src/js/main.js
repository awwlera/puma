
const swiperHero = new Swiper(".swiper-hero", {
  navigation: {
    nextEl: ".swiper-hero-next",
    prevEl: ".swiper-hero-prev",
  },
});

const swiperTestimonials = new Swiper(".swiper-testimonials", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const swiperGalleryAll = new Swiper(".swiper-gallery-all", {
  navigation: {
    nextEl: ".swiper-gallery-next",
    prevEl: ".swiper-gallery-prev",
  },
});

Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length}`);
    },
});

const tabs = document.querySelectorAll('[data-role="tab"]'),
tabContents = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("is-active");
    });
    target.classList.add("is-active");

    tabs.forEach((t) => {
      t.classList.remove("is-active");
    });
    tab.classList.add("is-active");
  });
});

const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', ()=> {
  header.classList.toggle('active');
});



