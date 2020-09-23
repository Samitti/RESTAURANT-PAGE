const initialLoad = (function () {
  const container = document.createElement('div');
  const navBar = document.createElement('div');
  const logoDiv = document.createElement('div');
  const heading = document.createElement('h1');
  const menuBar = document.createElement('div');
  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');
  const pageContetnt = document.createElement('div');
  const activeMenu = homeButton;

  const initialLoadMmethod = () => {
    container.appendChild(navBar);
    container.appendChild(pageContetnt);
    navBar.appendChild(logoDiv);
    navBar.appendChild(menuBar);
    logoDiv.appendChild(heading);
    menuBar.appendChild(homeButton);
    menuBar.appendChild(menuButton);
    menuBar.appendChild(contactButton);

    container.classList.add('container');
    navBar.classList.add('navBar');
    logoDiv.classList.add('logoDiv');
    menuBar.classList.add('menuBar');
    pageContetnt.classList.add('pageContetnt');

    heading.classList.add('heading');
    homeButton.classList.add('btn');
    menuButton.classList.add('btn');
    contactButton.classList.add('btn');

    homeButton.innerHTML = 'HOME';
    menuButton.innerHTML = 'MENU';
    contactButton.innerHTML = 'CONTACT US';
    heading.innerHTML = 'Eritrean Restaurant.';
    activeMenu.style.backgroundColor = '#221e1e';

    return container;
  };

  const renderPage = (toRender) => {
    pageContetnt.innerHTML = '';
    pageContetnt.appendChild(toRender);
  };

  return {
    initialLoadMmethod,
    renderPage,
    homeButton,
    menuButton,
    contactButton,
    activeMenu,
  };
}());

export { initialLoad };
