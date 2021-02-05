const upperCase = require('./exerciseOne');
describe('A test to verify a call from a callback function.', () => {
    it('Should return the string parameter in uppercase', done => {
        upperCase('pablo', (strUpper) => {
            expect(strUpper).toBe('PABLO');
            done();
        })
    })
});