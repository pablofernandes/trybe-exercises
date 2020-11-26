/**
 * This is an exercise program to calculate a average over a numbers on an array in a dumb way
 * 
 * By Pablo P Fernandes
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum;
let average;
sum = numbers[0];
sum += numbers[1];
sum += numbers[2];
sum += numbers[3];
sum += numbers[4];
sum += numbers[5];
sum += numbers[6];
sum += numbers[7];
sum += numbers[8];
sum += numbers[9];

average = sum/numbers.length;

console.log(average);
