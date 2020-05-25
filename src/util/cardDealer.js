const assert = require('assert');
const Game = require('../models/Game');

/**
 * TODO: Test Engineering Open Code Challenge
 * Deal as many cards as possible to the players provided.
 * @param {Player[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealAll = (players, deck) => {
    assert(players != null, 'Players cannot be null');
    assert(deck != null, 'Deck cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input values

    let maxNumberOfCardsPerPlayer = Math.trunc(deck.cards.length / players.length);

    return dealSome(players, deck, maxNumberOfCardsPerPlayer);
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Deal the specified number of cards to the players provided.
 * @param {Player[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @param {number} numberOfCardsPerPlayer The number of cards to deal to each player.
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealSome = (players, deck, numberOfCardsPerPlayer) => {
    assert(players != null, 'players cannot be null');
    assert(deck != null, 'deck cannot be null');
    assert(numberOfCardsPerPlayer != null, 'numberOfCardsPerPlayer cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled

    players.forEach(player => {

        deck.cards = shuffleCards(deck.cards);

        while(player.cards.length !== numberOfCardsPerPlayer) {
            player.cards.push(deck.cards.splice(Math.floor(Math.random() * deck.cards.length), 1)[0]);
        }


    });

    return new Game(players, deck.getCards());
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Shuffle/randomize the provided Deck.
 * @param {Deck} deck The Deck to shuffle
 * @return {Deck} the shuffled deck
 */
const shuffleDeck = (deck) => {
    assert(deck != null, 'Deck cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled

    deck.cards = shuffleCards(deck.getCards());

    return deck;
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Shuffle/randomize the provided list of Cards.
 * @param {Card[]} cards List of Cards to shuffle
 * @return {Card[]} the shuffled cards
 */
const shuffleCards = (cards) => {
    assert(cards != null, 'cards cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled

    let total = cards.length;

    while(total) {

        cards.push(cards.splice(Math.floor(Math.random() * total), 1)[0]);

        total -= 1;
    }

    return cards;
};

module.exports = {dealAll, dealSome, shuffleDeck, shuffleCards};
