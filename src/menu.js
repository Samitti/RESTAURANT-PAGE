import {
  initialLoad,
} from './initial_load';

const menuPage = (function () {
  const menuCont = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const menuList = document.createElement('div');

  const menuPageMethod = () => {
    menuCont.appendChild(menuHeading);
    menuCont.appendChild(menuList);


    initialLoad.activeMenu.style.backgroundColor = 'red';
    initialLoad.activeMenu = initialLoad.menuButton;
    initialLoad.menuButton.style.backgroundColor = '#351c1c';

    menuHeading.innerHTML = 'Please Choose Your Favorite Dish';
    menuList.innerHTML = '';

    for (let i = 1; i <= 9; i += 1) {
      let listItem = document.createElement('div');
      let listImage = document.createElement('img');
      let listCaprion = document.createElement('p');

      listItem.appendChild(listImage);
      listItem.appendChild(listCaprion);

      listItem.classList.add('listItem');
      listImage.classList.add('listImage');
      listItem.classList.add('listCaprion');

      listImage.innerHTML = `Image ${i}`;
      listItem.innerHTML = `Description of Image ${i}`;
      menuList.appendChild(listItem);
    }

    return menuCont;
  };

  return {
    menuPageMethod,
  };
}());

export {
  menuPage,
};