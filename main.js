/* eslint-disable linebreak-style */

const viewportWidth = window.innerWidth;
const header = document.querySelector('#header');
const burger = document.querySelector('#burger');

let showMenu = false;

function toggleMenu() {
  if (!showMenu && viewportWidth < 768) {
    header.classList.remove('header');
    header.classList.add('header-active');
    burger.classList.remove('burger');
    burger.classList.add('burger-active');
    document.body.style.overflowY = 'hidden';

    // set  menu state
    showMenu = true;
  } else {
    header.classList.remove('header-active');
    header.classList.add('header');
    burger.classList.remove('burger-active');
    burger.classList.add('burger');
    document.body.style.overflowY = 'visible';

    // Set menu state
    showMenu = false;
  }
}
burger.addEventListener('click', toggleMenu);

// Cards Pop-up Window  //

const projectsArray = [
  {
    name: 'Keeping track of hundreds of components',
    imgMobile: './assets/Popup_images/Snapshoot Portfolio.svg',
    imgDesktop: './assets/Popup_images/container-snapshoot-portfolio.svg',
    techtags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Terminal',
    ]
    liveLink: "https://example.com/project1",
    sourceLink: 'https://github.com/user/project1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
   }
];

for (let i = 0; i < projectsArray.length; i++) {
  const projectWrapper = document.getElementsByClassName("project_wrapper")[0];

  const projectCard = document.createElement('article');
  projectCard.classList.add('project_card', `card${i}`);


  const projectCardImage = document.createElement("img");
  projectCardImage.classList.add('project__image');
  projectCardImage.setAttribute("src", projectsArray[i].imgMobile); 
  projectCardImage.setAttribute('alt', projectsArray[i].name);
  projectCard.appendChild(projectCardImage);

  const projectCardWrapper = document.createElement('div'); 
  projectCardWrapper.classList.add('project_card_wrapper'); 
  projectCard.appendChild(projectCardWrapper); 

  const projectCardTitle = document.createElement('h4'); 
  projectCardTitle.classList.add('project_card_title'); 
  projectCardTitle.innerHTML = projectsArray[i].name; 
  projectCardWrapper.appendChild(projectCardTitle);

  const projectCardTags = document.createElement('ul'); 
  projectCardTags.classList.add('project_card_tags'); 
  projectCardWrapper.appendChild(projectCardTags);

  for (let j = 0; j < projectsArray[i].techtags.length; j++) {
    const projectCardTag = document.createElement('li');
    projectCardTag.innerHTML = projectsArray[i].techtags[j];
    projectCardTags.appendChild(projectCardTag);
  }

  const projectCardButton = document.createElement('button'); 
  projectCardButton.classList.add('project_card_button');
  projectCardButton.setAttribute('type', 'button'); 
  projectCardButton.innerHTML ='See Project'; 
  projectCardWrapper.appendChild(projectCardButton);

  projectWrapper.appendChild(projectCard); 
}
