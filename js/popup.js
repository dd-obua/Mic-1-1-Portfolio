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
