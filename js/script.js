$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

// let prevNav = document.querySelector(".slider__prev");
// let nextNav = document.querySelector(".slider__next");
// prevNav.addEventListener('click',function(){
//     prevNav.classList.add("pressed")
//     setTimeout(function(){
//       prevNav.classList.remove("pressed")
//     },2000)
// })