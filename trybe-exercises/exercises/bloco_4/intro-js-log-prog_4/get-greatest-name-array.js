/**
 * This is an exercise program to get the index of the greatest name of an array.
 * 
 * By Pablo P Fernandes
 * 
 */

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log('The index of the biggest name is ', greatestNameIndexFinder(testArray));


function greatestNameIndexFinder(listToFind) {
   /**
    * This is an exercise function to sort an array of numbers using Bubble Sort 
    * ascendenet algorithm in a for way
    * 
    * By Pablo P Fernandes
    */
   let greaterName = listToFind[0];
   let smallerName = listToFind[0];
   let greaterIndex = 0;

   for (let index = 0; index < listToFind.length; index += 1) {
       if(listToFind[index].length >= greaterName.length)
        {
            greaterName = listToFind[index];
            greaterIndex = index;
       }
   }

   return greaterIndex;

}