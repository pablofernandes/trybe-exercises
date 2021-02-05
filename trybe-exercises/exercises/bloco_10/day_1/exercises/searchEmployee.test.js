const searchEmployee = require('./searchEmployee');
describe('Unity tests to verify searchEmployee function', () => {
    it('Tests if the function was defined', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('Should return function', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Should return ID not indentified.', () => {
        expect(() => {searchEmployee('xablau', '')}).toThrowError(new Error('ID não identificada'));
    });
    it('Shoul return Informação indisponível', () => {
        expect(() => {searchEmployee('1256-4', 'xablau')}).toThrowError(new Error('Informação indisponível'));
    });
    it('Should return the firstName of the employee', () => {
        expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    });
    it('Should return the lastName of the employee', () => {
        expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    });
    it('Should return the information about the employee', () => {
        expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
    });
});