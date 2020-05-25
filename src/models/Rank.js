const assert = require('assert');
const ranks = require('../constants/Ranks');

class Rank {
    constructor(rankKey) {
        assert(rankKey != null, 'Rank.constructor missing argument: rankKey');
        assert(Rank.rankKeys.includes(rankKey), `Rank.constructor: ${rankKey} is not a valid rank key`);
        this.rank = ranks[rankKey];
    }

    static get ranks() { return ranks; }

    static get rankKeys() { return Object.keys(ranks); }

    getDisplayName() { return this.rank.displayName; }

    getValues() { return this.rank.values; }

    equals(rank) {
        return this.getDisplayName() === rank.getDisplayName()
            && this.getValues().toString() === rank.getValues().toString();
    }
}

module.exports = Rank;
