import {
  initialLoad,
} from './initial_load';

const homePage = () => {
  const homeCont = document.createElement('div');
  const heading = document.createElement('h1');
  const textCont = document.createElement('p');
  homeCont.appendChild(heading);
  homeCont.appendChild(textCont);

  homeCont.classList.add('homeCont');
  heading.classList.add('homeHeading');
  textCont.classList.add('textCont');
  initialLoad.activeMenu.style.backgroundColor = 'red';
  initialLoad.activeMenu = initialLoad.homeButton;
  initialLoad.homeButton.style.backgroundColor = '#221e1e';

  heading.innerHTML = 'Welcome To Eri Restaurant.';
  textCont.innerHTML = 'Welcome to Eritrean restaurant, where you can find the most delicious Eritrean traditional food. ';

  return homeCont;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  homePage,
};