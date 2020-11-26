/**
 * This is an exercise program to find the even numbers
 * among the numbers in an array in a for way
 * 
 * By Pablo P Fernandes
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index]%2) {
      aux++;
  }    
}

if (aux == 0) {
    console.log('There is no even numbers in this array.')
} else{
    console.log('There is '  + aux + ' even numbers in this array.');
}

