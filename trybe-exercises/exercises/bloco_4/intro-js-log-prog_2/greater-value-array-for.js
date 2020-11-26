/**
 * This is an exercise program to find de greater number
 * among the numbers in an array in a for way
 * 
 * By Pablo P Fernandes
 */
let numbers = [5, 9, 3, 19, 70, 8, 70, 2, 35, 27];
let aux = numbers[0];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] >= aux) {
      aux = numbers[index];
  }    
}

console.log('The greater number is ' + aux);