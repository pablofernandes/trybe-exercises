/**
 * This is an exercise program to get the index of the smallest number of an array.
 * 
 * By Pablo P Fernandes
 * 
 */

let testArray = [2,3,6,7,10,1];

console.log('The index of the smallest number is ', smallestNumberIndexFinder(testArray));


function smallestNumberIndexFinder(listToFind) {
   /**
    * This is an exercise function to sort an array of numbers using Bubble Sort 
    * ascendenet algorithm in a for way
    * 
    * By Pablo P Fernandes
    */
   let smaller = listToFind[0];
   let smallerIndex = 0;

   for (let index = 1; index < listToFind.length; index += 1) {
       if(listToFind[index] <= smaller) {
           smaller = listToFind[index];
        smallerIndex = index;
       }
   }

   return smallerIndex;

}