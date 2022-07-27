let initialId = 0;
const Speakers = [
  {
    id: initialId += 1,
    name: 'Omachi John',
    portfolio: 'B.Sc Chemistry, Digital marketing expert',
    desc: 'Graduated with a Bachelors in chemistry from Kogi state university, have been in the digital market space for over 3 years and an experienced software developer',
    img: './img/speakers/john.jpg',
  },
  {
    id: initialId += 1,
    name: 'Salifu Nurudeen',
    portfolio: 'B.Sc Ind. Chemistry, Digital marketing expert',
    desc: 'Graduated with a Bachelors in chemistry from Kogi state university, have been in the digital market space for over 2 years and an experienced software developer and cypto marketer',
    img: './img/speakers/deen.jpg',
  },
  {
    id: initialId += 1,
    name: 'Onate Wilson Ogwu',
    portfolio: 'LL.B Law, Solicitor',
    desc: 'Graduated with a degree in Law from Kogi state university, Called to The Nigerian Bar(NBA) and practised for over 10years an experienced company law solicitor',
    img: './img/speakers/wilson.jpg',
  },
  {
    id: initialId += 1,
    name: 'OKenyi Ede Catherine',
    portfolio: 'HND Science Lab. Tech., Insurance Under-writing expert',
    desc: 'Graduated with a Diploma in Laboratory Science technology from The Federal Polytechnic Idah, have been in the dinsurance space for over 6 years and an experienced Insurance Under-writer',
    img: './img/speakers/Ede.jpg',
  },
];

const closeBtn = document.getElementById('close');
const topMenu = document.getElementById('topMenu');
const navBar = document.getElementById('navbarTogglerDemo01');
const hamburger = document.getElementById('hamburger');
const home = document.getElementById('home');
const teams = document.querySelectorAll('.teams-card-col');
const team = Array.from(teams);
const arr = [closeBtn, topMenu, hamburger];

team.forEach((x, i) => {
  const y = Speakers[i];
  const data = ` <img
              src="https://source.unsplash.com/random"
              class="col-sm-4 col-md-4 col-lg-5"
              alt="${y.id}"
            />
            <div
              class="teams-card-txt d-flex flex-column gap-3 col-sm-6 col-md-6 col-lg-5"
            >
              <p class="fw-bold fs-4 text-dark">${y.name}</p>
              <p class="fst-italic">${y.portfolio}</p>
              <p class="fs-small mt-1 text-dark">
              ${y.desc}
              </p>
            </div>`;

  x.innerHTML = data;
});

[home, ...arr].forEach((el) => {
  el.addEventListener('click', () => {
    navBar.classList.toggle('show');
    hamburger.classList.toggle('hide');
  });
});
