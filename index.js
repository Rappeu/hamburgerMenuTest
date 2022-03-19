// HAMBURGER MENU 1 

const hamburger1 = document.querySelector('#hamburger-1');
const hamburgerLine1 = document.querySelector('.hamburger-line-1');
let open1 = false;

hamburger1.addEventListener('click', () => {
  if(!open1) {
    hamburgerLine1.classList.add('open');
    open1 = true;
  } else {
    hamburgerLine1.classList.remove('open');
    open1 = false;
  }
});

// HAMBURGER MENU 1 END