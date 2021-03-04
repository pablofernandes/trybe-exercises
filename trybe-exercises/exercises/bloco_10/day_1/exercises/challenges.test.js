const playFunctions = require('./challenges.js');

describe('Unity tests to Playground Functions Project', () => {
    it('Teste se encode e decode são funções', () => {
        expect((typeof playFunctions.decode && typeof playFunctions.encode) === 'function').toBe(true);
    });

    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', 
    () => {
        expect(playFunctions.decode('aeiou')).toBe('12345');
    });

    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', 
    () => {
        expect(playFunctions.encode('12345')).toBe('aeiou');
    });

    it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
        expect(playFunctions.decode('Pablo')).toBe('P1bl4');
        expect(playFunctions.encode('P1bl4')).toBe('Pablo');
        expect(playFunctions.encode('Plebius')).toBe('Pl2b35s');
        expect(playFunctions.encode('Pl2b35s')).toBe('Plebius');
    });

    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', 
    () => {
        expect(playFunctions.decode('Pablo').length).toBe(5);
        expect(playFunctions.encode('P1bl4').length).toBe(5);
    });
})