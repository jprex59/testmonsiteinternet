const icon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

let touchStart, touchEnd;

icon.addEventListener('click', () => {
  sidebar.classList.add('open');
});

icon.addEventListener('click', () => {
  sidebar.classList.add('open');
});

sidebar.addEventListener('touchstart', e => {
  touchStart = e.targetTouches[0].clientX;
  console.log(touchStart)
});

sidebar.addEventListener('touchmove', e => {
  touchEnd = e.targetTouches[0].clientX;
  console.log(touchEnd)
});

sidebar.addEventListener('touchend', e => {
  if (touchStart - touchEnd > 100) {
    sidebar.classList.remove('open');
  }
});

