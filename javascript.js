function playerSelection(){
  return prompt("Rock, paper or Scissors?").toLowerCase()
}

function computerSelection() {
  let choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)]
  
}

function playRound(playerSelection, computerSelection){
  result = ""
  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")){
      result = ("You Win! " + playerSelection + " beats " + computerSelection)
  }
  else if (playerSelection === computerSelection){
    result = ("You tied! ")
  }
  else{
    result = ("You Lose! " + playerSelection + " beats " + computerSelection)
  }
  console.log(result)
}

playRound(playerSelection(), computerSelection())

/*function playRound(){
  let computerPlay = computerPlay()
  let playerSelection = playerSelection()
  if (playerSelection === "rock" && computerPlay === "rock"){
    return("You Tied!")
  }
  else if (playerSelection === "rock" && computerPlay === "paper"){
    return("You Lose! Paper beats Rock")
  }
  else if (playerSelection === "rock" && computerPlay === "scissors"){
    return("You win! Rock beats Scissors!")
  }
  else if (playerSelection === "paper" && computerPlay === "rock"){
    return("You Win! Paper beats Rock!")
  }
  else if (playerSelection === "paper" && computerPlay === "paper"){
    return("You Tied!")
  }
  else if (playerSelection === "paper" && computerPlay === "scissors"){
    return("You Lose! Scissors beats Paper!")
  }
  else if (playerSelection === "scissors" && computerPlay === "scissors"){
    return("You Tied!")
  }
  else if (playerSelection === "scissors" && computerPlay === "paper"){
    return("You Win! Scissors beats Paper")
  }
  else if (playerSelection === "scissors" && computerPlay === "rock"){
    return("You Lose! Rock beats Scissors!")
  }
  
}
*/
