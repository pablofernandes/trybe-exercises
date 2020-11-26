/**
 * This is an exercise program to multiply the numbers  of an array by his neighbor in a for way
 * 
 * By Pablo P Fernandes
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplieNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    if (index == numbers.length-1) {
        multiplieNumbers[index] = numbers[index]*2;
    } else {
        multiplieNumbers[index] = numbers[index] * numbers[index+1];
    }
}

console.log(numbers);
console.log(multiplieNumbers);