const getAnimal = require('./exerciseSix');
describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal.getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 2, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal.getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });

    describe('Testando promise - findAnimalByAge', () => {
        it('Retorna os animais com a idade informada', () => {
            return getAnimal.findAnimalsByAge(2).then(animals => {
                expect(animals[0].name).toEqual('Dorminhoco');
                expect(animals[1].name).toEqual('Soneca');
            });
        });
    });

    describe('Testando quando nenhum animal com a idade informada foi encontrado', () => {
        it('Retorna erro quando uma idade nao eh encontrada.', () => {
            return getAnimal.findAnimalsByAge(0).catch(error => {
                expect(error).toEqual('Nenhum animal encontrado com a idade informada.');
            })
        })
    })
  });