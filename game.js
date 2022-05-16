'use strict';

const compArray = ['rock', 'paper', 'scissors'];
const rock = document.getElementById('rock1');
const paper = document.getElementById('paper1');
const scissors = document.getElementById('scissors1');

//Button Inputs
let playerChoice, compChoice, scores, currentScore;

const playerRock = function () {
  rock.addEventListener('click', function () {
    playerChoice = 'rock';
    console.log(playerChoice);
  });
};
const playerPaper = function () {
  paper.addEventListener('click', function () {
    playerChoice = 'paper';
    console.log(playerChoice);
  });
};
const playerScissors = function () {
  scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    console.log(playerChoice);
  });
};
playerRock();
playerPaper();
playerScissors();

//Computer Selection
compChoice = function () {
  let random = Math.floor(Math.random() * compArray.length);
  compChoice = compArray[random];
  console.log(compChoice);
};

//Game Comparison

//Display Message

//Tally Score

//Reset Round

//End Game
