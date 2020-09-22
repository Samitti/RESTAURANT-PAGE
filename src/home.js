import {
    initialLoad,
  } from './initial_load';

const homePage = (function () {
    const homeCont = document.createElement('div');
    const heading = document.createElement('h1');
    const textCont = document.createElement('p');

  const homePageMethod = () => {
    homeCont.appendChild(heading);
    homeCont.appendChild(textCont);

    homeCont.classList.add('homeCont');
    heading.classList.add('homeHeading');
    textCont.classList.add('textCont');
    initialLoad.activeMenu.style.backgroundColor = 'red';
    initialLoad.activeMenu = initialLoad.homeButton;
    initialLoad.homeButton.style.backgroundColor = '#351c1c';

    heading.innerHTML = 'Welcome To Eri Restaurant.';
    textCont.innerHTML = 'Welcome to Eritrean restaurant, where you can find the most deliceos Eritrean traditional food. ';

    return homeCont;
  };
  return {
    homePageMethod,
  };
}());

export {
  homePage,
};