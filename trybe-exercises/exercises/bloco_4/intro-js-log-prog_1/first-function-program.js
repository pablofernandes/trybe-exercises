console.log(division(30,20));




function sellProfitCalculator(costProduct, taxProduct, productQuantity) {
    /**
     * This is a exercise function to verify the profit for selling a thousand
     * of a given product which cost and sell cost is named cost and sellValue 
     * and print the result (even or odd) on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    let costPlusTaxes = costProduct * taxProduct;
    let sellValue = costPlusTaxes * 1.10;
    let profit = (sellValue - costPlusTaxes) * productQuantity;
    profit = profit.toFixed(2);

    if(costProduct <= 0 || sellValue <= 0) {
        return 'Incorrect data entry. Be sure that you typed a value greater than zero';
    } else {
        return profit + ' is the profit to sell ' + productQuantity + ' products!';
    }

}

function positiveNegativeChecker(numb) {
    /**
     * This is a exercise function to verify if a number named a is positive, negative or zero and print the result
     * on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    if (numb > 0) {
        return numb + ' is positive.';
    } else if(numb < 0){
        return numb + ' is negative';
    } else{
        return numb + ' is zero';
    }
}

function evenTrueFalseAmongThreeNumbers(numbA, numbB, numbC) {
    /**
     * This is a exercise function to verify if one of three numbers given named a, b and c is pair 
     * and print the result (pair or oven) on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    if (numbA%2 && numbB%2 && numbC%2){
        return false;
    } else {
        return true;
    }
}

function oddTrueFalseAmongThreeNumbers(numbA, numbB, numbC) {
    /**
     * This is a exercise program to verify if one of three numbers given named a, b and c is pair 
     * and print the result (even or odd) on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    if (numbA%2 || numbB%2 || numbC%2){
        return true;
    } else {
        return false;
    }
}

function moduleCalculator(numbA, numbB) {
        /**
     * This is a exercise function to get the module between two numbers named a and b and print the result
     * on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

     if (numbB > 0) {
         return numbA%numbB;
     }

     return 'Cannot divide by zero.';

}

function irsCalculator(salary) {
        /**
     * This is a exercise function to calculate a net wage from a given gross wage
     * and print the result (even or odd) on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    let baseWage;
    let netWage;
    let socialTax;
    const socialTaxDefaultMax = 570.88;
    const socialTaxDefault11 = 0.11;
    const socialTaxDefault9 = 0.09;
    const socialTaxDefault8 = 0.08;
    let irsTax;
    const irsTaxDefault7 = 0.075;
    const irsTaxDefault15 = 0.15;
    const irsTaxDefault22 = 0.225;
    const irsTaxDefault27 = 0.275;
    const irsDeduction7 = 142.8;
    const irsDeduction15 = 354.8;
    const irsDeduction22 = 636.13;
    const irsDeduction27 = 869.36;


    //Choose the correct socialTax according the wage entry and calculate the baseWage.
    switch (true) {
        case (salary > 5189.82):
            socialTax = socialTaxDefaultMax;
            baseWage = salary - socialTax;
            break;
        case (salary >= 2594.93 && salary <= 5189.82):
            socialTax = salary * socialTaxDefault11;
            baseWage = salary - socialTax;
            break;
        case (salary >= 1556.95 && salary <= 2594.92):
            socialTax = salary * socialTaxDefault9;
            baseWage = salary - socialTax;
            break;
        case (salary <= 1556.94 && salary > 0):
            socialTax = salary * socialTaxDefault8;
            baseWage = salary - socialTax;
            break;
        default:
            return 'Invalid wage entry. Be sure that the typed value is greater than zero.';
    }

    //Choose the correct irsTax according the baseWage and calculate the netWage.
    switch (true) {
        case (baseWage > 4664.68):
            irsTax = (baseWage * irsTaxDefault27) - irsDeduction27;
            netWage = baseWage - irsTax;
            return 'The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2);
        case (baseWage >= 3751.06 && baseWage <= 4664.68):
            irsTax = (baseWage * irsTaxDefault22) - irsDeduction22;
            netWage = baseWage - irsTax;
            return 'The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2);
        case (baseWage >= 2826.66 && baseWage <= 3751.05):
            irsTax = (baseWage * irsTaxDefault15) - irsDeduction15;
            netWage = baseWage - irsTax;
            return 'The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2);
        case (baseWage >= 1903.99 && baseWage <= 2826.65):
            irsTax = (baseWage * irsTaxDefault7) - irsDeduction7;
            netWage = baseWage - irsTax;
            return 'The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2);
        case (baseWage >= 0 && baseWage <= 1903.98):
            netWage = baseWage;
            return 'The NetWage is: '+ netWage.toFixed(2) + '. IRS is zero.';
        default:
            return 'Invalid wage entry. Be sure that the typed value is greater than zero.';
    }
}

function scoreEvaluator(score){
        /**
     * This is a exercise function to verify what grade is a percentage score 0-100
     * into A to F grade and print the result
     * on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    switch (true){
        case (score >= 90 && score <= 100):
            return 'A';
        case (score >= 80 && score < 90):
            return 'B';
        case (score >= 70 && score < 80):
            return 'C';
        case (score >= 60 && score < 70):
            return 'D';
        case (score >= 50 && score < 60):
            return 'E';
        case (score >= 0 && score < 50 ):
            return 'F';
        default:
            return 'Invalid score. Be sure yo typed a number from 0 to 100.';
    }

}

function compareThreeNumbersReturnsGreater(numbA, numbB, numbC) {
        /**
     * This is a exercise function to compare three numbers named a and b and print the result
     * on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    if(numbA >= numbB && numbA >= numbC){
        return numbA + ' is the biggest number.';
    }else if(numbB >= numbA && numbB >= numbC){
        return numbB + ' is the biggest number.'
    }else{
        return numbC + ' is the biggest number.'
    }

}

function compareTwoNumbersReturnsGreater(numbA, numbB) {
        /**
     * This is a exercise function to compare two numbers named a and b and print the result
     * on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    if(numbA > numbB){
        return numbA + ' is bigger than ' + numbB;
    } else if (numbB > numbA){
        return numbB + ' is bigger than ' + numbA;
    } else{
        return 'Both are equals.'
    }
}

function chessMoves(piece) {
    /**
     * This is a exercise function to verify one piece of chess and return its moves and print the result
     * on the console using console.log() function.
     * The content that discribes the pieces come from https://en.wikipedia.org/wiki/Chess_piece#Number_of_pieces.
     * By Pablo P Fernandes
     * 
     */
    let pieceLower = piece.toLowerCase();

    switch(pieceLower) {
        case 'bishop':
            return 'The bishop moves any number of vacant squares diagonally in a straight line. Consequently, a bishop stays on squares of the same color throughout a game. The two bishops each player starts with move on squares of opposite colors.';
        case 'rook':
            return 'The rook moves any number of vacant squares forwards, backwards, left, or right in a straight line. It also takes part, along with the king, in a special move called castling.';
        case 'queen':
            return 'The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.';
        case 'king':
            return 'The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally; however, it cannot move to a square that is under attack by an opponent, nor can a player make a move with another piece if it will leave the king in check. It also has a special move called castling, in which the king moves two squares towards one of its own rooks and in the same move, the rook jumps over the king to land on the square on the kings other side. Castling may only be performed if the king and rook involved have never previously been moved in the game, if the king is not in check, if the king would not travel through or into check, and if there are no pieces between the rook and the king.';
        case 'knight':
            return 'The knight moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner. Consequently, the knight alternates its square color each time it moves. Other than the castling move described above where the rook jumps over the king, the knight is the only piece permitted to routinely jump over any intervening piece(s) when moving.';
        case 'pawn':
            return 'The pawn moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponents side of the board. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece. A pawn can perform a special type of capture of an enemy pawn called en passant. If the pawn reaches a square on the back rank of the opponent, it promotes to the players choice of a queen, rook, bishop, or knight (Just & Burg 2003:13–16).';
        default:
            return 'Invalid piece. Be sure you have typed the name of piece in English language.';
    }
}

function anglesOfTriangle(angleA, angleB, angleC) {
        /**
     * This is a exercise function to verfify if three numbers named a, b and c are  
     * the correct angles of a triangle and print the result
     * on the console using console.log() function.
     * 
     * By Pablo P Fernandes
     * 
     */

    let triangle = angleA + angleB + angleC;

    if(triangle == 180) {
        return 'True';
    } else{
        return 'False';
    }
}

function multiplication(numbA, numbB) {

    /**
 * This is a exercise function to multiply two numbers named a and b and print the result
 * on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */
    return numbA * numbB;
}

function division(numbA, numbB) {
    /**
 * This is a exercise function to divide two numbers named a and b and print the result
 * on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */
    if (numbB == 0) {
        return console.log('Cannot divide any number by zero.');
    }

    return numbA / numbB;
}

function subtraction(numbA, numbB) {
    /**
 * This is a exercise function to subtract two numbers named a and b and print the result
 * on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */
return numbA - numbB;
}

function sum(numbA, numbB) {
    /* This is a exercise Function to sum two numbers named a and b and print the result
    * on the console using console.log() function.
    * 
    * By Pablo P Fernandes
    * 
    */
   
    return numbA + numbB;
}