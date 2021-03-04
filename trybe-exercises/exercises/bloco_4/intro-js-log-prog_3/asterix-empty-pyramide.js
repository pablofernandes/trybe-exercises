/**
 * This is an exercise program to print a empty pyramid asterix from a given number.
 * 
 * By Pablo P Fernandes
 */

 let number = 7;
 let asterix = '';
 let spaces = '';
 let pyramid = [];

 for (let index = 0; index < number; index += 1) {
     asterix += '*';
    for (let position = index; position < number; position += 1) {
        spaces += ' ';
    }
    asterix += ' ';
    console.log(spaces,asterix);
    asterix = '';
    spaces = '';
 }