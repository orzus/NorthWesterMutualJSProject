const assert = require('assert');
const suits = require('../constants/Suits');

class Suit {
    constructor(suitKey) {
        assert(suitKey != null, 'Suit.constructor missing argument: suitKey');
        assert(Suit.suitKeys.includes(suitKey), `Suit.constructor: ${suitKey} is not a valid suit key`);
        this.suit = suits[suitKey];
    }

    static get suits() { return suits; }

    static get suitKeys() { return Object.keys(suits); }

    getDisplayName() { return this.suit.displayName; }

    equals(suit) { return this.getDisplayName() === suit.getDisplayName(); }
}

module.exports = Suit;
