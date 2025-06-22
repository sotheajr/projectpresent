document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("site-footer");

  function checkScrollToBottom() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY >= scrollable - 10) {
      footer.classList.remove("d-none");
    } else {
      footer.classList.add("d-none");
    }
  }

  window.addEventListener("scroll", checkScrollToBottom);
  checkScrollToBottom(); // run once on load
});

//
document.addEventListener("DOMContentLoaded", function () {
  const saleLink = document.getElementById("sale-link");
  const rentLink = document.getElementById("rent-link");
  const saleList = document.getElementById("sale-list");
  const rentList = document.getElementById("rent-list");

  saleLink.addEventListener("click", function (e) {
    e.preventDefault();
    saleList.style.display = "block";
    rentList.style.display = "none";
    saleLink.classList.add("active");
    rentLink.classList.remove("active");
  });

  rentLink.addEventListener("click", function (e) {
    e.preventDefault();
    saleList.style.display = "none";
    rentList.style.display = "block";
    rentLink.classList.add("active");
    saleLink.classList.remove("active");
  });
});
