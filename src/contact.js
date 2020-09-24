import {
  initialLoad,
} from './initial_load';

const contactPage = () => {
  const contactCont = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const contactList1 = document.createElement('div');
  const contactList2 = document.createElement('div');
  const contactList3 = document.createElement('div');
  contactCont.appendChild(contactHeading);
  contactCont.appendChild(contactList1);
  contactCont.appendChild(contactList2);
  contactCont.appendChild(contactList3);

  contactCont.classList.add('contactCont');
  contactHeading.classList.add('contactHeading');
  contactList1.classList.add('contactList');
  contactList2.classList.add('contactList');
  contactList3.classList.add('contactList');
  initialLoad.activeMenu.style.backgroundColor = 'red';
  initialLoad.activeMenu = initialLoad.contactButton;
  initialLoad.contactButton.style.backgroundColor = '#221e1e';

  contactHeading.innerHTML = 'Please Contact Us:';
  contactList1.innerHTML = '123 Fake Fake Address, Asmara Eritrea. ';
  contactList2.innerHTML = 'Call +29177756155';
  contactList3.innerHTML = 'Email eri_restaurant@gmail.com';

  return contactCont;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  contactPage,
};