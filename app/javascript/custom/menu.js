'use strict';


document.addEventListener('turbo:load',  () => {
  const account = document.querySelector('#account');
  account.addEventListener('click', (event) => {
    event.preventDefault();
    const menu = document.querySelector('#dropdown-menu');
    menu.classList.toggle('active');
  })
})
