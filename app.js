const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");
const navTrigger = document.querySelector(".navTrigger");
const nav = document.querySelector(".nav");
const mainListDiv = document.querySelector(".mainListDiv");

window.onload = function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
};

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

navTrigger.addEventListener("click", function (e) {
  nav.classList.toggle("nav");
  // These two below may not be needed.
  mainListDiv.classList.toggleClass("show_list");
  mainListDiv.fadeIn();
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    nav.classList.add("affix");
  } else {
    nav.classList.remove("affix");
  }
});

// Clock

function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();

// Scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  	speed: 500
 });
