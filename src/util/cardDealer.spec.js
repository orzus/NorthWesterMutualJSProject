describe('cardDealer.js', () => {
    const cardDealer = require('./cardDealer');
    const Deck = require('../models/Deck');
    const Player = require('../models/Player');
    const testUtils = require('./testUtils');
    const faker = require('faker');

    /**
     * TODO: Test Engineering Open Code Challenge
     * TODO: The following block is currently ignored (via the .skip annotation) because the supporting code is incomplete
     * Compare an unshuffled Deck of Cards with a shuffled Deck of Cards
     * that is produced by CardDealer.shuffleDeck().
     */
    describe('Compare an unshuffled deck with a shuffled deck', () => {
        it('a shuffled deck should not match an unshuffled deck', () => {
            const unshuffledDeck = new Deck();
            const deckToShuffle = new Deck();

            expect(deckToShuffle.equals(unshuffledDeck)).toEqual(true);
            expect(deckToShuffle.getCards()).toEqual(unshuffledDeck.getCards());

            cardDealer.shuffleDeck(deckToShuffle);

            expect(deckToShuffle.equals(unshuffledDeck)).toEqual(false);
            expect(deckToShuffle.getCards()).not.toEqual(unshuffledDeck.getCards());
        });
    });

    /**
     * TODO: Test Engineering Open Code Challenge
     * TODO: The following block is currently ignored (via the .skip annotation) because the supporting code is incomplete
     * Compare the unshuffled cards produced by Deck.getCards() with the shuffled cards that are produced by
     * CardDealer.shuffleCards()
     */
    describe('Compare unshuffled cards with shuffled cards', () => {
        it('shuffled cards should not match unshuffled cards', () => {
            const unshuffledCards = new Deck().getCards();
            const cardsToShuffle = new Deck().getCards();

            expect(cardsToShuffle).toEqual(unshuffledCards);

            cardDealer.shuffleCards(cardsToShuffle);

            expect(cardsToShuffle).not.toEqual(unshuffledCards);

            expect(cardsToShuffle.length).toEqual(unshuffledCards.length);
        });
    });

    /**
     * TODO: Test Engineering Open Code Challenge
     * Verify that CardDealer.dealAll() correctly deals Card to all of the
     * Players provided. Don't just do a happy path approach!
     */
    describe('.dealAll()', () => {

        it('should correctly deal cards to all players', () => {
            // get a deck of cards
            const deck = new Deck();

            let i, playerName;

            const totalNumberOfCards = deck.getCards().length;

            // number of players, min 2 players
            const numberOfPlayers = testUtils.getRandomInteger(2, totalNumberOfCards);

            // number of cards per each player
            const numberOfCards = Math.trunc(totalNumberOfCards / numberOfPlayers);


            const players = [];

            for (i = 0; i < numberOfPlayers; i++) {

                playerName = faker.fake('{{name.firstName}} {{name.lastName}}');

                // generate list of players
                players.push(new Player(name));
            }

            cardDealer.shuffleDeck(deck);

            // deal cards in game
            const game = cardDealer.dealAll(players, deck);

            const playerCards = {};

            game.getPlayers().forEach(player => {

                expect(player.cards.length).toBe(numberOfCards);

                player.cards.forEach(card => {
                    playerCards[`${card.getRank().getDisplayName()} of ${card.getSuit().getDisplayName()}`] = card;
                });
            });

            expect(Object.keys(playerCards).length).toBe(numberOfPlayers * numberOfCards);

            expect(game.getUndealtCards().length).toEqual(totalNumberOfCards - (numberOfPlayers * numberOfCards));

            expect(deck.getCards().length).toBe(game.getUndealtCards().length);

        });

        it('should error when players omitted', () => {
            expect(() => {

                const deck = new Deck();

                cardDealer.dealAll(null, deck);

            }).toThrowError('Players cannot be null');
        });

        it('should error when deck omitted', () => {
            expect(() => {

                cardDealer.dealAll([new Player('foo')], null);

            }).toThrowError('Deck cannot be null');
        });
    });

    /**
     * TODO: Test Engineering Open Code Challenge
     * Verify that CardDealer.dealSome() correctly deals the specified number of Cards
     * to each of the Players provided. Don't just do a happy path approach!
     */
    describe('.dealSome()', () => {
        it('should correctly deal cards to all players', () => {
            // get a deck of cards
            const deck = new Deck();

            const totalNumberOfCards = deck.getCards().length;

            let i,
                playerName;

            const players = [];

            // number of players, min 2 players max 10 players
            const numberOfPlayers = testUtils.getRandomInteger(2, 10);

            for (i = 0; i < numberOfPlayers; i++) {

                playerName = faker.fake('{{name.firstName}} {{name.lastName}}');

                players.push(new Player(name));
            }

            const numberOfCards = 5;

            cardDealer.shuffleDeck(deck);

            const receivedCardMap = {};

            const game = cardDealer.dealSome(players, deck, numberOfCards);

            // deck cards should be dealt
            expect(totalNumberOfCards).not.toBe(deck.getCards().length);

            // deck cards remaining should be equal to game undealt cards
            expect(deck.getCards()).toEqual(game.getUndealtCards());

            expect(game.getUndealtCards().length).toEqual(totalNumberOfCards - (numberOfCards * numberOfPlayers));

            game.getPlayers().forEach(player => {

                expect(player.cards.length).toBe(numberOfCards);

                game.getUndealtCards().forEach(card => {

                    // game player cards should not include game undealt cards
                    expect(player.cards).not.toEqual(
                        expect.arrayContaining([
                            expect.objectContaining(card)
                        ]),
                    );

                    receivedCardMap[`${card.getRank().getDisplayName()} of ${card.getSuit().getDisplayName()}`] = card;
                });

                player.cards.forEach(card => {
                    receivedCardMap[`${card.getRank().getDisplayName()} of ${card.getSuit().getDisplayName()}`] = card;
                });

            });

            expect(totalNumberOfCards).toEqual(Object.keys(receivedCardMap).length);

        });

        it('should error when players omitted', () => {
            expect(() => {

                const deck = new Deck();
                const numberOfCards = 5;

                cardDealer.dealSome(null, deck, numberOfCards);

            }).toThrowError('players cannot be null');
        });

        it('should error when deck omitted', () => {
            expect(() => {

                const numberOfCards = 5;
                const players = [new Player('foo')];

                cardDealer.dealSome(players, null, numberOfCards);

            }).toThrowError('deck cannot be null');
        });

        it('should error when numberOfCards omitted', () => {
            expect(() => {

                const deck = new Deck();
                const players = [new Player('foo')];

                cardDealer.dealSome(players, deck, null);

            }).toThrowError('numberOfCardsPerPlayer cannot be null');
        });

    });
});
