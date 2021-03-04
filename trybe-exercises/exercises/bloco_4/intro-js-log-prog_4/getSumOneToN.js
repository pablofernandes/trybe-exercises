/**
 * This is an exercise program to get the of all number from 1 to N of given
 * number N.
 * 
 * By Pablo P Fernandes
 * 
 */
let value = 5;
let summary = sumOneToNumber(value);
console.log('The sum of the algarisms from 1 to ' + value + ' is ' + summary);

 function sumOneToNumber(number) {
    let sum = 0; 
    for (let index = 1; index <= number; index += 1){
         sum += index;
     }

     return sum;
 }