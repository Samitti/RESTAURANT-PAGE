import {
  initialLoad,
} from './initial_load';
import Menu1 from './1.png';
import Menu2 from './2.png';
import Menu3 from './3.png';
import Menu4 from './4.png';
import Menu5 from './5.png';
import Menu6 from './6.png';
import Menu7 from './7.png';
import Menu8 from './8.png';


const menuPage = (function () {
  const menuCont = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const menuList = document.createElement('div');
  const imageArr = [];
  const dishArr = [];
  menuList.classList.add('menuList');
  menuCont.classList.add('menuCont');
  menuHeading.classList.add('menuHeading');


  const menuPageMethod = () => {
    menuCont.appendChild(menuHeading);
    menuCont.appendChild(menuList);
    imageArr.push(Menu1);
    dishArr.push('Bebaynetu Nay Xom');
    imageArr.push(Menu2);
    dishArr.push('Bebaynetu Nay Fisg');
    imageArr.push(Menu3);
    dishArr.push('Kitfo');
    imageArr.push(Menu4);
    dishArr.push('Tibs');
    imageArr.push(Menu5);
    dishArr.push('Zihla');
    imageArr.push(Menu6);
    dishArr.push('Geaat');
    imageArr.push(Menu7);
    dishArr.push('Shekla Tibs');
    imageArr.push(Menu8);
    dishArr.push('Dorho');
    initialLoad.activeMenu.style.backgroundColor = 'red';
    initialLoad.activeMenu = initialLoad.menuButton;
    initialLoad.menuButton.style.backgroundColor = '#221e1e';

    menuHeading.innerHTML = 'Please Choose Your Favorite Dish';
    menuList.innerHTML = '';

    for (let i = 0; i < 8; i += 1) {
      // Add the image to our existing div.
      const myMenu = new Image();
      myMenu.src = imageArr[i];

      const listItem = document.createElement('div');
      const listImage = document.createElement('img');
      const listCaption = document.createElement('p');

      // listImage.appendChild(imageMenu);
      // listImage.setAttribute("src", "4.png");
      listCaption.innerHTML = dishArr[i];
      listItem.appendChild(myMenu);
      listItem.appendChild(listCaption);


      listItem.classList.add('listItem');
      listImage.classList.add('listImage');
      listItem.classList.add('listCaption');

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