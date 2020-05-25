describe('Game.js', () => {
    const Deck = require('./Deck');
    const Game = require('./Game');
    const Player = require('./Player');
    let me, you, deck;

    beforeEach(() => {
        me = new Player('me');
        you = new Player('you');
        deck = new Deck();
    });

    describe('constructor', () => {
        it('should initialize all properties', () => {
            const game = new Game([me], deck.getCards());

            expect(game.players).toEqual([me]);
            expect(game.undealtCards).toEqual(deck.getCards());
        });

        it('should error when players is omitted', () => {
            expect(() => {
                new Game(null, deck.getCards());
            }).toThrowError('Game.constructor missing argument: players');
            expect(() => {
                new Game(deck.getCards());
            }).toThrowError('Game.constructor missing argument: undealtCards');
        });

        it('should error when undealtCards are omitted', () => {
            expect(() => {
                new Game([me], null);
            }).toThrowError('Game.constructor missing argument: undealtCards');
            expect(() => {
                new Game([me]);
            }).toThrowError('Game.constructor missing argument: undealtCards');
        });
    });

    describe('.getPlayers()', () => {
        it('should return the correct players list', () => {
            const game = new Game([me], deck.getCards());

            expect(game.getPlayers()).toEqual([me]);
        });
    });

    describe('.getUndealtCards()', () => {
        it('should return the correct cards list', () => {
            const game = new Game([me], deck.getCards());

            expect(game.getUndealtCards()).toEqual(deck.getCards());
        });
    });

    describe('.equals()', () => {
        it('should be true for identical Games', () => {
            const game1 = new Game([me], deck.getCards());
            const game2 = new Game([me], deck.getCards());

            expect(game1.equals(game2)).toEqual(true);
        });

        it('should be false when the decks are different sizes', () => {
            const changedDeck = new Deck();
            changedDeck.cards.shift();

            const game1 = new Game([me], deck.getCards());
            const game2 = new Game([me], changedDeck.getCards());

            expect(game1.equals(game2)).toEqual(false);
        });

        it('should be false when the decks do not match', () => {
            const changedDeck = new Deck();
            changedDeck.cards.push(changedDeck.cards.shift());

            const game1 = new Game([me], deck.getCards());
            const game2 = new Game([me], changedDeck.getCards());

            expect(game1.equals(game2)).toEqual(false);
        });

        it('should be false when the player counts do not match', () => {
            const game1 = new Game([me], deck.getCards());
            const game2 = new Game([], deck.getCards());

            expect(game1.equals(game2)).toEqual(false);
        });

        it('should be false when the player lists do not match', () => {
            const game1 = new Game([me], deck.getCards());
            const game2 = new Game([you], deck.getCards());

            expect(game1.equals(game2)).toEqual(false);
        });
    });
});
