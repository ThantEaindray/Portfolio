const slides = [...document.querySelectorAll('.gallery-slide')];
const controls = document.querySelector('.gallery-controls');
const count = document.querySelector('.gallery-count');
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => { slide.hidden = i !== current; });
  count.textContent = `${current + 1} / ${slides.length}`;
}

if (slides.length && controls && count) {
  controls.querySelector('[data-gallery-previous]').addEventListener('click', () => showSlide(current - 1));
  controls.querySelector('[data-gallery-next]').addEventListener('click', () => showSlide(current + 1));
  showSlide(0);
  controls.hidden = false;
}
