/**
 * This is an exercise program to find the most popular item in an array.
 * 
 * By Pablo P Fernandes
 */

 let testArray = [2, 3, 2, 5, 8, 2, 3];

 console.log('The most popular element is ' + popularityCounter(testArray));


 
 
 function popularityCounter(listOfElements) {
    let popularityArray = [];
    let counter = 0;
    let element;
    for (let index = 0; index < listOfElements.length; index += 1) {
            element = listOfElements[index];
        for (let position = 0; position < listOfElements.length; position += 1) {
            if (element === listOfElements[position]) {
                counter += 1;
            }
        }

        popularityArray[index] = counter;
        counter = 0;
    }

    return listOfElements[greatestNumberIndexFinder(popularityArray)];
 }

 function greatestNumberIndexFinder(listToFind) {
    /**
     * This is an exercise function to sort an array of numbers using Bubble Sort 
     * ascendenet algorithm in a for way
     * 
     * By Pablo P Fernandes
     */
    let greater = listToFind[0];
    let greaterIndex = 0;

    for (let index = 0; index < listToFind.length; index += 1) {
        if(listToFind[index] > greater) {
            greater = listToFind[index];
            greaterIndex = index;
        }
    }

    return greaterIndex;

}