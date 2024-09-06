const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

function sliderNav(manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

let index = 0;
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(setIntervalId);
    index = i;
    sliderNav(index);
    interval();
  });
});

let setIntervalId;
function interval() {
  setIntervalId = setInterval(() => {
    if (index >= btns.length) {
      index = 0;
    }
    sliderNav(index);
    index++;
  }, 5000);
}

// interval();
window.onload = interval;

// scroll Button Effect
const main = document.querySelector("main");
const scrollTop = document.querySelector(".scroll-top");
const header = document.querySelector("header");
scrollTop.addEventListener("click", () => {
  main.scrollTo({ top: 0, behavior: "smooth" });
});
const scrolling = () => {
  if (Math.round(main.scrollTop) >= 200) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }

  if (Math.round(main.scrollTop) >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
main.addEventListener("scroll", scrolling);

// menu
const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
const closeMenu = document.querySelector(".navigation-items .close");

const navigationItems = document.querySelector(".navigation-items");

menu.addEventListener("click", () => {
  menu.classList.add("active");
  navigation.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
  navigation.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (!navigationItems.contains( e.target) && !menu.contains( e.target)) {
    menu.classList.remove("active");
    navigation.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  menu.classList.remove("active");
  navigation.classList.remove("active");
});