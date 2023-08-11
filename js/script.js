const menuIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.desktop-nav');
const close = document.querySelector('.close-icon');
const menuItems = document.querySelectorAll('.desktop-nav>li');

const showMobileMenu = () => {
  nav.classList.add('nav');
  close.style.display = 'block';
  menuIcon.style.display = 'none';
};

const hideMobileMenu = () => {
  nav.classList.remove('nav');
  menuIcon.style.display = 'block';
};

menuIcon.addEventListener('click', showMobileMenu);
close.addEventListener('click', hideMobileMenu);
menuItems.forEach((item) => item.addEventListener('click', hideMobileMenu));
