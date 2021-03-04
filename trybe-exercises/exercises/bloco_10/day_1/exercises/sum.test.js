const sum = require('./sum.js');

describe('Unity tests with jest... Lets Begin', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4,"0")}).toThrowError(new Error('parameters must be numbers'));
  })
});
