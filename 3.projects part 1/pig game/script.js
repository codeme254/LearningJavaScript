'use strict';

// THE PIG GAME
//when we roll a 1, we loose all our current score and so it is the next player's turn
// the first player to reach 100 points wins the game
//new game functionality to and hold functionality

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
const init = function () {
  // initialising the score to 0 and hide the dice
  scores = [0, 0]; //the big scores that keep accumulating
  currentScore = 0;
  activePlayer = 0; //player 1 is 0 and player 2 is 1
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El = 0;
  current1El = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling a dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for a rolled 1 and if true swith to the next player
    if (dice !== 1) {
      //add the dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

// holding the current score
btnHold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to the score of the active player
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if score is >= 100
    if (scores[activePlayer] >= 20) {
      //3.if so finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 4.if not switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
