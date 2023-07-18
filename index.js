function getEnigmaChoice() {
  let enigmaChoice;
  let randomNum = Math.floor(Math.random() * 1000);
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

async function battle() {
  let playerWinCount = 0;
  let enigmaWinCount = 0;

  while (true) {
    let enigmaChoice = getEnigmaChoice();
    let playerChoice = await getPlayerChoice(); // Wait for player's choice

    let winner = simulateRPSRound(enigmaChoice, playerChoice);
    if (winner === "Enigma") {
      enigmaWinCount++;
      console.log("Enigma wins");
    } else if (winner === "Player") {
      playerWinCount++;
      console.log("Player round win");
    } else {
      console.log("Tie");
      continue;
    }

    if (enigmaWinCount === 5) {
      console.log("Enigma Wins!");
      break;
    }

    if (playerWinCount === 5) {
      console.log("Player Wins");
      break;
    } else {
      continue;
    }
  }
}

battle();
