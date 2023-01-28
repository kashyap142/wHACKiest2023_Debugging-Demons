let hamburger = document.querySelector("#hamburger");
let navMenu = document.querySelector(".nav-item");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const modal = document.querySelector(".login-form");
const loginBtn = document.querySelector("#login-btn");
const closeBtn = document.querySelector("#close");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

let videoBtn = document.querySelectorAll(".vid-btn");

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("hello");
    document.querySelector(".controls .actives").classList.remove("actives");
    btn.classList.add("actives");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
