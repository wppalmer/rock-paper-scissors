'use strict';

const compArray = ['rock', 'paper', 'scissors'];
const rock = document.getElementById('rock1');
const paper = document.getElementById('paper1');
const scissors = document.getElementById('scissors1');

let playerChoice, compChoice, scores, currentScore;

//Player Selection
const playerSelection = function () {
  rock.addEventListener('click', function () {
    playerChoice = 'rock';
    console.log(playerChoice);
  });
  paper.addEventListener('click', function () {
    playerChoice = 'paper';
    console.log(playerChoice);
  });
  scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    console.log(playerChoice);
  });
};
playerSelection();

//Computer Selection
const compSelection = function () {
  let random = Math.floor(Math.random() * compArray.length);
  compChoice = compArray[random];
  console.log(compChoice);
};

//Game Comparison

//Display Message

//Tally Score

//Reset Round

//End Game
