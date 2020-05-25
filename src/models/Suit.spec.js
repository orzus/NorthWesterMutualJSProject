describe('Suit.js', () => {
    const Suit = require('./Suit');
    const suits = require('../constants/Suits');
    const testUtils = require('../util/testUtils');

    it('should have unique display names', () => {
        const names = {};

        for (const suitKey of Suit.suitKeys) {
            const suit = Suit.suits[suitKey];

            names[suit.displayName] = null;
        }

        expect(Object.keys(names)).toHaveLength(Suit.suitKeys.length);
    });

    describe('constructor', () => {
        it('should assign the correct rank', () => {
            const suitKey = testUtils.getRandomSuitKey();
            const suit = new Suit(suitKey);

            expect(suit.suit).toEqual(suits[suitKey]);
        });

        it('should error when suitKey is omitted', () => {
            expect(() => {
                new Suit(null);
            }).toThrowError('Suit.constructor missing argument: suitKey');
            expect(() => {
                new Suit();
            }).toThrowError('Suit.constructor missing argument: suitKey');
        });

        it('should error when suitKey is not a valid suit key', () => {
            expect(() => {
                new Suit('abc123');
            }).toThrowError('Suit.constructor: abc123 is not a valid suit key');
        });
    });

    describe('.getDisplayName()', () => {
        it('should return the correct display name', () => {
            const suitKey = testUtils.getRandomSuitKey();
            const suit = new Suit(suitKey);

            expect(suit.getDisplayName()).toEqual(suits[suitKey].displayName);
        });
    });

    describe('.equals()', () => {
        it('should be true for identical ranks', () => {
            const suitKey = testUtils.getRandomSuitKey();
            const suit1 = new Suit(suitKey);
            const suit2 = new Suit(suitKey);

            expect(suit1.equals(suit2)).toEqual(true);
        });

        it('should be false for non-identical ranks', () => {
            const suitKey1 = testUtils.getRandomSuitKey();
            const suitKey2 = testUtils.getRandomSuitKey([suitKey1]);
            const suit1 = new Suit(suitKey1);
            const suit2 = new Suit(suitKey2);

            expect(suit1.equals(suit2)).toEqual(false);
        });
    });
});
