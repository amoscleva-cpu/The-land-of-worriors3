// script.js

// MOBILE MENU 
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Close menu when clicking link
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// HEADER ON SCROLL
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
});

//  SCROLL REVEAL 
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const visible = window.innerHeight - 80;

    if(top < visible){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

//  COUNTER 
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const speed = target / 80;

    if(count < target){
      counter.innerText = Math.ceil(count + speed);
      setTimeout(update, 25);
    }else{
      counter.innerText = target;
    }
  };

  update();
});