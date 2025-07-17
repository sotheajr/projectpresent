// Load header.html and footdetail.html
window.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("../sidebarbottom.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("condos").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load header:", err));

  // Load footer
  fetch("../sidebarbottom.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("boreys").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
  // Load footer
  fetch("../sidebarbottom.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("lands").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));
});
