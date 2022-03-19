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


// HAMBURGER MENU 2

const hamburger2 = document.querySelector('#hamburger-2');
const hamburger2Line = document.querySelector('.hamburger-line-2-1');
let open2 = false;

hamburger2.addEventListener('click', () => {
  if(!open2) {
    hamburger2Line.classList.add('open');
    open2 = true;
  } else {
    hamburger2Line.classList.remove('open');
    open2 = false;
  }
});

// HAMBURGER MENU 2 END