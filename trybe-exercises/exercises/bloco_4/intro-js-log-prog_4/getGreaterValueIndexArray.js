/**
 * This is an exercise program to get the index of the greatest number of an array.
 * 
 * By Pablo P Fernandes
 * 
 */

 let testArray = [2,3,6,7,10,1];

 console.log('The index of the biggest number is ', greatestNumberIndexFinder(testArray));


 function greatestNumberIndexFinder(listToFind) {
    /**
     * This is an exercise function to sort an array of numbers using Bubble Sort 
     * ascendenet algorithm in a for way
     * 
     * By Pablo P Fernandes
     */
    let greater = listToFind[0];
    let greaterIndex = 0;

    for (let index = 1; index < listToFind.length; index += 1) {
        if(listToFind[index] >= greater) {
            greater = listToFind[index];
            greaterIndex = index;
        }
    }

    return greaterIndex;

}