console.log("Hello World");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const botchoice = Math.random();

  let choice;

  if (botchoice < 0.33) {
    choice = "rock";
  } else if (botchoice < 0.66) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  console.log(choice);
  return choice;
}

function getHumanChoice() {
  const choice = prompt("Type your choice: rock, paper, or scissors");
  return choice;
}

console.log("Human choice:", getHumanChoice());

const lethumanscore = 0;
const letcomputerscore = 0;


const humanChoice = getHumanChoice(); 
const computerChoice = getComputerChoice(); 

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("YOU WIN :)");
    humanScore++;
  } else {
    console.log("YOU LOSE :(");
    computerScore++;
  }

  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

function playGame() {
  humanScore = 0;     
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Ronda ${i} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

   console.log("\n=== Game Over ===");
  if (humanScore > computerScore) {
    console.log(" CONGRATS! You won the game!");
  } else if (computerScore > humanScore) {
    console.log(" The computer won the game. Better luck next time!");
  } else {
    console.log(" The game is a tie!");
  }
}


playGame();