'use strict';

const compArray = ['rock', 'paper', 'scissors'];
const rock = document.getElementById('rock1');
const paper = document.getElementById('paper1');
const scissors = document.getElementById('scissors1');
const playerWins = 'Player wins'
const compWins = 'Computer wins'

let playerChoice, compChoice, scores, currentScore;
const youWin =function() {
    console.log('You win!')
}
const youLose = function() {
    console.log('You lose!')
}
//Computer Selection
const compSelection = function () {
    let random = Math.floor(Math.random() * compArray.length);
    compChoice = compArray[random];
    console.log(compChoice);
  };
  
//Game Comparison
let gameCompare = function() {
    if(playerChoice === 'rock' && compChoice === 'scissors') {
       youWin()
    } else if (playerChoice === 'rock' && compChoice === 'paper') {
        youLose()
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        youWin()
    } else if (playerChoice === 'paper' && compChoice === 'scissors') {
        youLose()
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        youWin()
    } else if (playerChoice === 'scissors' && compChoice === 'rock') {
        youLose()
    } else {
        console.log('It is a tie!')
    }
    }

//Player Selection
const playerSelection = function () {
  rock.addEventListener('click', function () {
    playerChoice = 'rock';
    console.log(playerChoice);
    compSelection()
    gameCompare()
  });
  paper.addEventListener('click', function () {
    playerChoice = 'paper';
    console.log(playerChoice);
    compSelection()
    gameCompare()
  });
  scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    console.log(playerChoice);
    compSelection()
    gameCompare()
  });
};
playerSelection();




//Display Message

//Tally Score

//Reset Round

//End Game
