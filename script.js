//we can hold and store the current score as 1 comes current score becomes zero , the first person to score 20 will be the winner

// make  aflow chart of the prcoess
"use strict";
//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//getElementById is little faster than querySlelector but when we are slelecting multiple id and more thing # isnot used in latter

// we are giving number but this textContent will convert it into string
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//to store the score, sicce it is an array pos 0 and1 thats why it player0 and player 1 in the code

// to store the score and check who is rolling the dice
let playing ,currentScore,scores,activePlayer;
//initial condition
const init= function(){
     scores = [0, 0];
     activePlayer = 0;
     currentScore = 0;
     playing =true;
    score0El.textContent = 0;
 score1El.textContent =0 ;
 current0El.textContent =0;
 current1El.textContent =0;
 diceEl.classList.add('hidden')
 player0El.classList.remove('player--winner');
 player1El.classList.remove('player--winner');
 player0El.classList.add('player--active');
 player1El.classList.remove('player--active');
 
}
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//rolling the dice
btnRoll.addEventListener("click", function () {
    if(playing){
  //1.genrate a random dice
  //2.display Dice
  //3.Check the rolled q if true  switch
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //this above is the manipulating src dice image form html and selecting random dice image according to generated in dice variable
  if (dice != 1) {
    //Add dice to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    //current0El.textContent =currentScore; // note change to currentplayer
  } else {
    //switch player reassigning 0 and 1
    switchPlayer();
  }
}
});

btnHold.addEventListener('click', function () {
    if(playing){
  //1.add current score to active player
  //2, check if the player score is >=100
  //finish the game
  //switch to nextPlayer
  scores[activePlayer] += currentScore;
  //e.g.scores[1] = scores[1] + currentScore\
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 50) {
//     //when using querySelector use dot for the class
playing= false;
diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    switchPlayer();
  }
}}
);
btnNew.addEventListener('click',init
)

//js will call init no need to call the finction as soon as user click on reset btn