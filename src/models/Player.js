const assert = require('assert');

class Player {
    constructor(playerName) {
        assert(playerName != null, 'Player.constructor missing argument: playerName');

        this.playerName = playerName;
        this.cards = [];
    }

    getName() { return this.playerName; }

    setCards(cards) {
        assert(cards != null, 'Player.setCards missing argument: cards');

        this.cards = cards;
    }

    equals(player) {
        return this.getName() === player.getName();
    }
}

module.exports = Player;
