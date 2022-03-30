$(document).ready(function () {
  $(".reviews__slider").slick({
    // centerPadding: "600px",
    slidesToShow: 1,
    prevArrow: $(".slider__prev"),
    nextArrow: $(".slider__next"),
  });
});
$(document).ready(function () {
  $(".cards__slider").slick({
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
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("body-overflow-h");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
