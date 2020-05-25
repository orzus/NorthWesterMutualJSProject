const assert = require('assert');
const Rank = require('./Rank');
const Suit = require('./Suit');

class Card {
    constructor(rankKey, suitKey) {
        assert(rankKey != null, 'Card.constructor missing argument: rank');
        assert(suitKey != null, 'Card.constructor missing argument: suit');

        this.rank = new Rank(rankKey);
        this.suit = new Suit(suitKey);
    }

    getRank() { return this.rank; }

    getSuit() { return this.suit; }

    equals(card) {
        return this.getRank().equals(card.getRank())
            && this.getSuit().equals(card.getSuit());
    }
}

module.exports = Card;
