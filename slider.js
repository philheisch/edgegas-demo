
let current = 0;
const images = document.querySelectorAll(".slider img");
function showSlide(i) {
  images.forEach((img, index) => img.style.display = index === i ? "block" : "none");
}
function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}
window.onload = () => {
  showSlide(current);
  setInterval(nextSlide, 4000);
};
