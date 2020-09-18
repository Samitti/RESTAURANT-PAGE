import "./style.css";
import Banner from "./banner.jpg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello";
  element.classList.add("hello");

  //Add the image to our existing div.
  const myBanner = new Image();
  myBanner.src = Banner;

  //   element.appendChild(myBanner);

  return element;
}

document.body.appendChild(component());
