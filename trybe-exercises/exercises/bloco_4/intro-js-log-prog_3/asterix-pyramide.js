/**
 * This is an exercise program to print a pyramide of asterix from a given number.
 * 
 * By Pablo P Fernandes
 */

 let = number = 50;
 let asterix = '';
 let spaces = '';

 for (let index = 0; index < number; index += 1) {
    asterix += '*';
    for (let position = index; position < number; position++) {
        spaces += ' ';
    }

    console.log(spaces, asterix);
    spaces = '';
    asterix += '*';
     
 }