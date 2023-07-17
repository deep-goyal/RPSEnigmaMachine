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

function simulateRPSRound(enigmaChoice, playerchoice) {
  switch (enigmaChoice) {
    case "Rock":
      if (playerchoice === "Paper") {
        return "Player";
      } else if (playerchoice === "Rock") {
        return "Tie";
      } else if (playerchoice === "Scissors") {
        return "Enigma";
      }
      break;

    case "Paper":
      if (playerchoice === "Paper") {
        return "Tie";
      } else if (playerchoice === "Rock") {
        return "Enigma";
      } else if (playerchoice === "Scissors") {
        return "Player";
      }
      break;

    case "Scissors":
      if (playerchoice === "Paper") {
        return "Enigma";
      } else if (playerchoice === "Rock") {
        return "Player";
      } else if (playerchoice === "Scissors") {
        return "Tie";
      }
      break;
  }
}
