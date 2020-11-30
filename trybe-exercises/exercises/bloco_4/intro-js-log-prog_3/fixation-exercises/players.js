
let player = {
     name: 'Pablo',
     lastName: 'Fernandes',
     age: 35,
     medals: {gold: 4, silver: 1},
     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('The best football player in the world is ' + player.name + ' ' + 
            player.lastName + ' and he is ' + player.age + ' years old.');

console.log('The player' + player.name + ' was elect the best in the world ' + player.bestInTheWorld.length + ' times.');
console.log('The player ' + player.name + ' has ' + player.medals.gold + ' medals of gold and he has '+ 
            player.medals.silver + ' medals of Silver.');
