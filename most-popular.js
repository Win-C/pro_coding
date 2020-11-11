/* Takes a word and returns the most common letter in that word */
function mostFrequentLetter(word) {
  let letterCounts = {};
  let mostFrequentCount = 0;
  let mostFrequentLetter;
  
  for (let letter of word) {
    
    // Testing cleaner code (default code provided below)
    // let count = letterCounts[letter] || 0; 
    // let nc = count + 1;
    // letterCounts[letter] = nc;
    
    //Create object key of letter and value equal to count
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    
    //Tests to see if letter is the highest (king of the hill)
    //If tie, first letter with tie frequency is returned
    if (letterCounts[letter] > mostFrequentCount) {
      mostFrequentCount = letterCounts[letter];
      mostFrequentLetter = letter;
    }
  }
  return mostFrequentLetter;
}
