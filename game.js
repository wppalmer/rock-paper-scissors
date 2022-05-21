'use strict';

const compArray = ['rock', 'paper', 'scissors'];
const rock = document.getElementById('rock1');
const paper = document.getElementById('paper1');
const scissors = document.getElementById('scissors1');
const playerWins = 'Player wins'
const compWins = 'Computer wins'

let playerChoice, compChoice, scores, currentScore;

//Computer Selection
const compSelection = function () {
    let random = Math.floor(Math.random() * compArray.length);
    compChoice = compArray[random];
    console.log(compChoice);
  };
  

//Player Selection
const playerSelection = function () {
  rock.addEventListener('click', function () {
    playerChoice = 'rock';
    console.log(playerChoice);
    compSelection()
  });
  paper.addEventListener('click', function () {
    playerChoice = 'paper';
    console.log(playerChoice);
    compSelection()
  });
  scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    console.log(playerChoice);
    compSelection()
  });
};
playerSelection();


//Game Comparison
if(playerChoice = 'rock' && compChoice = 'scissors') {
    console.log(playerWins)
}

//Display Message

//Tally Score

//Reset Round

//End Game
