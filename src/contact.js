import {
    initialLoad,
  } from './initial_load';

const contactPage = (function () {
  const contactCont = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const contactList = document.createElement('div');

  const contactPageMethod = () => {
    contactCont.appendChild(contactHeading);
    contactCont.appendChild(contactList);

    contactCont.classList.add('contactCont');
    contactHeading.classList.add('subHeading');
    contactList.classList.add('contactList');
    initialLoad.activeMenu.style.backgroundColor = 'red';
    initialLoad.activeMenu = initialLoad.contactButton;
    initialLoad.contactButton.style.backgroundColor = '#351c1c';

    contactHeading.innerHTML = 'Please Contact Us:';

    return contactCont;
  };

  return {
    contactPageMethod,
  };
}());

export {
  contactPage,
};