import Swiper, { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const heroSlider = new Swiper(".js-hero-slider", {
  effect: "fade",
  duration: 500,
  loop: true,
  pagination: {
    el: ".hero-swiper-pagination",
    clickable: true,
  },
});

const waySlider = new Swiper(".js-way-slider", {
  duration: 500,
  slidesPerView: 1,
  allowTouchMove: false,
});

const heroNextBtn = document.getElementById("hero-next");
heroNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  swiperNextSlide(heroSlider);
});

const eduSlider = new Swiper(".js-edu-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".js-edu-slider-pagination",
    type: "progressbar",
  },
});

function swiperNextSlide(slider) {
  slider.slideNext();
}

function swiperPrevSlide(slider) {
  slider.slidePrev();
}

const wayBtns = document.querySelectorAll(".way-tab");

wayBtns.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    for (let i = 0; i < wayBtns.length; i++) {
      wayBtns[i].classList.remove("active");
    }

    waySlider.slideTo(index, 500);
    this.classList.add("active");
  });
});

