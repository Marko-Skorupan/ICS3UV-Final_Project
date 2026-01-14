/* eslint-disable no-console */

/**
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2026-01-10
 * @fileoverview Console-based soccer quiz game.
 */

// VARIABLES
let score: number = 0;
let questionNumber: number = 0;

// ARRAYS
const questions: string[] = [
  "How many players are on the field for one team?",
  "What is it called when a player scores three goals in one game?",
  "Which country won the 2022 FIFA World Cup?",
];

const answers: string[][] = [
  ["11"],
  ["hat-trick", "hat trick"],
  ["argentina"],
];

// MAIN PROGRAM
while (questionNumber < questions.length) {
  const userAnswer: string = answers[questionNumber][0];

  if (answers[questionNumber].includes(userAnswer)) {
    score = score + 1;
  }

  questionNumber = questionNumber + 1;
}

console.log("Quiz complete");
console.log("Final score:", score);
