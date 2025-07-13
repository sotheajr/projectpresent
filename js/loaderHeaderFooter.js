// Load header.html and footdetail.html
window.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("../header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load header:", err));

  // Load footer
  fetch("../footer_detail.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footdetail").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
});
