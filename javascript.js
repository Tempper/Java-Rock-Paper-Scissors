let playerScore = 0;
let computerScore = 0;

function getComputerSelection(){
  let computerNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let computerChoice = "";
  if (computerNumber == 1){
    computerChoice = "rock";
  } else if (computerNumber == 2){
    computerChoice = "paper";
  } else{
    computerChoice = "scissors";
  }
  return computerChoice
}
console.log(getComputerSelection());

function getPlayerSelection(){
  playerChoice = prompt("Rock, Paper or Scissors?");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice
}
console.log(getPlayerSelection())