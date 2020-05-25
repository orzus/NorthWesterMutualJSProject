describe('Rank.js', () => {
    const Rank = require('./Rank');
    const ranks = require('../constants/Ranks');
    const testUtils = require('../util/testUtils');
    
    it('should have unique display names', () => {
        const names = {};

        for (const rankKey of Rank.rankKeys) {
            const rank = Rank.ranks[rankKey];

            names[rank.displayName] = null;
        }

        expect(Object.keys(names)).toHaveLength(Rank.rankKeys.length);
    });

    describe('constructor', () => {
        it('should assign the correct rank', () => {
            const rankKey = testUtils.getRandomRankKey();
            const rank = new Rank(rankKey);

            expect(rank.rank).toEqual(ranks[rankKey]);
        });

        it('should error when rankKey is omitted', () => {
            expect(() => {
                new Rank(null);
            }).toThrowError('Rank.constructor missing argument: rankKey');
            expect(() => {
                new Rank();
            }).toThrowError('Rank.constructor missing argument: rankKey');
        });

        it('should error when rankKey is not a valid rank key', () => {
            expect(() => {
                new Rank('abc123');
            }).toThrowError('Rank.constructor: abc123 is not a valid rank key');
        });
    });

    describe('.getDisplayName()', () => {
        it('should return the correct display name', () => {
            const rankKey = testUtils.getRandomRankKey();
            const rank = new Rank(rankKey);

            expect(rank.getDisplayName()).toEqual(ranks[rankKey].displayName);
        });
    });

    describe('.getValues()', () => {
        it('should return the correct values', () => {
            const rankKey = testUtils.getRandomRankKey();
            const rank = new Rank(rankKey);

            expect(rank.getValues()).toEqual(ranks[rankKey].values);
        });
    });

    describe('.equals()', () => {
        it('should be true for identical ranks', () => {
            const rankKey = testUtils.getRandomRankKey();
            const rank1 = new Rank(rankKey);
            const rank2 = new Rank(rankKey);

            expect(rank1.equals(rank2)).toEqual(true);
        });

        it('should be false for non-identical ranks', () => {
            const rankKey1 = testUtils.getRandomRankKey();
            const rankKey2 = testUtils.getRandomRankKey([rankKey1]);
            const rank1 = new Rank(rankKey1);
            const rank2 = new Rank(rankKey2);

            expect(rank1.equals(rank2)).toEqual(false);
        });
    });
});
