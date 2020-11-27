/**
 * This is an exercise program to multiply the numbers  of an array by its neighbor in a for way
 * 
 * By Pablo P Fernandes
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplieNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    if (index == numbers.length - 1) {
        multiplieNumbers.push(numbers[index]*2);
    } else {
        multiplieNumbers.push(numbers[index] * numbers[index + 1]);
    }
}

console.log(numbers);
console.log(multiplieNumbers);