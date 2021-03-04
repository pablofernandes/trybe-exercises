/**
 * This is an exercise program to verify if a given number is prime.
 * 
 * By Pablo P Fernandes
 */

 let number = 12;
 let prime = 0;
for (let index = 2; index <= number; index += 1){
     if(number%index === 0) {
         prime += 1;
         console.log('Entry value is not a prime number. Its divided, beside 1 and itself, by ' + index);
     }

     if(prime == 0){
         console.log('Typed value is prime.');
         break;
        }
     }
