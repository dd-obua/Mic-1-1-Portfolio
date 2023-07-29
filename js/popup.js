const worksCards = document.querySelector('.works__cards');

const cards = [
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: './img/featured/1.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: './img/featured/2.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: './img/featured/3.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: './img/featured/4.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: './img/featured/5.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: './img/featured/6.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
];

cards.forEach((card, index) => {
  const cardElementHtml = `
    <div class="img-container">
      <img src="${card.featuredImage}" alt="Featured image" class="featured-img">
    </div>
    <div class="information">
      <h3 class="works__stories--heading">${card.name1} <span class="gain-glory">${card.name2}</span></h3>
      <ul class='works__categories'>
        <li class='works__skill'>${card.technologies[0]}</li>
        <li class='works__skill'>${card.technologies[1]}</li>
        <li class='works__skill'>${card.technologies[2]}</li>
        <li class='works__skill'>${card.technologies[3]}</li>
      </ul>
      <a href="#" class="link see-project" data-index="${index}">See Project</a>
    </div>`;

  const cardElement = document.createElement('article');
  cardElement.className = 'works__card';
  cardElement.innerHTML = cardElementHtml;
  worksCards.appendChild(cardElement);
});

const mobilePopup = document.querySelector('.popup-mobile');
const createMobilePopup = () => {
  mobilePopup.classList.remove('take-out');
};

const desktopPopup = document.querySelector('.popup-desktop');
const createDesktopPopup = () => {
  desktopPopup.classList.remove('take-out');
};

const detailsLinks = document.querySelectorAll('.see-project');
detailsLinks.forEach((link) => {
  if (window.innerWidth >= 768) {
    link.addEventListener('click', createDesktopPopup);
  } else link.addEventListener('click', createMobilePopup);
});

const cancelMobilePopup = document.querySelector('.close-mobile-popup');
const cancelDesktopPopup = document.querySelector('.close-desktop-popup');

cancelMobilePopup.addEventListener('click', () => {
  mobilePopup.classList.add('take-out');
});

cancelDesktopPopup.closest('.img-div').addEventListener('click', () => {
  desktopPopup.classList.add('take-out');
});
