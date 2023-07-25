'use strict';

const menuIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.desktop-nav');
const close = document.querySelector('.close-icon');

menuIcon.addEventListener('click', function () {
  nav.classList.add('nav');
  close.style.display = 'block';
  menuIcon.style.display = 'none';
});
