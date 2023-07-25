'use strict';

const menuIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.desktop-nav');
const close = document.querySelector('.close-icon');

const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

menuIcon.addEventListener('click', function () {
  nav.classList.add('nav');
  close.style.display = 'block';
  menuIcon.style.display = 'none';
});

portfolio.addEventListener('click', () => {
  nav.classList.remove('nav');
});

about.addEventListener('click', () => {
  nav.classList.remove('nav');
});

contact.addEventListener('click', () => {
  nav.classList.remove('nav');
});

close.addEventListener('click', () => {
  nav.classList.remove('nav');
  close.style.display = 'none';
  menuIcon.style.display = 'block';
});
