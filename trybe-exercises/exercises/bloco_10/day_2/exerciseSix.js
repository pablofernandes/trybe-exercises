const Animals = [
  { name: 'Dorminhoco', age: 2, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const getAnimal = animalName => (
    new Promise((resolve, reject) => {
            const animal = Animals.find(animal => animal.name === animalName);
            if (animal) {
                return resolve(animal);
            };
            return reject('Nenhum animal com esse nome!');
    })
);

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const findAnimalsByAge = age => (
    new Promise((resolve, reject) => {
        const animals = Animals.filter((animal) => animal.age === age);
        if (animals) {
            return resolve(animals);
        }
        return reject('Nenhum animal encontrado com a idade informada.');
    })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

module.exports = { getAnimal, findAnimalsByAge };