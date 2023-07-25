'use strict';

const menuIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.desktop-nav');

menuIcon.addEventListener('click', function () {
  nav.classList.add('nav');
});
