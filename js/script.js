$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    prevArrow: $(".slider__prev"),
    nextArrow: $(".slider__next"),
  });
});

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
console.log(body);
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("body-overflow-h");
});
