/**
 * This is a exercise program to verify the profit for selling a thousand
 * of a given product which cost and sell cost is named cost and sellValue 
 * and print the result (even or odd) on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */

 let cost = 100;
 let tax = 0.2;
 let costPlusTaxes = cost * tax;
 let sellValue = costPlusTaxes * 1.10;
 let profit = (sellValue - costPlusTaxes) * 1000;

 if(cost <= 0 || sellValue <= 0) {
     console.log('Incorrect data entry. Be sure that you typed a value greater than zero');
 } else {
     console.log(profit + ' is the profit to sell a thousand products!')
 }
