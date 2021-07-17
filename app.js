const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");
const navTrigger = document.querySelector(".navTrigger");
const nav = document.querySelector(".nav");
const mainListDiv = document.querySelector(".mainListDiv");
const about = document.querySelector(".about-me-text");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
let quotes = document.querySelector("#quote_page");
let quoteButton = document.querySelector('#quote_btn');
let ignore = "NMLxKUhiZvvOvN4KygmsmdGbE8foG6dAyu60YbefYag";



window.onload = function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
  loadGallery();
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
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    nav.classList.add("affix");
  } else {
    nav.classList.remove("affix");
  }
});


// This is our tabs buttons
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
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

//  let newArray = [
//   "https://picsum.photos/500/450?random=2",
//   "https://picsum.photos/500/450?random=3",
//   "https://picsum.photos/500/450?random=4",
//   "https://picsum.photos/500/450?random=5",
//   "https://picsum.photos/500/450?random=6",
//   "https://picsum.photos/500/450?random=7",
//   "https://picsum.photos/500/450?random=8",
//   "https://picsum.photos/500/450?random=9",
//   "https://picsum.photos/500/450?random=10",
//   "https://picsum.photos/500/450?random=11",
//   "https://picsum.photos/500/450?random=12",
//   "https://picsum.photos/500/450?random=13",
//   "https://picsum.photos/500/450?random=14",
//   "https://picsum.photos/500/450?random=15",
// ];



let newArray =[];

function unsplash() {
  let url = "https://api.unsplash.com/users/cloudxxxx/photos?client_id=" + ignore; 
  fetch(url)
    .then(function(data) {
      return data.json(); 
    })
    .then(function(data){
      console.log(data)
      data.forEach(photo=> {
        newArray.push(photo.urls.raw + "&fit=scale&w=500&h=450");
      })
    })
}
unsplash(); 



// Carousel
document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
  let galleryView = document.getElementById("galleryView");
  let tilesView = document.getElementById("tilesView");
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");

  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";

    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild);
    }
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";

    for (let i = 0; i < newArray.length; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background = "url(" + newArray[i] + ")";
      tilesContainer.appendChild(tileItem);
    }
  }
}


let mainImg = 0;
let prevImg = newArray.length - 1;
let nextImg = 1;

function loadGallery() {
  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + newArray[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + newArray[prevImg] + ")";

  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + newArray[nextImg] + ")";

  let linkTag = document.getElementById("linkTag");
  linkTag.href = newArray[mainImg];
}

function scrollRight() {
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= newArray.length - 1) {
    nextImg = 0;
  } else {
    nextImg++;
  }
  loadGallery();
}

function scrollLeft() {
  nextImg = mainImg;
  mainImg = prevImg;

  if (prevImg === 0) {
    prevImg = newArray.length - 1;
  } else {
    prevImg--;
  }
  loadGallery();
}

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);





async function updateQuote() {
  const response = await 
  fetch("https://api.quotable.io/random")
  const data = await response.json();
  if (response.ok){
    quotes.innerHTML = `${data.content} ~${data.author}`;
  } else {
    quotes.innerHTML ="An error occured"
  }
}
updateQuote();

if(quoteButton){
  quoteButton.addEventListener('click', updateQuote)
}

