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
    techTags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgDesktop: './assets/Popup_images/Img Plaholder Desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s"
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgDesktop: './assets/Popup_images/Img Plaholder Desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s"
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgDesktop: './assets/Popup_images/Img Plaholder Desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s"
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgDesktop: './assets/Popup_images/Img Plaholder Desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s"
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgDesktop: './assets/Popup_images/Img Plaholder Desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s"
  },
];

for (let i = 0; i < projectsArray.length; i += 1) {
  const projectWrapper = document.getElementsByClassName('project_wrapper')[0];

  const projectCard = document.createElement('article');
  projectCard.classList.add('project_card', `card${i}`);

  const projectCardImage = document.createElement('img');
  projectCardImage.classList.add('project_image');
  projectCardImage.setAttribute('src', projectsArray[i].imgMobile);
  projectCardImage.setAttribute('alt', projectsArray[i].name);
  projectCard.appendChild(projectCardImage);

  const projectCardWrapper = document.createElement('div');
  projectCardWrapper.classList.add('project_card_wrapper');
  projectCard.appendChild(projectCardWrapper);

  const projectCardTitle = document.createElement('h4');
  projectCardTitle.classList.add('project_card_title');
  projectCardTitle.innerText = projectsArray[i].name;
  projectCardWrapper.appendChild(projectCardTitle);

  const projectCardTags = document.createElement('ul');
  projectCardTags.classList.add('project_card_tags');
  projectCardWrapper.appendChild(projectCardTags);

  for (let j = 0; j < projectsArray[i].techTags.length; j++) {
    const projectCardTag = document.createElement('li');
    projectCardTag.innerText = projectsArray[i].techTags[j];
    projectCardTags.appendChild(projectCardTag);
  }

  const projectCardButton = document.createElement('button');
  projectCardButton.classList.add('project_card_button');
  projectCardButton.setAttribute('type', 'button');
  projectCardButton.innerText = 'See Project';
  projectCardWrapper.appendChild(projectCardButton);

  projectWrapper.appendChild(projectCard);
}

// Pop-up Window //

function createPopup(index) {
  const project = projectsArray[index];
  const projectWrapper = document.getElementsByClassName('project_wrapper')[0];

  const popupWindow = document.createElement('div');
  popupWindow.setAttribute('id', 'popup__window');
  popupWindow.classList.add('popup__window');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup_content');
  popupWindow.appendChild(popupContent);

  const popupContentWrapper = document.createElement('div');
  popupContentWrapper.classList.add('popup-content_wrapper');
  popupContent.appendChild(popupContentWrapper);

  const popupCloseButton = document.createElement('div');
  popupCloseButton.setAttribute('id', 'popup__close__button');
  popupContentWrapper.appendChild(popupCloseButton);

  const popupCloseButtonBar1 = document.createElement('span');
  popupCloseButtonBar1.classList.add('bar');
  popupCloseButton.appendChild(popupCloseButtonBar1);

  const popupCloseButtonBar2 = document.createElement('span');
  popupCloseButtonBar2.classList.add('bar');
  popupCloseButton.appendChild(popupCloseButtonBar2);

  const popupPicture = document.createElement('picture');
  popupPicture.setAttribute('id', 'popup__picture');
  popupPicture.classList.add('popup__picture');
  popupContentWrapper.appendChild(popupPicture);

  const popupSource = document.createElement('source');
  popupSource.setAttribute('media', '(min-width: 768px)');
  popupSource.setAttribute('srcset', project.imgDesktop);
  popupWindow.appendChild(popupSource);

  const popupImage = document.createElement('img');
  popupImage.setAttribute('src', project.imgMobile);
  popupImage.setAttribute('alt', 'Project Image');
  popupPicture.appendChild(popupImage);

  const popupTitle = document.createElement('h3');
  popupTitle.classList.add('popup__title');
  popupTitle.innerHTML = project.name;
  popupContentWrapper.appendChild(popupTitle);

  const popupCardTags = document.createElement('ul');
  popupCardTags.setAttribute('id', 'popup__card__tags');
  popupCardTags.classList.add('project__card__tags');
  popupContentWrapper.appendChild(popupCardTags);

  for (let j = 0; j < project.techTags.length; j += 1) {
    const popupCardTag = document.createElement('li');
    popupCardTag.innerHTML = project.techTags[j];
    popupCardTags.appendChild(popupCardTag);
  }

  const popupDescription = document.createElement('p');
  popupDescription.setAttribute('id', 'popup__description');
  popupDescription.classList.add('popup__description');
  popupDescription.innerHTML = project.description;
  popupContentWrapper.appendChild(popupDescription);

  const popupButtonsContainer = document.createElement('div');
  popupButtonsContainer.classList.add('popup__buttons__container');
  popupContentWrapper.appendChild(popupButtonsContainer);

  const popupLiveLinkButton = document.createElement('button');
  popupLiveLinkButton.setAttribute('id', 'popup__live__link__button');
  popupLiveLinkButton.setAttribute('type', 'button');
  popupLiveLinkButton.innerHTML = 'See Live';
  popupButtonsContainer.appendChild(popupLiveLinkButton);

  const popupLiveLinkButtonIcon = document.createElement('img');
  popupLiveLinkButtonIcon.setAttribute('src', './assets/icons/LiveLinkIcon.svg');
  popupLiveLinkButtonIcon.setAttribute('alt', 'Live Link Icon');
  popupLiveLinkButton.appendChild(popupLiveLinkButtonIcon);

  const popupSourceLinkButton = document.createElement('button');
  popupSourceLinkButton.setAttribute('id', 'popup__source__link__button');
  popupSourceLinkButton.setAttribute('type', 'button');
  popupSourceLinkButton.innerHTML = 'See Source';
  popupButtonsContainer.appendChild(popupSourceLinkButton);

  const popupSourceLinkButtonIcon = document.createElement('img');
  popupSourceLinkButtonIcon.setAttribute(
    'src',
    './assets/icons/SourceGithubIcon.svg',
  );
  popupSourceLinkButtonIcon.setAttribute('alt', 'Source Link Icon');
  popupSourceLinkButton.appendChild(popupSourceLinkButtonIcon);

  projectWrapper.appendChild(popupWindow);

  document.body.appendChild(popupWindow);

  popupCloseButton.addEventListener('click', () => {
    popupWindow.style.display = 'none';
  });

  popupLiveLinkButton.addEventListener('click', () => {
    window.open(project.liveLink);
  });

  popupSourceLinkButton.addEventListener('click', () => {
    window.open(project.sourceLink);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const projectCardButtons = document.querySelectorAll('.project_card_button');

  for (let i = 0; i < projectCardButtons.length; i += 1) {
    ((index) => {
      projectCardButtons[index].addEventListener('click', () => {
        createPopup(index);
        const popupWindow = document.getElementsByClassName('popup__window')[index];
        popupWindow.style.display = 'block';
      });
    })(i);
  }
});

// Form Validation //

