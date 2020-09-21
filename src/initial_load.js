const initialLoad = (function () {
  const element = document.createElement('div');
  const heading = document.createElement('h1');
  const button = document.createElement('button');

  const initialLoadMmethod = () => {
    button.innerHTML = 'Click';
    button.classList.add('btn');
    heading.innerHTML = 'Welcome to Eritrean Restaurant.';
    heading.classList.add('heading');
    element.classList.add('hello');
    element.appendChild(heading);
    element.appendChild(button);

    return element;
  };

  return {
    initialLoadMmethod,
    button,
  };
}());

export { initialLoad };
