const works = document.querySelector(".works");

const workCards = [
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  }
];

const cardHtml = `
  <h3>${card.name1} <span class="gain-glory">${card.name2}</span></h3>

  <ul class='works__categories'>
    <li class='works__skill'>${card.technologies[0]}</li>
    <li class='works__skill'>${card.technologies[1]}</li>
    <li class='works__skill'>${card.technologies[2]}</li>
    <li class='works__skill'>${card.technologies[3]}</li>
  </ul>

  <a href="#" class="link see-project">See Project</a>
`;

const generateWorkCards = () => {
  workCards.forEach((card) => {
    const card = document.createElement("artcile");
    card.className = "works__card";
    card.innerHtml = cardHtml;
    works.appendChild(card);
  });
};

generateWorkCards();

const mobilePopupHtml = `
  <img src="./img/popup/close-mobile-popup.svg" alt="Mobile popup close icon" class="close-mobile-popup">
  <img src="./img/popup/snapshot.png" alt="Mobile popup image" class="pop-mobile-img">
  <h2>Keeping track of hundreds of components</h2>
  <ul>
    <li class="works__skill">Ruby on Rails</li>
    <li class="works__skill">CSS</li>
    <li class="works__skill">JavaScript</li>
  </ul>

  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
  </p>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
  </p>

  <div class="link-btns">
    <a href="" class="link popup-link">
      <span>See live</span><img src="./img/popup/frame.png" alt="">
    </a>
    <a href="" class="link popup-link">
      <span>See source </span><img src="./img/popup/github-icon.svg" alt="">
    </a>
  </div>
`;

const generateMobilePopup = () => {
  const mobilePopupContainer = document.createElement("section");
  mobilePopupContainer.className = "popup-mobile";
  mobilePopupContainer.innerHTML = mobilePopupHtml;
};

const desktopPopupHtml = `
  <div class="img-div">
  <img src="./img/popup/close-desktop-popup.svg" alt="Desktop popup close icon" class="close-desktop-popup">
  <img src="./img/popup/snapshot-desktop.svg" alt="" class="pop-mobile-img">
  </div>
  <div class="row-1">
    <h2>Keeping track of hundreds of components</h2>
    <div class="link-btns">
      <a href="" class="link popup-link">
        <span>See live</span><img src="./img/popup/frame.png" alt="">
      </a>
      <a href="" class="link popup-link">
        <span>See source </span><img src="./img/popup/github-icon.svg" alt="">
      </a>
    </div>
  </div>
  <ul>
    <li class="works__skill">CodeKit</li>
    <li class="works__skill">GitHub</li>
    <li class="works__skill">JavaScript</li>
    <li class="works__skill">Bootstrap</li>
    <li class="works__skill">Terminal</li>
    <li class="works__skill">Codepen</li>
  </ul>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
    with the
    relea
  </p>
`;

const generateDesktopPopup = () => {
  const desktopPopupContainer = document.createElement("section");
  desktopPopupContainer.className = "popup-desktop";
  desktopPopupContainer.innerHTML = desktopPopupHtml;
};
