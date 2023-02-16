const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const user1 = await Band.create({ 
            name: 'Queen', 
            genre: 'Rock' 
        });
        expect(user1.name).toBe('Queen');
        expect(user1.genre).toBe('Rock');
    });

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const user2 = await Musician.create({ 
            name: 'Brian May',
            instrument: 'Guitar'
        });
        expect(user2.name).toBe('Brian May');
        expect(user2.instrument).toBe('Guitar');
    });
});