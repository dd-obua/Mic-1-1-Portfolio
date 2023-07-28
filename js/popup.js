const worksCards = document.querySelector('.works__cards');
const body = document.querySelector('body');

const cards = [
  {
    name1: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersionLink: 'https://dd-obua.github.io/Mic-Portfolio/',
    sourceLink: 'https://github.com/dd-obua/Mic-Portfolio',
  },
];

cards.forEach((card, index) => {
  const cardElementHtml = `
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

  const mobilePopupElement = document.createElement('section');
  mobilePopupElement.className = 'popup-mobile';
  mobilePopupElement.innerHTML = mobilePopupHtml;
  body.appendChild(mobilePopupElement);
});

const createMobilePopup = () => {
  cards.forEach((card, index) => {
    const mobilePopupHtml = `
      <img src="./img/popup/close-mobile-popup.svg" alt="Mobile popup close icon" class="close-mobile-popup">
      <img src="./img/popup/snapshot.png" alt="Mobile popup image" class="pop-mobile-img">
      <h2>Keeping track of hundreds of components</h2>
      <ul>
        <li class="works__skill">${card.technologies[0]}</li>
        <li class="works__skill">${card.technologies[1]}</li>
        <li class="works__skill">${card.technologies[2]}</li>
      </ul>
      <p>${card.description1}</p>
      <p>${card.description2}</p>
      <div class="link-btns">
        <a href="" class="link popup-link">
          <span>See live</span><img src="./img/popup/frame.png" alt="">
        </a>
        <a href="" class="link popup-link">
          <span>See source </span><img src="./img/popup/github-icon.svg" alt="">
        </a>
      </div>
    `;
  });
};