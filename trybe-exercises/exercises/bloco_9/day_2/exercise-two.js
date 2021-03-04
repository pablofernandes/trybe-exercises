const randomNumbers = new Promise((resolve, reject) => {
    const myArray = [];
    for (let index = 0; index < 10; index += 1) {
        let numb = Math.round(Math.random() * 50);
        numb = Math.pow(numb, 2)
        myArray.push(numb);
    }
    const sum = myArray.reduce((curr, acc) => acc += curr);
    if (sum < 8000) {
        return resolve(sum);
    }
    reject('É mais de oito mil! Essa promise deve estar quebrada!');
})

const randomValues = randomNumbers
.then((sum) => {
    const divArray = [];
    divArray.push(sum/2);
    divArray.push(sum/3)
    divArray.push(sum/5);
    divArray.push(sum/10);
    return divArray;
})
.catch(message => console.log(message));

setTimeout(() => console.table(randomValues), 3000);