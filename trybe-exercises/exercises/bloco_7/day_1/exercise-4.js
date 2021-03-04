let longestWord = (string) => {
    let words = string.split(' ');
    let longestLength = 0;
    let word = '';
    for(let index = 0; index < words.length; index += 1) {
        if(words[index].length > longestLength) {
            longestLength = words[index].length;
            word = words[index];
        }
    }
    return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));