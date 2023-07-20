//funtion generates a random number and uses modulo to return rock, paper or scissors
function getEnigmaChoice() {
  let enigmaChoice;
  let randomNum = crypto.getRandomValues(new Uint32Array(1));
  let choiceOf3 = randomNum % 3;

  if (choiceOf3 === 0) {
    enigmaChoice = "Rock";
  } else if (choiceOf3 === 1) {
    enigmaChoice = "Paper";
  } else {
    enigmaChoice = "Scissors";
  }

  return enigmaChoice;
}

//function creates a promise object based on the user's choice and returns it to the async battle function
function getPlayerChoice() {
  return new Promise((resolve) => {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", () => {
      resolve("Rock");
    });
    paperButton.addEventListener("click", () => {
      resolve("Paper");
    });
    scissorsButton.addEventListener("click", () => {
      resolve("Scissors");
    });
  });
}

//simulates an RPS round and returns the winner
function simulateRPSRound(enigmaChoice, playerChoice) {
  switch (enigmaChoice) {
    case "Rock":
      if (playerChoice === "Paper") {
        return "Player";
      } else if (playerChoice === "Rock") {
        return "Tie";
      } else if (playerChoice === "Scissors") {
        return "Enigma";
      }
      break;

    case "Paper":
      if (playerChoice === "Paper") {
        return "Tie";
      } else if (playerChoice === "Rock") {
        return "Enigma";
      } else if (playerChoice === "Scissors") {
        return "Player";
      }
      break;

    case "Scissors":
      if (playerChoice === "Paper") {
        return "Enigma";
      } else if (playerChoice === "Rock") {
        return "Player";
      } else if (playerChoice === "Scissors") {
        return "Tie";
      }
      break;
  }
}

//asynchrounous function awaits user response and simulates RPS rounds with the enigma machine
async function battle() {
  let playerWinCount = 0;
  let enigmaWinCount = 0;

  const enigmaScoreEl = document.getElementById("enigmaScore");
  const playerScoreEl = document.getElementById("playerScore");

  // Reset the scores to 0
  enigmaWinCount = 0;
  playerWinCount = 0;

  // Update the score display elements to show the initial scores
  enigmaScoreEl.innerText = "ENIGMA: " + enigmaWinCount;
  playerScoreEl.innerText = "PLAYER: " + playerWinCount;

  while (true) {
    let enigmaChoice = getEnigmaChoice();
    let playerChoice = await getPlayerChoice(); // Wait for player's choice

    //status element to dynamically update the DOM based on the winner of each round
    const statusElement = document.getElementById("status");

    let winner = simulateRPSRound(enigmaChoice, playerChoice);
    if (winner === "Enigma") {
      enigmaWinCount++;
      enigmaScoreEl.innerText = "ENIGMA: " + enigmaWinCount;
      console.log("Enigma Count " + enigmaWinCount);
      statusElement.innerText = "Enigma wins this round!";
    } else if (winner === "Player") {
      playerWinCount++;
      playerScoreEl.innerText = "PLAYER: " + playerWinCount;
      console.log("Player count " + playerWinCount);
      statusElement.innerText = "Good Job, cadet! You won this round!";
    } else {
      statusElement.innerText = "TIE!";
      continue;
    }

    if (enigmaWinCount === 5) {
      statusElement.innerText = "YOU LOST!";
      battleButton.style.display = "block";
      battleButton.innerText = "Play Again?";
      break;
    }

    if (playerWinCount === 5) {
      battleButton.innerText = "Play Again!?";
      battleButton.style.display = "block";
      statusElement.innerText =
        "You have done it! You single-handedly saved the world!";
      break;
    } else {
      continue;
    }
  }
}

//kickstart the battle function after user clicks the start button
const battleButton = document.getElementById("battleButton");
const statusElement = document.getElementById("status");
const enigmaScoreButton = battleButton.addEventListener("click", () => {
  battleButton.style.display = "none";
  statusElement.innerText = "Game Started!";
  battle();
});
