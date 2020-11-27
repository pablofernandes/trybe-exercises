/**
 * This is an exercise program to print a square of asterix from a given number.
 * 
 * By Pablo P Fernandes
 */

 let number = 10;
 let asterix = '';

 for (let index = 0; index < number; index += 1) {
    for (let position = 0; position < number; position += 1){
        asterix += '*'
    }
    console.log(asterix);
    asterix = '';
}
