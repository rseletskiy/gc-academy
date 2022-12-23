import Swiper, { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import anime from "animejs/lib/anime.es";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const heroSlider = new Swiper(".js-hero-slider", {
  effect: "fade",
  duration: 500,
  loop: true,
  delayBetweenSlides: 700,
  pagination: {
    el: ".hero-swiper-pagination",
    clickable: true,
  },
  on: {
    init: function (e) {
      // first slide gallery
      anime({
        targets: ".gall-el-anime",
        scale: [
          { value: 0, easing: "easeInOutQuad", duration: 0 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        opacity: [0, 1],
        delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
      });
    },
    slideChangeTransitionStart: function(e) {
      if (e.activeIndex === 1 || e.activeIndex === 5) {
        heroSlide1Anime();
      }

      if (e.activeIndex === 2) {
        heroSlide2Anime();
      }

      if (e.activeIndex === 3) {
        heroSlide3Anime();
      }

      if(e.activeIndex === 4) {
        heroSlide4Anime();
      }
    },
  },
});

AOS.init();

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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  },
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

const mobileMenu = document.getElementById("mobile-menu");
const humBtn = document.getElementById("humBtn");
const closeMenuBtn = document.getElementById("closeMenu");

humBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.remove("active");
});


function heroSlide1Anime() {
  anime({
    targets: ".gall-el-anime",
    scale: [
      { value: 0, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    opacity: [0, 1],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
  });

  anime({
    targets: ".slide-1-anime .slide-1__info > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: function (el, i, l) {
      return (i + 1) * 200;
    },
    duration: 600,
    easing: "easeInOutQuad",
  });
}

function heroSlide2Anime() {
  anime({
    targets: ".slide-2-anime .slide-1__info > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: function (el, i, l) {
      return (i + 1) * 200;
    },
    duration: 600,
    easing: "easeInOutQuad",
  }); 

  anime({
    targets: '.slide-2-img-anime',
    opacity: [0, 1],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    rotate: ['-0.1turn', '0turn'],
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-2-bordered-anime',
    opacity: [0, 1],
    delay: 500,
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-2-red-anime',
    opacity: [0, 1],
    delay: 600,
    duration: 1000,
    scale: [
      { value: 0.5, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    translateX: ['-50%', 0],
  });

  anime({
    targets: '.slide-2-orange-anime',
    opacity: [0, 1],
    delay: 600,
    translateY: ['-100%', 0],
    duration: 1000,
  });

  anime({
    targets: '.slide-2-yellow-anime',
    opacity: [0, 1],
    delay: 800,
    translateX: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-2-green-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-2-bcube-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-2-bcube-anime img',
    duration: 1800,
    translateY: 15,
    direction: 'alternate',
    loop: true,
    easing: "easeInOutQuad",
  })
}

function heroSlide3Anime() {
  anime({
    targets: '.slide-3-anime',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
  })

  anime({
    targets: '.slide-3-anime > img',
    // width: ['0%', '100%'],
    easing: "easeInOutQuad",
    delay: 100,
    duration: 1000,
  })

  anime({
    targets: ".slide-3-anime > div > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {start: 500}),
    duration: 600,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-3-rcube-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: ".slide-3-rcube-anime img",
    duration: 1500,
    translateY: 15,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
  

  anime({
    targets: '.slide-3-orange-anime',
    opacity: [0, 1],
    delay: 1200,
    translateX: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-3-yellow-anime',
    opacity: [0, 1],
    delay: 1000,
    translateX: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-3-green-anime',
    opacity: [0, 1],
    delay: 800,
    translateY: ['100%', 0],
    duration: 1500,
  })
}

function heroSlide4Anime() {
  anime({
    targets: ".slide-4-content-anime > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {start: 100}),
    duration: 600,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".slide-4-bordered-anime",
    opacity: [0, 1],
    rotate: ['45deg', '0deg'],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    delay: 500,
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-4-img-anime',
    opacity: [0, 1],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-4-orange-anime',
    opacity: [0, 1],
    delay: 1200,
    translateX: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-green-anime',
    opacity: [0, 1],
    delay: 1200,
    translateY: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-yellow-anime',
    opacity: [0, 1],
    delay: 1000,
    translateX: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-red-anime',
    opacity: [0, 1],
    delay: 900,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-ycube-anime',
    opacity: [0, 1],
    delay: 1500,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: ".slide-4-ycube-anime img",
    duration: 2000,
    translateY: 15,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
}


// header animation start
anime({
  targets: ".logo-anime",
  opacity: [0, 1],
  delay: 100,
  duration: 5000,
});

anime({
  targets: "header nav li",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: function (el, i, l) {
    return i * 100;
  },
  duration: 800,
  easing: "easeInOutQuad",
});

anime({
  targets: ".lang-anime",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: 400,
  duration: 800,
  easing: "easeInOutQuad",
});

anime({
  targets: "#humBtn",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: 400,
  duration: 800,
  easing: "easeInOutQuad",
});

anime({
  targets: ".h-controls-anime a",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: function (el, i, l) {
    return (i + 1) * 400;
  },
  duration: 600,
  easing: "easeInOutQuad",
});

// header animation end

// hero screen animation start
anime({
  targets: ".hero-pattern-anime",
  duration: 1000,
  opacity: [0, 1],
  easing: "easeInOutQuad",
});

anime({
  targets: ".hero-ocube-anime ",
  duration: 1500,
  translateX: ['-100%', 0],
});

anime({
  targets: ".hero-ocube-anime img",
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".hero-blurcube-anime",
  duration: 1500,
  translateY: -10,
  opacity: [0.5, 1],
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".hero-slogan-anime",
  duration: 1500,
  opacity: [0, 1],
  translateX: ['-100%', 0],
  easing: "easeInOutQuad",
});

anime({
  targets: '.hero-slogancube-anime',
  duration: 1000,
  easing: "easeInOutQuad",
  scale: [
    { value: 0.25, easing: "easeInOutQuad", duration: 0 },
    { value: 1, easing: "easeInOutQuad", duration: 1000 },
  ],
})
// hero screen animation end

anime({
  targets: ".about-gcube-anime img",
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".about-ycube-anime img",
  duration: 2000,
  translateY: 12,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});