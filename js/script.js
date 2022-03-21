$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    prevArrow: $(".slider__prev"),
    nextArrow: $(".slider__next"),
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
