const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

const slides = document.querySelectorAll(".slides");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dots = document.querySelectorAll(".dot");

let index = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity = "1";

// positioning the slides

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// move slide function

const moveSlide = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

// remove dots opacity 1 from all dots

const removeDotsOpacity = () => {
  dots.forEach((dot) => {
    dot.style.opacity = ".2";
  });
};

dots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    index = i;
    removeDotsOpacity();
    e.target.style.opacity = "1";
    moveSlide();
  });
});

// show the previous slide

// prevBtn.addEventListener("click", () => {
//   if (index === 0) return index;
//   index--;
//   removeDotsOpacity();
//   dots[index].style.opacity = "1";
//   moveSlide();
// });

// show the next slide

// nextBtn.addEventListener("click", () => {
//   if (index === slides.length - 1) return index;
//   index++;
//   removeDotsOpacity();
//   dots[index].style.opacity = "1";
//   moveSlide();
// });

// auto play slide
//

const autoPlaySlide = () => {
  removeDotsOpacity();
  if (index === slides.length - 1) index =-1;
  index++;
  dots[index].style.opacity = "1";
  moveSlide();
};

window.onload = () => {
  setInterval(autoPlaySlide, 3000);
};





// navbar section 

let isMenuOpen = false;
const toggleMenu = () => {
  if (isMenuOpen) {
    // close it
    document.getElementById("menu").classList.remove("translate-y-0");
    document.getElementById("menu").classList.add("-translate-y-full");
  } else {
    document.getElementById("menu").classList.remove("-translate-y-full");
    document.getElementById("menu").classList.add("translate-y-0");
  }
  isMenuOpen = !isMenuOpen;
};




// owl carousel 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true,
          loop:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})




