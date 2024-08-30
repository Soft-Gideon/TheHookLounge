const navigation = document.querySelector('.navigation');

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');
const contents = document.querySelectorAll('.content');

function sliderNav(manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  contents.forEach((content) => {
    content.classList.remove('active');
  })

  btns[manual].classList.add('active');
  slides[manual].classList.add('active');
  contents[manual].classList.add('active');
}

let index = 0;
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      clearInterval(setIntervalId);
      index = i;
      sliderNav(index);
      // interval();
    });
  });

  let setIntervalId;
  function interval() {
  setIntervalId = setInterval(() => {
    if (index >= btns.length) {
      index = 0;
    }
    sliderNav(index);
    index++
  }, 5000);
}

// interval();
// window.onload = interval;