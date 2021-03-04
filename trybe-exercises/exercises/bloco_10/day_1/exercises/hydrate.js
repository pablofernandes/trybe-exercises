function hydrate(drinks) {
    let totalDebit = 0;
    const waterDebits = drinks.match(/\d+/g);
    waterDebits.forEach(debit => totalDebit += parseInt(debit));
    const waterBillMessage = totalDebit > 1 ? `${totalDebit} copos de água` : `${totalDebit} copo de água`;
    return waterBillMessage;
}

module.exports = hydrate;