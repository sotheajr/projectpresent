document.addEventListener("DOMContentLoaded", function () {
  const heroCarousel = document.querySelector("#heroCarousel");

  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 10000,
      wrap: true,
    });

    carousel.cycle();
  }
});
