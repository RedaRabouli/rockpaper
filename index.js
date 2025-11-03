function getComputerChoice() {
  const randoNum = Math.random();

  if (randoNum < 1 / 3) {
    return "rock";
  } else if (randoNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let answer = prompt("Please choose Rock Paper or Scissors, ty.");
  return answer.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Make humanChoice and computerChoise case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice} :O `);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }
  // Play 5 rounds

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score - you: ${humanScore}, Computer: ${computerScore}\n`);
  }

  //Declare the final winner

  console.log("\n=== GAME OVER ===");
  if (humanScore > computerScore) {
    console.log(
      `🎉 You win the game! Final score: ${humanScore} - ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `💻 Computer wins the game! Final score: ${humanScore} - ${computerScore}`
    );
  } else {
    console.log(
      `🤝 It's a tie game! Final score: ${humanScore} - ${computerScore}`
    );
  }
}

// START THE GAME
playGame();
