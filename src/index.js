import "./style.css";
import {
    homeModule,
} from "./home.js";
// import Banner from "./banner.jpg";

function component() {
    const element = document.createElement("div");
    const heading = document.createElement("h1");
    const button = document.createElement("button");

    button.innerHTML = "Click";
    button.classList.add("btn");
    heading.innerHTML = "Welcome to Eritrean Restaurant.";
    heading.classList.add("heading");
    element.classList.add("hello");
    element.appendChild(heading);
    element.appendChild(button);

    //Add the image to our existing div.
    //   const myBanner = new Image();
    //   myBanner.src = Banner;

    //   element.appendChild(myBanner);

    button.onclick = () => {
        homeModule.changeTitle();
    };

    return element;
}


document.body.appendChild(component());