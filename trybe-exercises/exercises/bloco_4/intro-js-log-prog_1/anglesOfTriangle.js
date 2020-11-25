/**
 * This is a exercise program to verfify if three numbers named a, b and c are  
 * the correct angles of a triangle and print the result
 * on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */
let a = 50;
let b = 70;
let c = 60;
let triangle = a + b + c;

if(triangle == 180) {
    console.log('The angles of the triangle are valid.')
} else{
    console.log('The angles of the triangle are not valid.')
}
