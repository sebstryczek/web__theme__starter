const initElem = elem => {
  const input = elem.querySelector('.js--search-box__input');
  const toggle = elem.querySelector('.js--search-box__toggle');
  const submit = elem.querySelector('.js--search-box__submit');
  
  toggle.addEventListener('click', e => {
    e.preventDefault();
    elem.classList.toggle('opened');
    if (elem.classList.contains('opened')) {
      input.select();
    }
  }, false);
}

export default {
  init: () => {
    const elems = document.querySelectorAll('.js--search-box');
    elems.forEach(initElem);
  }
}