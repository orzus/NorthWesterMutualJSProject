describe('Card.js', () => {
    const Card = require('./Card');
    const ranks = require('../constants/Ranks');
    const suits = require('../constants/Suits');
    const testUtils = require('../util/testUtils');

    it('should be able to create Cards for each rank and suit', () => {
        for (const rankKey of Object.keys(ranks)) {
            for (const suitKey of Object.keys(suits)) {
                const card = new Card(rankKey, suitKey);

                expect(card).not.toBeNull();
            }
        }
    });

    it('should error when rank is omitted', () => {
        const randomSuitKey = testUtils.getRandomSuitKey();

        expect(() => {
            new Card(null, randomSuitKey);
        }).toThrowError('Card.constructor missing argument: rank');
        expect(() => {
            new Card(randomSuitKey);
        }).toThrowError('Card.constructor missing argument: suit');
    });

    it('should error when suit is omitted', () => {
        const randomRankKey = testUtils.getRandomRankKey();

        expect(() => {
            new Card(randomRankKey, null);
        }).toThrowError('Card.constructor missing argument: suit');
        expect(() => {
            new Card(randomRankKey);
        }).toThrowError('Card.constructor missing argument: suit');
    });

    it('should error when rankKey is invalid', () => {
        const randomSuitKey = testUtils.getRandomSuitKey();

        expect(() => {
            new Card('not_a_rank', randomSuitKey);
        }).toThrowError('not_a_rank is not a valid rank key');
        expect(() => {
            new Card(12345, randomSuitKey);
        }).toThrowError('12345 is not a valid rank key');
    });

    it('should error when suitKey is invalid', () => {
        const randomRankKey = testUtils.getRandomRankKey();

        expect(() => {
            new Card(randomRankKey, 'not_a_suit');
        }).toThrowError('not_a_suit is not a valid suit key');
        expect(() => {
            new Card(randomRankKey, 12345);
        }).toThrowError('12345 is not a valid suit key');
    });
});
