const images = document.querySelectorAll(".carousel img");
let index = 0;

document.querySelector(".next").onclick = () => changeImage(1);
document.querySelector(".prev").onclick = () => changeImage(-1);

function changeImage(step) {
  images[index].classList.remove("active");
  index = (index + step + images.length) % images.length;
  images[index].classList.add("active");
}

setInterval(() => changeImage(1), 7000);
