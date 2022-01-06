'use strict';

// PROJECT 1. GUESS MY NUMBER GAME

//SELECTING ELEMENTS
console.log(document.querySelector('.message')); //prints the entire element as it appears in html
{
  /* <p class="message">Start guessing...</p> */
}

//to get the text inside it
console.log(document.querySelector('.message').textContent); //Start guessing...

//4.WHAT IS DOM AND DOM MANIPULATION
//what is the dom
//DOM stands for document object model which is a structured representation of html documents and allows js to access elements and styles to manipulate them.

//DOM is created as soon as the html page loads
//DOM starts with the document object at the very top, it serves as the entry point to the DOM.
//DOM IS NOT PART OF JAVASCRIPT
//dom and dom methods are part of the web apis which can interact with javascript
//apart from the dom apis, there are more apis such as timers and the fetch api among others

// 5.SELECTING AND MANIPULATING ELEMENTS
//we have so far gotten the text content elements, we can also set the text content for elements as shown below

// document.querySelector('.message').textContent = 'Correct Number 🎉🎉';
//doing the same for secret number and the score
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// doing the same for the input field, we read the value property
// document.querySelector('.guess').value = 23;

// generating a random number between 1 and 20

let secretNumber = Math.trunc(Math.random() * 20);
// setting the score
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = '?';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 6.HANDLING CLICK EVENTS
//we use event listeners, an event is something that happens on the page eg mouse move, clicks etc
//we should select the element where the event is supposed to happen
// functions that run when events happen are called event handlers

document.querySelector('.check').addEventListener('click', function () {
  //retrieve the value in the input field
  //   remember elements that come from the dom come as strings and so we need to convert them to numbers
  const guess = Number(document.querySelector('.guess').value);

  //checking if there is a guess given by the user or not
  if (!guess) {
    //print an error message to the message field
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage('⛔No number!');
  } else if (guess == secretNumber) {
    //success message
    displayMessage('🎉 Correct Number!');
    // styling with javascript does not change the js file, it changes the  inline stylings
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈Too high!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// implementing the play again functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
