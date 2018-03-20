const initElem = elem => {
  elem.style.position = 'fixed';
  elem.style.zIndex = 9999;
  const style = window.getComputedStyle(elem);
  const push = elem.cloneNode(false);
  push.style.position = 'relative';
  push.style.height = style.height;
  push.style.zIndex = 'auto';
  elem.parentNode.insertBefore(push, elem);
}

export default {
  init: () => {
    const elems = document.querySelectorAll('.js--sticky');
    elems.forEach(initElem);
  }
}