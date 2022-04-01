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

// HAMBURGER MENU 3

const hamburger3 = document.querySelector('#hamburger-3');
const hamburger3Line = document.querySelector('.hamburger-line-3-1');
let open3 = false;

hamburger3.addEventListener('click', () => {
  if(!open3) {
    hamburger3.classList.add('open');
    open3 = true;
  } else {
    hamburger3.classList.remove('open');
    open3 = false;
  }
});

// HAMBURGER MENU 3 END

// HAMBURGER MENU 4

const hamburger4 = document.querySelector('#hamburger-4');
const hamburger4Line = document.querySelector('.hamburger-line-4');
let open4 = false;

hamburger4.addEventListener('click', () => {
  if(!open4) {
    hamburger4Line.classList.add('open');
    hamburger4.classList.add('open');
    open4 = true;
  } else {
    hamburger4Line.classList.remove('open');
    hamburger4.classList.remove('open');
    open4 = false;
  }
});

// HAMBURGER MENU 4 END