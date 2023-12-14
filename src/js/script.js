console.log('working..')

const slider = document.querySelector('.items');
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
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});



// 


let scrollPos = 100;
const crLoc = document.querySelector('.header__current-location');

function checkPosition() {

  if (window.scrollY > 100) {
    crLoc.style.display = 'none';
  } 
  if(window.scrollY === 0){
      crLoc.style.display = 'flex';

    }
}

window.addEventListener('scroll', checkPosition);


