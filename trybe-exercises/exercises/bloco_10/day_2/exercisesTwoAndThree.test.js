const { expect, it } = require('@jest/globals');
const findUserById = require('./exercisesTwoAndThree');
describe('Unity test to test async working mode with promise', () => {
    it('Should return a user.', () => {
        return expect(findUserById(4)).resolves.toEqual({ name: 'Mark' });
    });
    it('Should not return a user', () => {
        return expect(findUserById(7)).rejects.toEqual({ error: 'User with 7 not found.' });
    });
    it('Should return a user. With async/await', async () => {
        const user = await findUserById(4);
        expect(user).toEqual({ name: 'Mark' });
    });
    it('Should not return a user. With async/await', async () => {
        try {
            await findUserById(7);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 7 not found.' });
        }
    });
});