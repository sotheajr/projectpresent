// Function to include HTML content
function includeHTML() {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll("[w3-include-html]");
    let count = elements.length;

    if (count === 0) {
      resolve();
      return;
    }

    elements.forEach((el) => {
      const file = el.getAttribute("w3-include-html");
      fetch(file)
        .then((response) => {
          if (!response.ok) throw new Error("File not found");
          return response.text();
        })
        .then((data) => {
          el.innerHTML = data;
          el.removeAttribute("w3-include-html");

          // Recurse for nested includes
          includeHTML().then(() => {
            if (--count === 0) resolve();
          });
        })
        .catch((error) => {
          el.innerHTML = "Error loading file: " + file;
          if (--count === 0) resolve();
        });
    });
  });
}

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  includeHTML().then(() => {
    // ✅ Carousel setup
    const carouselEl = document.querySelector("#locationCarousel");
    if (carouselEl) {
      const carousel = new bootstrap.Carousel(carouselEl, {
        interval: 10000,
        ride: "carousel",
        wrap: true,
      });

      carouselEl.addEventListener("mouseenter", () => carousel.pause());
      carouselEl.addEventListener("mouseleave", () => carousel.cycle());
      carouselEl.addEventListener("click", () => carousel.pause());
    }

    // ✅ Scroll buttons
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const scrollDownBtn = document.getElementById("scrollDownBtn");

    if (scrollUpBtn) {
      scrollUpBtn.addEventListener("click", () => {
        window.scrollBy({ top: -300, behavior: "smooth" });
      });
    }

    if (scrollDownBtn) {
      scrollDownBtn.addEventListener("click", () => {
        window.scrollBy({ top: 300, behavior: "smooth" });
      });
    }

    // ✅ Video modal
    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const watchLink = document.getElementById("watchLink");

    if (videoModal && videoFrame && watchLink) {
      videoModal.addEventListener("show.bs.modal", function (event) {
        const trigger = event.relatedTarget;
        const rawUrl = trigger.getAttribute("data-video");
        const youtubeUrl = trigger.getAttribute("data-youtube");

        const videoUrl = rawUrl.includes("?")
          ? rawUrl + "&autoplay=1"
          : rawUrl + "?autoplay=1";

        videoFrame.src = videoUrl;
        watchLink.href = youtubeUrl;
      });

      videoModal.addEventListener("hidden.bs.modal", function () {
        videoFrame.src = "";
        watchLink.href = "#";
      });
    }

    // ✅ Banner image carousel
    const banners = document.querySelectorAll(".banner-image");
    let current = 0;

    if (banners.length > 0) {
      setInterval(() => {
        banners[current].classList.remove("active");
        current = (current + 1) % banners.length;
        banners[current].classList.add("active");
      }, 10000);
    }
  });
});
