# RPS Enigma Machine

## Overview

The RPS Enigma Machine project is a web application centered around a rock-paper-scissors game, aiming to delve into the fascinating realm of randomness. Developed using standard web technologies like HTML, CSS, and JavaScript, the project offers an enjoyable experience while exploring the intriguing aspects of chance and decision-making.

## Deployment

The project has been deployed and can be accessed at [rpsenigmamachine.vercel.app](https://rpsenigmamachine.vercel.app).

## About the Project

RPS Enigma Machine is a simple game on the surface, but its underlying beauty lies in the exploration of randomness. By leveraging the `Crypto` interface, the application ensures that the computer opponent's choices are truly unpredictable and more random than the `Math.random` function.

## How to Play

- Click the "Start" button to initiate the game.
- Make your move by clicking on the Rock, Paper, or Scissors button.
- The Enigma Machine, representing the computer opponent, will make its random selection.
- The winner of each round will be displayed on the screen.
- The first player to win five rounds will be declared the ultimate champion.

## The Beauty of Randomness

Randomness is a captivating concept with wide-ranging applications in gaming. The `Math.random` function uses a deterministic algorithm to generate a random number between 0 and 1, but the `crypto.getRandomValues` function uses the underlying cryptographic engine of the browser or operating system to generate truly random values The cryptographic engine gathers entropy from various sources, including hardware events, system processes, and other unpredictable phenomena. As a result, the generated random numbers are not predictable, and the process is more robust than the Math library's `Math.random`.

## Technologies

- HTML5
- CSS3
- JavaScript
- Google Fonts API

## Credits

This project was created by Deep Goyal. [OpenAI's ChatGPT](https://openai.com/blog/chatgpt) was used to clean up the code and test responsiveness as well.

## Feedback and Contributions

Feedback and contributions are highly appreciated. If you have any suggestions or ideas to enhance the project, please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/deep-goyal/RPSEnigmaMachine).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it in accordance with the terms of the license.

---
