/**
 * This is a exercise program to calculate a net wage from a given gross wage
 * and print the result (even or odd) on the console using console.log() function.
 * 
 * By Pablo P Fernandes
 * 
 */

 let wage = 3000;
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
     case (wage > 5189.82):
         socialTax = socialTaxDefaultMax;
         baseWage = wage - socialTax;
         break;
    case (wage >= 2594.93 && wage <= 5189.82):
        socialTax = wage * socialTaxDefault11;
        baseWage = wage - socialTax;
        break;
    case (wage >= 1556.95 && wage <= 2594.92):
        socialTax = wage * socialTaxDefault9;
        baseWage = wage - socialTax;
        break;
    case (wage <= 1556.94 && wage > 0):
        socialTax = wage * socialTaxDefault8;
        baseWage = wage - socialTax;
        break;
    default:
        console.log('Invalid wage entry. Be sure that the typed value is greater than zero.');
         break;
 }

 //Choose the correct irsTax according the baseWage and calculate the netWage.
switch (true) {
    case (baseWage > 4664.68):
        irsTax = (baseWage * irsTaxDefault27) - irsDeduction27;
        netWage = baseWage - irsTax;
        console.log('The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2) );
        break;
    case (baseWage >= 3751.06 && baseWage <= 4664.68):
        irsTax = (baseWage * irsTaxDefault22) - irsDeduction22;
        netWage = baseWage - irsTax;
        console.log('The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2) );
        break;
    case (baseWage >= 2826.66 && baseWage <= 3751.05):
        irsTax = (baseWage * irsTaxDefault15) - irsDeduction15;
        netWage = baseWage - irsTax;
        console.log('The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2) );
        break;
    case (baseWage >= 1903.99 && baseWage <= 2826.65):
        irsTax = (baseWage * irsTaxDefault7) - irsDeduction7;
        netWage = baseWage - irsTax;
        console.log('The NetWage is: '+ netWage.toFixed(2)  + '. IRS is: ' + irsTax.toFixed(2) );
        break;
    case (baseWage >= 0 && baseWage <= 1903.98):
        netWage = baseWage;
        console.log('The NetWage is: '+ netWage.toFixed(2) + '. IRS is zero.');
        break;
    default:
        console.log('Invalid wage entry. Be sure that the typed value is greater than zero.');
        break;
}

