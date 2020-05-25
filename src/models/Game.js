const assert = require('assert');

class Game {
    constructor(players, undealtCards) {
        assert(players != null, 'Game.constructor missing argument: players');
        assert(undealtCards != null, 'Game.constructor missing argument: undealtCards');

        this.players = players;
        this.undealtCards = undealtCards;
    }

    getPlayers() { return this.players; }

    getUndealtCards() { return this.undealtCards; }

    equals(game) {
        const ourPlayers = this.getPlayers();
        const ourCards = this.getUndealtCards();
        const theirPlayers = game.getPlayers();
        const theirCards = game.getUndealtCards();

        // Check counts
        if (ourPlayers.length !== theirPlayers.length || ourCards.length !== theirCards.length) {
            return false;
        } else {
            // Check player lists
            for (const i in theirPlayers) {
                if (!ourPlayers[i].equals(theirPlayers[i])) {
                    return false;
                }
            }

            // Check card lists
            for (const i in theirCards) {
                if (!ourCards[i].equals(theirCards[i])) {
                    return false;
                }
            }

            return true;
        }
    }
}

module.exports = Game;
