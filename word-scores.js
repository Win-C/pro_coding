'use strict';

/* The function should take an array of words and return a new array of scores for each word, according to the Scrabble scoring rules */

function calculateWordScores(words) {
  // let wordScores = [];
  // for (let word of words) {
    // let score = 0;
    // for (let letter of word) {
    //   if (letter === undefined) break;
    //   if (!(letter.toUpperCase() in LETTER_VALUES)) {
    //     score = null;
    //     break;
    //   }
    //   score += LETTER_VALUES[letter.toUpperCase()];
    // }
  //   wordScores.push(score);
  // }
  let wordScores = words.map(convert);
  return wordScores;
}

/* accept an word and returns a scrabble score*/
function convert(word) {
  let score = 0;
  for (let letter of word) {
    if (letter === undefined) return score;
    if (!(letter.toUpperCase() in LETTER_VALUES)) {
      return null;
    }
    score += LETTER_VALUES[letter.toUpperCase()];
  }
  return score;
}

const LETTER_VALUES = {
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
