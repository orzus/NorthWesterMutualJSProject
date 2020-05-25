describe('testUtils.js', () => {
    const ranks = require('../constants/Ranks');
    const suits = require('../constants/Suits');
    const testUtils = require('./testUtils');
    const rankKeys = Object.keys(ranks);
    const suitKeys = Object.keys(suits);
    const iterationCount = 1000;

    describe('.getRandomInteger()', () => {
        it('should be in range [0, 100] when no options are specified', () => {
            for (let i = 0; i < iterationCount; i++) {
                const result = testUtils.getRandomInteger();

                expect(result).toBeGreaterThanOrEqual(0);
                expect(result).toBeLessThanOrEqual(100);
            }
        });

        it('should be in range [0,50] when max=50', () => {
            for (let i = 0; i < iterationCount; i++) {
                const result = testUtils.getRandomInteger(50);

                expect(result).toBeGreaterThanOrEqual(0);
                expect(result).toBeLessThanOrEqual(50);
            }
        });

        it('should be in range [25,75] when max=75 and min=25', () => {
            for (let i = 0; i < iterationCount; i++) {
                const result = testUtils.getRandomInteger(75, 25);

                expect(result).toBeGreaterThanOrEqual(25);
                expect(result).toBeLessThanOrEqual(75);
            }
        });
    });

    describe('.getRandomRankKey()', () => {
        it('should call getRandomInteger()', () => {
            const spy_getRandomInteger = jest.spyOn(testUtils, 'getRandomInteger');

            testUtils.getRandomRankKey();
            expect(spy_getRandomInteger).toHaveBeenCalled();
            spy_getRandomInteger.mockRestore();
        });

        it('should return one of the rank keys', () => {
            for (let i = 0; i < iterationCount; i++) {
                const result = testUtils.getRandomRankKey();

                expect(rankKeys.includes(result)).toEqual(true);
            }
        });
    });

    describe('.getRandomSuitKey()', () => {
        it('should call getRandomInteger()', () => {
            const spy_getRandomInteger = jest.spyOn(testUtils, 'getRandomInteger');

            testUtils.getRandomSuitKey();
            expect(spy_getRandomInteger).toHaveBeenCalled();
            spy_getRandomInteger.mockRestore();
        });

        it('should return one of the suit keys', () => {
            for (let i = 0; i < iterationCount; i++) {
                const result = testUtils.getRandomSuitKey();

                expect(suitKeys.includes(result)).toEqual(true);
            }
        });
    });
});
