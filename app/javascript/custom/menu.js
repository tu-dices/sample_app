'use strict';

const addToggleListener = (selected_id, menu_id, toggle_class) => {
  const selected_element = document.querySelector(`#${selected_id}`);
  selected_element.addEventListener('click', (event) => {
    event.preventDefault();
    const menu = document.querySelector(`#${menu_id}`);
    menu.classList.toggle(toggle_class);
  });
}

document.addEventListener('turbo:load',  () => {
  addToggleListener('hamburger', 'navbar-menu', 'collapse');
  addToggleListener('account', 'dropdown-menu', 'active');
});
