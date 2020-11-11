'use strict';

/* The function should take an array of words and return a new array of scores for each word, according to the Scrabble scoring rules */

function calculateWordScores(words) {
  let wordScores = [];
  for (let word of words) {
    let score = 0;
    for (let letter of word) {
      if (letter === undefined) break;
      if (!(letter.toUpperCase() in letterValues)) {
        score = null;
        break;
      }
      score += letterValues[letter.toUpperCase()];
    }
    wordScores.push(score);
  }
  return wordScores;
}

// debated using this to replace lines 9 - 12
// wordScores.push(word.forEach(function(val) {
//    score += letterValues[val.toUpperCase()];
// }));

let letterValues = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};
