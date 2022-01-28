import API from './api';

let user;
const api = new API('https://ajs7server.herokuapp.com/');

const welcomeForm = document.querySelector('.welcome__form');
const welcomeInput = document.querySelector('.welcome__input');
welcomeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(welcomeInput.value);
})
