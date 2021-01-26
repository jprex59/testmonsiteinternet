const icon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector('.closehamburger1');
const closesidebar2 = document.querySelector('.closehamburger2');


let touchStart, touchEnd;



icon.addEventListener('click', () => {
  sidebar.classList.add('open');
  closesidebar.classList.add('open');
  icon.style.display = 'none';
  closesidebar2.style.display = 'block';
});

closesidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
  icon.style.display = 'block';
  closesidebar.classList.remove('open');
});

closesidebar2.addEventListener('click', () => {
  sidebar.classList.remove('open');
  icon.style.display = 'block';
  closesidebar2.style.display = 'none';
  closesidebar.classList.remove('open');
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
  if (touchStart - touchEnd > 100 ) {
    sidebar.classList.remove('open');
  }
});




