/**
 * This is a exercise program to verify what grade is a percentage score 0-100
 * into A to F grade and print the result
 * on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */

 let score = 100;

 switch (true){
     case (score >= 90 && score <= 100):
         console.log('A');
         break;
    case (score >= 80 && score < 90):
        console.log('B');
        break;
    case (score >= 70 && score < 80):
        console.log('C');
        break;
    case (score >= 60 && score < 70):
        console.log('D');
        break;
    case (score >= 50 && score < 60):
        console.log('E');
        break;
    case (score >= 0 && score < 50 ):
        console.log('F');
        break;
    default:
        console.log('Invalid score. Be sure yo typed a number from 0 to 100.');
 }