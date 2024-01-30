const slider = document.querySelector('.js-drag-scroll');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});


$(document).ready(function () {
  var leftOffset = 380;
  var elWidth = 240;
  var bodyWidth = $('body').width();
  console.log(leftOffset, elWidth, bodyWidth);

  if($('body').width() < 768){
    $('.js-drag-scroll').scrollLeft(leftOffset);
  }
});
