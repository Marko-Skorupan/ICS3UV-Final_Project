/* eslint-disable no-console */
/* eslint-disable no-undef */

/**
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2026-01-10
 * @fileoverview Console-based soccer quiz game.
 */

declare function prompt(message?: string): string | null;

// VARIABLES
let score: number = 0;
let questionNumber: number = 0;
let userAnswer: string = "";
let playAgain: string = "";

// ARRAYS
const questions: string[] = [
  "How many players are on the field for one team?",
  "What is it called when a player scores three goals in one game?",
  "Which country won the 2022 FIFA World Cup?",
  "Who won the Ballon d'Or in 2023?",
  "Which club has won the most UEFA Champions League titles?",
  "What color card means a player is sent off?",
  "Which country has won the most FIFA World Cups?",
  "Who won the UEFA Euro 2020 tournament?",
  "What is the name of the area where the goalkeeper is allowed to use their hands?",
  "Which player is known as CR7?",
  "What is awarded when a defender commits a foul inside their own penalty area?",
  "Which country hosted the 2018 FIFA World Cup?",
  "How long is a standard professional soccer match?",
  "Which club is FC Barcelona's biggest rival?",
  "What restarts play when the ball goes out over the sideline?",
];

const answers: string[][] = [
  ["11", "eleven"],
  ["hat-trick", "hat trick"],
  ["argentina"],
  ["lionel messi", "messi"],
  ["real madrid"],
  ["red card", "red"],
  ["brazil"],
  ["italy"],
  ["penalty area", "penalty box", "18-yard box", "18 yard box"],
  ["cristiano ronaldo", "ronaldo", "cr7"],
  ["penalty kick", "penalty shot", "penalty"],
  ["russia"],
  ["90 minutes", "90", "ninety minutes"],
  ["real madrid"],
  ["throw-in", "throw in"],
];

// WELCOME
console.log("Welcome to the Soccer Quiz!");
console.log("Rules:");
console.log("1. You will be asked multiple soccer-related questions.");
console.log("2. Type your answer and press Enter.");
console.log("3. Your score will be shown at the end of the quiz.");
console.log("Good luck!\n");

// RESTART LOOP
do {
  score = 0;
  questionNumber = 0;

  while (questionNumber < questions.length) {
    userAnswer = prompt(questions[questionNumber]) ?? "";
    userAnswer = userAnswer.toLowerCase().trim();

    if (answers[questionNumber].includes(userAnswer)) {
      console.log("Correct!\n");
      score = score + 1;
    } else {
      console.log(
        "Incorrect. The correct answer is " +
          answers[questionNumber][0] +
          "\n",
      );
    }

    questionNumber = questionNumber + 1;
  }

  console.log("Quiz complete!");
  console.log("Your final score is: " + score + " / " + questions.length);

  playAgain = prompt("Would you like to play again? (yes/no)") ?? "";
  playAgain = playAgain.toLowerCase().trim();
} while (playAgain === "yes");

console.log("Thanks for playing!");
console.log("\nDone.");

export {};
