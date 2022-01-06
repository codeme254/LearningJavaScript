'use strict';

// 12. THE MODAL WINDOW PROJECT
//selecting all the elements we will need
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);//prints the NodeList (a little bit like an array) showing all the three buttons in html syntax

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden', 'another-class-in-case-it-was-there');
  overlay.classList.remove('hidden', 'another-class');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// handling the esc key
// there  are three events for the keyboard, keydown, keypress and keyup
// keyup happens when we lift our finger off the keyboard
//keypress is fired continuously when we keep our finger on a certain key
//keydown is fired as soon as we just press down the key, it is the most commonly used
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
