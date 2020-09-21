import './style.css';
import {
    home_page,
} from './home.js';
import {
    initialLoad,
} from './initial_load.js';
import {
    contact_page,
} from './contact.js';
import {
    menu_page,
} from './menu.js';

// import Banner from "./banner.jpg";

function component() {
    // Add the image to our existing div.
    //   const myBanner = new Image();
    //   myBanner.src = Banner;

    //   element.appendChild(myBanner);


    const init = initialLoad.initialLoadMmethod();
    return init;
}
initialLoad.button.onclick = () => {
    alert("hiiiii");
};


document.body.appendChild(component());