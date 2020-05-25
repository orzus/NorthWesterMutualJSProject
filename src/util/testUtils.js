const ranks = require('../constants/Ranks');
const suits = require('../constants/Suits');
const rankKeys = Object.keys(ranks);
const suitKeys = Object.keys(suits);

// We use a class to allow the testing of calls to internal functions
class testUtils {
    /**
     * Get a random number inside the inclusive range defined by [min,max]
     * @param {number} max The inclusive max of the range, defaults to 100 if no arguments are provided.
     * Max must be provided if min is provided.
     * @param {number} min The inclusive min of the range, defaults to 0 if not provided
     */
    getRandomInteger(max = 100, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomRankKey(rankKeysToOmit = []) {
        const useableRankKeys = rankKeys.filter(rankKey => !rankKeysToOmit.includes(rankKey));
        const randomIndex = this.getRandomInteger(0, useableRankKeys.length - 1);

        return useableRankKeys[randomIndex];
    }

    getRandomSuitKey(suitKeysToOmit = []) {
        const useableSuitKeys = suitKeys.filter(suitKey => !suitKeysToOmit.includes(suitKey));
        const randomIndex = this.getRandomInteger(0, useableSuitKeys.length - 1);

        return useableSuitKeys[randomIndex];
    }
}

module.exports = new testUtils();
