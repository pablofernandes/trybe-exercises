/**
 * This is an exercise program to create an array of numbers and calculate 
 * the result of the divison of each number by 2 in an array in a for way
 * 
 * By Pablo P Fernandes
 */
let numbers = [];

for (let index = 0; index < 25; index++) {
    numbers[index] = index + 1;
    console.log('The division is result is: ' + numbers[index]/2);
}

console.log(numbers);