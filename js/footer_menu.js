// Load header.html and footdetail.html
window.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("../header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header_condos").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load header:", err));
  fetch("../footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer_condos").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load header:", err));

  // Load footer
  fetch("../footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer_boreys").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
  fetch("../header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header_boreys").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
  // Load footer
  fetch("../header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header_lands").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
  fetch("../footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer_lands").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));

  fetch("../header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));

  fetch("../footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer_contactUs").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
});
