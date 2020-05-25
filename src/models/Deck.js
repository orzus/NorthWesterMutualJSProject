const Card = require('./Card');
const Rank = require('./Rank');
const Suit = require('./Suit');

class Deck {
    constructor() {
        this.cards = [];

        for (const rankKey of Rank.rankKeys) {
            for (const suitKey of Suit.suitKeys) {
                this.cards.push(new Card(rankKey, suitKey));
            }
        }
    }

    getCards() {
        return this.cards;
    }

    equals(deck) {
        const theirCards = deck.getCards();
        const ourCards = this.getCards();

        if (theirCards.length === ourCards.length) {
            for (const i in ourCards) {
                if (!ourCards[i].equals(theirCards[i])) {
                    return false;
                }
            }

            return true;
        } else {
            return false;
        }
    }
}

module.exports = Deck;
