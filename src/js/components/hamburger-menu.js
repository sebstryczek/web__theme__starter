const initElem = elem => {
  const button = elem.querySelector('.js--hamburger-menu__button');
  const content = elem.querySelector('.js--hamburger-menu__content');
  button.addEventListener('click', e => {
    e.preventDefault();
    content.classList.toggle('visible');
  }, false);
}

export default {
  init: () => {
    const elems = document.querySelectorAll('.js--hamburger-menu');
    elems.forEach(initElem);
  }
}