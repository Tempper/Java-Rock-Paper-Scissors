
function computerPlay() {
  const choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}


function playRound(playerSelection, computerSelection){
  playerSelection = prompt('Rock, paper or scissor?').toLowerCase()
  computerSelection = computerPlay()
  if (
    (playerSelection === "rock" && computerSelection === "scissors")||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ){
    return `You win! ${playerSelection} beats ${computerSelection}`
  }
  else if (computerSelection === playerSelection){
    return "You Tied!"
  }
  else{
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}


console.log(playRound())
