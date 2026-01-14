declare function prompt(message?: string): string | null;

/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

/**
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2026-01-10
 * @fileoverview Console-based soccer quiz game.
 */

// VARIABLES
let score: number = 0;
let questionNumber: number = 0;
let userAnswer: string = "";

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
  ["11"],
  ["hat-trick", "hat trick"],
  ["argentina"],
  ["lionel messi", "messi"],
  ["real madrid"],
  ["red card"],
  ["brazil"],
  ["italy"],
  ["penalty area", "penalty box"],
  ["cristiano ronaldo", "ronaldo", "cr7"],
  ["penalty kick"],
  ["russia"],
  ["90 minutes", "90"],
  ["real madrid"],
  ["throw-in", "throw in"],
];

// MAIN PROGRAM
while (questionNumber < questions.length) {
  userAnswer = "";
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

console.log("\nDone.");
