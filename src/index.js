import './style.css';
import {
  homePage,
} from './home';
import {
  initialLoad,
} from './initial_load';
import {
  contactPage,
} from './contact';
import {
  menuPage,
} from './menu';

function component() {
  const init = initialLoad.initialLoadMmethod();
  return init;
}
document.body.appendChild(component());
initialLoad.renderPage(homePage.homePageMethod());


initialLoad.homeButton.onclick = () => {
  initialLoad.renderPage(homePage.homePageMethod());
};
initialLoad.menuButton.onclick = () => {
  initialLoad.renderPage(menuPage.menuPageMethod());
};
initialLoad.contactButton.onclick = () => {
  initialLoad.renderPage(contactPage.contactPageMethod());
};
