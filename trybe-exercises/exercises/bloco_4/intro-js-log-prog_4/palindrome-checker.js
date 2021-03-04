/**
 * This is a program exercise to test the handlework with functions. In this case we'll
 * work with a palindrome check function.
 * 
 * By Pablo P Fernandes
 */
let wordTest = '10001';

 if (palindromeChecker(wordTest)) {
     console.log('The word ' + wordTest + ' is a palindrome.')
 } else {
    console.log('The word ' + wordTest + ' is not a palindrome.')
 }

 function palindromeChecker(word) {
     let inverseWord = word.split('').reverse().join('');//This function invert a string

     if (word == inverseWord) {
         return true;
     }
     
     return false;
 }

