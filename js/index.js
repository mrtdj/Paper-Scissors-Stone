"use strict";
var playerScore = 0;
var computerScore = 0;
var getHowManyRounds = 0;
var moves = document.querySelectorAll('player.move');
var playerMoveLength = moves.length;

for (var i=0; i < playerMoveLength; i++) {
  moves[i].addEventListener('click', function() {
    userMove(this.getAttribute('data-move'));
  });
}

function howManyRounds () {  
getHowManyRounds = prompt('How many rounds would You like to play?');
  if (
    isNaN(getHowManyRounds) ||
    getHowManyRounds === "" ||
    getHowManyRounds === null ||
    getHowManyRounds < 1
  ) {
    alert("Wrong Value. Try one more time");
    howManyRounds();
  }
    document.getElementById("rounds").innerHTML = getHowManyRounds   
}
document.getElementById("rock").onclick = playerMove;
document.getElementById("paper").onclick = playerMove;
document.getElementById("scissors").onclick = playerMove;

function playerMove() {
  var playerChoice = this.id;
  var result = document.getElementById("output1");
  var result2 = document.getElementById("output2");

  result.innerHTML = "Player: " + playerChoice;

  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  result2.innerHTML = "Computer: " + computerChoice;

  checkRoundWinner(playerChoice, computerChoice);
}

function checkRoundWinner(playerChoice, computerChoice) {
  var verdict = document.getElementById("output3");
  if (playerChoice == computerChoice) {
    verdict.innerHTML = "It is a tie";
    getHowManyRounds--;
  } else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "scissors" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "rock")
  ) {
    verdict.innerHTML = "You lose, try again!";
    computerScore++;
    getHowManyRounds--;
  } else {
    verdict.innerHTML = "Good choice! You win";
    playerScore++;
    getHowManyRounds--;
  }
  document.getElementById("playerScore").innerHTML = "<br>" + playerScore;
  document.getElementById("computerScore").innerHTML = "<br>" + computerScore;
  document.getElementById("rounds").innerHTML = getHowManyRounds;
  checkRoundsNo();
}

function checkRoundsNo() {
  if (getHowManyRounds == 0) {
    if (playerScore > computerScore) {
      alert("Congratulations, you won the game");
    } else if (playerScore < computerScore) {
      alert("Game over. You loooooose");
    } else if (playerScore == computerScore) {
      alert("Game over, TIE");
    }
    disableButtons();
  }
}

function disableButtons() {
  var gameButtons = document.getElementsByClassName("gameButtons");
  for (let i = 0; i < 3; i++) {
    gameButtons[i].disabled = true;
  }
  alert('Game over, please press the new game button')
}

var btnNewGame = document.getElementById("newGame");
btnNewGame.addEventListener("click", howManyRounds);