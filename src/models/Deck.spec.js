describe('Deck.js', () => {
    const Deck = require('./Deck');
    const ranks = require('../constants/Ranks');
    const suits = require('../constants/Suits');

    describe('constructor', () => {
        const rankCount = Object.keys(ranks).length;
        const suitCount = Object.keys(suits).length;
        const expectedCardCount = rankCount * suitCount;

        it('should construct a deck with the correct number of cards', () => {
            expect(new Deck().cards.length).toEqual(expectedCardCount);
        });

        it('should construct a deck of unique cards, based on Ranks and Suits', () => {
            const deck = new Deck();
            const cardMap = {};

            for (const card of deck.cards) {
                cardMap[`${card.getRank().getDisplayName()} of ${card.getSuit().getDisplayName()}`] = card;
            }

            expect(Object.keys(cardMap).length).toEqual(expectedCardCount);
        });
    });

    describe('.getCards()', () => {
        it('should return the correct array', () => {
            const deck = new Deck();

            expect(deck.getCards()).toEqual(deck.cards);
        });
    });

    describe('.equals()', () => {
        it('should be true for two fresh decks', () => {
            const unshuffledDeck1 = new Deck();
            const unshuffledDeck2 = new Deck();

            expect(unshuffledDeck1.equals(unshuffledDeck2)).toEqual(true);
        });

        it('should be false when one deck is shuffled', () => {
            const deckToShuffle = new Deck();
            const unshuffledDeck = new Deck();

            deckToShuffle.cards.push(deckToShuffle.getCards().shift());

            expect(deckToShuffle.equals(unshuffledDeck)).toEqual(false);
        });

        it('should be false when the decks are not the same size', () => {
            const deckToShorten = new Deck();
            const unshuffledDeck = new Deck();

            deckToShorten.getCards().shift();

            expect(deckToShorten.equals(unshuffledDeck)).toEqual(false);
        });
    });
});
