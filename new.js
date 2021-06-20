const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");
const navTrigger = document.querySelector('#navTrigger');
const nav = document.querySelector('#nav');
const mainListDiv = document.querySelector('#mainListDiv')
const showList = 

navTrigger.addEventListener("click", function(e) {
    nav.classList.toggle('nav');
    // These two below may not be needed. 
    mainListDiv.classList.toggleClass("show_list");
    mainListDiv.fadeIn();
})



openButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
  
  closeButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
  