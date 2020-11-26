/**
 * This is an exercise program to sort an array of numbers using Bubble Sort algorithm in a for way
 * 
 * By Pablo P Fernandes
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 0, 1, 90];
let position;

for (let index = 1; index < numbers.length; index++) {
    for (let pointer = 0; pointer < index; pointer++) {
        if(numbers[index] < numbers[pointer]) {
            position = numbers[index];
            numbers[index] = numbers[pointer];
            numbers[pointer] = position;
        }
        
    }
}

console.log(numbers);