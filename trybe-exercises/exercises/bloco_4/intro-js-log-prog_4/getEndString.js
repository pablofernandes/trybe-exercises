/**
 * This is an exercise program to verify if a given string is the end of another.
 * 
 * By Pablo P Fernandes
 * 
 */

 let word = 'parapapapa pipedo';
 let str = ' piedo';
 console.log(endOfStringChecker(word, str));

 function endOfStringChecker(word, str) {
    strPositions = str.length -1;
    wordPositions = word.length -1;
    if (word.length <= str.length) {
        return 'The string should be smaller than the word given.';
    }

    for (let index = strPositions; index >= 0; index -= 1) {
        if(str[index] !== word[wordPositions]) {
            return false;
        }
        wordPositions -= 1;
    }

    return true;

 }